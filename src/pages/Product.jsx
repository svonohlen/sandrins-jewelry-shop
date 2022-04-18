import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import imgEarring from "../images/earring3.jpg";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid grey;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={imgEarring} />
        </ImgContainer>
        <InfoContainer>
          <Title>Flower Hoops</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            magna neque, facilisis nec egestas id, rutrum vel ante. Phasellus
            aliquet purus a vulputate vestibulum. Quisque consectetur faucibus
            ipsum ac commodo. Nulla dictum magna viverra quam lobortis, vel
            pellentesque lorem hendrerit. Nullam tincidunt, felis vitae ornare
            feugiat, purus enim tincidunt arcu, quis tristique nisi orci at mi.
            Proin tincidunt ex libero, at cursus est maximus sed. Fusce posuere
            sed elit vitae gravida. Maecenas efficitur erat et placerat blandit.
            Quisque ligula ligula, finibus in porttitor vel, malesuada ac ipsum.
          </Desc>
          <Price>CAD 49.90</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="gold" />
              <FilterColor color="silver" />
              <FilterColor color="pink" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Small</FilterSizeOption>
                <FilterSizeOption>Medium</FilterSizeOption>
                <FilterSizeOption>Large</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
