import React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useOrders } from "../../hooks/use-order";

const Orders: React.FC = () => {
  const { AllOrders } = useOrders();
  return (
    <>
      <div className="order-component pt-2">
        <div className="main w-2/3 m-auto p-3 bg-white shadow rounded-lg">
          {AllOrders?.map((order) =>
            order.cartLineItems?.map((val) => (
              <div key={val.id} className="">
                <h1 className="px-4 font-medium pb-4 uppercase">
                  {order.orderTimeLine[0].eventType} on :{" "}
                  {order.orderTimeLine[0].eventDate}
                </h1>
                <div className="flex space-x-4 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1617039487629-6babdcb2a24b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="item-photo"
                    className="w-24 h-24 object-contain"
                  />
                  <div className="flex-1">
                    <h2 className="text-md font-medium">{val.productName}</h2>
                    {order.orderTimeLine[0].eventType
                      .toLowerCase()
                      .includes("created") ? (
                      <small className="text-sm text-gray-500">
                        Cancel available till order is being shipped
                      </small>
                    ) : (
                      <small className="text-sm text-gray-500">
                        Return or replace item available till : 22nd september
                      </small>
                    )}

                    <div className="flex space-x-2 mt-2">
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button
                            className="h-8 bg-green-100 text-blue-700 font-medium rounded hover:bg-blue-200 focus:outline-none
                 focus:ring-2 focus:ring-blue-500"
                            // onClick={() => navigate(`order-detail/${0}`)}
                          >
                            View Detail
                          </Button>
                        </SheetTrigger>
                        <SheetContent className="p-2 overflow-scroll no-scrollbar">
                          <SheetHeader>
                            <SheetTitle className="px-3">
                              {val.productName}
                            </SheetTitle>
                            <SheetDescription></SheetDescription>
                          </SheetHeader>
                          {/* order-detail */}
                          <div className="">
                            <div className="order-image mt-4">
                              <img
                                src="https://images.unsplash.com/photo-1617039487629-6babdcb2a24b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="order-image"
                                className="object-cover w-32 m-auto rounded-md border-[4px] border-slate-500"
                              />
                            </div>
                            <div className="p-4 m-3">
                              <h3 className="font-semibold mb-2">Details</h3>
                              <div className="space-y-2 text-xs">
                                {/* item Information Rows */}
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Item</span>
                                  <span className="font-medium">
                                    {val.productName}
                                  </span>
                                </div>

                                <div className="flex justify-between">
                                  <span className="text-gray-500">
                                    Quantity
                                  </span>
                                  <span className="font-medium">
                                    {val.cartLineItem.quantity}
                                  </span>
                                </div>

                                <div className="flex justify-between">
                                  <span className="text-gray-500">Colour</span>
                                  <span className="font-medium">-</span>
                                </div>

                                <div className="flex justify-between">
                                  <span className="text-gray-500">
                                    Purchase Date
                                  </span>
                                  <span className="font-medium">
                                    {
                                      order.orderTimeLine[0].eventDate.split(
                                        ","
                                      )[0]
                                    }
                                  </span>
                                </div>

                                <div className="flex justify-between">
                                  <span className="text-gray-500">
                                    Payment Status
                                  </span>
                                  <span className="font-medium text-purple-500">
                                    {order.paymentInfo.paymentStatus}
                                  </span>
                                </div>

                                <div className="flex justify-between">
                                  <span className="text-gray-500">
                                    Order Status
                                  </span>
                                  <span className="font-medium text-green-500">
                                    {order.OrderStatus}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <hr />

                            <div className="p-4 m-3">
                              <h3 className="font-semibold mb-2">
                                Billing Address
                              </h3>
                              <div className="space-y-2 text-xs">
                                {/* item Information Rows */}
                                <div className="flex justify-between">
                                  <span className="text-gray-500">
                                    Location
                                  </span>
                                  <span className="font-medium">
                                    Malaysia Road, Bla bla
                                  </span>
                                </div>

                                <div className="flex justify-between">
                                  <span className="text-gray-500">City</span>
                                  <span className="font-medium">Malaysia</span>
                                </div>

                                <div className="flex justify-between">
                                  <span className="text-gray-500">State</span>
                                  <span className="font-medium">Malaysia</span>
                                </div>

                                <div className="flex justify-between">
                                  <span className="text-gray-500">PinCode</span>
                                  <span className="font-medium">424-2343</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>
                </div>
                <hr className="my-3" />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Orders;
