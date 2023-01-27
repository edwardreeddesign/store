import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import data from '../../utils/data';

const ProductScreen = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find(x => x.slug === slug);
  if (!product) {
    <div>Product not found</div>;
  }

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews}
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="flex justify-between mb-2">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="flex justify-between mb-2">
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In Stock' : 'Unavailable'}</div>
            </div>
            <button className="primary-button w-full">Add To Cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ProductScreen;
