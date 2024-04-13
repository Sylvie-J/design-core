import { BoxSize, Delta } from './common';
export type LayerId = string;
export type LayerComponentProps = {
    layerId: LayerId;
    boxSize: BoxSize;
    rotate: number;
    position: Delta;
    scale?: number;
    transparency?: number;
};
export type GradientStyle = 'leftToRight' | 'topToBottom' | 'topLeftToBottomRight' | 'circleCenter' | 'circleTopLeft';
export type LayerType = 'Image' | 'Text' | 'Shape' | 'Root' | 'Group' | 'Frame' | 'Svg' | 'Video' | 'Line';
export type SerializedLayerTree = {
    rootId: LayerId;
    layers: SerializedLayers;
};
export type SerializedCompType = {
    resolvedName: string;
};
export type SerializedLayers = Record<LayerId, SerializedLayer>;
export type SerializedLayer = {
    type: SerializedCompType;
    props: Record<string, unknown>;
    locked: boolean;
    parent: LayerId | null;
    child: LayerId[];
};
export type BoxData = {
    boxSize: BoxSize;
    position: Delta;
    rotate: number;
    scale?: number;
};
export type EffectSettings = {
    offset?: number;
    direction?: number;
    blur?: number;
    transparency?: number;
    color?: string;
    intensity?: number;
    thickness?: number;
};
export type ShapeType = 'circle' | 'rectangle' | 'triangle' | 'triangleUpsideDown' | 'parallelogram' | 'parallelogramUpsideDown' | 'trapezoid' | 'trapezoidUpsideDown' | 'cross' | 'arrowRight' | 'arrowLeft' | 'arrowTop' | 'arrowBottom' | 'rhombus' | 'chevron' | 'arrowPentagon' | 'pentagon' | 'hexagonVertical' | 'hexagonHorizontal' | 'octagon' | 'chatBubbleSquare' | 'chatBubbleRound';
export type ShapeBorderStyle = 'solid' | 'longDashes' | 'shortDashes' | 'dots' | 'none';
export type LineStyle = 'solid' | 'longDashes' | 'shortDashes' | 'dots';
export type ArrowType = 'none' | 'bar' | 'arrow' | 'triangle' | 'outlineCircle' | 'circle' | 'outlineSquare' | 'square' | 'outlineDiamond' | 'diamond';
export type LayerDataSet = Record<LayerId, Pick<LayerComponentProps, 'position' | 'boxSize' | 'rotate' | 'scale'> & {
    centerX?: number;
    centerY?: number;
}>;
