import { Payload } from 'payload'
import { faker } from '@faker-js/faker'

export async function createMediaFromImageUrl(payload: Payload, imageUrl: string) {
    try {
        const res = await fetch(imageUrl)
        const arrBuffer = await res.arrayBuffer()
        const buffer = Buffer.from(arrBuffer)

        const mimetype = res.headers.get('content-type') || 'image/jpeg'
        const filesize = buffer.length
        const filename = res.url.split('/').pop()?.split('?')[0]

        if (!filename) throw new Error('failedto extract filename')

        console.log({ mimetype, filesize, filename })

        return await payload.create({
            collection: 'media',
            data: { alt: faker.lorem.word(3) },
            file: {
                data: buffer,
                name: filename,
                mimetype,
                size: filesize,
            },
        })
    } catch (error) {
        console.warn('Failed to seed media file', error)
    }
}
