// interface.ts
export interface CartLineItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string | null;
  modifiedBy: string | null;
  perItemActualPrice: string;
  perItemOfferPrice: string;
  perItemFinalPrice: string;
  totalActualPrice: string;
  totalOfferPrice: string;
  sgstPerItem: string;
  cgstPerItem: string;
  totalSgst: string;
  totalCgst: string;
  promoDescription: string | null;
  promoDiscountPerItem: string;
  totalPromoDiscount: string;
  totalFinalPrice: string;
  cartLineItem: {
    id: string;
    quantity: string;
  };
  productId: string;
  productTypeId: string;
  productName: string;
  actualPrice: string;
  offerPrice: string;
  quantity: string;
  finalTotalPrice: string;
}

export interface PaymentInfo {
  id: string;
  totalAmount: string;
  paymentMethod: string;
  paymentStatus: string;
  gatewayOrderId: string | null;
  gatewayPaymentId: string | null;
  failureReason: string | null;
}

export interface OrderTimeline {
  id: string;
  eventDate: string;
  eventType: string;
  description: string | null;
}

export interface CartData {
  cartId: string;
  userId: string;
  cartLineItems: CartLineItem[];
  totalActualPrice: string;
  totalFinalPrice: string;
  totalCgst: string;
  totalSgst: string;
  OrderStatus: string;
  orderType: string;
  orderCancellationType: string;
  orderCancellationReason: string | null;
  paymentInfo: PaymentInfo;
  orderTimeLine: OrderTimeline[];
  orderId: string;
  billingAddress: string;
  shippingAddress: string;
}

export interface AllOrderProps {
  AllOrders: CartData[];
}

export interface AllOrderResponse {
  Orders: CartData[];
}
