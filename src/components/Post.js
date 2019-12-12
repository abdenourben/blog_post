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
    maxWidth: 1200,
    minWidth: 100,
    minHeight: 300,
    //maxHeight: 400,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  media: {
    maxHeight: 240,
  },
  button: {
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.light,
  }
});

export default function Post({ title, author, date, path, body, fluid }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>

    <Card className={classes.card}>

      <CardActionArea>
        <CardMedia 
          //image={fluid}
          title={title}
        />
        <Img fluid={fluid} />

        <CardContent>
          <Typography noWrap gutterUp variant="h5" component="h2">
            {title}
          </Typography>
          <Typography noWrap variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
          <Typography noWrap variant="body3" color="textPrimary" component="p">
            {date} by {author}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>

        <Button className={classes.button} size="large">
          Share
        </Button>

        <Button className={classes.button} size="large">
          Read
        </Button>
      </CardActions>
    </Card>
    </ThemeProvider>

  );
}