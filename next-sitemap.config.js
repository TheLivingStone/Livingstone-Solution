/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || 'https://solution.thelivingstonefoundation.com').replace(/\/$/, ''),
    generateRobotsTxt: true,
    sitemapSize: 7000,
    outDir: 'public',
    exclude: ['/404', '/home-2', '/projects-2', '/projects-3', '/contactGrid'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/404', '/api/*', '/contactGrid']
            }
        ],
        additionalSitemaps: []
    }
}
