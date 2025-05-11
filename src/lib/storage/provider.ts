export type uploadFileInterface = (file: File, path: string) => Promise<string>
export type deleteFileInterface = (path: string) => Promise<void>
export type getFileUrlInterface = (path: string) => Promise<string>
