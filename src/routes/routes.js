import About from '../pages/About';
import Home from '../pages/Home';
import Help from '../pages/Help';

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
}

export default routes;
