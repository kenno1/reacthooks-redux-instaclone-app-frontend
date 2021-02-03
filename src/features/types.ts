export interface File extends Blob {
    readonly lastModified: number;
    readonly name: string;
  }
export interface PROPS_AUTHEN {
    email: string;
    password: string;
  }