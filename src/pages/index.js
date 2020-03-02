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
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';



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
  grid: {
    //maxWidth: "1400px",
    height: "100%",
    //background: "red",
    //margin: "auto",
    padding: "20px"
  },
  gridPost: {
    margin: "auto",
    marginTop: 70,
    //background: "blue",
    maxWidth: "1200px", 
    //maxHeight: "600px", 
    minWidth: "300px",
  },
  gridSide: {
    width: "90%",
    margin: "auto",
    marginTop: 130
  },
  headerTitle: {
    content: '',
    height: "1px",
    flex: "1",
    marginLeft: "1rem",
  }

}));

export default function IndexPage(props) {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
        <Grid className={classes.grid} container>
          <Grid className={classes.gridPost} item xs={12} spacing={3} >
            <StaticQuery query={indexQuery} render={data => {
              return(
                <div>
                  <div>
                    <h2>LATEST POSTS</h2>
                  </div>
                  <br/>
                  
                  {data.allMarkdownRemark.edges.map(({ node }) => (

                    <Post
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      date={node.frontmatter.date}
                      slug={node.fields.slug}
                      body={node.excerpt}
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                      tags={node.frontmatter.tags}
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
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
            tags
            image{
              childImageSharp{
                fluid(maxWidth: 1200, maxHeight: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`



