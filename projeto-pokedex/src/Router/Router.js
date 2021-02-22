import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import ErrorPage from "../Screens/ErrorPage/ErrorPage";
import HomePage from "../Screens/HomePage";
import PokedexPage from "../Screens/PokedexPage";
import PokemonDetailsPage from "../Screens/PokemonDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />  
          <HomePage />
        </Route>
        <Route exact path="/pokedex">
          <Header />
          <PokedexPage />
        </Route>
        <Route exact path="/pokemon-details/:id">
          <PokemonDetailsPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;


