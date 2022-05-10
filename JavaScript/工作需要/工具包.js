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