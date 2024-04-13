import { FC, HTMLProps } from 'react';
import { GradientStyle, LayerComponentProps } from '../types';
import { ImageContentProps } from './ImageContent';
import { VideoContentProps } from './VideoContent';
export interface RootContentProps extends LayerComponentProps, Omit<HTMLProps<HTMLDivElement>, 'color'> {
    color: string | null;
    gradientBackground: {
        colors: string[];
        style: GradientStyle;
    } | null;
    image?: (ImageContentProps['image'] & {
        transparency: number;
    }) | null;
    video?: VideoContentProps['video'] | null;
}
export declare const RootContent: FC<RootContentProps>;
