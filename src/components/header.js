import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { ThemeProvider } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00a1f1",
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
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header(props) {
  const classes = useStyles();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  ) 
  
  return (
    <div className={classes.grow}>
      <ThemeProvider theme={theme}>
      <HideOnScroll {...props}>
        <AppBar color="primary" position="fixed">
          <Toolbar>
            <Link to={'/'}>
              <Typography  className={classes.title} variant="h6" noWrap>
                {site.siteMetadata.title}
            </Typography>
            </Link>         
            <div className={classes.grow} />
            <Link to={"/team"}>
              <Button>Team</Button>
            </Link>
            <Link to={'/tags'}>
              <Button>Tags</Button>
            </Link>
            <Link to={'/about'}>
              <Button>About</Button>
            </Link>       
          </Toolbar>
        </AppBar>
        </HideOnScroll>
      </ThemeProvider>
    </div>
  );
}