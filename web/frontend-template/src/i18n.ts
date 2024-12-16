import {
  I18nObject,
  SimpleI18n,
  getString,
  getArray,
  getRecord,
} from '@frontend/util/i18n'

const fallback: I18nObject = {
  company: 'SamaTech',
  home: {
    hero: 'Frontend Template',
    hero_text: 'A frontend template for small to medium sized Vue apps.',
    details: 'Example Section',
    details_text:
      'Replace this text and add an image on the right, or remove the section entirely.',
  },
  footer: {
    copyright: '© 2024 App-Template - All Rights Reserved.',
    title: 'Frontend Vue3 app template',
    text: 'Built with Vue, Vite, and Postcss. Get started instantly with a full featured template.',
    col1: 'Resources',
    col2: 'Quick Links',
    faq: 'FAQ',
    about: 'About',
    terms: 'Terms',
    privacy: 'Privacy Policy',
    cookie: 'Cookie Policy',
  },
}
export const i18n = new SimpleI18n(fallback)
export const ts = getString(i18n)
export const ta = getArray(i18n)
export const tr = getRecord(i18n)
