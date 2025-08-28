/**
 * 根据当前时间返回不同的延迟值（毫秒）
 * @returns {number} 延迟时间（毫秒）
 */
function getTimeBasedDelay() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    // 将时间转换为分钟数（0-1439）
    const totalMinutes = hour * 60 + minutes;

    // 定义不同时间段的延迟配置
    // 格式: [开始分钟, 结束分钟, 基础延迟, 随机波动范围]
    const timeConfigs = [
        // 深夜 (0:00-6:00): 低延迟
        [0, 360, 1000, 500],
        // 早晨 (6:00-9:00): 中等延迟
        [360, 540, 2000, 1000],
        // 上午工作时间 (9:00-12:00): 较高延迟
        [540, 720, 3000, 1500],
        // 午休时间 (12:00-14:00): 中等延迟
        [720, 840, 2000, 1000],
        // 下午工作时间 (14:00-18:00): 较高延迟
        [840, 1080, 3000, 1500],
        // 傍晚 (18:00-21:00): 中等延迟
        [1080, 1260, 2000, 1000],
        // 夜间休息时间 (21:00-24:00): 低延迟
        [1260, 1440, 1000, 500]
    ];

    // 查找当前时间对应的配置
    let config;
    for (const [start, end, baseDelay, randomRange] of timeConfigs) {
        if (totalMinutes >= start && totalMinutes < end) {
            config = { baseDelay, randomRange };
            break;
        }
    }

    // 如果没有找到配置（理论上不会发生），使用默认值
    if (!config) {
        config = { baseDelay: 2000, randomRange: 1000 };
    }

    // 生成带随机波动的延迟值
    const randomOffset = Math.floor(Math.random() * config.randomRange);
    return config.baseDelay + randomOffset;
}

// 使用示例
console.log('当前时间延迟:', getTimeBasedDelay(), '毫秒');