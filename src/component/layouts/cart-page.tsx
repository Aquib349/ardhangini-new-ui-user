import { Copy, Heart, Scissors, Trash2 } from "lucide-react";
import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const CartManagement = () => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText("BFD10");
    alert("Coupon code copied!");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 py-2 text-sm w-[95%] m-auto">
      <div className="w-full lg:w-2/3">
        <div className="space-y-2">
          <CartItem
            image="https://via.placeholder.com/150"
            title="Sweater No.4 Beige Winter Collection"
            size="Beige"
            price="$199"
            quantity="2"
          />
          <CartItem
            image="https://via.placeholder.com/150"
            title="Chic Silhouette Knit Ankle Sock Boots"
            size="Black"
            price="$299"
            quantity="3"
          />
          <CartItem
            image="https://via.placeholder.com/150"
            title="Autumn Essence Ribbed Half-Zip Pullover Sweater"
            size="Brown"
            price="$499"
            quantity="1"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/3 space-y-4">
        <Accordion type="single" collapsible className="w-full bg-red-50">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <BiSolidOffer /> Check Coupon Offer
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center justify-between border border-green-600 rounded-md text-xs p-2 bg-green-100">
                <div>
                  <p className="font-semibold text-green-700">
                    FLAT 10% off above ₹4999/-
                  </p>
                  <p className="text-green-600">
                    Discount applicable at checkout
                  </p>
                </div>

                <div className="flex items-center space-x-2 border border-green-700 border-dashed rounded-lg px-4 py-2 bg-white">
                  <Scissors size={16} className="text-gray-500" />
                  <span className="font-semibold">BFD10</span>
                  <button onClick={handleCopyCode} className="text-gray-500">
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="border px-4 py-3 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Promo Code</h2>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Add a promo code"
              className="w-full p-2 border rounded-md"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Apply
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="border px-4 py-3 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Cart Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$997</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>$9.99</span>
          </div>
          <div className="flex justify-between mb-2 text-green-500">
            <span>Free Shipping Promo</span>
            <span>-$9.99</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total Cost</span>
            <span>$997</span>
          </div>
        </div>

        {/* Checkout Section */}
        <Button className="w-full bg-yellow-400 text-black py-2 rounded-md hover:bg-yellow-600">
          <span className="flex items-center justify-center space-x-2">
            <span>CheckOut</span>
          </span>
        </Button>
      </div>
    </div>
  );
};

const CartItem = ({
  image,
  title,
  size,
  price,
  quantity,
}: {
  image: string;
  title: string;
  size: string;
  price: string;
  quantity: string;
}) => {
  return (
    <div className="flex justify-between p-2">
      <div className="flex items-start gap-4">
        <img
          src={image}
          alt={title}
          className="w-40 h-40 object-cover rounded-md"
        />
        <div className="flex-1 space-y-1">
          <h3 className="font-semibold text-md">{title}</h3>
          <p className="text-gray-500">{size}</p>
          <p className="font-bold text-lg">{price}</p>

          <div className="flex-1">
            <div className="flex gap-2 items-center hover:font-medium hover:text-black cursor-pointer">
              <Button
                variant="outline"
                className="text-rose-500 bg-transparent border-0 p-0 h-6 hover:bg-transparent"
              >
                <Heart size={18} />
              </Button>
              <p className="text-xs">Add to wishlist</p>
            </div>
            <div className="flex gap-2 items-center hover:font-medium hover:text-black cursor-pointer">
              <Button
                variant="outline"
                className="text-red-500 bg-transparent border-0 p-0 h-6 hover:bg-transparent"
              >
                <Trash2 size={18} />
              </Button>
              <p className="text-xs">Delete</p>
            </div>
          </div>
        </div>
      </div>
      {/* Quantity Control */}
      <div className="flex space-x-2 px-16">
        <Button
          variant="default"
          className="bg-red-600 px-2 py-1 rounded hover:bg-gray-300 h-6"
          // onClick={decrement}
        >
          -
        </Button>
        <span className="font-medium">{quantity}</span>
        <Button
          variant="default"
          className="bg-green-600 px-2 py-1 rounded hover:bg-gray-300 h-6"
          // onClick={increment}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default CartManagement;
