import * as fs from 'fs-extra'

declare global {
  var isOncloud: () => boolean
}

global.isOncloud = () => { return process.env.MODE === 'cloud' }

// Cloud based Filesystem Interface
export class CloudFS {

  constructor(){

    // TODO: Define credentials & Connect to cloud space

  }

  async exists( path: string ){
    console.log('Path: ', path )
  }
}

export default isOncloud() ? new CloudFS : fs