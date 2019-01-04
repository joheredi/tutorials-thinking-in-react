import React from 'react';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

export class FilterableProductTable extends React.Component {
    render() {
        const { products } = this.props;
      return (
        <div>
          <SearchBar />
          <ProductTable products={products} />
        </div>
      );
    }
  }