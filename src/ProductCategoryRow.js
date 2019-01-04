 
import React from 'react';

export class ProductCategoryRow extends React.Component {
    render() {
      const { category } = this.props;
      return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
    }
  }