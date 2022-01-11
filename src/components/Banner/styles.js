import { makeStyles } from "@material-ui/core";


export default makeStyles(() => ({
    banner: {
        paddingTop: '120px',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#21262d',
        backgroundImage: 'linearGradient(to bottom right, #121212, #3d4a5d)',
        color: '#fff',
    },
    brand: {
        display: 'flex',
        alignItems: 'center',
    },
    img: {
        width: '100%'
    },
    title: {
        fontSize: '45px',
        marginBottom: '20px',
        fontFamily: 'Roboto, sans-serif'
    },
    shoppingButton: {
        color: '#45f',
        backgroundColor: '#ffbf00'
    },
    
    
}))