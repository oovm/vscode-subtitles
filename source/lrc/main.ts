const time_line: any = {
    begin: /\[([0-9][0-9]:[0-6][0-9]\.[0-9][0-9])\]/.source,
    beginCaptures: {
        1: { name: 'constant.other.time.lrc' },
    },
    end: /(.*)[\n\r]+/.source,
    endCaptures: {
        1: { name: 'string.literal.lrc' },
    },
}

const meta_info: any = {
    match: /(\[)([a-zA-Z].*)(:)(.*)(\])/.source,
    captures: {
        1: { name: 'punctuation.definition.meta.lrc' },
        3: { name: 'punctuation.definition.split.lrc' },
        5: { name: 'punctuation.definition.meta.lrc' },
        2: { name: 'entity.name.function.lrc' },
        4: { name: 'meta.object-literal.key.lrc' },
    },
}

const illegal: any = {
    match: '(.*)',
    captures: {
        1: { name: 'invalid.illegal.lrc' },
    },
}

export const pattern = [
    time_line,
    meta_info,
    illegal,
]