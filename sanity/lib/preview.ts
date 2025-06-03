import { draftMode } from 'next/headers'
import { client } from './client'

export async function getPreviewClient() {
  const { isEnabled } = draftMode()

  if (isEnabled) {
    return client.withConfig({
      perspective: 'previewDrafts',
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    })
  }

  return client
}
