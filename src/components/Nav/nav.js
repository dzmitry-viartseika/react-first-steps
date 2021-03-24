import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter, Switch } from 'react-router-dom'
import routes from '../../routes/routes';
import './nav.scss'
import navList from "../../constants/navList";

// eslint-disable-next-line import/no-anonymous-default-export
export default class Nav  extends Component {

    render() {
        console.log('props', this.props)

        return (
            <div>
                <nav className="nav">
                    <ul>
                        { navList.map((item) =>
                            <li key={item.id}>
                                <NavLink exact to={item.route}>
                                    { item.text }
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
                <hr/>
                        {Object.values(routes).map(route =>
                            <Route exact
                                   key={route.component}
                                   path={route.url}
                                   component={route.component}
                            />)}
            </div>
        )
    }
}

