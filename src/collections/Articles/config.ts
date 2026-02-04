
import type { CollectionConfig } from 'payload'
import { generateSlugHook } from './hooks/generate-slug.hooks'
import { generateContentSummeryHook } from './hooks/generate-content-summery.hook'



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
            {
                name: 'contentSummery',
                type: 'textarea',
                required: true,
                hooks: {beforeValidate: [generateContentSummeryHook]},
            },

    ],
}