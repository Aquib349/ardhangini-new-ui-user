import { Heart, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

function CartItem({
  id,
  image,
  title,
  size,
  price,
  quantity,
}: {
  id: string;
  image: string;
  title: string;
  size: string;
  price: number;
  quantity: string;
}) {
  const [counter, setCounter] = useState<number>(Number(quantity));

  // function to handle increment of quantity
  function IncreseQuantity(ObjectId: string) {
    if (id === ObjectId) {
      setCounter((prevState) => prevState + 1);
    }
  }

  // function to handle decrement of qunatity
  function DecreaseQuaitity(ObjectId: string) {
    if (id === ObjectId) {
      setCounter((prevState) => Math.max(0, prevState - 1));
    }
  }
  return (
    <>
      <div className="flex justify-between p-2">
        <div className="flex items-start gap-4">
          <img
            src={image}
            alt={title}
            className="w-40 h-40 object-cover rounded-md"
          />
          <div className="flex-1 space-y-1">
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-gray-500">{size}</p>
            <p className="font-bold text-lg">{counter * price}</p>

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
            onClick={() => DecreaseQuaitity(id)}
          >
            -
          </Button>
          <span className="font-medium">{counter}</span>
          <Button
            variant="default"
            className="bg-green-600 px-2 py-1 rounded hover:bg-gray-300 h-6"
            onClick={() => IncreseQuantity(id)}
          >
            +
          </Button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
