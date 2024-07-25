import React from "react";

const EcoProducts = () => {
  const products = [
    {
      name: "Reusable Cotton Shopping Bag",
      price: "₹150.00",
      src: "https://images.pexels.com/photos/3758495/pexels-photo-3758495.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Biodegradable Food Wraps",
      price: "₹250.00",
      src: "https://images.pexels.com/photos/4039814/pexels-photo-4039814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Organic Cotton T-shirt",
      price: "₹400.00",
      src: "https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Compostable Garbage Bags",
      price: "₹200.00",
      src: "https://images.pexels.com/photos/3962267/pexels-photo-3962267.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Organic Bamboo Cutlery Set  ",
      price: "₹180.00",
      src: "https://images.pexels.com/photos/235494/pexels-photo-235494.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Solar-Powered Phone Charger",
      price: "₹300.00",
      src: "https://images.pexels.com/photos/518530/pexels-photo-518530.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="mt-24 max-md:mt-10 max-md:max-w-full mx-auto pb-20">
      <h2 className="text-3xl font-black text-black ">
        Discover Eco Labelled Products
      </h2>
      <div className="flex gap-5 mt-14 w-full text-base text-black max-w-[1655px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

const ProductCard = ({ name, price,src }) => {
  return (
    <div className="flex flex-col flex-1 ">
      <img
        className="shrink-0 rounded-none bg-zinc-300 h-[203px] rounded-t-xl"
        src={src}
      />
      <div className="flex flex-col px-4 py-4 w-full bg-white rounded-none">
        <div className="flex gap-5 justify-between">
          <div className="font-medium">{name}</div>
          <div className="self-start mt-4 font-bold">{price}</div>
        </div>
        <button className="self-center px-6 py-1.5 mt-5 font-semibold bg-white rounded-2xl border-2 border-black border-solid max-md:px-5">
          buy
        </button>
      </div>
    </div>
  );
};

export default EcoProducts;
