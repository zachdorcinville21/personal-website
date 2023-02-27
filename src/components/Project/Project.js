import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';

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
        backgroundColor: '#36454f',
    },

    media: {
        height: 280,
    },

    title: {
        color: '#fff',
    },

    description: {
        fontSize: '12px',
        color: '#fff',
    },

    btnTxt: {
        fontSize: '10px',
        color: '#fff',
    },

    cardContent: {
        textAlign: 'left',
    }
});

const Title = styled.h5`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const Desc = styled.p`
    font-size: 16px;
    color: #fff;
    margin: 0;
`;

const ViewCode = styled.a`
    color: #fff;
    margin: 0;
    font-size: 10px;
    text-decoration: none;
    text-transform: uppercase;
`;

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
                <CardContent className={classes.cardContent}>
                    <Title>
                        {title}
                    </Title>
                    <Desc>
                        {description}
                    </Desc>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ViewCode href={githubLink} target="_blank">
                    View code
                </ViewCode>
            </CardActions>
        </Card>
    );
}


export default Project;
