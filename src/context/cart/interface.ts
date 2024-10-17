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
  placeOrders: (
    orderType: string,
    deliveryAddress: string,
    billingAddress: string,
    paymentMethod: string
  ) => void;
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

// interface for the placing an order

interface OrderCartLineItem {
  productTypeId: string;
  productId: string;
  productName: string;
  productThumbnail: string;
  quantity: number;
  actualPrice: number;
  offerPrice: number;
  promoDiscount: number;
  promoDescription: string;
  totalSgst: number;
  totalCgst: number;
  finalTotalPrice: number;
}

interface PaymentInfo {
  id: string;
  totalAmount: number;
  paymentMethod: string;
  paymentStatus: string;
  gatewayOrderId: string;
  gatewayPaymentId: string;
  failureReason: string;
}

interface OrderTimeLine {
  id: string;
  eventDate: string;
  eventType: string;
  description: string;
}

export interface OrderData {
  userId: string;
  cartId: string;
  orderId: string;
  userName: string;
  userEmail: string;
  userMobile: string;
  orderType: string;
  OrderStatus: string;
  orderCancellationType: string;
  orderCancellationReason: string;
  totalActualPrice: number;
  totalFinalPrice: number;
  totalCgst: number;
  totalSgst: number;
  cartLineItems: OrderCartLineItem[];
  billingAddress: string;
  shippingAddress: string;
  paymentInfo: PaymentInfo;
  orderTimeLine: OrderTimeLine[];
}

export interface OrderResponse {
  orders: OrderData;
}
