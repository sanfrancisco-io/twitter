import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import { Button, IconButton, Typography, } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';
import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';


interface sideBarProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideBar: React.FC<sideBarProps> = ({ classes }: sideBarProps): React.ReactElement => {

    const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false)
    const handleOpenAddTweet = () => {
        setVisibleAddTweet(true);
    }
    const handleCloseAddTweet = () => {
        setVisibleAddTweet(false);
    }


    return (
        <div>
            <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuListItem}>
                    <IconButton className={classes.logo} aria-label='delete' color='primary'>
                        <TwitterIcon className={classes.logoIcon} />
                    </IconButton>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <SearchIcon className={classes.sideMenuListItemIcon} />
                        <Typography className={classes.sideMenuListLabel} variant='h6'>
                            Поиск
                        </Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <NotificationsNoneIcon className={classes.sideMenuListItemIcon} />
                        <Typography className={classes.sideMenuListLabel} variant='h6'>
                            Уведомление
                        </Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <MailOutlineIcon className={classes.sideMenuListItemIcon} />
                        <Typography className={classes.sideMenuListLabel} variant='h6'>
                            Соощение
                        </Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <BookmarkBorderIcon className={classes.sideMenuListItemIcon} />
                        <Typography className={classes.sideMenuListLabel} variant='h6'>
                            Закладки
                        </Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <ListAltIcon className={classes.sideMenuListItemIcon} />
                        <Typography className={classes.sideMenuListLabel} variant='h6'>
                            Список
                        </Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <PermIdentityIcon className={classes.sideMenuListItemIcon} />
                        <Typography className={classes.sideMenuListLabel} variant='h6'>
                            Профиль
                        </Typography>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <Button
                        onClick={handleOpenAddTweet}
                        className={classes.tweetButton}
                        variant='contained'
                        color='primary'
                        fullWidth
                    >Твитнуть</Button>
                    <ModalBlock onClose={handleCloseAddTweet} visible={visibleAddTweet} title=''>
                        <div style={{ width: 550 }}>
                            <AddTweetForm maxRows={15} classes={classes} />
                        </div>
                    </ModalBlock>
                </li>
            </ul>
        </div>
    );
};
