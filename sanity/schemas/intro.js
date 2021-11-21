export default {
  name: 'intro',
  title: 'Intro',
  type: 'document',
  fields: [
    {
      name: 'intro',
      title: 'Intro',
      type: 'string',
      initialValue: 'Intro',
      hidden: true
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'text',
      rows: 2
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'copy',
      title: 'Copy',
      type: 'blockContent',
    },
  ],
}
