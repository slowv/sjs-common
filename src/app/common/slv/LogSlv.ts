export default class LogSlv {
  styleDate = `font-weight: bold;`;
  styleValue = 'font-weight: normal;';
  path;
  static #instance: LogSlv;

  constructor(path: string) {
    this.path = path;
  }

  static getInstance(moduleUrl = import.meta.url): LogSlv {
    const fullPath = new URL(moduleUrl).pathname; // Lấy đường dẫn đầy đủ của file
    if (!this.#instance) {
      this.#instance = new LogSlv(fullPath);
    }
    return this.#instance;
  }

  info(val: any, threadName = 'main') {
    const location = this.#getLogLocation(); // Lấy thông tin dòng log
    console.log(
      `%c ${this.#buildCommon()} %c| [${threadName}] INFO | @ http:${location} - ${val}`,
      this.styleDate,
      this.styleValue
    );
  }

  error(err: any, threadName = 'main') {
    const newStyle1 = this.styleDate + 'color: red; background: #ffe6dda1';
    const newStyle2 = this.styleValue + 'color: red; background: #ffe6dda1';
    const location = this.#getLogLocation(); // Lấy thông tin dòng log
    console.log(
      `%c ${this.#buildCommon()} %c| [${threadName}] ERROR | ${this.path} - ${err.title} \n Caused by: ${this.path}: ${err.detail} %c@ ${location}`,
      newStyle1,
      newStyle2,
      'color: gray; font-style: italic;'
    );
  }

  json(obj: object) {
    this.info(JSON.stringify(obj));
  }

  #getLogLocation() {
    try {
      throw new Error(); // Tạo một lỗi giả để lấy stack trace
    } catch (e: any) {
      const stackLines = e.stack.split('\n');
      // Tùy trình duyệt, thông tin log nằm ở dòng thứ 3 hoặc 4 trong stack trace
      const targetLine = stackLines[3] || stackLines[4] || '';
      const locationMatch = targetLine.match(/(\/[^\s]+):(\d+):(\d+)/);
      if (locationMatch) {
        const [, filePath, line, column] = locationMatch;
        return `${filePath}:${line}:${column}`;
      }
    }
    return 'unknown location';
  }

  #buildCommon(): string {
    const d = new Date();
    return ("0" + d.getDate()).slice(-2) + "-" +
      ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
      d.getFullYear() + " " +
      ("0" + d.getHours()).slice(-2) + ":" +
      ("0" + d.getMinutes()).slice(-2) + ":" +
      ("0" + d.getSeconds()).slice(-2) + "." +
      d.getMilliseconds();
  }
}
