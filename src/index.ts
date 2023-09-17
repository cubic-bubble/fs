import * as fs from 'fs-extra'

declare global {
  var isOncloud: () => boolean
}

global.isOncloud = () => { return process.env.MODE === 'cloud' }

// Cloud based Filesystem Interface
export function CloudFS(){
  // Override fs method to adapt to clound

  return fs
}

export default isOncloud() ? CloudFS() : fs