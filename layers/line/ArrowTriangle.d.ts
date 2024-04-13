import { FC } from 'react';
type Props = {
    type: 'start' | 'end';
    weight: number;
    width: number;
    fillNone: boolean;
};
declare const ArrowTriangle: FC<Props>;
export default ArrowTriangle;
