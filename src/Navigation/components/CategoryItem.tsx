import React, { SFC } from 'react';
import { NavLink } from 'react-router-dom';

import { NavigationTreeItem } from '../Types';
import './CategoryItem.css';

interface CategoryItemProps {
    item: NavigationTreeItem;
    rootUrl: string;
}

const CategoryItem: SFC<CategoryItemProps> = ({item, rootUrl}) => (
    <li>
        <NavLink to={`${rootUrl}${item.url}`} activeClassName="selected">
            {item.displayName}
        </NavLink>
    </li>
);

export default CategoryItem;