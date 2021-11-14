import { makeStyles, Theme } from '@material-ui/core';
import gray from '@material-ui/core/colors/grey';



export const useHomeStyles = makeStyles((theme: Theme) => ({
    // Стили левой боковой панели твиттер
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230,
    },
    logo: {

        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            transition: '0.2s',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 60,
            marginBottom: 10,
            '&:hover': {
                backgroundColor: 'rgba(29, 161, 242 , 0.1)',
                '& h6': {
                    color: theme.palette.primary.main
                },
                '& svg path': {
                    color: theme.palette.primary.main
                }
            }
        }
    },
    sideMenuListLabel: {
        fontWeight: 700,
        fontSize: '20px',
        marginLeft: 10
    },
    sideMenuListItemIcon: {
        fontSize: 30,
        marginLeft: '-5px'
    },
    wrapper: {
        height: '100vh'
    },



    // Стили по твитам  

    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0
    },
    tweetsHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeigth: 'bold'
        }
    },
    tweetsUserName: {
        color: gray[500],
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 450,
        position: 'relative',
        left: -14,
    },
    tweet: {
        cursor: 'pointer',
        paddingTop: 20,
        paddingLeft: 15,
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)'
        }
    }, tweetAvatar: {
        width: theme.spacing(6),
        height: theme.spacing(6)
    },
    tweetButton: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3)
    },
    tweetsCentred: {
        marginTop: 50,
        textAlign: 'center'
    },




    // Стили правой боковой панели твиттер

    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
    },


    // Стили чата и модалки

    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
        padding: '15px 0 0 15px'
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },

}))