import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../Footer/footer.css'


const Footer = () => {
    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: 'white',
            backgroundColor : '#2c3e50'
        },
    }));
    const classes = useStyles();

    return (
        
        <div  >
           
        </div>
    )
}
export default Footer;