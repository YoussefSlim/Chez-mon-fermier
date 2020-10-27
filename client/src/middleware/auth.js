import axios from 'axios';
import { LOGIN, saveUser, LOGOUT, CHECK_IS_LOGGED } from 'src/actions/user';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      // ici on a une double destructuration
      // d'abord on destructure le state pour récupérer user
      // ensuite on déstructure user pour récupérer email et password
      const {
        user: { email, password },
      } = store.getState();
      axios
        .post(
          'http://localhost:5050/login',
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log('je suis dans logmidellware de login =>', store.getState());
          store.dispatch(saveUser(response.data.pseudo));
        })
        .catch((error) => console.log(error));

      break;

    case LOGOUT:
      // je me déconnecte en envoyant une requête
      // celle-ci va détruire la session côté server
      axios
        .post(
          'http://localhost:5050/login',
          {},
          {
            withCredentials: true,
          }
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      // je laisse passer l'action pour pouvoir la traiter dans mon reducer
      next(action);
      break;
    case CHECK_IS_LOGGED:
      axios
        .post(
          'http://localhost:5050/isLogged',
          {},
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          // je teste si la propriété logged de la réponse est à true
          // si oui je sauvegarde le pseudo
          if (response.data.logged) {
            store.dispatch(saveUser(response.data.pseudo));
          }
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default auth;
