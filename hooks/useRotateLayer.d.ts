import { BoxData, Delta, LayerDataSet, LayerId } from '../types';
export type RotateCallbackData = {
    controlBox?: BoxData;
    layers: Record<LayerId, BoxData>;
};
export declare const useRotateLayer: ({ getLayerData, pageOffset, frameScale, getControlBoxData, onRotateStart, onRotate, onRotateEnd, }: {
    frameScale: number;
    getLayerData: () => LayerDataSet;
    pageOffset: Delta;
    getControlBoxData: () => BoxData | undefined;
    setControlBoxData: (data: BoxData) => void;
    onRotateStart: () => void;
    onRotate: (rotate: number, data: RotateCallbackData) => void;
    onRotateEnd: (rotate: number, data: RotateCallbackData) => void;
}) => {
    startRotate: (e: TouchEvent | MouseEvent) => void;
};
