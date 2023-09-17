import * as fs from 'fs-extra';
export declare class CloudFS {
    constructor();
    exists(path: string): Promise<void>;
}
declare const _default: typeof fs | CloudFS;
export default _default;
