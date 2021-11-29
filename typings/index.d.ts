declare module 'deep-equal';

declare let inlets: number;

declare let outlets: number;

declare const post: (log: string) => void;

declare const outlet: (outlet: number, ...output: number[]) => void;
