import React from 'react';

import SearchIcon from '@material-ui/icons/SearchOutlined';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'
import { Container, Typography, InputAdornment, CircularProgress } from '@material-ui/core';

import { useHomeStyles } from './theme';


import { SideBar } from '../../components/SideBar';
import { AddTweetForm } from '../../components/AddTweetForm';
import { Tweet } from '../../components/Tweet';
import { SearchTextField } from '../../components/SearchTextField';



import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { isSelectTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';



export const Home = () => {
    const dispatch = useDispatch();
    const classes = useHomeStyles();
    const isLoading = useSelector(isSelectTweetsLoading);
    const tweets = useSelector(selectTweetsItems);

    React.useEffect(() => {
        dispatch(fetchTweets());
    }, [dispatch])
    return (
        <section>
            <Container className={classes.wrapper} maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <SideBar classes={classes} />
                    </Grid>
                    <Grid item xs={6}>
                        <Paper variant='outlined' className={classes.tweetsWrapper} >
                            <Paper variant='outlined' className={classes.tweetsHeader}>
                                <Typography variant='h6'>
                                    Главная
                                </Typography>
                            </Paper>
                            <AddTweetForm classes={classes} />
                            <div className={classes.addFormBottomLine} />
                            {
                                isLoading ? (
                                    <div className={classes.tweetsCentred}>
                                        <CircularProgress />
                                    </div>
                                )
                                    :
                                    (
                                        tweets.map((tweet) => (
                                            <Tweet key={tweet._id} text={tweet.text} user={tweet.user} classes={classes} />
                                        ))
                                    )}

                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.rightSide}>
                            <SearchTextField
                                variant="outlined"
                                placeholder="Поиск по Твиттеру"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                            />
                            <Paper className={classes.rightSideBlock}>
                                <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                    <b>Актуальные темы</b>
                                </Paper>
                                <List>
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemText
                                            primary="Санкт-Петербург"
                                            secondary={
                                                <Typography component="span" variant="body2" color="textSecondary">
                                                    Твитов: 3 331
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemText
                                            primary="#коронавирус"
                                            secondary={
                                                <Typography component="span" variant="body2" color="textSecondary">
                                                    Твитов: 163 122
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemText
                                            primary="Беларусь"
                                            secondary={
                                                <Typography component="span" variant="body2" color="textSecondary">
                                                    Твитов: 13 554
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                </List>
                            </Paper>
                            <Paper className={classes.rightSideBlock}>
                                <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                    <b>Кого читать</b>
                                </Paper>
                                <List>
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="https://images.unsplash.com/photo-1636795754444-fa5049b458f0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Dock Of Shame"
                                            secondary={
                                                <Typography component="span" variant="body2" color="textSecondary">
                                                    @FavDockOfShame
                                                </Typography>
                                            }
                                        />
                                        <Button color="primary">
                                            <PersonAddIcon />
                                        </Button>
                                    </ListItem>
                                    <Divider component="li" />
                                </List>
                            </Paper>
                        </div>

                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

