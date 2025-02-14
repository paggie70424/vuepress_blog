import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'


/**
//  * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/images/bobatea.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: '/' },
  ],

  profile: {
    avatar: '/images/paggie_img_2.png',
    name: 'Paggie Blog',
    description: 'Welcome to Paggie Blog',
    circle: true,
    location: 'Adelaide, South Australia',
    organization: 'Future Education in Unisa',
    layout: 'right'
  },

  navbar,
  notes,

});
