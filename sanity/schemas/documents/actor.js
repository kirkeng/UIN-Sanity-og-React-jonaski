const actor = {
    title: 'Skuespiller',
    name: 'actor',
    type: 'document',
    fields: [
        {
            title: 'Navn',
            name: 'name',
            description: 'Navnet på en skuespiller',
            type: 'string',
            validation: (Rule) => Rule.required()
        }
    ]
}

export default actor;