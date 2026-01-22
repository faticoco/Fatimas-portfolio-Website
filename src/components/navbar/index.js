import React from "react";
import { DiMeteor } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { styled, useTheme } from "styled-components";
import {
  ButtonContainer,
  GitHubButton,
  Icon,
  MobileMenu,
  MobileMenuLink,
  Nav,
  NavItems,
  NavLink,
  NavLogo,
  NavbarContainer,
} from "./navbarStyledComponents";
export const Span = styled.div`
padding;0 4px;
font-weight;bold;
font-size; 18px;
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <DiMeteor size="3rem" />
            <Span>
              <b>Fatima Bilal</b>
            </Span>
          </a>
        </NavLogo>
        <Icon>
          <FaBars
            onClick={() => {
              console.log("clicked");
              setOpen(!open);
            }}
          />
        </Icon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href="https://github.com/faticoco">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
      {open && (
        <MobileMenu open={open} isOpen={open}>
          <MobileMenuLink
            href="#about"
            onClick={() => {
              setOpen(!open);
            }}
          >
            About
          </MobileMenuLink>
          <MobileMenuLink
            href="#skills"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Skills
          </MobileMenuLink>
          <MobileMenuLink
            href="#experience"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Experience
          </MobileMenuLink>
          <MobileMenuLink
            href="#projects"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Projects
          </MobileMenuLink>
          <MobileMenuLink
            href="#education"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Education
          </MobileMenuLink>
          <GitHubButton href="https://github.com/faticoco">
            Github Profile
          </GitHubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
