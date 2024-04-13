import { FC } from 'react';
import { ArrowType, LayerComponentProps, LineStyle } from '../types';
export interface LineContentProps extends LayerComponentProps {
    style: LineStyle;
    color: string;
    arrowStart?: ArrowType;
    arrowEnd?: ArrowType;
}
export declare const LineContent: FC<LineContentProps>;
