import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9fa8da",
      dark: "#6f79a8",
      light: "#d1d9ff",
    },
    secondary: {
      main: "#9e9e9e",
      dark: "#707070",
      light: "#cfcfcf",
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(7),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    //color: theme.palette.primary,
    width: "90%",
    margin: "auto",
    marginTop: "20px",
    //height: 1000,
    //backgroundColor: "pink",
    //backgroundColor: theme.palette.primary.light,
    //color: theme.palette.primary.contrastText,
  },
  paperTitle: {
    padding: theme.spacing(2),
    textAlign: 'center',
    //color: theme.palette.primary,
    width: "90%",
    margin: "auto",
    marginTop: "20px",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
}));




export default function IndexPage() {
  const classes = useStyles();

  function FormRow() {
    
    return (
      
      <React.Fragment>
        <Paper className={classes.paperTitle}>SharePoint Posts</Paper>
        <Grid item xs={12} sm={12}>
          <StaticQuery query={indexQuery} render={data => {
                  return(
                    <div>
                        <Post
                          body={data.allMarkdownRemark.edges[3].node.excerpt}
                          title={data.allMarkdownRemark.edges[3].node.frontmatter.title}
                          author={data.allMarkdownRemark.edges[3].node.frontmatter.author}
                          date={data.allMarkdownRemark.edges[3].node.frontmatter.date}
                          path={data.allMarkdownRemark.edges[3].node.frontmatter.path}
                          fluid={data.allMarkdownRemark.edges[3].node.frontmatter.image.childImageSharp.fluid}
                        />
                    </div>
                      )
                }}/>        
        </Grid>
        <Grid item xs={12} sm={12}>
          <StaticQuery query={indexQuery} render={data => {
                return(
                  <div>
                      <Post
                        body={data.allMarkdownRemark.edges[3].node.excerpt}
                        title={data.allMarkdownRemark.edges[3].node.frontmatter.title}
                        author={data.allMarkdownRemark.edges[3].node.frontmatter.author}
                        date={data.allMarkdownRemark.edges[3].node.frontmatter.date}
                        path={data.allMarkdownRemark.edges[3].node.frontmatter.path}
                        fluid={data.allMarkdownRemark.edges[3].node.frontmatter.image.childImageSharp.fluid}
                      />
                  </div>
                    )
              }}/>
        </Grid>
        <Grid item xs={12} sm={12}>
          <StaticQuery query={indexQuery} render={data => {
                return(
                  <div>
                      <Post
                        body={data.allMarkdownRemark.edges[3].node.excerpt}
                        title={data.allMarkdownRemark.edges[3].node.frontmatter.title}
                        author={data.allMarkdownRemark.edges[3].node.frontmatter.author}
                        date={data.allMarkdownRemark.edges[3].node.frontmatter.date}
                        path={data.allMarkdownRemark.edges[3].node.frontmatter.path}
                        fluid={data.allMarkdownRemark.edges[3].node.frontmatter.image.childImageSharp.fluid}
                      />
                  </div>
                    )
              }}/>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow2() {
    return (
      <React.Fragment>
        <Paper className={classes.paper}>Latest Posts</Paper>
        <Grid item xs={12} sm={12}>
          <StaticQuery query={indexQuery} render={data => {
              return(
                <div>
                    <Post
                      body={data.allMarkdownRemark.edges[0].node.excerpt}
                      title={data.allMarkdownRemark.edges[0].node.frontmatter.title}
                      author={data.allMarkdownRemark.edges[0].node.frontmatter.author}
                      date={data.allMarkdownRemark.edges[0].node.frontmatter.date}
                      path={data.allMarkdownRemark.edges[0].node.frontmatter.path}
                      fluid={data.allMarkdownRemark.edges[0].node.frontmatter.image.childImageSharp.fluid}
                    />
                </div>
                  )
            }}/>        
        </Grid>
        <Grid item xs={12} sm={6}>
          <StaticQuery query={indexQuery} render={data => {
            return(
              <div>
                  <Post
                    body={data.allMarkdownRemark.edges[0].node.excerpt}
                    title={data.allMarkdownRemark.edges[0].node.frontmatter.title}
                    author={data.allMarkdownRemark.edges[0].node.frontmatter.author}
                    date={data.allMarkdownRemark.edges[0].node.frontmatter.date}
                    path={data.allMarkdownRemark.edges[0].node.frontmatter.path}
                    fluid={data.allMarkdownRemark.edges[0].node.frontmatter.image.childImageSharp.fluid}
                  />
              </div>
                )
            }}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StaticQuery query={indexQuery} render={data => {
            return(
              <div>
                  <Post
                    body={data.allMarkdownRemark.edges[0].node.excerpt}
                    title={data.allMarkdownRemark.edges[0].node.frontmatter.title}
                    author={data.allMarkdownRemark.edges[0].node.frontmatter.author}
                    date={data.allMarkdownRemark.edges[0].node.frontmatter.date}
                    path={data.allMarkdownRemark.edges[0].node.frontmatter.path}
                    fluid={data.allMarkdownRemark.edges[0].node.frontmatter.image.childImageSharp.fluid}
                  />
              </div>
                )
            }}/>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <Layout>
    <SEO title="Home" />
      <Paper className={classes.paper}>
      <ThemeProvider theme={theme} >
        <Grid color="primary" container spacing={4}>
          <Grid container justify="flex-start" alignItems="flex-start" item xs={12} sm={9} spacing={2}>
            <FormRow2 />
          </Grid>
          <Grid container direction="row" justify="flex-start" alignItems="flex-end" item xs={12} sm={3} spacing={2}>
            <FormRow />
          </Grid>
        </Grid>
        </ThemeProvider>

      </Paper>
    </Layout>

  );
}



const indexQuery=graphql`
  query {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC},
      filter: { frontmatter: { published: { eq: true } } }
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM Do, YYYY")
            author
            path
            image{
              childImageSharp{
                fluid(maxWidth: 1200, maxHeight: 500){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`



