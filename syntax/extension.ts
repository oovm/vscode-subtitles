import { writeFileSync } from 'fs'
import { srt, lrc } from '../source'

interface tmLang {
    id: string
    scopeName: string
    uuid: string
}

function saveSyntax(name: tmLang) {
    writeFileSync(
        `${__dirname}/${name.id}.tmLanguage.json`,
        JSON.stringify(name, null, 4),
    )
}

[lrc, srt].map(saveSyntax)
