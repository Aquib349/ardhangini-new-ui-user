import { ShoppingCart, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";
import { TiStarFullOutline } from "react-icons/ti";
import { useWishlist } from "../../hooks/use-wishlist";
import { useNewComers } from "../../hooks/use-new-comers";

function Wishlist() {
  const { wishlistData, DeleteWishlistItem } = useWishlist();
  const { products, addItemCart } = useNewComers();

  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    undefined
  );

  const plugin = React.useRef(
    emblaCarouselAutoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Filter the products in wishlist based on productId
  const wishlistItems = wishlistData?.lineItems.map((item) => {
    return products.find((product) => product.id === item.productId);
  });

  const images = [
    {
      id: 1,
      link: "https://images.unsplash.com/photo-1609748340041-f5d61e061ebc?q=80&w=1418&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      link: "https://images.unsplash.com/photo-1610189025857-f42fe6e8dd91?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      link: "https://images.unsplash.com/photo-1572470176170-98fa8abcb741?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      link: "https://images.unsplash.com/photo-1596706487679-9f95f5891975?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <div className="wishlist-component">
        <div className="main grid grid-cols-5 gap-y-4 p-2">
          {/* mapping */}
          {wishlistItems?.map(
            (val) =>
              val && ( // Ensure that `val` exists before rendering
                <div
                  key={val.id}
                  className="w-[16rem] px-0 py-2 bg-white rounded-lg shadow-md border"
                >
                  {/* Product Image */}
                  <div className="flex justify-center">
                    <Carousel
                      plugins={[plugin.current]}
                      className="w-[90%] max-w-xs"
                      onMouseEnter={plugin.current.stop}
                      onMouseLeave={plugin.current.reset}
                    >
                      <CarouselContent className="h-[300px]">
                        {images.map((img) => (
                          <CarouselItem key={img.id}>
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-0">
                                <img
                                  src={img.link}
                                  alt="images"
                                  className="object-cover rounded-md"
                                />
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>

                  {/* Product Title */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-800 pt-2 px-3 text-start">
                      {val.productName}
                    </h3>
                    <div className="pt-2 pr-3">
                      <Badge className="h-5 px-1 rounded-sm font-normal flex gap-1 items-center bg-green-400">
                        <span className="font-medium">3.4</span>
                        <TiStarFullOutline className="font-bold mb-0.5" />
                      </Badge>
                    </div>
                  </div>

                  {/* Color Options */}
                  <div className="mt-2 px-3">
                    <div className="flex space-x-2 mt-1">
                      <div
                        onClick={() => setSelectedColor(val.colour.name)}
                        className={`w-4 h-4 rounded-full cursor-pointer border ${
                          selectedColor === val.colour.name
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                        style={{ backgroundColor: val.colour.name }}
                      ></div>
                    </div>
                  </div>

                  {/* Item Description */}
                  <div className="mt-2 px-3">
                    <p className="text-xs">{val.productDescription}</p>
                  </div>

                  {/* Price and Action */}
                  <div className="mt-2 flex items-center justify-between px-3">
                    <div className="flex items-center gap-x-2">
                      {val.offerprice ? (
                        <>
                          <p className="text-sm font-semibold text-slate-500 line-through">
                            ₹{val.actualprice}
                          </p>
                          <p className="text-sm font-medium">
                            ₹{val.offerprice}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm font-semibold">
                          ₹{val.actualprice}
                        </p>
                      )}
                    </div>
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        className="p-2 h-8 hover:bg-red-100"
                        onClick={() =>
                          DeleteWishlistItem(val.id, val.productType.id)
                        }
                      >
                        <Trash2 size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        className="p-2 h-8"
                        onClick={() => {
                          addItemCart(val.id, val.productType.id);
                          DeleteWishlistItem(val.id, val.productType.id);
                        }}
                      >
                        <ShoppingCart size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
