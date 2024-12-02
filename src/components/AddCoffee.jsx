import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">Add New Coffee</h1>
        <p className="text-gray-500 text-center mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter coffee name"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
            {/* Chef */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Available Quantity
              </label>
              <input
                name="quantity"
                type="text"
                placeholder="Available Quantity"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
            {/* Supplier */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Supplier
              </label>
              <input
                name="supplier"
                type="text"
                placeholder="Enter coffee supplier"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
            {/* Taste */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Taste
              </label>
              <input
                name="taste"
                type="text"
                placeholder="Enter coffee taste"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <input
                name="category"
                type="text"
                placeholder="Enter coffee category"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
            {/* Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Details
              </label>
              <input
                name="details"
                type="text"
                placeholder="Enter coffee details"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
            {/* Photo */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter photo URL"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
