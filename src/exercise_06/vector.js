

export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  // PLEASE DELETE THIS LINE AND ADD YOUR IMPLEMENTATION HERE


  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // set x(x) {
  //   if (this.firsttime !== undefined) {
  //     throw new Error('Can not modify field');
  //   }
  //   this.x = x;
  //   this.firsttime = true;
  // }

  // set y(y) {
  //   if (this.firsttime !== undefined) {
  //     throw new Error('Can not modify field');
  //   }
  //   this.y = y;
  // }

  static plus(a, b) {
    const vec = new Vector(a.x + b.x, a.y + b.y);
    return vec;
  }

  static minus(a, b) {
    const vec = new Vector(a.x - b.x, a.y - b.y);
    return vec;
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
