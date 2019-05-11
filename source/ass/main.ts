const digit = {
    match: /(?<!\w)(\d*(\.\d*)?)(?!\w)/.source,
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

const invalid = [
    {
        name: 'invalid.illegal.noKey.ass',
        match: '(\\s*:.*)$',
    },
    {
        name: 'invalid.deprecated.noValue.ass',
        match: '(\\s*[A-Za-z_\\-][A-Za-z0-9_\\-]*\\s*:)(?:\\s*$)',
    },
]


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
    //contentName: 'meta.function-call.arguments.python',
    patterns: [
        {
            match: /,/.source,
            name: 'punctuation.separator.ass',
        },
        {
            match: /\b([a-zA-Z]\w*)/.source,
            name: 'storage.type.ass'//'support.function.ass',
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
    //contentName: 'meta.function-call.arguments.python',
    patterns: [
        {
            match: /,/.source,
            name: 'punctuation.separator.ass',
        },
        {
            match: /\b([a-zA-Z]\w*)/.source,
            name: 'storage.type.ass'//'support.function.ass',
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
    {
        captures: {
            1: {
                name: 'keyword.other.definition.ass',
            },
            2: {
                name: 'punctuation.separator.key-value.ass',
            },
        },
        match: '\\b([a-zA-Z0-9_.-]+)\\b\\s*(=)',
    },
    {
        captures: {
            1: {
                name: 'punctuation.definition.entity.ass',
            },
            3: {
                name: 'punctuation.definition.entity.ass',
            },
        },
        match: '^(\\[)(.*?)(\\])',
        name: 'entity.name.section.group-title.ass',
    },
    {
        begin: "'",
        beginCaptures: {
            0: {
                name: 'punctuation.definition.string.begin.ass',
            },
        },
        end: "'",
        endCaptures: {
            0: {
                name: 'punctuation.definition.string.end.ass',
            },
        },
        name: 'string.quoted.single.ass',
        patterns: [
            {
                match: '\\\\.',
                name: 'constant.character.escape.ass',
            },
        ],
    },
    {
        begin: '"',
        beginCaptures: {
            0: {
                name: 'punctuation.definition.string.begin.ass',
            },
        },
        end: '"',
        endCaptures: {
            0: {
                name: 'punctuation.definition.string.end.ass',
            },
        },
        name: 'string.quoted.double.ass',
    },
]