export const Card = ({ title = "Default" }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow ">
      <img
        className="w-full h-45 object-cover"
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww"
        alt="catImg"
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-lg font-semibold mx-auto text-gray-800">{title}</h1>
        <p className="mt-2 text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          accusamus deserunt iusto commodi qui soluta autem eaque perferendis
          iure expedita aperiam veniam omnis optio assumenda quod sed illum
          nisi, quidem repudiandae ipsa amet blanditiis? Neque molestiae
          deleniti omnis voluptate culpa.
        </p>
        <button className="mt-4 w-60 mx-auto bg-blue-700 rounded-lg text-white py-2 hover:bg-blue-400">
          Buy Now
        </button>
      </div>
    </div>
  );
};
