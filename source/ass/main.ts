const invalid = [
    {
        name: 'invalid.illegal.noKey.ass',
        match: '(\\s*:.*)$',
    },
    {
        name: 'invalid.deprecated.noValue.ass',
        match: '(\\s*[A-Za-z_\\-][A-Za-z0-9_\\-]*\\s*:)(?:\\s*$)',
    }
]


const key_value = {
    begin: /([A-Za-z\s]*)(:)\s*/.source,
    beginCaptures: {
        1: {
            name: 'entity.name.tag.ass',
        },
        2: {
            name: 'punctuation.definition.keyValue.ass',
        },
    },
    end: /[^,]*\n/.source,
    patterns: [

    ],
}


const comment = {
    begin: '(^[ \\t]+)?(?=;)',
    beginCaptures: {
        1: {
            name: 'punctuation.whitespace.comment.leading.ass',
        },
    },
    end: '(?!\\G)',
    patterns: [
        {
            begin: ';',
            beginCaptures: {
                0: {
                    name: 'punctuation.definition.comment.ass',
                },
            },
            end: '\\n',
            name: 'comment.line.semicolon.ass',
        },
    ],
}


export const pattern: any = [
    comment,
    key_value,
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
    }
]