const time_line = {
    begin: /\[([0-5][0-9]:[0-5][0-9]\.[0-9][0-9])\]/.source,
    beginCaptures: {
        1: { name: 'constant.other.time.lyric' },
    },
    end: /(.*)[\n\r]+/.source,
    endCaptures: {
        1: { name: 'string.literal.lyric' },
    },
}

const meta_info = {
    match: /(\[)([a-zA-Z].*)(:)(.*)(\])/.source,
    captures: {
        1: { name: 'punctuation.definition.meta.lyric' },
        3: { name: 'punctuation.definition.split.lyric' },
        5: { name: 'punctuation.definition.meta.lyric' },
        2: { name: 'entity.name.function.lyric' },
        4: { name: 'meta.object-literal.key.lyric' },
    },
}

const illegal = {
    match: '(.*)',
    captures: {
        1: { name: 'invalid.illegal.lyric' },
    },
}

export const pattern: any[] = [
    time_line,
    meta_info,
    illegal,
]