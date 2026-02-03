import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Cars } from './collections/Cars'
import { Manufacturers } from './collections/Manufacturers'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [
        Users,
         Media,
         Cars,
         Manufacturers,
        //  {
        //     slug: 'cars',
        //     admin: {
        //         useAsTitle: 'title',
        //     },
        //     fields: [
        //         {
        //             name: 'title',
        //             type: 'text',
        //         },
        //         {
        //             name: 'description',
        //             type: 'text',
        //         },
        //         {
        //             name: 'image',
        //             type: 'upload',
        //             relationTo: 'media',
        //         }
        //     ]
        //  }
        ],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL || '',
        },
    }),
    sharp,
    plugins: [],
})
