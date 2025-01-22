import { randomUUID } from 'node:crypto'
import { SESSION_EXPIRES_DAY } from '#shared/constants'
import { isPastDate, now, nowAfter } from '#shared/utils'
import { eq } from 'drizzle-orm'
import { sha256base64 } from 'ohash'

interface UserAndSession {
  user: UserInfo
  session: SessionInfo
}

export function generateSessionToken() {
  return randomUUID()
}

export async function createSession(userId: number, token: string) {
  const newSession: SessionSpec = {
    id: sha256base64(token), // 세션 토큰을 암호화하여 세션 ID로 사용
    user: userId,
    expiresAt: now(),
  }

  await db.insert(session).values(newSession)
  return newSession
}

export async function deleteSession(token: string) {
  const sessionId = sha256base64(token)
  await db.delete(session).where(eq(session.id, sessionId))
}

async function findValidatedSession(token: string): Promise<UserAndSession | null> {
  const sessionId = sha256base64(token)

  // 1. 세션이 존재하는지 검증한다.
  const result = await db.select({ user, session })
    .from(session)
    .innerJoin(user, eq(user.id, session.user))
    .where(eq(session.id, sessionId))

  // 세션이 없는 경우 null 반환
  if (result.length < 0) {
    return null
  }

  const userAndSession: UserAndSession = result[0]

  // 2. 세션 만료 여부를 검증한다.
  if (isPastDate(userAndSession.session.expiresAt)) {
    await deleteSession(token) // 만료된 세션 삭제
    return null
  }

  // 3. 세션이 갱신되었으므로 만료일시를 늘린다.
  userAndSession.session.expiresAt = nowAfter(SESSION_EXPIRES_DAY)
  await db.update(session).set({ expiresAt: userAndSession.session.expiresAt }).where(eq(session.id, sessionId))

  return userAndSession
}
