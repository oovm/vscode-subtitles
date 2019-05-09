import { pattern } from './main'
import { getVersion } from '../lib'
export const srt = {
    id: 'srt',
    version: getVersion(),
    scopeName: 'source.subrip',
    uuid: '9b00c027-8f13-4f5a-a57e-d90478a1f819',
    information_for_contributors: [
        'aster: galaster@foxmail.com',
    ],
    patterns: pattern,
}