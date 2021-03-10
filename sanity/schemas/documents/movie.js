const movie = {
    title: 'Film',
    name: 'movie',
    type: 'document',
    fields: [
        {
            title: 'Tittel',
            name: 'title',
            description: 'Tittelen på filmen',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Skuespiller',
            name: 'actor',
            description: 'Hent en skuespiller som spiller i filmen',
            type: 'reference',
            to: [{type: 'actor'}]
        }
    ],
    preview: {
        select: {
            title: 'title',
            cast: 'actor.name'
        }, 
        prepare(selection) {
            const {title, cast} = selection;
            return {
                title,
                subtitle: `Medvirkende: ${cast}`
            }

        }
    }
}

export default movie;