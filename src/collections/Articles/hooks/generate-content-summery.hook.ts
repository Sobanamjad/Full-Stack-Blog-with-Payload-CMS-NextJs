import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'
import type { FieldHook } from 'payload'
import { Article } from '@/payload-types'
import { MAX_SUMMERY_LENGTH } from '../constant'

// is line ma ({ value, data }) ki jhaga agr hum (args) krty tw console pr sari info milti means terminal pr
export const generateContentSummeryHook: FieldHook<Article, string> = ({ value, data }) => {
    if (value) return value.trim()
    if (!data?.content) return ''
    const text = convertLexicalToPlaintext({ data: data?.content }).trim()
    if (!text) return ''
    return text.length > MAX_SUMMERY_LENGTH ? `${text.slice(0, MAX_SUMMERY_LENGTH - 3)}...` : text

    // console.log(args)
    // return args.value || ''
}
