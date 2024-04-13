import { Delta } from '../../types';
export declare const isPointInsideBox: (point: Delta, { nw, ne, se, sw, }: {
    nw: Delta;
    ne: Delta;
    se: Delta;
    sw: Delta;
}) => boolean;
