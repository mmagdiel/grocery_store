import PocketBase from "pocketbase";
import type { Products } from "./pocketbaseTypes";
import type { Product as UiProduct } from "./uiProduct";

export const pb = new PocketBase("http://127.0.0.1:8090");

function getFirstFileName(value: unknown): string | null {
  if (!value) return null;

  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
  }

  if (Array.isArray(value)) {
    const first = value[0];
    return typeof first === "string" && first.trim().length > 0 ? first.trim() : null;
  }

  return null;
}

export function getProductImageUrl(record: Products): string {
  const fileName = getFirstFileName((record as any).images);
  if (!fileName) return "";
  return fileName;
}

export function mapPbProductToUiProduct(record: Products): UiProduct {
  const expandedCategorySlug = record.expand?.category_id?.slug;

  return {
    id: record.id,
    name: record.name,
    category: expandedCategorySlug || record.category_id,
    price: record.price,
    unit: "unidad",
    image: getProductImageUrl(record),
    description: record.description,
    inStock: record.is_active,
  };
}

export async function fetchProducts(): Promise<UiProduct[]> {
  const records = await pb.collection("products").getFullList<Products>({
    sort: "-created",
    expand: "category_id",
    filter: "is_active = true",
  });

  return records.map(mapPbProductToUiProduct);
}
