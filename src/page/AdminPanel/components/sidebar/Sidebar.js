import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaFile, FaFolderPlus, FaTasks } from "react-icons/fa";
import { TiFolderAdd } from "react-icons/ti";
import { SiSimpleanalytics } from "react-icons/si";
import { BiCode } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import "./style.css";
import showcasebg from "../../../../assets/ShowcaseBG.png";
import "typeface-roboto"
const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState(1);
  return (
    <div className="parentDiv">
      <Section>
        <div className="links">
          <ul>
          <li
              onClick={() => setCurrentLink(1)}
              className={currentLink === 1 ? "active" : ""}
            >
              <a href="#">
                <SiSimpleanalytics />
                <span>Dashboard</span>
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(2)}
              className={currentLink === 2 ? "active" : ""}
            >
              <a href="#">
                <FaTasks />
                <span>Tasks</span>
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(3)}
              className={currentLink === 3 ? "active" : ""}
            >
              <a href="#">
                <FaFolderPlus />
                <span>Projects</span>
              </a>
            </li>

            <li
              onClick={() => setCurrentLink(4)}
              className={currentLink === 4 ? "active" : ""}
            >
              <a href="#">
                <MdOutlineBrandingWatermark />
                <span>Watermark</span>
              </a>
            </li>

            <li
              onClick={() => setCurrentLink(5)}
              className={currentLink === 5 ? "active" : ""}
            >
              <a href="#">
                <BiCode />
                <span>API</span>
              </a>
            </li>

            <li
              onClick={() => setCurrentLink(6)}
              className={currentLink === 6 ? "active" : ""}
            >
              <a href="#">
                <RiAccountCircleFill />
                <span>Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
};

const Section = styled.section`
  background-color: rgba(8, 28, 59, 0.877);
  background-image: url(${showcasebg});
  height: 100vh;
  width: 240px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: 1rem 0rem;
  gap: 2rem;

  .links {
    display: flex;
    width:100%;

    ul {
      margin-top: 60px;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
      width:100%;
      
      li {
        padding: 0.5rem 1rem;
        border-radius: 8px 0px 0px 8px;
        font-size: 18px;
        width:100%;
        display: flex;
        justify-content: flex-start;

        &:hover {
          a {
            color: #c6f985;
          }
          cursor: pointer; 
        }

        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
          padding: 10px;
          span{
            font-family: Roboto;
            font-weight: 400;
            font-style: normal;
          }
        }
      }
      .active {
        background: rgba(251, 251, 251, 0.25);
      }
    }
  }
`;

export default Sidebar;

