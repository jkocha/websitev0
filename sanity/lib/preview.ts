import { draftMode } from 'next/headers'
import { client } from './client'

export async function getPreviewClient() {
  const draft = await draftMode()

  if (draft.isEnabled) {
    return client.withConfig({
      perspective: 'previewDrafts',
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    })
  }

  return client
}
