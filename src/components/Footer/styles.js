import { makeStyles } from "@material-ui/core";

const drawerWidth = 0;

export default makeStyles(() => ({
    footer: {
        padding: '5px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        backgroundImage: 'linear-gradient(to bottom right, #121212, #3d4a5d)',
        overflow: 'hidden',
        color: 'white',
        boxSizing: 'border-box',
        bottom: '0',
        left: '0',
        right: '0',
        position: 'absolute',
        zIndex: '3'
        }
}))