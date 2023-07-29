import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowDropdown } from "react-icons/io";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";



const Header = () =>  (
  <Container>
    <Div1>
      <a href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </a>
    </Div1>
     <Div2>
     <Div2>
      <li>
        <Aitem href="#projects">
          <NavLink>Projects</NavLink>
        </Aitem>
      </li>
      <li>
        <Aitem href="#tech">
          <NavLink>Technologies</NavLink>
        </Aitem>
      </li>        
      <li>
        <Aitem href="#about">
          <NavLink>About</NavLink>
        </Aitem>
      </li>        
    </Div2>
      
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/De-Vin">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/vinay-avvaru-750712154/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons>
          <ImageDp src="https://i.ibb.co/YDSZKCF/90684669399.png"/>
        </SocialIcons>

      </Div3> 
    </Container>
);

const Aitem = styled.a`
margin: 0 1rem;
@media screen and (max-width:640px){
margin:0 0;
  
};
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media screen and (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media screen and (max-width: 640px) {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

const ImageDp = styled.img`
  height: 3rem;
  object-fit: contain;
  border-radius: 0.5rem;
  &:hover {
    transform: scale(3);
  }
`;

const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 640px) {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 640px) {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media screen and (max-width: 640px) {
    padding: 0.4rem 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 640px) {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export default Header;
