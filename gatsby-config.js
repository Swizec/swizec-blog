module.exports = {
    siteMetadata: {
        title: `Swizec Teller`,
        name: `Swizec Teller`,
        siteUrl: `https://swizec.com/blog`,
        description: `This is where I write thing.`,
        hero: {
            heading: `Want to become a better web engineer? Indie hacker? Entrepreneur? Keep reading.`,
            maxWidth: 652,
        },
        social: [{
                name: `twitter`,
                url: `https://twitter.com/swizec`,
            },
            {
                name: `github`,
                url: `https://github.com/swizec`,
            },
            {
                name: `instagram`,
                url: `https://instagram.com/swizec`,
            },
        ],
    },
    plugins: [{
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                basePath: "/",
                mailchimp: false,
                sources: {
                    local: true,
                    contentful: false
                }
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Swizec Teller`,
                short_name: `Swizec`,
                start_url: `/blog`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/assets/favicon.png`,
            },
        },
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-1464315-1",
            },
        },
        {
            resolve: 'gatsby-plugin-facebook-pixel',
            options: {
                pixelId: '714190382013726'
            }
        }
    ],
};