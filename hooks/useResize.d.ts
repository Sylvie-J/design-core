import { BoxData, BoxSize, Delta, Direction } from '../types';
export declare const useResize: (getData: () => BoxData, frameScale: number) => {
    getResized: (direction: Direction, original: {
        clientX: number;
        clientY: number;
    }, newPosition: {
        clientX: number;
        clientY: number;
    }, lockAspect: boolean) => BoxData;
};
export declare const getImageSize: (box: BoxData, image: BoxData, direction: Direction, change: {
    width: number;
    height: number;
}) => {
    boxSize: BoxSize;
    position: Delta;
    rotate: number;
    scale: number;
    image: {
        boxSize: BoxSize;
        position: Delta;
        rotate: number;
    };
};
export declare const getVideoSize: (box: BoxData, video: BoxData, direction: Direction, change: {
    width: number;
    height: number;
}) => {
    boxSize: BoxSize;
    position: Delta;
    rotate: number;
    scale: number;
    video: {
        boxSize: BoxSize;
        position: Delta;
        rotate: number;
    };
};
