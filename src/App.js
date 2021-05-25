import { CssBaseline } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Header from './components/Header'
import LugarParaVisitar from './components/LugarParaVisitar'

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight:'100vh',
    // process.env.PUBLIC_URL e um atalho para chegar a pasta "public"
    backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}))


function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header/>
      <LugarParaVisitar/>
    </div>
  );
}

export default App;
