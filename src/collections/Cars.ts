import { CollectionConfig } from "payload";

export const Cars: CollectionConfig = {
    slug: 'cars',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'description',
            type: 'text',

        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'manufacturer',
            type: 'relationship',
            relationTo: 'Manufacturers',
        }


    ]
}