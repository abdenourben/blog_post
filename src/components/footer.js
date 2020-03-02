import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    footer: {
        background: "#1A202C",
        padding: "32px",
        color: "#fff",
        marginTop: "40px",
    },
    socialMedia: {
        float: "right",
        marginRight: "5px",
        marginTop: "-5px",
        '&:hover': {
            color: "#d5d5d5",
          },
    },
    div: {
        maxWidth: "1200px",
        margin: "auto"
    }
}));

function Footer() {

    const classes = useStyles(); 

    return (
        <footer className={classes.footer} >
            <div className={classes.div}>
                © {new Date().getFullYear()} AB Square
                {` `}
                
                <Link href="https://www.facebook.com/abdenour.bentouati.58" color="inherit">
                    <FacebookIcon fontSize="large" className={classes.socialMedia} />
                </Link>
                <Link href="https://www.linkedin.com/in/bentouati-abdenour/" color="inherit">
                    <LinkedInIcon fontSize="large" className={classes.socialMedia} />
                </Link>
                <Link href="https://github.com/abdenourben" color="inherit">
                    <GitHubIcon fontSize="large" className={classes.socialMedia} />
                </Link>
            </div>
        </footer>
    );
}

export default Footer