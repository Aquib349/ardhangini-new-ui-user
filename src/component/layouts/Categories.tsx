function Categories() {
  return (
    <>
      <section className="categories">
        <div className="main w-[80%] mx-auto my-12">
          <div className="flex justify-between">
            <div className="relative">
              <img src="assets/img1.jfif" alt="image" />
              <figcaption className="absolute top-[50%] left-[20%]">
                <h2 className="">Top Friday</h2>
                <h2 className="">Yellow Wedding Sarees</h2>
              </figcaption>
            </div>
            <div className="relative">
              <img src="assets/img2.jpg" alt="image" />
              <figcaption className="absolute top-[50%] left-[20%]">
                <h2 className="">Top Friday</h2>
                <h2 className="">Yellow Wedding Sarees</h2>
              </figcaption>
            </div>
            <div className="relative">
              <img src="assets/img3.jpg" alt="image" />
              <figcaption className="absolute top-[50%] left-[20%]">
                <h2 className="">Top Friday</h2>
                <h2 className="">Yellow Wedding Sarees</h2>
              </figcaption>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
