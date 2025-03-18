import { fetchProdById, fetchProducts } from "@/lib/apiReq";
import { notFound } from "next/navigation";
import { SingleProductPage } from "../components/SingleProductPage";

type DynamicProps = {
  params: Promise<{ id: string }>;
};

async function getProduct(id: string) {
  const res = (await fetchProdById(id)) as string;
  return JSON.parse(res) as FetchRes<ProductType>;
}

export async function generateStaticParams() {
  const res = (await fetchProducts(null, null)) as string;
  const resData = JSON.parse(res) as FetchRes<ProductType[]>;
  if (!resData.success) return [];
  return resData.data.map((prod) => ({
    id: prod.id,
  }));
}

export async function generateMetadata({ params }: DynamicProps) {
  const { id } = await params;
  const resData = await getProduct(id);
  const title = resData.success ? resData.data.name : "Not Found";
  return {
    title,
  };
}

export default async function SingleProdPage({ params }: DynamicProps) {
  const { id } = await params;

  const resData = await getProduct(id);
  if (!resData.success) notFound();
  return <SingleProductPage product={resData.data} />;
}
