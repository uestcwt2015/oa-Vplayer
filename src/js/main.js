/**
 * @file main.js
 * @desc 项目入口
 * @author Vermouth
 * @date 2018-07-30
 */

import defaultOpts from './defaultOpts';

/**
 * OaVplayer
 */
class OaVplayer {
  /**
  * OaVplayer constructor
  * @param {Element} el   容器html元素
  * @param {Object}  opts 自定义配置
  */
  constructor(el, opts) {
    this.el = el;
    this.opts = Object.assign({}, defaultOpts, opts);
  }
}

export default OaVplayer;
