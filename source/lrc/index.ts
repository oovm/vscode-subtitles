import { pattern } from './main'
import { getVersion } from '../lib'
export const lrc = {
    id: 'lrc',
    version: getVersion(),
    scopeName: 'source.lyric',
    uuid: '9b00c027-8f13-4f5a-a57e-d90478a1f818',
    information_for_contributors: [
        'aster: galaster@foxmail.com',
    ],
    patterns: pattern,
}