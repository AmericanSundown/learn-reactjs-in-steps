import React from 'react';

export default class DisplayList extends React.Component {

  render () {
    return  <ul>
              { this.props.items.map((item, i) => {
                return <li key={item}>
                          <input type="checkbox" style={{ fontSize: 'x-large' }} />
                          { item }
                          <a href='#' onClick={ this.props.handleDelete.bind(null, item) }>
                            [x]
                          </a>
                       </li>;
              }) }
            </ul>;
  }

}

