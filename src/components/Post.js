import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import "../styles/index.scss"

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
      contrastText: "#fff"
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
});

const useStyles = makeStyles({
  media: {
    width: "100%",
    maxHeight: "250px",
    minHeight: "10px",
  },
  button: {
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.contrastText,
  },
  card: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.primary.contrastText,
    boxShadow: "none",
    borderRadius: 0,
    marginBottom: "20px"
  }, 
  title: {
    fontSize: "1.5em",
  },
  content: {
    padding: "auto",
    paddingTop: 0,
  },
  chip: {
    backgroundColor: "pink",
    margin: 2,
    marginTop: 5
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  typography: {
    color: "#000",
    '&:hover': {
      color: "#00a1f1",
    }
  }
});

function Post({ title, author, date, slug, body, fluid, tags}) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card classes={{ root: classes.card }}>
          <Grid container  alignItems="stretch">
            <Grid item xs={12} sm={6}>
              <Img className={classes.media} fluid={fluid} />
            </Grid>
            <Grid direction="row" item xs={12} sm={6}>
              <CardHeader className={classes.header}
                avatar={
                  <Avatar alt={author} src="../images/author.jpg" />  
                }
                title={author}
                subheader={date}
              />
              <CardContent classes={{root: classes.content }} >
                <Link to={slug}>
                  <Typography classes={{root: classes.typography}} gutterUp variant="h5" component="h2">
                    {title}
                  </Typography>
                </Link> 
                  {tags.map(tag => (
                      <Chip size="small" classes={{root: classes.chip}} label={tag} />
                  ))}            
              </CardContent>
            </Grid>
          </Grid>
      </Card>
    </ThemeProvider>
  );
}

export default Post