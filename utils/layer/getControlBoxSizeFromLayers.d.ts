import { BoxData, LayerComponentProps, LayerId } from '../../types';
export declare const getControlBoxSizeFromLayers: (data: Record<LayerId, Pick<LayerComponentProps, 'position' | 'boxSize' | 'rotate' | 'scale'>>) => BoxData | undefined;
