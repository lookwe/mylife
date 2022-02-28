/**
 * 单例模式
 */
class Single{
    constructor(name){
        this.name=name
        this.instance=null
    }
    static getInstance(name){
        if(!this.instance){
            this.instance=new Single(name)
        }
        return this.instance
    }
}
let lookwe = Single.getInstance('lookwe')


/**
 * 策略模式
 */
class StrategyPattern {
    constructor (method) {
        this.method = method
    }
    // 执行方法
    run(a, b) {
        return this.method(a,b)
    }
}
// 【策略1】
methodAdd = ((num1, num2) =>  num1 + num2)
// 【策略2】
methodSubtract = ((num1, num2) =>  num1 - num2)
// 【策略3】
methodMultiply = ((num1, num2) =>  num1 * num2)
// [策略xxx] ...

new StrategyPattern(methodAdd).run(10, 5)       // 15
new StrategyPattern(methodSubtract).run(10, 5)  // 5
new StrategyPattern(methodMultiply).run(10, 5)  // 50


/** 简单工厂模式 */
function phone(name) {
    const phoneObj = new Object();
    phoneObj.screen = '全面屏'
    phoneObj.wifi = 'WIFI 2.0'
    phoneObj.pixel = '6400W'

    if (name == '华为') {
        phoneObj.price = '5400'
    } else if(name === '苹果') {
        phoneObj.price = '8999'
    } else if (name === '小米') {
        phoneObj.price = '2999'
    } else {
        return {}
    }
}
const HW = phone('华为')
const iphone = phone('苹果')
const MI = phone('小米')
