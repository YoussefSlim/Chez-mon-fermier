import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from 'src/actions/recipes';

const recipes = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      console.log('lancement de la requete');
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveRecipes(response.data));
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};