import { FC } from 'react';
import { FontData } from '../../types';
export interface GlobalStyleProps {
    fonts: FontData[];
    mode?: 'editor' | 'view';
}
export declare const GlobalStyle: FC<GlobalStyleProps>;
