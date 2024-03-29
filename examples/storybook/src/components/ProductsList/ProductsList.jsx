import { makeStyles } from '@material-ui/core/styles';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { Product } from '../Product/Product';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
}));

const defaultParams = {
  abbreviatedCategoryHistogram: true,
  limit: 20,
  cat: 'womens-fashion',
  view: 'web',
  useElasticsearch: true,
  sorts: 'Popular',
  pid: 'shopstyle',
};

export const ProductsList = props => {
  const { url, amount, category, size } = props;
  const [data, setData] = useState({ products: [] });
  const classes = useStyles();
  useEffect(() => {
    async function fetchProducts() {
      const qs = queryString.stringify({
        ...defaultParams,
        limit: amount || defaultParams.limit,
        cat: category || defaultParams.cat,
      });
      const result = await fetch(`${url}?${qs}`).then(res => res.json());
      setData(result);
    }
    fetchProducts();
  }, [amount, category, url]);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {data.products.map(product => (
          <Product key={product.id} sizeName={size} {...product} />
        ))}
      </div>
    </div>
  );
};
