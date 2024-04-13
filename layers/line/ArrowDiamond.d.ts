import { FC } from 'react';
type Props = {
    type: 'start' | 'end';
    weight: number;
    width: number;
    fillNone: boolean;
};
declare const ArrowDiamond: FC<Props>;
export default ArrowDiamond;
