import { BoxSize, Delta } from '../../types';
export declare const boundingRect: (boxSize: BoxSize, position: Delta, rotate: number) => {
    width: number;
    height: number;
    centerX: number;
    centerY: number;
    x: number;
    y: number;
};
