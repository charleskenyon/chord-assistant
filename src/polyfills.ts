if (!Array.prototype.includes) {
  Array.prototype.includes = function <T, U extends T>(
    this: T[],
    search: U
  ): boolean {
    return !!~this.indexOf(search);
  };
}
