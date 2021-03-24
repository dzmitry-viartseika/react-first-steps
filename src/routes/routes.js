import About from '../pages/About';
import Home from '../pages/Home';
import Help from '../pages/Help';
import Car from '../pages/Car';

const routes = {
    home: {
        url: '/',
        component: Home,
    },
    about: {
        url: '/about',
        component: About
    },
    help: {
        url: '/help',
        component: Help
    },
    car: {
        url: '/car/',
        component: Car
    }
}

export default routes;
