export default class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number);
    multiple(x: number | Vector, y?: number): this;
    add(x: number | Vector, y?: number): this;
    sub(x: number | Vector, y?: number): this;
    copy(): Vector;
    mag(): number;
    normalize(): this;
    angleBetween(v: Vector): number;
    magSq(): number;
    dist(v: Vector): number;
    dot(x: number, y: number): number;
}
