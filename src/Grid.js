import React from 'react';

import Item from './item';
import ItemEdit from './ItemEdit';

import store from './store';

class Grid extends React.Component {


    render() {
        let items = store.getItems();

        return (
            <div className="grid-ctrl">
                  <ItemEdit />
                <div className="grid">
                    {
                       items.map((item, ix) => <Item key={ix} item={item} />)
                    }
                </div>
            </div>
        );
    }
}

export default Grid;