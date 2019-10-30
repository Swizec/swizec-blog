// Copied from https://github.com/kremalicious/gatsby-redirect-from/blob/master/src/gatsby-node.js
// Because I have special query needs

const chalk = require("chalk");

exports.createPages = ({ graphql, actions }, pluginOptions) => {
    const { createRedirect } = actions;

    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
                    {
                        allArticle {
                            edges {
                                node {
                                    slug
                                }
                            }
                        }
                        allMdx {
                            edges {
                                node {
                                    frontmatter {
                                        redirect_from
                                    }
                                }
                            }
                        }
                    }
                `
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors); // eslint-disable-line no-console
                    reject(result.errors);
                }

                const allPosts = result.data.allArticle.edges.map((edge, i) => {
                    return {
                        ...edge.node,
                        ...result.data.allMdx.edges[i].node
                    };
                });

                const redirects = [];

                // For all posts with redirect_from frontmatter,
                // extract all values and push to redirects array
                allPosts.forEach(post => {
                    redirects.push({
                        from: post.frontmatter.redirect_from,
                        to: post.slug
                    });
                });

                // Create redirects from the just constructed array
                redirects.forEach(({ from, to }) => {
                    // iterate through all `from` array items
                    from.forEach(from => {
                        createRedirect({
                            fromPath: from,
                            toPath: to,
                            isPermanent: true,
                            redirectInBrowser: true
                        });
                    });
                });

                resolve(
                    console.log(`${chalk.green("success")} create redirects`) // eslint-disable-line no-console
                );
            })
        );
    });
};
