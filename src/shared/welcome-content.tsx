import { Button } from "../component/ui/button";

function Welcome() {
  return (
    <>
      <div className="relative h-[600px]">
        {/* Video Background with lower opacity */}
        {/* <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover -z-10 opacity-75"
        >
          <source src="assets/vedio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        {/* Content over the video */}
        <div className="grid grid-cols-2 pt-12 relative z-10 h-screen">
          <div className="flex items-center flex-col relative">
            <div className="w-[380px] mt-16">
              <p className="text-[3rem] leading-[3rem] my-3 font-semibold text-white">
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
              className="w-full absolute bottom-[20%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
