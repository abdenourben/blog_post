import React from 'react';
import { Link } from 'gatsby';
//import { Card, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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

const useStyles = makeStyles({
  card: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.primary.contrastText,
    boxShadow: "none",
    borderRadius: 0,
    marginBottom: "30px"
  },
  media: {
    maxHeight: 240,
    //width: "50px",
  },
  content: {
    paddingTop: 2
  },
  typography: {
    color: "#000",
    '&:hover': {
      color: "#00a1f1",
    },
    fontSize: "1em", 
  }
});

export default function SidePost({ title, author, date, slug, body, fluid }) {
    const classes = useStyles();
  
    return (
      <ThemeProvider theme={theme}>
        <Card classes={{ root: classes.card }} >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Img fluid={fluid} />
            </Grid>
            <Grid direction="row" item xs={12} sm={6}>
              <CardContent classes={{ root: classes.content }}>
                <Link to={slug} >
                  <Typography classes={{root: classes.typography}} gutterUp variant="h5" component="h2">
                    {title}
                  </Typography>
                </Link>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </ThemeProvider>
    );
  }