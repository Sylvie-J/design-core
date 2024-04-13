import { BoxSize, Delta, LayerDataSet, LinePosition } from '../types';
export type DragLineData = {
    position: Delta;
    rotate: number;
    boxSize: BoxSize;
};
export declare const useDragLine: ({ getLayerData, pageOffset, frameScale, onDragStart, onDrag, onDragStop, }: {
    getLayerData: () => LayerDataSet;
    pageOffset: Delta;
    frameScale: number;
    onDragStart: (e: MouseEvent | TouchEvent, position: LinePosition) => void;
    onDrag: (e: MouseEvent | TouchEvent, position: LinePosition, data: DragLineData) => void;
    onDragStop: (e: MouseEvent | TouchEvent, position: LinePosition, data: DragLineData) => void;
}) => {
    startUpdating: (e: MouseEvent | TouchEvent, linePosition: LinePosition) => void;
};
