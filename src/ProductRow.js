import React from 'react';

export class ProductRow extends React.Component {
    render() {
      const {name, price, stocked} = this.props.product;
      const styledName = stocked ?
        name :
        <span style={{color: 'red'}}>
          {name}
        </span>;
  
      return (
        <tr>
          <td>{styledName}</td>
          <td>{price}</td>
        </tr>
      );
    }
  }