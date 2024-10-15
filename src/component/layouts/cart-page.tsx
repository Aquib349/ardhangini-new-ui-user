import { Copy, Scissors } from "lucide-react";
import { BiSolidOffer } from "react-icons/bi";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import CartItem from "./cart-item";
import Payment from "./payment";

const CartManagement = () => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText("BFD10");
    alert("Coupon code copied!");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 py-2 text-sm w-[95%] m-auto relative">
      <div className="w-full lg:w-2/3">
        <div className="space-y-2">
          <CartItem
            id="1"
            image="https://via.placeholder.com/150"
            title="Sweater No.4 Beige Winter Collection"
            size="Beige"
            price={199}
            quantity="2"
          />
          <CartItem
            id="2"
            image="https://via.placeholder.com/150"
            title="Chic Silhouette Knit Ankle Sock Boots"
            size="Black"
            price={299}
            quantity="3"
          />
          <CartItem
            id="3"
            image="https://via.placeholder.com/150"
            title="Autumn Essence Ribbed Half-Zip Pullover Sweater"
            size="Brown"
            price={499}
            quantity="1"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/3 space-y-4">
        <Accordion
          type="single"
          collapsible
          className="w-full bg-red-50 rounded-md"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline px-3">
              <div className="flex items-center gap-2">
                <BiSolidOffer /> Check Coupon Offer
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center justify-between border border-green-600 rounded-md text-xs p-2 bg-green-100 mx-2 mb-4">
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
            <span>SGST</span>
            <span>$5.47</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>CGST</span>
            <span>$5.47</span>
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

        {/* payment history */}
        <Payment />

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

export default CartManagement;
