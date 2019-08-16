module.exports = {
    siteMetadata: {
        title: `Swizec Teller`,
        name: `Swizec Teller`,
        siteUrl: `https://swizec.com/blog`,
        description: `This is where I write thing.`,
        hero: {
            heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
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
        // {
        //   resolve: `gatsby-plugin-google-analytics`,
        //   options: {
        //     trackingId: "UA-118232427-3",
        //   },
        // },
    ],
};