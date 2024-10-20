import { Copy, Scissors } from "lucide-react";
import { BiSolidOffer } from "react-icons/bi";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import CartItem from "../cart/cart-item";
import Payment from "../payment/payment";
import { useCart } from "../../hooks/use-cart";
import { useNewComers } from "../../hooks/use-new-comers";
import { useEffect, useState } from "react";
import { useAddress } from "../../hooks/use-address";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import UserForm from "../user-profile/user-form";
import { RadioGroupItem, RadioGroup } from "../ui/radio-group";

interface Address {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  state: string;
  pin: number;
  mobileNumber: string;
}

const CartManagement = () => {
  const { cartItemData, removeItem, placeOrders } = useCart();
  const { addresses, addUserAddress } = useAddress();
  const { addItemWishlist } = useNewComers();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isCodEnabled, setIsCodEnabled] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectAddress, setSelectAddress] = useState("");
  const [quantity, setQuantity] = useState<number>(0);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  // function to set the payment method
  function handlePaymentMethod() {
    setIsCodEnabled((prev) => !prev);
  }

  // function to select address
  function selectDeliveryAddress(address: Address) {
    console.log(address);
    setSelectAddress(
      `${address?.firstName} ${address?.lastName}, ${address?.addressLine1}, ${address?.addressLine2}, ${address?.state}, ${address.pin}, ${address?.mobileNumber}`
    );
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText("BFD10");
    alert("Coupon code copied!");
  };

  useEffect(() => {
    if (isCodEnabled) {
      setPaymentMethod("cod");
    } else {
      setPaymentMethod("");
    }
  }, [isCodEnabled]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 py-2 text-sm w-[95%] m-auto relative">
      <div className="w-full lg:w-2/3">
        <div className="space-y-2">
          {cartItemData?.cartLineItems.map((val) => (
            <CartItem
              key={val.id}
              id={val.productId}
              productTypeId={val.productTypeId}
              image="https://via.placeholder.com/150"
              title={val.productName}
              size="fixed size"
              actualPrice={val.actualPricePerItem}
              finalPrice={val.finalPricePerItem}
              quantity={val.quantity}
              removeItem={removeItem}
              addItemWishlist={addItemWishlist}
              setQuantity={setQuantity}
            />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/3 space-y-4">
        {/* <Accordion
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
        </Accordion> */}

        {/* <div className="border px-4 py-3 rounded-lg">
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
        </div> */}

        {/* user address */}
        <div className="border px-4 py-3 rounded-lg">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="pr-4">
              <AccordionTrigger className="hover:no-underline text-md">
                Saved Address
              </AccordionTrigger>
              <AccordionContent>
                {addresses?.map((address, index) => (
                  <div key={index} className="flex justify-between">
                    <div className="flex justify-between items-center py-4 border-b">
                      <p className="font-mono">
                        {address.firstName} {address.lastName} <br />
                        {address.addressLine1} <br />
                        {address.addressLine2} <br />
                        {address.state}, {address.pin} <br />
                        {address.mobileNumber}
                      </p>
                    </div>
                    <RadioGroup>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={`address-${index}`}
                          id={`address-${index}`}
                          onClick={() => selectDeliveryAddress(address)}
                        />
                      </div>
                    </RadioGroup>
                  </div>
                ))}

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="h-8 mt-2 text-xs bg-green-200 border-2 hover:bg-green-300 border-green-600 text-green-600"
                      variant="outline"
                      onClick={openDialog}
                    >
                      Add
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[800px]">
                    <DialogHeader>
                      <DialogTitle className="p-0 m-0">Add Address</DialogTitle>
                      <DialogDescription></DialogDescription>
                    </DialogHeader>
                    {/* Pass the closeDialog function to UserForm */}
                    <UserForm
                      addUserAddress={addUserAddress}
                      onClose={closeDialog}
                    />
                  </DialogContent>
                </Dialog>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Cart Summary */}
        <div className="border px-4 py-3 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Cart Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{cartItemData?.finalTotalPrice}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>SGST</span>
            <span>₹{cartItemData?.totalSgst}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>CGST</span>
            <span>₹{cartItemData?.totalCgst}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>₹0.00</span>
          </div>
          <div className="flex justify-between mb-2 text-green-500">
            <span>Free Shipping Promo</span>
            <span>-₹0.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total Cost</span>
            <span>₹{Number(cartItemData?.finalTotalPrice).toFixed(2)}</span>
          </div>
        </div>

        {/* payment history */}
        <Payment
          isCodEnabled={isCodEnabled}
          handleToggle={handlePaymentMethod}
        />

        {/* Checkout Section */}
        <Button
          className="w-full bg-yellow-400 text-black py-2 rounded-md hover:bg-yellow-600"
          onClick={() =>
            placeOrders(
              "cashondelivery",
              selectAddress,
              selectAddress,
              paymentMethod,
              quantity
            )
          }
        >
          <span className="flex items-center justify-center space-x-2">
            <span>CheckOut</span>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default CartManagement;
