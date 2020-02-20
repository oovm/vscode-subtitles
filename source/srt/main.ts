const time_line = {
    match: /^(\d{2}:[0-5][0-9]:[0-5][0-9],\d{3}) (-->) (\d{2}:[0-5][0-9]:[0-5][0-9],\d{3})$/.source,
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
    begin: '(?i)(<)(i|b|i|u|font)(?=\\s|/?>)',
    beginCaptures: {
        1: { name: 'punctuation.definition.tag.begin.html' },
        2: { name: 'entity.name.tag.inline.any.html' },
    },
    end: '>',
    endCaptures: {
        1: { name: 'punctuation.definition.tag.end.html' },
    },
}


const text = {
    begin: '.',
    end: '(\n\r|\n)',
    name: 'string.literal.subrip',
    patterns: [
        {
            match: /(<b>)(.*?)(<\/b>)/.source,
            captures: {
                1: { name: 'entity.name.tag.html' },
                2: { name: 'markup.bold.markdown' },
                3: { name: 'entity.name.tag.html' },
            }
        },
        {
            match: /(\{b\})(.*?)(\{\/b\})/.source,
            captures: {
                1: { name: 'entity.name.tag.html' },
                2: { name: 'markup.bold.markdown' },
                3: { name: 'entity.name.tag.html' },
            }
        },
        {
            match: /(<i>)(.*?)(<\/i>)/.source,
            captures: {
                1: { name: 'entity.name.tag.html' },
                2: { name: 'markup.italic.markdown' },
                3: { name: 'entity.name.tag.html' },
            }
        },
        {
            match: /(\{i\})(.*?)(\{\/i\})/.source,
            captures: {
                1: { name: 'entity.name.tag.html' },
                2: { name: 'markup.italic.markdown' },
                3: { name: 'entity.name.tag.html' },
            }
        },
        {
            match: /(<u>)(.*?)(<\/u>)/.source,
            captures: {
                1: { name: 'entity.name.tag.html' },
                2: { name: 'markup.underline.markdown' },
                3: { name: 'entity.name.tag.html' },
            }
        },
        {
            match: /(\{u\})(.*?)(\{\/u\})/.source,
            captures: {
                1: { name: 'entity.name.tag.html' },
                2: { name: 'markup.underline.markdown' },
                3: { name: 'entity.name.tag.html' },
            }
        },
        {
            match: /(<font.*>)(.*?)(<\/font>)/.source,
            captures: {
                1: { name: 'entity.name.tag.html' },
                2: { name: 'markup.font.markdown' },
                3: { name: 'entity.name.tag.html' },
            }
        },
    ]
}

export const pattern: any[] = [
    number_line,
    time_line,
    text,
]
