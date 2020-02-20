import { pattern } from './main'
import { getVersion } from '../lib'
export const ass = {
    id: 'ass',
    version: getVersion(),
    name: 'Aegisub',
    scopeName: 'source.ass',
    fileTypes: [
        'ass',
        'ssa',
    ],
    uuid: '90101069-65f0-4834-a2fa-faad3b9d1400',
    information_for_contributors: [
        'aster: 19260817@qq.com',
    ],
    patterns: pattern,
}
