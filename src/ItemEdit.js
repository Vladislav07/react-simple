import React from 'react';

import NewItem from './NewItem';
//import store from './store';

class ItemEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      title: '',
      text: '',
    };
  }
  render() {
     let {isEdit} = this.state
    if (isEdit) {
      return (
        <div className='item-edit'>
          <div className='item-edit-caption'>
            <input type='text' placeholder='Заголовок' />
          </div>
          <div className='item-edit-body'>
            <textarea placeholder='Текст' />
          </div>
        </div>
      );
    } else {
      return <NewItem />;
    }
  }
}

export default ItemEdit;
