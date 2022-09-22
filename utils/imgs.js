import netflixMovil from '../img/netflix-movil.jpg';
import netflixDesktop from '../img/netflix-desktop.jpg';
import ifiMovil from '../img/ifi-movil.png';
import ifiDesktop from '../img/ifi-desktop.png';
import phonesMovil from '../img/phone-moviles.webp';
import phonesDesktop from '../img/phone-moviles-desktop.webp';
import planesMovil from '../img/planes-moviles.webp';
import planesDesktop from '../img/planes-moviles-desktop.webp';

const imgs = {
  hogar:[
    {
      id: 1,
      urlMovil: netflixMovil,
      urlDesktop: netflixDesktop,
      name: 'netflix'
    },
    {
      id: 2,
      urlMovil: ifiMovil,
      urlDesktop: ifiDesktop,
      name: 'ifi'
    }
  ],
  movil:[
    {
      id: 1,
      urlMovil: phonesMovil,
      urlDesktop: phonesDesktop,
      name: 'phones'
    },
    {
      id: 2,
      urlMovil: planesMovil,
      urlDesktop: planesDesktop,
      name: 'planes'
    }
  ],
};

// const imgs = {
//   hogarMovil:[
//     {
//       image: "https://planeshogarperu.com.pe/wp-content/uploads/2022/05/44444.jpg",
//       caption: 'netflix'
//     },
//     {
//       image: "https://planeshogarperu.com.pe/wp-content/uploads/2022/02/planes-moviles-nuevo-3meses-movil-movil_Mesa-de-trabajo-1-745x1024.png",
//       caption: 'ifi'
//     }
//   ],
//   hogarDesktop:[
//     {
//       image: netflixDesktop,
//       caption: 'netflix'
//     },
//     {
//       image: ifiDesktop,
//       caption: 'ifi'
//     }
//   ],
//   movilMovil:[
//     {
//       id: 1,
//       urlMovil: phonesMovil,
//       urlDesktop: phonesDesktop,
//       name: 'phones'
//     },
//     {
//       id: 2,
//       urlMovil: planesMovil,
//       urlDesktop: planesDesktop,
//       name: 'planes'
//     }
//   ],
// };

export default imgs;