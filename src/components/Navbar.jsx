import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", margin: "0px 5px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  margin-left: 25px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-content: center;
  ${mobile({ padding: "3px", margin: " 0px 10px" })}
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;
const SearchButton = styled.button`
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
`;

const Icon = styled.div`
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    color: black;
  }
`;

const Results = styled.div`
  padding: 0px;
`;

const handleSearch = (e) => {
  let results = [];
  let input = e.target.value;
  if (input.length);
  console.log(input.length);
};

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity); // The useSelector() hook extracts state data from the Redux store using a selector function each time the state is updated, subscribes react component to changes in store and forces re-render if result changes

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <SearchWrapper>
              <Input
                type="search"
                placeholder="Search"
                onChange={handleSearch}
              />
              <SearchButton>
                <Icon>
                  <Search />
                </Icon>
              </SearchButton>
            </SearchWrapper>
            <Results></Results>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SANDRIN.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
