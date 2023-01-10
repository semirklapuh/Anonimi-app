import React, { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { RiDownloadLine } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import LogoImage from "../../../../assets/logo.png";
import "./style.css";
import axios from "axios";

function GetData() {

  const [onLoad, setOnLoad] = useState(true);
  const [produkti, setProdukti] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('https://localhost:8001/api/v1/image/get-all-user-images?username=semir.klapuh@meshmind.io')
         .then(response => {setUserData(response.data)
        });
        
// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

useEffect(() => {
        
  onLoad ?
   getProdukti() 
   : console.log("radi ponovoo");

}, [userData]);
 

  function getProdukti()
  {
    userData !== null ?
        userData.map(element => {
          console.log("Semir dohvaceni podaci: " + element.size)
          setProdukti((preData)=>
            [...preData,{
                 preview: <div> <img
            alt=""
            src={`data:image/jpeg;base64,${element.image}`}
            width="40"
            height="25"
          /></div>,
            project: "Project1",
            date: "12.02.2022.",
            taskName: element.filename,
            service: "faces, plates",
            size: element.size,
            status: <div className="tabelCompletedIcon"><GoPrimitiveDot style={{fill:"#85D952"}}/><span style={{paddingLeft:"5px"}}>Completed</span></div>,
            download: <div className="tabelDownloadIcon"><RiDownloadLine/></div>,
            imageCount: "1"
            }] 
          )
          setOnLoad(false) 
        })
        
       
        :console.log("nije uradjen update userData")     

  }


//   const submitAnonymize = async () => {
//     await axios.get('https://localhost:8001/api/v1/image/get-all-user-images?username=semirklapuh@meshmind.io')
//     .then(response => {setUserData(response.data)});
// };


  

  const products = [
    {
      preview: 1,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "George",
      service: "Monkey",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 2,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "Jeffrey",
      service: "Giraffe",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 3,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "Alice",
      service: "Giraffe",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 4,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "Foster",
      service: "Tiger",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 5,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "Tracy",
      service: "Bear",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 6,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "Joesph",
      service: "Lion",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 7,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "Tania",
      service: "Deer",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 8,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "Chelsea",
      service: "Tiger",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 9,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "Benedict",
      service: "Tiger",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 10,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "Chadd",
      service: "Lion",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 11,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "Delphine",
      service: "Deer",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 12,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "Elinore",
      service: "Bear",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 13,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "Stokes",
      service: "Tiger",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: 14,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "Tamara",
      service: "Lion",
      size: "120MB",
      status: "completed",
      download: "download",
      imageCount: "1",
    },
    {
      preview: <div> <img
      alt=""
      src={LogoImage}
      width="40"
      height="25"
    /></div>,
      project: "Project1",
      date: "12.02.2022.",
      taskName: "ImageTest123",
      service: "faces, plates",
      size: "12 MB",
      status: <div className="tabelCompletedIcon"><GoPrimitiveDot style={{fill:"#85D952"}}/><span style={{paddingLeft:"5px"}}>Completed</span></div>,
      download: <div className="tabelDownloadIcon"><RiDownloadLine/></div>,
      imageCount: "1",
    },
  ];

  const columns = [
    { dataField: "preview", text: "Preview", sort: true },
    { dataField: "project", text: "Project", sort: true },
    { dataField: "date", text: "Date", sort: true },
    { dataField: "taskName", text: "Task name", sort: true },
    { dataField: "service", text: "Services", sort: true },
    { dataField: "size", text: "Size", sort: true },
    { dataField: "status", text: "Status", sort: true },
    { dataField: "download", text: "Download", sort: true },
    { dataField: "imageCount", text: "Image count", sort: true },
  ];

  const defaultSorted = [
    {
      dataField: "taskName",
      order: "desc",
    },
  ];

  const pagination = 
  produkti.length >= 5 ?
 ( paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  })) : null;



  return (
    <div className="crud-box">
      
      {
        console.log("produkti: " + produkti)
      }
      {
        console.log("products: " + products)
      }

        { 
      produkti.length > 0 ?
      <div className="tabela">
        <BootstrapTable
          bootstrap4
          keyField="taskName"
          data={produkti}
          columns={columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
          
        />
      </div>   :console.log("nije uradjen update userData")   }   
    </div>
  );
}

export default GetData;
