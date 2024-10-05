import { ShoppingCart, Star } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";

function Wishlist() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const plugin = React.useRef(
    emblaCarouselAutoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Sample sizes and colors
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = [
    { name: "Black", value: "#000" },
    { name: "Beige", value: "#D3C2A5" },
  ];
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
          {/* {Array.from({ length: 12 }).map((_, idx) => ( */}
            <div
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
                  <CarouselContent>
                    {images.map((val) => (
                      <CarouselItem key={val.id}>
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-0">
                            <img src={val.link} alt="images" className="rounded-md"/>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Product Title */}
              <h3 className="text-md font-semibold text-gray-800 pt-2 px-3">
                Women's Fabric Saree
              </h3>

              {/* Size Options */}
              <div className="px-3">
                <div className="flex space-x-2 mt-1">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border rounded px-2 py-0.5 text-sm ${
                        selectedSize === size
                          ? "bg-black text-white font-medium border-0"
                          : "border-gray-300 text-gray-600"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Options */}
              <div className="mt-2 px-3">
                <div className="flex space-x-2 mt-1">
                  {colors.map((color) => (
                    <div
                      key={color.name}
                      onClick={() => setSelectedColor(color.value)}
                      className={`w-5 h-5 rounded-full cursor-pointer border ${
                        selectedColor === color.value
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color.value }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Price and Action */}
              <div className="mt-2 flex items-center justify-between px-3">
                <div>
                  <p className="text-lg font-semibold">$45.95</p>
                </div>
                <Button variant="outline" className="p-2 h-8">
                  <ShoppingCart size={16} />
                </Button>
              </div>
            </div>
          {/* ))} */}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
