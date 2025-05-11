import { uploadFileInterface } from '../provider'
import { put } from '@vercel/blob'

export const uploadFile: uploadFileInterface = async (file, path) => {
  const { url } = await put(path, file, {
    access: 'public',
    allowOverwrite: true,
  })
  return url
}
