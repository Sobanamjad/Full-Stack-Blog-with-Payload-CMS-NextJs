import { CollectionConfig } from "payload";

export const Manufacturers: CollectionConfig = {
    slug: 'Manufacturers',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'cars',
            type: 'relationship',
            relationTo: 'cars',
            hasMany: true,
        },
    ]
}