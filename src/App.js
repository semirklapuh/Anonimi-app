import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";

// import "../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.css";
// import "../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "./App.css";
import NavigationBar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "./page/AdminPanel/AdminPanel";
import {Task } from "@mui/icons-material";
import Dashboard from "./page/AdminPanel/components/Dashboard/Dashboard";
import NewTask from "./page/AdminPanel/components/Tasks/NewTask/NewTask";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/home" element={<AdminPanel />} />
        <Route path="/home/1" element={<AdminPanel />} />
        <Route path="/home?key=2" element={<AdminPanel />} />
        <Route path="/home?key=1" element={<AdminPanel />} />
        <Route path="/home?key=9" element={<NewTask />} />
      </Routes>
    </div>
  );
}

export default App;
