// src/collection.media/config.ts
import type { CollectionConfig } from 'payload'
import { isEligibleForBlurataUrl, generateBlurDataUrl } from './lib/gennerate-blur-data-url'

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        {
            name: 'blurDataUrl',
            type: 'text',
            required: false,
            admin: { hidden: true },
        },
    ],
    upload: true,
    hooks: {
        beforeChange: [
            async ({ data, req }) => {
                if (!req.file?.data) return data
                // 1. check for eligibility
                if (!isEligibleForBlurataUrl(req.file.mimetype)) return data
                // 2. if is it generate blur hash
                const base64 = await generateBlurDataUrl(req.file.data)
                if (base64) {
                    data.blurDataUrl = base64
                    console.log(`Blur generated for ${data.filename || 'new file'}`)
                } else {
                    console.log(
                        `No blur generated (empty base64) for ${data.filename || 'new file'}`,
                    )
                }

                return data
            },
        ],
    },
}
