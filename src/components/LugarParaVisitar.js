import React from "react";
import {makeStyles} from '@material-ui/core/styles'
import ImageCard from "./ImageCard";
import places from '../static/places'
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // Funciona como um mediaquery, o md e para telas de 960px
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
        },
    },
}))

const LugarParaVisitar = () => {

    const classes = useStyles()
    const checked = useWindowPosition('header');

    // Componente ImageCard e um componente externo
    return ( 
        <div className={classes.root} id='place-to-visit'>
            <ImageCard place={places[1]} checked={checked}/>
            <ImageCard place={places[0]} checked={checked}/>
        </div>
     );
}
 
export default LugarParaVisitar;