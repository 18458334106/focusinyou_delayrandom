/**
 * 根据当前时间返回不同的延迟值（毫秒）
 * 
 * 该函数会根据一天中的不同时间段返回不同的延迟值：
 * - 深夜时段 (00:00-06:00): 1000-1500ms
 * - 早晨时段 (06:00-09:00): 2000-3000ms  
 * - 上午工作时间 (09:00-12:00): 3000-4500ms
 * - 午休时间 (12:00-14:00): 2000-3000ms
 * - 下午工作时间 (14:00-18:00): 3000-4500ms
 * - 傍晚时段 (18:00-21:00): 2000-3000ms
 * - 夜间休息时间 (21:00-24:00): 1000-1500ms
 * 
 * @returns 延迟时间（毫秒），范围在 1000-4500ms 之间
 */
export declare function getTimeBasedDelay(): number;

/**
 * 默认导出，与 getTimeBasedDelay 函数相同
 */
declare const _default: typeof getTimeBasedDelay;
export default _default;