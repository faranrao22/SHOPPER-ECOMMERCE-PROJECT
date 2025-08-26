import Addproduct from "../components/addproduct/Addproduct";
import Listproduct from "../components/listproduct/Listproduct";

import Siderbar from "../components/sidebar/Siderbar";
import {Routes,Route} from "react-router-dom"
function Admin() {
  return (
    <div className="flex ">
      <Siderbar/>
      <Routes>
        <Route path="/addproduct" element={<Addproduct/>}/>
        <Route path="/listproduct" element={<Listproduct/>}/>
      </Routes>
   
      
    </div>
  );
}

export default Admin;
