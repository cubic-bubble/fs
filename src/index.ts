import * as fs from 'fs-extra'

declare global {
  var isOncloud: () => boolean
}

global.isOncloud = () => { return process.env.MODE === 'cloud' }

// Cloud based Filesystem Interface
export function cloudPatch(){
  /**
   * Override fs methods to adapt to cloud
   * Eg.
   *
   * fs.newDir = ( directory ) => { ... }
   */

  return fs
}

export default isOncloud() ? cloudPatch() : fs