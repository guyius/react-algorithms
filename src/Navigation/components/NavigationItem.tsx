import React, { SFC } from 'react';
import { NavLink } from 'react-router-dom';

import { NavigationTreeItem } from '../Types';
import './NavigationItem.css';

interface NavigationItemProps {
    item: NavigationTreeItem;
    rootUrl: string;
}

const NavigationItem: SFC<NavigationItemProps> = ({item, rootUrl}) => (
    <li>
        <NavLink to={`${rootUrl}${item.url}`} activeClassName="selected">
            {item.displayName}
        </NavLink>
    </li>
);

export default NavigationItem;