import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

/**
 * 현재 시간을 반환합니다.
 */
export function now(): Date {
  return dayjs().toDate()
}

/**
 * 현재 시간에 {@linkcode duration}을 더한 시간을 반환합니다.
 */
export function nowAfter(duration: string): Date {
  return dayjs().add(dayjs.duration(duration)).toDate()
}

/**
 * {@linkcode date}이 현재시간보다 과거인지 확인합니다.
 */
export function isPastDate(date: Date | string | number) {
  return dayjs().isAfter(dayjs(date))
}
