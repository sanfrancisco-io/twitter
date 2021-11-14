import React from 'react';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import classnames from 'classnames'
import { IconButton, Typography, Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useHomeStyles } from '../pages/Home/theme';


interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}
export const Tweet: React.FC<TweetProps> = ({ text, user, classes }: TweetProps): React.ReactElement => {
    return (
        <div>
            <Paper variant='outlined' className={classnames(classes.tweet, classes.tweetsHeader)}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar className={classes.tweetAvatar} alt="Аватарка пользователя" src={user.avatarUrl} />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography>
                            <b>{user.fullname} </b>
                            <span className={classes.tweetsUserName}>@{user.username} </span>
                            <span className={classes.tweetsUserName}>
                                &#183;</span>
                            <span className={classes.tweetsUserName}>1 ч</span>
                        </Typography>
                        <Typography>
                            {text}
                        </Typography>
                        <div className={classes.tweetFooter}>
                            <div>
                                <IconButton color='primary'>
                                    <CommentIcon style={{ fontSize: 22 }} />
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton color='primary'>
                                    <RepostIcon style={{ fontSize: 22 }} />
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton color='primary'>
                                    <LikeIcon style={{ fontSize: 22 }} />
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton color='primary'>
                                    <ShareIcon style={{ fontSize: 22 }} />
                                </IconButton>
                                <span>1</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};
