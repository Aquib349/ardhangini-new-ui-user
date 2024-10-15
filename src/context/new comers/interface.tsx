export interface Product {
  id: string;
  skuid: string;
  productName: string;
  productDescription: string;
  averageReview: string;
  numberOfReviews: number;
  offerprice: string;
  actualprice: string;
  available_qty: string;
  isActive: boolean;
  returnExchangePolicy: string;
  cgst: string;
  sgst: string;
  maxQuantityPerCart: string;
  isNew: boolean;
  isTrending: boolean;
  isBestSeller: boolean;
  isExclusive: boolean;
  isShippable: boolean;
  maxAllowedReturnDays: number;
  maxAllowedCancellationDays: number;
  category: Category;
  subCategory: SubCategory;
  productType: ProductType;
  manufacturer: Manufacturer;
  promoDetails: null | PromoDetails;
  sareeDetails: SareeDetails | null;
  productImages: ProductImage[];
  collection: Collection;
  colour: Colour;
  print: Print;
  occassion: Occassion;
  style: Style | null;
}

interface Category {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
}

interface SubCategory extends Category {
  category: Category;
}

interface ProductType {
  id: string;
  name: string;
  isActive: boolean;
  description: string;
}

interface Manufacturer {
  id: string;
  origin: string;
  name: string;
  address: string;
}

interface PromoDetails {
  // Add fields based on your actual data structure for promoDetails
}

interface SareeDetails {
  id: string;
  length: string;
  width: string;
  blousePieceIncluded: boolean;
  blouse_desc: string;
  fabricDetails: FabricDetails;
}

interface FabricDetails {
  id: string;
  fabricName: string;
  fabricDescription: string;
  washCare: string;
}

interface ProductImage {
  // Define properties for product images if there are any
}

interface Collection {
  id: string;
  name: string;
  description: string;
}

interface Colour {
  id: string;
  name: string;
}

interface Print {
  id: string;
  name: string;
  description: string;
}

interface Occassion {
  id: string;
  name: string;
  description: string;
}

interface Style {
  // Define properties for style if there are any
}
