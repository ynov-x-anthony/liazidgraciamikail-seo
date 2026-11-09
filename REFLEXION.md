# REFLEXION.md

1. `robots.txt` empêche-t-il, à lui seul, le duplicate content entre `/produits?tri=prix` et `/produits?tri=prix-asc` ? Pourquoi ?

Non. Le fichier `robots.txt` demande juste à Google de ne pas visiter la page. Mais il n'empêche pas Google d'afficher l'URL dans les recherches s'il la trouve ailleurs. Donc le risque de doublon existe toujours.


2. Pourquoi la balise canonique est-elle l'outil adapté ici, plutôt que `robots.txt` ou une meta `noindex` ?

Parce que la balise canonique dit simplement à Google : "La vraie page officielle, c'est `/produits`". 
- `robots.txt` bloque l'accès mais ne résout pas le problème du doublon.
- `noindex` effacerait complètement la page des moteurs de recherche.
- La canonique garde la page fonctionnelle pour le client tout en indiquant la bonne version à Google.


3. Si demain `/admin` existe sur ce site et ne doit jamais être exploré par Google, quelle ligne ajoutes-tu dans `robots.txt` ?

Il faut ajouter la ligne `Disallow: /admin` dans le fichier `robots.txt` :

User-agent: *
Disallow: /admin