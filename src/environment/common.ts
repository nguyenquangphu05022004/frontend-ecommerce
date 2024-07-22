

export class Common {
   static getFormatNumber(value: any) {
    let number = String(value);
    let n = number.length;
    let builder = '';
    while (n > 0) {
      let rev = number.substring(n - 3 >= 0 ? n - 3 : 0, n).split('').join('');
      builder = rev + builder;
      if (n - 3 > 0) builder = ',' + builder;
      n -= 3;
    }
    return builder;
  }
}
