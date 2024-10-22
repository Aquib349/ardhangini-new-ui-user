import { Card, CardContent } from "../ui/card";

function Commitment() {
  const item = [
    { id: 1, name:"Free Shipping", image: "assets/logo-1.jpg" },
    { id: 2, name:"Cash On Delivery", image: "assets/logo-2.jpg" },
    { id: 3, name:"Make In India", image: "assets/logo-3.jpg" },
    { id: 4, name:"Easy Returns And Exchanges", image: "assets/logo-4.jpg" },
  ];
  return (
    <>
      <section className="commitment">
        <div className="main py-16">
          <h1 className="text-3xl text-center font-medium">
            Ardhangini Commitment
          </h1>
          <div className="flex gap-4 justify-center items-center mt-16">
            {item.map((val) => (
              <Card key={val.id} className="w-[300px] bg-transparent border-none shadow-none">
                <CardContent className="border-none p-0">
                  <div className="images">
                    <img src={val.image} alt="images" className="rounded-t-md"/>
                  </div>
                    <p className="text-center py-2 font-medium">{val.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Commitment;
