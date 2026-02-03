
import type { CollectionConfig } from 'payload'
import { generateSlugHook } from './hooks/generate-slug.hooks'

export const Articles: CollectionConfig = {
    slug: 'articles',
    fields: [
        {
        name: 'title',
        type: 'text',
        required: true,
        unique: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            hooks: {beforeValidate: [generateSlugHook]},
            },
            {
                name: 'content',
                type: 'richText',
                required: true,
            },

    ],
}