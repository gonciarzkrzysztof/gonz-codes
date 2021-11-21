export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
        }
      ]
    },
    {
      name: 'time',
      title: 'Time',
      type: 'object',
      fields: [
        {
          name: 'startDate',
          title: 'Start date',
          type: 'date',
          options: {
            dateFormat: 'YYYY'
          }
        },
        {
          name: 'endDate',
          title: 'End date',
          type: 'date',
          options: {
            dateFormat: 'YYYY'
          }
        }
      ]
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'technology'
        }
      }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  orderings: [
    {
      title: 'Created, Old first',
      name: 'createdAsc',
      by: [
        { field: '_createdAt', direction: 'asc' }
      ]
    },
  ]
}
