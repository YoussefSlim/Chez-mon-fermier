# Présentation et objectifs du projet:
La genèse du projet est née suite à une volonté de consommer des aliments produits localement, dans un souci économique, dans une période sanitaire compliquée, et de manger mieux et plus responsable.

De ce fait, il est venu à l’idée du créateur du projet, de vouloir sensibiliser les gens sur trois grands objectifs : 
- 1-Manger mieux, en consommant des produits de meilleures qualités, et économiquement intéressant. 
- 2-Soutenir l’agriculture française qui traverse une crise très importante.
- 3-Faire un geste pour la planète, en limitant la pollution liée au transport, en consommant des produits qui n’auront pas fait le tour de la planète, avant d’arriver dans notre assiette.

#### Mais comment mettre en place un tel projet seul? Qu’à cela ne tienne !

Cela tombe bien, nous avons un projet de fin d’études à présenter, et pourquoi pas transformer cette utopie en réalité!
L’idée du projet est donc la suivante : 

- 1)Proposer une plateforme qui permet aux clients de consommer des produits alimentaires, provenant de producteurs locaux, fraîchement sortis de la ferme.
- 2)Permettre aux producteurs de faire connaître leurs produits aux plus      grands nombre, tout en tirant un revenu supplémentaire, hors circuit classique.
- 3)Ré-éduquer et sensibiliser les gens autour de ces nobles valeurs: “de la terre à l’assiette”. 

Nous allons donc créer une plateforme e-commerce axée marketplace, sur laquelle les producteurs pourront proposer à la vente leurs produits, à des clients locaux, qui pourront soit récupérer leur commande chez le producteur, soit être livrés par ce dernier.

# Les fonctionnalités du projet

## 21) Version n°1 du projet (MVP)

### Pour un visiteur/client

- Créer/modifier son compte client
- Consulter les producteurs locaux grâce à une page contenant un formulaire de recherche par département(cf wireframes page search-vendors)
- Consulter le catalogue de produit des vendeurs suite à une recherche
- Consulter une fiche produit dans son ensemble
- Consulter la fiche descriptive d’un vendeur
- Ajouter un produit au panier
- Après avoir ajouter un produit au panier, une modal lui propose soit de se rendre dans son panier, soit de continuer ses achats
- Pouvoir avoir encore accès à son panier sous un certain délai(temps de réflexion, etc…)
- Pouvoir contacter par message privé le vendeur, ou le service client
- Se rendre dans le panier et modifier son contenu(ajout, modification quantité, suppression du produit du panier)
- Enclencher le tunnel d’achat, en renseignant ou validant les coordonnées de livraison, ou de retrait.
- Sélectionner le moyen de paiement, puis se rendre dessus grâce à un tunnel sécurisé.
- Pouvoir valider son paiement, puis être redirigé vers la page de validation de la commande.
- Pouvoir se rendre dans son espace client
- Pouvoir consulter la page “mes commandes”, contenant l’historique de ses commandes, ainsi que le détail de la commande choisie.
 
### Pour un producteur/vendeur

- Créer/modifier son compte vendeur
- Pouvoir accéder à son espace administration de son catalogue, depuis son espace vendeur
- Ajouter/modifier/supprimer une famille de produit
- Ajouter/modifier/supprimer un produit
- Pouvoir consulter une liste des commandes reçues(genre dashboard)
 
### Pour les super-admin

- Avoir un espace d’administration
- Ajouter/Valider/Modifier/Supprimer un vendeur/client
- Valider/Modifier/Supprimer une commande
- Consulter la listes des commandes en cours
  
## 22) Version n°2 du projet

### Pour un visiteur/client

- rendre les produits accessible pour plus tard “mettre de côté”
- pouvoir mettre produit / producteur en favoris
- pouvoir noter les vendeurs
- pouvoir noter chaque produits après l’achat et la réception de celui-ci

### Pour les vendeur/producteurs

- Pouvoir s'inscrire directement par le biais du site internet, à travers un formulaire d'inscription personnalisé
- Pouvoir répondre aux messages des clients, et les contacter
- Pouvoir contacter le service client depuis son espace vendeur

### Pour les super-admin

- Annuler une commande
- Pouvoir accéder à une plateforme internet regroupant toutes les demandes sav en cours
- Pouvoir répondre depuis l'espace admin à un client/vendeur
- Pouvoir désactiver/activer temporairement un produit
- Pouvoir répondre aux messages des clients, et les contacter
- Pouvoir contacter un client ou un vendeur depuis son espace admin
- Avoir un espace admin(back-office) externe au front du site
- Pouvoir consulter un dashboard avec les statistiques du site
- Avoir une page “Service Client” ou “SAV” pour voir tous les messages venant des clients ou des vendeurs.
- Avoir une page permettant de gérer les utilisateurs du site 
 
## 23) Version n°3 du projet:

Déploiement d’une app mobile
 
# 3)Liste des technologies utilisées

## 31) Front-end(côté client)

Nous utiliserons :

- Html - css
- Bootstrap
- ReactJs, React- Redux
- Npm Js
- Axios
- Sass
 
## 32) Back-end(côté serveur)

Au niveau du langage nous utiliserons javascript grâce au framework Node.js et les packages suivant : 

- Express
- pg
- dotenv
- bcrypt
- email-validator
- cors
- sanitizer
- ejs(pour le backoffice)
- cookie-parser
- express-session
- multer

### Pour la partie BDD

- PostgreSql


# 4) Le serveur localhost

Côté back, nous utiliserons le serveur ```http://localhost:5050```
Pour lancer le projet, il suffit de faire ```npm i```, puis de taper la commande ```nodemon run dev``` dans le terminal (bien vérifier que l'on se trouve dans le dossier du repo)

Côté front, l'api sera consommer sur le serveur ```http://localhost:8080```

Afin de lancer le serveur, il suffit de faire ```yarn``` puis ``` yarn start``` pour lancer le server côté front
