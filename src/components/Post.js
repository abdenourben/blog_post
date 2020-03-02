import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import AccessTimeIcon from '@material-ui/icons/AccessTime';




import "../styles/index.scss"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#182534",
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
  },

  typography: {
    fontFamily: 

      '"Segoe UI"',
     
  },
});

const useStyles = makeStyles({
  button: {
    color: "#131217",
    backgroundColor: "#fff",
    margin: "auto",
    marginLeft: "0.5em",
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  card: {
    margin: "auto", 
    backgroundColor: "#131217",
    color: "#182534",
    boxShadow: "none",
    borderRadius: 0,
    marginBottom: "35px"
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
    color: "#E2E8F0",
    marginTop: "0.2em",
    fontSize: "2em",
  }, 
  typographyT: {
    //marginTop: "120px", 
    color: "#E2E8F0",
  }, 
  gridInfo: {
    height: "275px",
    minHeight: "200px", 
    //background: "red"
  }, 
  header: {
    color: "#A0AEC0", 
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 0
  },
  subheader: {
    color: "#A0AEC0",
    marginLeft: "-.9em",
    marginTop: ".3em",
    fontSize: ".9rem"
  }
});

function Post({ title, author, date, slug, body, fluid, tags}) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card classes={{ root: classes.card }}>
          <Grid container alignItems="stretch" >
              
            <Grid item xs={12} sm={7} >
              <Img  fluid={fluid} />
            </Grid>
            <Grid wrap="nowrap" item direction="row" item xs={12} sm={5} >
            <CardHeader className={classes.header} classes={{subheader: classes.subheader}}
            avatar={
              <AccessTimeIcon fontSize="small"/>
            }
            subheader={date}
          />
              <div className={classes.gridInfo}>
              <Link to={slug}>
              <CardContent classes={{root: classes.content }} >
                
                  <Typography classes={{root: classes.typography}} gutterUp variant="h4" component="h2">
                    {title}
                  </Typography>
                 
                <br/>
                  <Typography classes={{root: classes.typographyT}}>
                    {body}
                  </Typography> 
              </CardContent>
              </Link>         
              </div>
              <CardActions disableSpacing>
                <Link to={slug}><Button classes={{root: classes.button}} variant="contained"  size="small">Learn More</Button></Link> 
              </CardActions>
            </Grid>
          
          </Grid>
      </Card>
    </ThemeProvider>
  );
}

export default Post