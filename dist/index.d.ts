import * as fs from 'fs-extra';
declare global {
    var isOncloud: () => boolean;
}
export declare function cloudPatch(): typeof fs;
declare const _default: typeof fs;
export default _default;
