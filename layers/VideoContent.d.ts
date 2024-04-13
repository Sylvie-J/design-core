import { FC } from 'react';
import { BoxSize, Delta, LayerComponentProps } from '../types';
export interface VideoContentProps extends LayerComponentProps {
    video: {
        url: string;
        position: Delta;
        rotate: number;
        boxSize: BoxSize;
        transparency?: number;
        autoPlay?: boolean;
    };
}
export declare const VideoContent: FC<VideoContentProps>;
