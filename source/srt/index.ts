import { pattern } from './main'
import { getVersion } from '../lib'
export const srt = {
    id: 'srt',
    version: getVersion(),
    name: 'Subtitle',
    scopeName: 'source.subrip',
    fileTypes: [
        'srt',
        'subrip',
    ],
    uuid: '645230de-6f9d-4818-a3de-fefccaa4eaa7',
    information_for_contributors: [
        'aster: 19260817@qq.com',
    ],
    patterns: pattern,
}
