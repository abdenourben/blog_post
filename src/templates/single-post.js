import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Card, Grid, CardActionArea, CardContent, Typography } from '@material-ui/core'
import { slugify } from '../util/utilityFunctions'


const SinglePost = ({ data }) => {
    const post = data.markdownRemark.frontmatter
    return (
        <Layout>
            <SEO title={post.title} />

            <Card>
                <CardActionArea>
                    <Grid >
                        <Grid item xs={12} sm={6}>
                        <Img fluid={post.image.childImageSharp.fluid} />
                        </Grid>
                        <Grid direction="row" item xs={12} sm={6}>
                            <CardContent >
                                <Typography noWrap gutterUp variant="h5" component="h2">
                                {post.title}
                                </Typography>
                                <Typography noWrap variant="body3" color="textPrimary" component="p">
                                {post.date} by {post.author}
                                </Typography>
                                <Typography variant="body3" color="textPrimary" component="p">
                                {post.body}
                                </Typography>
                                <div
                                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                                />
                            </CardContent>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>

        </Layout>        
    )
}

export const postQuery=graphql`
    query blogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
                author
                date(formatString: "MMM Do, YYYY")
                tags
                image {
                    childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default SinglePost