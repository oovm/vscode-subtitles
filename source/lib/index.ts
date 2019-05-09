import { readFileSync } from 'fs'
import * as path from 'path'

export function getVersion() {
    const json = readFileSync(path.resolve(__dirname, '..', '..', 'package.json'))
    return 'v' + JSON.parse(json.toString()).version
}
export function including(_: string) { return { include: '#' + _ } }