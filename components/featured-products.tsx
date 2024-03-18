import { getCollection, getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function FeaturedProducts() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const collectionHandle = 'the-castles-signature-collection';
  const products = await getCollectionProducts({ collection: collectionHandle });
  const collection = await getCollection(collectionHandle);

  if (!products?.length) return null;

  return (
    <div className="mx-auto px-6 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">The Castle's Signature Collection</h2>
        <Link
          href={`/search/${collectionHandle}`}
          className="rounded border border-golden bg-defaultdark px-4 py-2 text-sm text-white hover:bg-golden-dark"
        >
          View All Products
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-full flex-none"
          >
            <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
