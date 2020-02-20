import { pattern } from './main'
import { getVersion } from '../lib'
export const lrc = {
    id: 'lrc',
    version: getVersion(),
    name: 'Lyric',
    scopeName: 'source.lyric',
    fileTypes: [
        'lrc',
        'lyric',
    ],
    uuid: 'ac7e1470-6d3a-457c-8b5b-bf44f6da3ed2',
    information_for_contributors: [
        'aster: 19260817@qq.com',
    ],
    patterns: pattern,
}
