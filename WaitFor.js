export default class WaitFor {
  condition;
  interval = 10;
  resolve = () => {};
  callback = async () => {};

  /**
   * @description 检测方法，直到符合条件
   * @date 2022-10-14
   * @memberof WaitFor
   */
  async wait() {
    if (this.condition()) {
      await this.callback();
      this.resolve();
    } else {
      setTimeout(() => {
        this.wait();
      }, this.interval);
    }
  }

  async then(cb) {
    this.callback = cb;
    return new Promise((resolve) => {
      this.resolve = resolve;
    });
  }

  /**
   * Creates an instance of WaitFor.
   * @date 2022-10-14
   * @param {Function} condition
   * @param {number} [interval=10]
   * @memberof WaitFor
   */
  constructor(condition, interval = 10) {
    this.condition = condition;
    this.interval = interval;
    ///让then先执行完
    setTimeout(() => {
      this.wait();
    }, 0);
  }
}
