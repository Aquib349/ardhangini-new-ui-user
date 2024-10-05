import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Input } from "../ui/input";

const Orders: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="order-component pt-2">
        <div className="main w-2/3 m-auto p-3 bg-white shadow rounded-lg">
          <h1 className="px-4 font-medium pb-4">Delivered on 20th September</h1>
          <div className="flex space-x-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1617039487629-6babdcb2a24b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="item-photo"
              className="w-24 h-24 object-contain"
            />
            <div className="flex-1">
              <h2 className="text-md font-medium">Women's cotton saree</h2>
              <small className="text-sm text-gray-500">
                Return or replace item available till : 2nd October
              </small>
              <div className="flex space-x-2 mt-2">
                <Button
                  className="h-8 bg-green-100 text-blue-700 font-medium rounded hover:bg-blue-200 focus:outline-none
                 focus:ring-2 focus:ring-blue-500"
                >
                  View Detail
                </Button>
              </div>
            </div>
          </div>
          <hr className="my-3" />

          <h1 className="px-4 font-medium pb-4">Delivered on 10th September</h1>
          <div className="flex space-x-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1617039487629-6babdcb2a24b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="item-photo"
              className="w-24 h-24 object-contain"
            />
            <div className="flex-1">
              <h2 className="text-md font-medium">Women's silk saree's</h2>
              <small className="text-sm text-gray-500">
                Return or replace item available till : 22nd september
              </small>
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
                        Women's silk saree
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
                              Women's silk saree
                            </span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-gray-500">Quantity</span>
                            <span className="font-medium">2</span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-gray-500">Colour</span>
                            <span className="font-medium">Black</span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-gray-500">Purchase Date</span>
                            <span className="font-medium">Jan 13, 2022</span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-gray-500">
                              Payment Status
                            </span>
                            <span className="font-medium text-purple-500">
                              Cash On Delivery
                            </span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-gray-500">Order Status</span>
                            <span className="font-medium text-green-500">
                              In Transit
                            </span>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div className="p-4 m-3">
                        <h3 className="font-semibold mb-2">Billing Address</h3>
                        <div className="space-y-2 text-xs">
                          {/* item Information Rows */}
                          <div className="flex justify-between">
                            <span className="text-gray-500">Location</span>
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
        </div>
      </div>
    </>
  );
};

export default Orders;
