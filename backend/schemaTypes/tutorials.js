
export default {
    name: 'tutorials',
    type:'document',
    title:'tutorials',
    fields: [
        {
            name:'title',
            type:'string',
            title:'Title',

        },
        {
            name:'description',
            type:'string',
            title:'description',

        },
        {
            name:'views',
            type:'string',
            title:'views',

        },
        {
            name:'comments',
            type:'number',
            title:'comments',

        },
        {
            name:'catogary',
            type:'string',
            title:'catogary',

        },
        {
            name:'image',
            type:'image',
            title:'image',
            Option:{
                hotspot:true,
            }

        }
    ]
}