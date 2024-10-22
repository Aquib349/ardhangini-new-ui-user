import emblaCarouselAutoplay from "embla-carousel-autoplay";
import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { TiStarFullOutline } from "react-icons/ti";
import { useNewComers } from "../../hooks/use-new-comers";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "../ui/pagination";

function NewComers() {
  const { products, addItemCart, addItemWishlist } = useNewComers();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // No need to make this state if it's constant
  const plugin = React.useRef(
    emblaCarouselAutoplay({ delay: 2000, stopOnInteraction: true })
  );

  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Calculate the products for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="pb-16">
        <div className="new-comers grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {currentProducts.map((val) => (
            <div key={val.id} className="main p-4">
              <div className="w-full max-w-xs mx-auto bg-white rounded-lg shadow-md border">
                <div className="flex justify-center">
                  <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    onMouseEnter={plugin.current?.stop}
                    onMouseLeave={plugin.current?.reset}
                  >
                    <CarouselContent className="h-[300px]">
                      {(val.productImages.length > 0
                        ? val.productImages
                        : []
                      ).map((img, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-0">
                              <img
                                src="https://plus.unsplash.com/premium_photo-1664303775888-6bc50a8d13a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt={`product-${imgIndex}`}
                                className="object-cover rounded-md"
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-800 pt-2 px-3 text-start">
                    {val.productName}
                  </h3>
                  <div className="pt-2 pr-3">
                    <Badge className="h-5 px-1 rounded-sm font-normal flex gap-1 items-center bg-green-500 hover:bg-green-500">
                      <span className="font-medium">3.4</span>
                      <TiStarFullOutline className="font-bold mb-0.5" />
                    </Badge>
                  </div>
                </div>

                <div className="mt-2 px-3">
                  <div className="flex space-x-2 mt-1">
                    <div
                      onClick={() => setSelectedColor(val.colour.name)}
                      className={`w-4 h-4 rounded-sm cursor-pointer border ${
                        selectedColor === val.colour.name
                          ? "border-black border-2"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: val.colour.name }}
                    ></div>
                  </div>
                </div>

                <div className="mt-2 px-3">
                  <p className="text-xs">{val.productDescription}</p>
                </div>

                <div className="mt-2 flex items-center justify-between px-3">
                  <div className="flex items-center gap-x-2">
                    {val.offerprice ? (
                      <>
                        <p className="text-sm font-semibold text-slate-500 line-through">
                          ₹{val.actualprice}
                        </p>
                        <p className="text-sm font-medium">₹{val.offerprice}</p>
                      </>
                    ) : (
                      <p className="text-sm font-semibold">
                        ₹{val.actualprice}
                      </p>
                    )}
                  </div>

                  <div className="space-x-0">
                    <Button
                      variant="outline"
                      className="p-2 h-8 border-none"
                      onClick={() =>
                        addItemWishlist(val.id, val.productType.id)
                      }
                    >
                      <Heart size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      className="p-2 h-8 border-none"
                      onClick={() => addItemCart(val.id, val.productType.id)}
                    >
                      <ShoppingCart size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              />
            </PaginationItem>
            {[...Array(totalPages).keys()].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(page + 1)}
                  isActive={currentPage === page + 1}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

export default NewComers;
