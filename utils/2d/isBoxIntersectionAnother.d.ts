import { Delta } from '../../types';
export declare const isBoxIntersectionAnother: (rect1: {
    nw: Delta;
    ne: Delta;
    se: Delta;
    sw: Delta;
}, rect2: {
    nw: Delta;
    ne: Delta;
    se: Delta;
    sw: Delta;
}) => Record<string, string[]>;
