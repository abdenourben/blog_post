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
import Grid from '@material-ui/core/Grid';


import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import { ThemeProvider } from '@material-ui/core/styles';

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
  },
});

const useStyles = makeStyles({
  card: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    boxShadow: "none",
    borderRadius: 0,
    marginBottom: "30px"
  },
  media: {
    maxHeight: 240,
    //width: "50px",
  },
  button: {
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.light,
  },
  content: {
    paddingTop: 2
  }
});

export default function SidePost({ title, author, date, slug, body, fluid }) {
    const classes = useStyles();
  
    return (
      <ThemeProvider theme={theme}>
  
  <Card classes={{ root: classes.card }} >
        <CardActionArea>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Img fluid={fluid} />
            </Grid>
            <Grid direction="row" item xs={12} sm={6}>
              <CardContent classes={{ root: classes.content }}>
                <Link to={slug} >
                <Typography gutterUp>
                  {title}
                </Typography>
                </Link>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
      </ThemeProvider>
  
    );
  }