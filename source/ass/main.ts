const digit = {
    match: /(?<!\w)(-?\d+(\.\d*)?)(?!\w)/.source,
    name: 'constant.numeric.ass',
}

const string = {
    match: /(?<!\w)([^,]*)(?!\w)/.source,
    name: 'string.literal.ass',
}

const illegal = {
    match: '(.*)',
    captures: {
        1: { name: 'invalid.illegal.lyric' },
    },
}

const block = {
    name: 'entity.name.section.group-title.ass',
    match: '^(\\[)(.*?)(\\])',
    captures: {
        1: {
            name: 'punctuation.definition.entity.ass',
        },
        3: {
            name: 'punctuation.definition.entity.ass',
        },
    },
}


const CommonLine = {
    begin: /([A-Za-z\s]*)(:)\s*/.source,
    beginCaptures: {
        1: { name: 'entity.name.tag.ass' },
        2: { name: 'punctuation.definition.keyValue.ass' },
    },
    end: /\r?\n/.source,
    patterns: [digit, string, illegal],
}

const CommentLine = {
    match: /(Comment)(:)\s*(.*)\r?\n/.source,
    captures: {
        1: { name: 'punctuation.definition.comment.ass' },
        2: { name: 'punctuation.definition.keyValue.ass' },
        3: { name: 'comment.line.ass' },
    },
}

const FormatLine = {
    begin: /(Format)(:)/.source,
    beginCaptures: {
        1: { name: 'entity.name.tag.ass' },
        2: { name: 'punctuation.definition.keyValue.ass' },
    },
    end: /[\r\n]+/.source,
    patterns: [
        {
            match: /,/.source,
            name: 'punctuation.separator.ass',
        },
        {
            match: /\b([a-zA-Z]\w*)/.source,
            name: 'storage.type.ass',
        },
    ],
}

const StyleLine = {
    begin: /(Style|Dialogue)(:)/.source,
    beginCaptures: {
        1: { name: 'entity.name.tag.ass' },
        2: { name: 'punctuation.definition.keyValue.ass' },
    },
    end: /[\r\n]+/.source,
    patterns: [
        {
            match: /,/.source,
            name: 'punctuation.separator.ass',
        },
        {
            match: /\b\d*:[0-5][0-9]:[0-5][0-9]\.\d{2}/.source,
            name: 'support.function.time.ass',
        },
        {
            match: /\&H[0-9A-F]+/.source,
            name: 'support.function.color.ass',
        },
        {
            match: /\b-?\d+(\.\d*)?/.source,
            name: 'constant.numeric.ass',
        },
        {
            match: /\b[^,\r\n]*/.source,
            name: 'string.literal.ass',
        },
    ],
}

const comment = {
    begin: '(^[ \\t]+)?(?=;)',
    beginCaptures: {
        1: { name: 'punctuation.whitespace.comment.leading.ass' },
    },
    end: '(?!\\G)',
    patterns: [
        {
            begin: ';',
            beginCaptures: {
                0: { name: 'punctuation.definition.comment.ass' },
            },
            end: '\\n',
            name: 'comment.line.semicolon.ass',
        },
    ],
}


export const pattern: any = [
    comment,
    CommentLine,
    FormatLine,
    StyleLine,
    CommonLine,
    block,
    illegal,
]