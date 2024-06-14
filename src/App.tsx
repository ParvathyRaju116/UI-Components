import Button from "./components/Botton";
import Card from "./components/Card";

function App() {
  const cardData = [
    { head: "Order Placed", text: "Lorem ipsum dolor sit amet", count: "100",icon:"fa-solid fa-cart-shopping" },
    { head: "Processing", text: "Lorem ipsum dolor sit amet", count: "100" ,icon:"fa-solid fa-gear"},
    { head: "Manufacturing", text: "Lorem ipsum dolor sit amet", count: "10",icon:"fa-solid fa-industry" },
    { head: "Dispatch", text: "Lorem ipsum dolor sit amet", count: "10",icon:"fa-solid fa-truck" },
    { head: "Delivered", text: "Lorem ipsum dolor sit amet", count: "10" ,icon:"fa-solid fa-box"},
  ];

  return (
    <div className="p-10 bg-stone-50	min-h-screen	">
      <div className="mb-6 flex">
       <div className="w-8/12">
          <h1 className="text-3xl text-zinc-950	">
            <b>Order master</b>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            reprehenderit et rem ducimus adipisci.{" "}
          </p>
       </div>
       <div className="w-4/12 mt-4 flex items-end justify-end	">
        <Button size="lg"><b><i className="fa-solid fa-plus border-inherit border-2 p-1 rounded-full"></i> New Order</b></Button>
       </div>
      
      </div>
      <Card cardData={cardData} />
    </div>
  );
}

export default App;
