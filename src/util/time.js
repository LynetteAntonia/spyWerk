module.exports = {
  /**
   * 
   * @param {Number} endTime Unix timestamps (in milliseconds)
   * @param {Number} now Unix timestamps (in milliseconds) - Default value: new Date().getTime()
   * @returns Milliseconds difference
   */
  unixTimeDiff: (endTime, now = new Date().getTime()) => {
    return Math.floor((endTime - now) / 1000)
  }
}