import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { WriteAreviewButton } from './Components/WriteAReviewsButton';
import { RyugakupediaLogo } from './Components/RyugakupediaLogo.jsx'
import { UniversitiesSearchPage } from './Components/UniversitiesSearchPage';
import { CountriesSearchPage } from './Components/CountriesSearchPage';
import { Home } from './Components/Home';
import { Header } from './Components/Header';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



const App = () => {
  return(
    <>
    


   

    <Router>
      
     <Header/>

      
      <main>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '0' }}
      >
        <Link to="/">
          <Box m={3}>
            <Button variant="contained" color="primary">TOP</Button>
          </Box>
        </Link>
        <br/>
        <Link to="/UniversitiesSearchPage">
          <Box m={3}>
            <Button variant="contained" color="warning">大学名で検索</Button>
          </Box>
        </Link>
        <br/>
        <Link to="/CountriesSearchPage">
          <Box m={3}>
            <Button variant="contained" color="warning">国名で検索</Button>
          </Box>
        </Link>
  
   
      </Grid> 
       
        
       
      </main>
      
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/UniversitiesSearchPage" >
          <UniversitiesSearchPage />
        </Route>
        <Route path="/CountriesSearchPage" >
          <CountriesSearchPage />
        </Route>
      </Switch>
      
      
    </Router>

  
    </>
  );
}

export default App;
