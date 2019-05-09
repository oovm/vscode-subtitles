const time_line = {
    match: /^(\d{2}:[0-6][0-9]:[0-6][0-9],\d{3}) (-->) (\d{2}:[0-6][0-9]:[0-6][0-9],\d{3})$/.source,
    captures: {
        1: { name: 'constant.other.time.subrip' },
        2: { name: 'keyword.operator.assignment.subrip' },
        3: { name: 'constant.other.time.subrip' },
    },
}

const number_line = {
    match: /^([1-9][0-9]*)$/.source,
    name: 'variable.other.readwrite.subrip',
}

const html_tag = {
    begin: '(\\</?)((?i:b|i|u|font)\\b)',
    beginCaptures: {
        1: { name: 'punctuation.definition.tag.begin.html' },
        2: { name: 'entity.name.tag.inline.any.html' },
    },
    end: '((?: ?/)?\\>)',
    endCaptures: {
        1: { name: 'punctuation.definition.tag.end.html' },
    },
}

const html_bold = {
    match: /(<b>)(.*)(<\/b>)/.source,
    captures: {
        1: { name: 'punctuation.definition.tag.begin.html' },
        2: { name: 'entity.name.tag.inline.any.html' },
        3: { name: 'punctuation.definition.tag.end.html' },
    },
}

const text = {
    begin: '.+',
    beginCaptures: {},
    end: '(\n\r|\n)',
    endCaptures: {},
    name: 'string.literal.subrip',
    patterns: [
        html_tag,
        html_bold,
    ]
}

export const pattern: any[] = [
    number_line,
    time_line,
    text,
]
