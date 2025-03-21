export default defineAppConfig({
  title: 'G-to.com',
  email: 'webmaster@g-to.com',
  github: '',
  twitter: '',
  telegram: '',
  mastodon: '',
  blog: 'https://g-to.com',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: '',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
