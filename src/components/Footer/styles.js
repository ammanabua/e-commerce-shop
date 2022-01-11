import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    footer: {
        width: '100%',
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
    }
}))