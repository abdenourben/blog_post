import React from 'react';
import { Link } from 'gatsby';
//import { Card, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';
import Img from 'gatsby-image';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';


import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { borders } from '@material-ui/system';
import { shadows } from '@material-ui/system';
import "../styles/index.scss"



// All the following keys are optional, as default values are provided.
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
    backgroundColor: theme.palette.secondary.light,
  },
  card: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    boxShadow: "none",
    borderRadius: 0,
    marginBottom: "20px"
  }, 
  title: {
    fontSize: "2em"
  },
  content: {
    paddingTop: 2
  },
  chip: {
    backgroundColor: "pink",
    margin: 2,
    marginTop: 10

  }
});

function Post({ title, author, date, slug, body, fluid, tags }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card classes={{ root: classes.card }}>
          <Grid container  alignItems="stretch">
            <Grid item xs={12} sm={6}>
              <Img className={classes.media} fluid={fluid} />
            </Grid>
            <Grid direction="row" item xs={12} sm={6}>
              <CardContent classes={{root: classes.content }} >
              <CardActionArea>
              <Link to={slug}>
                <Typography classes={{ root: classes.title }} noWrap gutterUp variant="h5" component="h2">
                  {title}
                </Typography>
              </Link>
              </CardActionArea>
                <Typography noWrap variant="body3" color="textPrimary" component="p">
                  {date} by {author}
                </Typography>
                <Typography variant="body3" color="textPrimary" component="p">
                  {body}
                </Typography>
                
                  {tags.map(tag => (
                      <Chip classes={{root: classes.chip}} label={tag} />
                  ))}
                
              </CardContent>
            </Grid>
          </Grid>
      </Card>
    </ThemeProvider>

  );
}

export default Post