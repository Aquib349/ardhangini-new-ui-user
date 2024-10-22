import { useNavigate } from "react-router-dom";
import { Button } from "../component/ui/button";

function Welcome() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative h-[600px] z-20">
        {/* Video Background with lower opacity */}
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover -z-10 opacity-75"
        >
          <source src="assets/vedio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content over the video */}
        <div className="relative z-10">
          <div className="flex-1 items-center justify-center w-[80%] h-screen relative">
            <p className="text-[3rem] leading-[3rem] my-3 font-semibold text-black/70 pl-40 pt-44">
              Discover a <br /> World Of Best <br /> Saree's
            </p>
            <Button
              variant="outline"
              className="text-white font-medium rounded h-9 bg-black/70 cursor-pointer ml-40 z-20 relative mt-2"
              onClick={() => navigate("/new-comers")}
            >
              See All Collections
            </Button>
            <img
              src="assets/ban1.png"
              alt="banner"
              className="w-[70%] absolute bottom-40 z-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
