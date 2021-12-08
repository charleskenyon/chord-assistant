if (!Array.prototype.includes) {
  Array.prototype.includes = function (search: string | number): boolean {
    return !!~this.indexOf(search);
  };
}
