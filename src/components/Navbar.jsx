import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {logout} from "../redux/userRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  border-bottom: 1px solid
`;

const Wrapper = styled.div`
  padding: 10px 20px;
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
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault(); // to prevent the page from refreshing
    dispatch(logout())
  };
  return (
    <Container>
      <Wrapper>
        <Left>
        </Left>
        <Center>
          <Logo>Shop</Logo>
        </Center>
        <Right>
          {/*<MenuItem >*/}
          {/*  <Link to="/register">*/}
          {/*    REGISTER*/}
          {/*  </Link>*/}
          {/*</MenuItem>*/}
          <Link to="/">
            <MenuItem onClick={handleClick}>
              SIGN OUT
            </MenuItem>
          </Link>
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
