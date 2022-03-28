import { makeStyles } from "@material-ui/core";


export default makeStyles(() => ({
    banner: {
        paddingTop: '10px',
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
        justifyContent: 'center'
    },
    img: {
        width: '100%'
    },
    title: {
        fontSize: '60px',
        marginBottom: '20px',
        fontFamily: 'Roboto, sans-serif',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shoppingButton: {
        color: '#45f',
        backgroundColor: '#ffbf00',
        textAlign: 'center'
    },
    
    
}))