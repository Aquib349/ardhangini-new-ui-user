import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

function Categories() {
  const navigate = useNavigate();
  return (
    <>
      <section className="categories">
        <div className="main w-[80%] mx-auto mt-[6rem] mb-12">
          <h1 className="text-center text-3xl font-medium">New Products</h1>
          <p className="text-center text-gray-500 pt-4 text-sm">
            Explore our exquisite new collection of sarees, blending traditional
            elegance with contemporary designs. <br /> From vibrant silks to
            graceful cottons, <br /> each piece is crafted to add timeless
            beauty to your wardrobe.
          </p>
          <div className="flex justify-center mt-12">
            <Button onClick={() => navigate('/new-comers')}>View More Products</Button>
          </div>
          <div className="flex justify-between pt-10">
            {/* First item */}
            <div className="relative">
              <img
                src="assets/img1.jfif"
                alt="Yellow Wedding Sarees"
                className="rounded-lg"
              />
              <figcaption className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 hover:bg-opacity-30 text-white flex flex-col justify-center items-center rounded-lg">
                <h2 className="text-2xl font pb-2">Top Friday</h2>
                <h3 className="text-2xl">Yellow Wedding Sarees</h3>
                <Button
                  variant="outline"
                  className="mt-2 font-semibold bg-transparent text-xs h-8"
                >
                  Buy It Now
                </Button>
              </figcaption>
            </div>

            {/* Second item */}
            <div className="relative">
              <img
                src="assets/img2.jpg"
                alt="Red Wedding Sarees"
                className="rounded-lg"
              />
              <figcaption className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 hover:bg-opacity-30 text-white flex flex-col justify-center items-center rounded-lg">
                <h2 className="text-2xl font pb-2">Black Friday</h2>
                <h3 className="text-2xl">Red Wedding Sarees</h3>
                <Button
                  variant="outline"
                  className="mt-2 font-semibold bg-transparent text-xs h-8"
                >
                  Buy It Now
                </Button>
              </figcaption>
            </div>

            {/* Third item */}
            <div className="relative">
              <img
                src="assets/img3.jpg"
                alt="Wedding Sarees"
                className="rounded-lg"
              />
              <figcaption className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 hover:bg-opacity-30 text-white flex flex-col justify-center items-center rounded-lg">
                <h2 className="text2xl font pb-2">10% Off</h2>
                <h3 className="text-2xl">Wedding Sarees</h3>
                <Button
                  variant="outline"
                  className="mt-2 font-semibold bg-transparent text-xs h-8"
                >
                  Buy It Now
                </Button>
              </figcaption>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
