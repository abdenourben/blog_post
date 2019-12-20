import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Card, Grid, CardActionArea, CardContent, Typography, Paper } from '@material-ui/core'
import { slugify } from '../util/utilityFunctions'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    paper: {
        padding: "30px",
        maxWidth: "900px",
        margin: "auto",
        minWidth: "100px"
    }
})



const SinglePost = ({ data }) => {
    const classes = useStyles()
    const post = data.markdownRemark.frontmatter

    return (
        <Layout>
            <SEO title={post.title} />

            <Paper classes={{ root:classes.paper }} >
                    <div>
                        <div>
                            <Typography gutterUp variant="h3" component="h2">
                                {post.title}
                            </Typography>
                        </div>
                        <div>
                            <Img fluid={post.image.childImageSharp.fluid} />
                        </div>
                        <div>
                            <Typography noWrap variant="body3" color="textPrimary" component="p">
                            {post.date} by {post.author}
                            </Typography>
                            <Typography variant="body3" color="textPrimary" component="p">
                            {post.body}
                            </Typography>
                            <div
                            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                            />
                        </div>
                    </div>
            </Paper>

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