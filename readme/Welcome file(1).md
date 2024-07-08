# Introduction

Le projet que j'ai réalisé est sur thème de l'UFC, l'objectif était de recréer le site web de l'UFC de manière personnalisée dans le cadre d'un TP en y intégrant du JavaScript.
Pour ce projet j'ai utilisé Tailwind css, Grid js , full callendar, Splide. 


# La maquette

Pour la conception de ce site , j'ai suis partie dans l'idée d'un thème minimaliste ,  sans surcharge avec des couleurs classqiue de l'ufc ( noir, blanc, rouge,gris)
Voici la maquette : 
![Maquette](https://i.postimg.cc/7hDZJcsq/Maquette-Ufcprojet.png)
## Header et menu

Concernant le header, j'ai mis une image en background afin d'ecrire les éléments du menu directement dessus: 
![background](https://i.postimg.cc/t4f71ds9/screenprojetufc4.png)


## L'index du site 
Concernant la page d'index de ce site , j'ai utilisé du Html de manière classique en y ajoutant des images selon les sections. 
Pour les images de la section "boutique" ,  j'ai mis du texte qui présente les articles au survol de la souris (hover), dans l'optique de rajouter du dynamisme:
![Hover](https://i.postimg.cc/qqZ1fZvP/screenprojetufc2.png)
Toujours sur le dynamisme , j'ai ajouté un caroussel d'image sur la section "actualité" en utilisant Splide: 
![Caroussel](https://i.postimg.cc/kXmQGmkT/screenprojetufc3.png)


## Le CSS 

Concernant le Style , j'ai utilisé Tailwind css pour intéragir directement sur le HTML mais j'ai également ouvert une page de style css pour le style un peu plus complexe à faire, j'ai notamment définit le style des hover de la section boutique grace à une feuille de style:
![style](https://i.postimg.cc/J7kwmNLb/screenprojetufc5.png)

## Intégration de JavaScript

J'ai intégrer du javaScript sur mes pages "Calendrier et "Combattants" afin d'afficher les données des API fournis au préalable. Pour le tableau des combattants j'ai utilise grid js et pour le calendrier j'ai utilisé full callendar :
![JS](https://i.postimg.cc/DwmPkgVh/screenprojetufc6.png)
![combattant](https://i.postimg.cc/C1vKgjpy/screenufc7.png)





Afin d'afficher  les données des événements à venir dans le calendrier, j'ai utilisé une boucle for 

![calendarjs](https://i.postimg.cc/2jcyNSjC/screenprojetufc9.png)
![Calendar](https://i.postimg.cc/HnmfFJnG/screenprojetufc8.png)

##  Le Responsive

Concernant le responsive , sur petits écrans l'index.html s'affiche de manière suivante : 

![responsive1](https://i.postimg.cc/pTvCvBZ5/screenprojetufc10.png)
Un burger est visible afin d'afficher le menu , de plus, l background du header s'adapte à la taille de l'écran, les éléments du site , notamment la boutique , se présente désormais en colonne, et le carrousel pour la section actualité ainsi que les images s'adapte à la taille de l’écran : 
![Responsive2](https://i.postimg.cc/Y92F8DRR/screenprojetufc11.png)![responsive3](https://i.postimg.cc/gJBxsznc/screenprojetufc13.png)
