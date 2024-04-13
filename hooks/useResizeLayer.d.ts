import { BoxData, Direction, LayerDataSet } from '../types';
type ResizeRef = {
    clientX: number;
    clientY: number;
    lastClientX: number;
    lastClientY: number;
    isResizing: boolean;
    e?: MouseEvent | TouchEvent;
    direction: Direction;
    shiftKey: boolean;
};
export declare const useResizeLayer: ({ options: { scalable }, frameScale, controlBox, getControlBoxData, onResizeStart, onResize, onResizeStop, lockAspect, }: {
    options: {
        scalable: boolean;
    };
    getLayerData: () => LayerDataSet;
    frameScale: number;
    controlBox: BoxData | undefined;
    getControlBoxData: () => BoxData | undefined;
    lockAspect: (data: ResizeRef) => boolean;
    onResizeStart: (e: MouseEvent | TouchEvent, options: {
        direction: Direction;
    }) => void;
    onResize: (e: MouseEvent | TouchEvent, options: {
        direction: Direction;
        useShift: boolean;
    }, data: BoxData) => void;
    onResizeStop: (e: MouseEvent | TouchEvent, options: {
        direction: Direction;
        useShift: boolean;
    }, data: BoxData) => void;
}) => {
    startResizing: (e: MouseEvent | TouchEvent, direction: Direction) => void;
};
export {};
