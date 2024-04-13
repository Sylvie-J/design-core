import { FC } from 'react';
type Props = {
    type: 'start' | 'end';
    weight: number;
    width: number;
    fillNone: boolean;
};
declare const ArrowSquare: FC<Props>;
export default ArrowSquare;
