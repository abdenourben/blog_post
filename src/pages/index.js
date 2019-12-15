import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import SidePost from "../components/SidePost"


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import { ThemeProvider } from '@material-ui/core/styles';
import "../styles/index.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9fa8da",
      dark: "#6f79a8",
      light: "#d1d9ff",
      contrastText: "#000"
    },
    secondary: {
      main: "#9e9e9e",
      dark: "#707070",
      light: "#cfcfcf",
      contrastText: "#fff"
    },
    
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paperTitleLatest: {
    textAlign: "center",
    padding: theme.spacing(2),
    width: "100%",
    marginTop: "20px",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
    borderRadius: "0px"
  },
  paperTitleSharepoint: {
    textAlign: "center",
    padding: theme.spacing(1),
    width: "100%",
    marginTop: "20px",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
    borderRadius: "0px"
  },
  paperLinks: {
    padding: theme.spacing(2),
    width: "100%",
    height: "100px",
    margin: "auto",
    marginTop: "20px",
    backgroundColor: "#cfcfcf",
    color: theme.palette.primary.contrastText,
    borderRadius: "0px"
  },
  grid: {
    width: "100%",
    margin: "auto"
  },
  gridPost: {
    width: "400px",
    margin: "auto",
    marginTop: 60,
    padding: theme.spacing(6),
    paddingTop: 0,
  },
  gridSide: {
    width: "90%",
    margin: "auto",
    marginTop: 70
  },
  headerTitle: {
    content: '',
    background: "rgba(0,0,0,0.12)",
    height: "1px",
    flex: "1",
    marginLeft: "1rem",
  }

}));




export default function IndexPage() {
  const classes = useStyles();

  function FormRow() {
    
    return (
      
      <React.Fragment>
        <Grid item xs={12} sm={12}>
          <StaticQuery query={indexQuery} render={data => {
                  return(
                    <div>
                        <SidePost
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
                      <SidePost
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
                      <SidePost
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
      </React.Fragment>
    );
  }

  return (
    <Layout>
    <SEO title="Home" />
        <Grid justify="center"   alignItems="flex-start" className={classes.grid} container>
          <Grid className={classes.gridPost} item xs={12} sm={9} spacing={3} >
            <StaticQuery query={indexQuery} render={data => {
              return(
                <div>
                  <div>
                    <h2>Latest posts</h2>
                  </div>
                  
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Post
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      date={node.frontmatter.date}
                      path={node.frontmatter.path}
                      body={node.excerpt}
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                      tags={node.frontmatter.tags}
                    />
                  ))}
                </div>
              )        
            }}/>     
          </Grid>
          <Grid className={classes.gridSide} item xs={12} sm={3} spacing={3} >
            <StaticQuery query={indexQuery} render={data => {
              return(
                <div>
                  <div>
                    <h4>SharePoint posts</h4>
                  </div>
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <SidePost
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      date={node.frontmatter.date}
                      path={node.frontmatter.path}
                      body={node.excerpt}
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  ))}
                </div>
              )        
            }}/>
          </Grid>
        </Grid>
    </Layout>

  );
}



const indexQuery=graphql`
  query {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC},
      filter: { frontmatter: { published: { eq: true } } },
      limit: 4
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM Do, YYYY")
            author
            path
            tags
            image{
              childImageSharp{
                fluid(maxWidth: 1200, maxHeight: 800){
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



