# @focusinyou/delayrandom

一个基于当前时间智能调整延迟的工具库，根据不同时间段返回不同的延迟值，模拟真实的人类行为模式。

## 安装

```bash
npm install @focusinyou/delayrandom
```

## 功能特点

- 🕐 **时间感知**: 根据当前时间自动调整延迟值
- 🎯 **智能分段**: 不同时间段使用不同的延迟策略
- 🎲 **随机波动**: 在基础延迟上添加随机变化，更加自然
- 🚀 **开箱即用**: 无需配置，直接调用即可

## 使用方法

```javascript
const { getTimeBasedDelay } = require('@focusinyou/delayrandom');

// 获取当前时间对应的延迟值
const delay = getTimeBasedDelay();
console.log(`当前延迟: ${delay}ms`);

// 在异步操作中使用
async function delayedOperation() {
    const delay = getTimeBasedDelay();
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log('延迟完成');
}
```

## 时间延迟策略

该库根据一天中的不同时间段，智能调整延迟值：

| 时间段 | 描述 | 基础延迟 | 随机范围 | 总延迟范围 |
|--------|------|----------|----------|------------|
| 00:00-06:00 | 深夜时段 | 1000ms | ±500ms | 1000-1500ms |
| 06:00-09:00 | 早晨时段 | 2000ms | ±1000ms | 2000-3000ms |
| 09:00-12:00 | 上午工作时间 | 3000ms | ±1500ms | 3000-4500ms |
| 12:00-14:00 | 午休时间 | 2000ms | ±1000ms | 2000-3000ms |
| 14:00-18:00 | 下午工作时间 | 3000ms | ±1500ms | 3000-4500ms |
| 18:00-21:00 | 傍晚时段 | 2000ms | ±1000ms | 2000-3000ms |
| 21:00-24:00 | 夜间休息时间 | 1000ms | ±500ms | 1000-1500ms |

## API

### `getTimeBasedDelay()`

根据当前时间返回相应的延迟值。

**返回值:**
- `number`: 延迟时间（毫秒）

**示例:**
```javascript
const delay = getTimeBasedDelay();
// 返回值范围: 1000-4500ms（取决于当前时间）
```

## 使用场景

### 1. 网络爬虫
```javascript
const { getTimeBasedDelay } = require('@focusinyou/delayrandom');

async function crawlWebsite(urls) {
    for (const url of urls) {
        // 爬取页面
        await fetchPage(url);
        
        // 智能延迟，避免被检测
        const delay = getTimeBasedDelay();
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}
```

### 2. API 请求限流
```javascript
const { getTimeBasedDelay } = require('@focusinyou/delayrandom');

async function batchApiCalls(requests) {
    for (const request of requests) {
        await makeApiCall(request);
        
        // 根据时间智能调整请求间隔
        const delay = getTimeBasedDelay();
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}
```

### 3. 自动化测试
```javascript
const { getTimeBasedDelay } = require('@focusinyou/delayrandom');

async function simulateUserBehavior() {
    // 模拟用户点击
    clickButton();
    
    // 使用时间感知延迟，更真实地模拟用户行为
    const delay = getTimeBasedDelay();
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // 继续其他操作...
}
```

## 设计理念

这个库的设计基于以下观察：

- **深夜时段**: 网络活动较少，使用较短延迟
- **工作时间**: 网络繁忙，使用较长延迟避免过载
- **休息时间**: 中等延迟，平衡效率和稳定性
- **随机波动**: 避免机械化的固定间隔，更像人类行为

## 许可证

ISC

## 作者

focusinyou

## 版本历史

### v1.0.0
- 初始版本发布
- 实现基于时间的智能延迟功能
- 支持7个不同时间段的延迟策略

### v1.0.1
- Readme.md 文件说明

### v1.0.2
- 修复文档错误
- 修改为ESM模块