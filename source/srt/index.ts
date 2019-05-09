import { pattern } from './main'
import { getVersion } from '../lib'
export const srt = {
    id: 'srt',
    version: getVersion(),
    scopeName: 'source.subrip',
    uuid: '90101069-65f0-4834-a2fa-faad3b9d14db',
    information_for_contributors: [
        'aster: galaster@foxmail.com',
    ],
    patterns: pattern,
}