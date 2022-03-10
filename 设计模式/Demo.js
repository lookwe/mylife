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


/** 工厂模式 */
function PhoneFactory(name) {
    const phoneBase = Object.create(null);
    phoneBase.screen = '全面屏'
    phoneBase.wifi = 'WIFI 2.0'
    phoneBase.pixel = '6400W'

    if (this instanceof PhoneFactory) {
        const phone = new this.__proto__[name](phoneBase)
        return phone
    } else {
        return new PhoneFactory(name)
    }
}
PhoneFactory.prototype = {
    HW: function (base) {
        return {...base, name: '华为'}
    },
    iphone:  function (base) {
        return {...base, name: '苹果'}
    },
    MI: function (base) {
        return {...base, name: '小米'}
    }
}
const HW = new PhoneFactory('HW')
const iphone = PhoneFactory('iphone')
const MI = PhoneFactory('MI')


/** 代理模式 */

// 受代理人
let user = {
    name: "小红",
    age: 15
  };

  // 用户代理人
const  userProxy = new Proxy(user, {
    get(target, key) {
      let result = target[key];
      if (key === "age") result += "岁";
      return result;
    },
    set(target, key, value) {
      if (key === "age" && typeof value !== "number") {
        throw Error("age字段必须为Number类型");
      }
      return Reflect.set(target, key, value);
    }
});
// 处理访问
console.log(`我叫${userProxy.name}  我今年${userProxy.age}了`);
// 处理修改
userProxy.age = "abc";

/** 中介者模式 */
// 中介类
class ChatRoom {
    static setMsg(user, msg) {
        // 处理中间层业务 xxx...
        console.log(`用户：${user}, 发送消息：${msg}`);
    }
}
class ChatUser {
    constructor (name) {
        this.name = name
    }

    sendMessage(msg) {
        ChatRoom.setMsg(this.name, msg)
    }
}

const userA1 = new ChatUser('小红');
const userA12 = new ChatUser('小张');

userA1.sendMessage('你好，有人吗？')
userA12.sendMessage('我看到小红发言了')
