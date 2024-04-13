import { FC } from 'react';
import { GradientStyle, LayerComponentProps, ShapeBorderStyle, ShapeType } from '../types';
export interface ShapeContentProps extends LayerComponentProps {
    shape: ShapeType;
    roundedCorners: number;
    color: string | null;
    gradientBackground: {
        colors: string[];
        style: GradientStyle;
    } | null;
    border: {
        style: ShapeBorderStyle;
        weight: number;
        color: string;
    } | null;
    scale: number;
}
export declare const ShapeContent: FC<ShapeContentProps>;
