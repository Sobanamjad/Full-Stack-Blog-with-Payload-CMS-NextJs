
import type { CollectionConfig } from 'payload'
import { generateSlugHook } from './hooks/generate-slug.hooks'
import { generateContentSummeryHook } from './hooks/generate-content-summery.hook'
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'



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
            hooks: { beforeValidate: [generateSlugHook]},
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
                hooks: { beforeValidate: [generateContentSummeryHook]},
            },
            {
                name: 'readTimeInMins',
                type: 'number',
                defaultValue: 0,
                hooks: { beforeChange: [
                    ({ siblingData }) => {
                        // ensure that data is not store in DB
                        delete siblingData.readTimeInMins
                    }
                ],
                 afterRead: [
                    ({ data }) => {
                        const text = convertLexicalToPlaintext({ data: data?.content})
                        const wordsPerMinute = 200
                        const words = text.trim().split(/\s+/).length
                        return Math.max(1, Math.ceil(words / wordsPerMinute))
                    }
                 ]
            },
            },

    ],
}