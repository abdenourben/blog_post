import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Card, Grid, CardActionArea, CardContent, Typography, Paper } from '@material-ui/core'
import { slugify } from '../util/utilityFunctions'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';



const theme = createMuiTheme({
    typography: {
      fontFamily: 
  
        '"Segoe UI"',
       
    },
  });

const useStyles = makeStyles({
    paper: {
        marginLeft: 0,
        padding: "30px",
        paddingLeft: 0,
        paddingRight: 0,
        //maxWidth: "800px",
        margin: "auto",
        minWidth: "100px",
        backgroundColor: "#131217"
    }, 
    typographie: {
        color: "#E2E8F0",
        padding: "0.5em",
        paddingLeft: 0
    }, 
    principal: {
        textDecorationColor: "#E2E8F0",
    },
    div: {
        marginTop: "60px",
        maxWidth: "1200px", 
        margin: "auto",
        background: "bleu"
    },
    paper2: {
        background: "#1A202C",
        //width: "100%", 
        //height: "200px",
        padding: 0,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    }, 
    title: {
        //background: "red"
    },
    grid: {
        minWidth: "500px",
        [theme.breakpoints.up('sm')]: {
            width: '1210px',
          },
    },
    related: {
        padding: "15px",
        paddingBottom: 0,
        fontSize: "1em"
    },
    relatedItems: {
        padding: "10px"
    }
})



const SinglePost = ({ data }) => {
    const classes = useStyles()
    const post = data.markdownRemark.frontmatter

    return (
        <ThemeProvider theme={theme}>

        <Layout>
            <SEO title={post.title} />

            <div className={classes.div}>
            <Grid container>
                <Grid item xs={12} sm={9}>
                    <Paper classes={{ root:classes.paper }} >
                        <div>
                            <div>
                                <Typography classes={{root: classes.title}} gutterUp variant="h3" component="h2">
                                    {post.title}
                                </Typography>
                            </div>
                            <div>
                            <Typography classes={{ root:classes.typographie }} noWrap variant="body3" component="p">
                                {post.date} by {post.author}
                                </Typography>
                                <Grid container spacing={3} classes={{root: classes.grid}}>
                                    <Grid item xs={12} sm={9}>
                                        <Img fluid={post.image.childImageSharp.fluid} />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Paper classes={{root: classes.paper2}}>
                                        <Typography classes={{root: classes.related}} variant="h6" component="h2">
                                        RELATED TUTORIALS
                                        </Typography>
                                            <MenuList>
                                                <Typography className={classes.relatedItems}>Method to get term URL in taxonomy in SharePoint TermStore using PnP JS library</Typography>
                                                <Typography className={classes.relatedItems}>Sharepoint online List title with multiple lines</Typography>
                                                <Typography className={classes.relatedItems}>Error retrieving items from large list, although the CAML query has a row limit</Typography>
                                            </MenuList>
                                        </Paper>
                                    </Grid>

                                </Grid>
                            </div>
                            <br/>
                            <div> 
                                <br/>
                                <Typography classes={{ root:classes.typographie }} variant="body3" component="p">
                                {post.body}
                                </Typography>
                                <div classes={{ root:classes.principal }}
                                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                                />
                            </div>
                        </div>
                </Paper>
                </Grid>
            </Grid>
            
            
            </div>

        </Layout> 
        </ThemeProvider>       
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
                date(formatString: "MMMM DD, YYYY")
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