// Canonical entities grounded in the site's visible legal and product pages.
// No unverified social profiles, people, ratings or audience counts.
export const siteUrl = 'https://greaderapp.com';
export const organization = {
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Laravel Company',
  url: 'https://laravelcompany.com',
  logo: `${siteUrl}/assets/brand/logo.svg`,
};
export const website = {
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'gReader News',
  url: `${siteUrl}/`,
  publisher: { '@id': organization['@id'] },
};
export const product = {
  '@type': 'SoftwareApplication',
  '@id': `${siteUrl}/#app`,
  name: 'gReader News',
  url: `${siteUrl}/`,
  applicationCategory: 'NewsApplication',
  operatingSystem: 'Web, Android',
  publisher: { '@id': organization['@id'] },
};
