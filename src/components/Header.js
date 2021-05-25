import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import SortIcon from '@material-ui/icons/Sort';
import { Link as Scroll} from 'react-scroll'


const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar:{
        background:'none'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1', // Vai criar a distância entre o titulo e o menu hamburguer
    },
    icon:{
        color:'#fff',
        fontSize:'2rem',
    },
    ColorText:{
        color: '#5AFF3D',
    },
    container:{
        textAlign: 'center',
    },
    title:{
        color:'#fff',
        fontSize: '4.5rem'
    },
    goDown:{
        color: '#5AFF3D',
        fontSize: '4rem',
    },
}))

const Header = () => {
    const classes = useStyles()

    // Esse useState e useEffect estão sendo usados para ativar o efeito de Collapse do titulo do meio
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true)
    }, [])

    // elevation e o valor da sombra
    // Collapse e o efeito de abrir ao carregar a página do titulo do meio 
    return ( 
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Minha<span className={classes.ColorText}>Ilha.</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Bem vindo a <br/> Minha <span className={classes.ColorText}>Ilha.</span>
                    </h1>

                    <Scroll to='place-to-visit' smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>

                </div>
            </Collapse>
        </div>
     );
}
 
export default Header;