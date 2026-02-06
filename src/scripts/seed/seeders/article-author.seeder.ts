//src/scripts/seed/seeders/article-author-seeder.ts

import { Payload } from 'payload'
import { faker } from '@faker-js/faker'
import { ARTICLE_AUTHOR_ROLE_OPTIONS } from '@/collections/ArticleAuthors/constants'
import { createMediaFromImageUrl } from '@/collections/Media/lib/create-media-from-imageurl'

export async function seedArticleAuthor(payload: Payload) {
    try {
        const imageUrl = faker.image.personPortrait({ size: 256 })
        const image = await createMediaFromImageUrl(payload, imageUrl)
        if (!image) {
            console.warn('Stopped seeding article author because no image was created')
            return
        }
        await payload.create({
            collection: 'article-authors',
            data: {
                name: faker.person.fullName(),
                role: ARTICLE_AUTHOR_ROLE_OPTIONS.STAFF_WRITTER,
                avatar: image.id,
            },
        })
    } catch (error) {
        console.log('failed to seed article author', error)
    }
}
