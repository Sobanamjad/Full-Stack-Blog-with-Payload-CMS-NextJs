// src/scripts/seed/szeeders/admin.seeder.ts

import { getPayload } from "payload"
import  config  from "@/payload.config"

export async function seedAdmin() {
    const payload = await getPayload({ config })

    try {
        const response = await payload.create({
            collection: 'users',
            data: {
                email: 'test@gamil.com',
                password: 'password',
            }
        })
        console.log('Admin created User:', response)
    } catch (error) {
        console.error('Error seeding admin user ', error)
    }
}