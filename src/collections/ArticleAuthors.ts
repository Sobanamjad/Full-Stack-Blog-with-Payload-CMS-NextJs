import { CollectionConfig } from 'payload'


export const ArticleAuthors: CollectionConfig = {
    slug: 'article-authors',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'avatar',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'role',
            type: 'select',
            options: [ 'Staff Writter', 'Guest Writter', 'Flo Rida', 'Contributor', 'Editor', ],
            defaultValue: 'Staff Writter',
            required: true,
        },
    ]

}