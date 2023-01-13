import { makeStyles } from "@material-ui/core";


export default makeStyles(() => ({
    banner: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        color: '#fff',
        margin: 0,
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
        fontSize: '5rem',
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