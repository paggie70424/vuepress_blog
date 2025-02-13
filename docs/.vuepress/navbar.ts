import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/blog/' },
  { text: 'Tags', link: '/blog/tags/' },
  { text: 'Archives', link: '/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'README', link: '/notes/demo/README.md' }
    ]
  },

  {text: 'Travel Hostory', link: '/blog/travels/'}
])
