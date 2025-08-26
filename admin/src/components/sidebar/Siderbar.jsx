import add_product_icon from "../../assets/Product_Cart.svg";
import list_product_icon from "../../assets/Product_list_icon.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className=" flex flex-col w-full lg:max-w-[250px] lg:h-screen bg-white shadow-sm z-10">
      <div className="px-5 pt-5">
        <Link to="/addproduct">
          <div className="flex items-center gap-3 py-2 px-3 rounded-md bg-[#f6f6f6] hover:bg-gray-200 transition-all mb-3 cursor-pointer">
            <img src={add_product_icon} alt="Add Product" className="w-6 h-6" />
            <p className="text-sm font-medium">Add Product</p>
          </div>
        </Link>

        <Link to="/listproduct">
          <div className="flex items-center gap-3 py-2 px-3 rounded-md bg-[#f6f6f6] hover:bg-gray-200 transition-all cursor-pointer">
            <img src={list_product_icon} alt="Product List" className="w-6 h-6" />
            <p className="text-sm font-medium">Product List</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
