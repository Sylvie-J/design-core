export type BoxSize = {
    width: number;
    height: number;
};
export type Delta = {
    x: number;
    y: number;
};
export type CursorPosition = {
    clientX: number;
    clientY: number;
};
export type Font = {
    style?: 'Bold' | 'Italic' | 'Bold_Italic';
    urls: string[];
};
export type FontData = {
    name: string;
    fonts: Font[];
};
export type CornerDirection = 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft';
export type EdgeDirection = 'top' | 'right' | 'bottom' | 'left';
export type Direction = EdgeDirection | CornerDirection;
export type LinePosition = 'start' | 'end';
