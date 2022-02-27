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


