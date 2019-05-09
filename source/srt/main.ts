const time_line = {
    match: '^(\\d{2}:\\d{2}:\\d{2},\\d{3}) (-->) (\\d{2}:\\d{2}:\\d{2},\\d{3})$',
    captures: {
        1: { name: 'constant.other.time.subrip' },
        2: { name: 'keyword.operator.assignment.subrip' },
        3: { name: 'constant.other.time.subrip' },
    },
}

const number_line = {
    name: 'variable.other.readwrite.subrip',
    match: '^(\\d+)$',
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



export const pattern: any[] = [
    number_line,
    time_line,
    html_tag,
]
