import { PageWrapper } from "@/components/PageWrapper";
import { SingleProduct } from "@/components/SingleProduct/SingleProduct";

type SingleProductPageProps = {
  product: ProductType;
};

export function SingleProductPage({ product }: SingleProductPageProps) {
  return (
    <PageWrapper>
      <SingleProduct product={product} />
    </PageWrapper>
  );
}
