import styled from "styled-components";

export const ItemWrapper = styled.div`
  height: 150px;
  background-color: white;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.4);
  overflow: hidden;

  .item_img {
    height: 140px;
    width: 60%;
    overflow: hidden;
    position: relative;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 100%;
    max-width: 90%;
  }
`;

export const Numbers = styled.div`
  flex-basis: 70%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  span {
    font-size: 1.2rem;
  }

  .total {
    font-weight: bold;
  }
`;

export const Product = styled.div`
  flex-basis: 30%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Button = styled.button`
  position: relative;
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid rgba(128, 128, 128, 0.4);
  box-shadow: 1px 1px 3px rgba(128, 128, 128, 0.4);
  font-size: 1.3rem;
  transition: 0.2s;
  cursor: pointer;
  outline: none;

  &.btn_decrease {
    position: absolute;
    left: 57%;
    &:hover {
      background-color: #fa6472;
    }
  }
  &.btn_increase {
    position: absolute;
    left: 62%;
    &:hover {
      background-color: #7aea7a;
    }
  }
  &:hover {
    box-shadow: 1px 1px 3px rgba(128, 128, 128, 0.8);
  }
`;
