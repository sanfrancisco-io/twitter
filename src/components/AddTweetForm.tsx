import React from 'react';


import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import classNames from 'classnames';
import { Avatar, Button, Paper } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';





interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}


export const AddTweetForm: React.FC<AddTweetFormProps> =
    ({ classes, maxRows }: AddTweetFormProps): React.ReactElement => {


        const MAX_LENGTH = 280;
        const [text, setText] = React.useState<string>('');
        const textLimitPercent = Math.round((text.length / 280) * 100);
        const textCount = MAX_LENGTH - text.length;
        console.log(textLimitPercent, text.length);

        const handleChangeTextare = (e: React.FormEvent<HTMLTextAreaElement>): void => {
            if (e.currentTarget) {
                setText(e.currentTarget.value);
            }
        };

        const handleClickAddTweet = (): void => {
            setText('');
        };

        return (
            <>
                <Paper>
                    <div>
                        <div className={classes.addFormBody}>
                            <Avatar
                                className={classes.tweetAvatar}
                                alt={`Аватарка пользователя UserAvatar`}
                                src="https://images.unsplash.com/photo-1636653831028-2f0c79190659?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            />
                            <TextareaAutosize
                                onChange={handleChangeTextare}
                                className={classes.addFormTextarea}
                                placeholder="Что происходит?"
                                value={text}
                                rowsMax={maxRows}
                            />
                        </div>
                        <div className={classes.addFormBottom}>
                            <div className={classNames(classes.addFormBottomActions)}>
                                <IconButton color="primary">
                                    <ImageOutlinedIcon style={{ fontSize: 26 }} />
                                </IconButton>
                                <IconButton color="primary">
                                    <EmojiIcon style={{ fontSize: 26 }} />
                                </IconButton>
                            </div>
                            <div className={classes.addFormBottomRight}>
                                {text && (
                                    <>
                                        <span>{textCount}</span>
                                        <div className={classes.addFormCircleProgress}>
                                            <CircularProgress
                                                variant="static"
                                                size={20}
                                                thickness={5}
                                                value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                                style={text.length >= MAX_LENGTH ? { color: 'red' } : undefined}
                                            />
                                            <CircularProgress
                                                style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                                                variant="static"
                                                size={20}
                                                thickness={5}
                                                value={100}
                                            />
                                        </div>
                                    </>
                                )}
                                <Button
                                    onClick={handleClickAddTweet}
                                    disabled={text.length >= MAX_LENGTH}
                                    color="primary"
                                    variant="contained">
                                    Твитнуть
                                </Button>
                            </div>
                        </div>
                    </div>
                </Paper>
            </>
        );
    };

