import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import './Project.css';

const screenWidth = window.screen.width;

const styles = makeStyles({
    regText: {
        color: 'white',
        fontWeight: 'normal',
        fontSize: '19px',
    },

    root: {
        width: props => props.width,
        backgroundColor: 'AliceBlue',
    },

    media: {
        height: 280,
    },

    description: {
        fontSize: '12px',
    },

    btnTxt: {
        fontSize: '10px',
    }
});

const Project = ({ imgLink, title, description, githubLink, projLink }) => {
    const props = { width: screenWidth <= 480 ? 350 : 400 };

    const classes = styles(props);

    return (
        <Card classes={{
            root: classes.root,
        }}>
            <CardActionArea href={projLink} target="_blank">
                <CardMedia
                    className={classes.media}
                    image={imgLink}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={classes.btnTxt} size="small" color="primary" href={githubLink} target="_blank">
                    View code
                    </Button>
            </CardActions>
        </Card>
    );
}


export default Project;
