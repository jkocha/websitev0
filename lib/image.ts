import { getPlaiceholder } from 'plaiceholder'

export async function getBlurDataURL(src: string) {
  try {
    const response = await fetch(src)
    const buffer = await response.arrayBuffer()
    const { base64 } = await getPlaiceholder(Buffer.from(buffer))
    return base64
  } catch (error) {
    console.error('Error generating blur placeholder:', error)
    return undefined
  }
}
