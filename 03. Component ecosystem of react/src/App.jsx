import { Card } from "./components/Card.jsx";
const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
        <h1 className="font-bold border-2 items-center flex justify-center mt-1.5 bg-blue-500 text-white w-60 rounded-xl h-15 text-xl">
          Integrating Tailwind Css
        </h1>
        <div className="flex gap-2">
          <Card title="Buy Python Course" />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default App;
