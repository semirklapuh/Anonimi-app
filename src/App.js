import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";

// import "../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.css";
// import "../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "./App.css";
import NavigationBar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "./page/AdminPanel/AdminPanel";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/home" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
