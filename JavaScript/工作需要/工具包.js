/***
* 数字格式化金钱格式或者逗号格式  例如: 1234 => $1,234.00
* @param number 需要转换的数，
* @param places 保留几位小数
* @param symbol 金钱符号$
* @param thousand 千分位显示什么符号默认'，' 1,000
* @param decimal 小数点显示什么符号默认'.'
* @returns {string} $1,234.00
*/
export function formatMoney(number, places, symbol, thousand, decimal) {
    number = number || 0;
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "￥";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var negative = number < 0 ? "-" : "",
      i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
      j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
  }

// 查询对象最深层
function getLevel(obj = {}){
    let result = 1;
    const fn = (params, level = 0) => {
        if ( typeof params === 'object' && params !== null) {
            Object.values(params).forEach(item => {
                if ( typeof item === 'object' && item !== null) {
                    fn(item, level + 1)
                } else {
                     result = level + 1 > result ? level + 1 : result
                }
            })
        } else {
             result = level > result ? level : result
        }
    }
    fn(obj)
    return result
}

// 数组去重
Array.prototype.rempD = function() {
  //  return Array.from(new Set(this))
  let arr = []
  for(let i = 0; i<this.length;i++) {
      if (arr.indexOf(this[i]) == -1) arr.push(this[i])
  }
  return arr
}
// 定时Promise
function sllep(ms) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => { resolve() }, ms)
        } catch (error) {
            reject()
        }
    })
}
// 输入不定数字 求特定之和
function sumEven() {
   const arr = Array.from(arguments).filter(item => item % 2 === 0)
   return arr.reduce((pro,last) => pro+last)
}
// 缓存id
function ID(){
    let id = 0
    return function(){return id++}
}
const getID = ID()
// 为对象添加迭代器
function addIterator() {
    Object.prototype[Symbol.iterator] = function () {
        const keys = Object.keys(this);
        let index = 0;
        return {
            next: () => {
                return {
                    value: [keys[index], this[keys[index++]]],
                    done: index > keys.length
                };
            }
        }
    }
}
// 遍历树
function flatTree(tree) {
    const newTree = []
    fromTree(tree)``
    function fromTree(treeArr) {
       if(!Array.isArray(treeArr)) return;
        treeArr.map(item => {
            item.label && newTree.push(item.label)
            item.children && fromTree(item.children)
        })
    }
    return newTree
}
// 定时任务
function repeat(fn, times, wait) {
    let time = 0
    const timesInter = setInterval(() => {
        time++
        fn()
        if (time===times) clearInterval(timesInter)
    },wait)
}
repeat(() => {console.log(123)}, 5, 1000)