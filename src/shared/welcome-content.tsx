import { Button } from "../component/ui/button";

function Welcome() {
  return (
    <>
      <div className="welcome">
        <div className="main grid grid-cols-2 pt-12">
          <div className="flex items-center flex-col relative">
            <div className="w-[380px] mt-14">
              <p className="text-[3rem] leading-[3rem] my-3 font-semibold">
                Discover a World Of Best Saree's
              </p>
              <Button
                variant="outline"
                className="text-white font-medium rounded h-9 bg-black cursor-pointer"
              >
                See All Collections
              </Button>
            </div>
            <img
              src="assets/ban1.png"
              alt="banner"
              className="w-full absolute bottom-16"
            />
          </div>
          <div className="flex items-center justify-center relative">
            <img
              src="assets/saree.png"
              alt="saree"
              className="w-[24rem] ml-12 z-10 pt-6 pb-6"
              style={{
                position: "relative",
                zIndex: 1,
                filter: "brightness(1.2)",
                backgroundSize: "cover",
                backgroundBlendMode: "overlay",
              }}
            />
            <img
              src="assets/ban.png"
              alt="banner"
              className="absolute -top-6 opacity-40"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
