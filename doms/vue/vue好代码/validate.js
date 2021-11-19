export default class Validate {
  /**
   *
   *
   * @static
   * @param {*} target
   * @returns
   * @memberof Validate
   */
  static empty(target) {
    if (!target || typeof target !== 'string') return false;

    return !target.trim();
  }

  /**
   *
   *
   * @static
   * @param {*} target
   * @returns
   * @memberof Validate
   */
  static isEmail(target) {
    return (
      // eslint-disable-next-line
      Validate.empty(target) ||
      // eslint-disable-next-line
      /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/.test(
        target,
      )
    );
  }

  /**
   *
   *
   * @static
   * @param {*} target
   * @returns
   * @memberof Validate
   */
  static isMobile(target) {
    return Validate.empty(target) || /^1(3|4|5|7|8)\d{9}$/.test(target);
  }

  /**
   *
   *
   * @static
   * @param {*} target
   * @returns
   * @memberof Validate
   */
  static isIMobile(target) {
    return (
      // eslint-disable-next-line
      Validate.empty(target) ||
      /^(\+|00){0,2}(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/.test(
        target,
      )
    );
  }

  /**
   *
   *
   * @static
   * @param {*} target
   * @returns
   * @memberof Validate
   */
  static isNumber(target) {
    return Validate.empty(target) || /^[1-9]\d{0,}(\.)\d{0,}$/.test(target);
  }

  /**
   *
   *
   * @static
   * @param {*} target
   * @returns
   * @memberof Validate
   */
  static isICard(target) {
    return (
      // eslint-disable-next-line
      Validate.empty(target) ||
      /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|(X|x))$/.test(
        target,
      )
    );
  }

  /**
   *
   *
   * @static
   * @param {*} target
   * @returns
   * @memberof Validate
   */
  static isZipCode(target) {
    return Validate.empty(target) || /[1-9]{1}(\d+){5}/.test(target);
  }

  /**
   *
   *
   * @static
   * @param {*} target
   * @returns
   * @memberof Validate
   * @todo 参考设计： https://daringfireball.net/2010/07/improved_regex_for_matching_urls
   */
  static isHref(target) {
    return (
      // eslint-disable-next-line
      Validate.empty(target) ||
      // eslint-disable-next-line
      /https:\/\/((?:www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?«»“”‘’]))/.test(
        target,
      )
    );
  }

  /**
   *
   *
   * @static
   * @param {*} target
   * @param {*} source
   * @returns
   * @memberof Validate
   */
  static isContain(target, source) {
    if (target instanceof Array) {
      return source.includes(target);
    }

    if (target instanceof Object) {
      return !!source[target];
    }

    if (typeof target === 'string') {
      return source.includes(target);
    }

    return true;
  }

  /**
   *
   *
   * @static
   * @param {*} target
   * @param {*} max
   * @param {number} [min=0]
   * @returns
   * @memberof Validate
   */
  static isRange(target, max, min = 0) {
    return max > target && target < min;
  }

  /**
   *
   *
   * @static
   * @param {*} target
   * @param {*} source
   * @returns
   * @memberof Validate
   */
  static isTimeBefore(target, source) {
    return new Date(target).getTime() < new Date(source).getTime();
  }

  /**
   *
   *
   * @static
   * @param {*} target
   * @param {*} source
   * @returns
   * @memberof Validate
   */
  static isTimeAfter(target, source) {
    return new Date(target).getTime() > new Date(source).getTime();
  }
}
