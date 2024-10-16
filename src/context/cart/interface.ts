// Interface for individual cart line items
export interface CartLineItem {
  productId: string;
  typeId: string;
  quantity: number;
  productTypeId: string;
  productThumbnail: string;
  productName: string;
  actualPricePerItem: number;
  finalPricePerItem: number;
  actualTotalPrice: number;
  finalTotalPrice: number;
  totalSgst: number;
  totalCgst: number;
}

// Interface for Cart context
export interface CartContextProps {
  cartItemData: CartResponse | null;
  removeItem: (productId: string, typeId: string, quantity: number) => void;
  fetchCartData: () => void;
}

// Interface for Cart API response
export interface CartResponse {
  actualTotalPrice: number;
  cartId: string;
  cartLineItems: CartItemDetail[];
  finalTotalPrice: number;
  totalCgst: number;
  totalSgst: number;
  userId: string;
}

export interface ProductType {
  id: string;
  name: string;
  isActive: boolean;
  description: string;
}

export interface CartItemDetail {
  id: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string | null;
  modifiedBy: string | null;
  productId: string;
  quantity: string;
  productType: ProductType;
  productTypeId: string;
  productName: string;
  actualPricePerItem: number;
  finalPricePerItem: number;
  actualTotalPrice: number;
  finalTotalPrice: number;
  totalSgst: number;
  totalCgst: number;
}
