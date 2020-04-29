import styled from "styled-components";

export const Header = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin: 0;
`;

export const DetailsWidget = styled.div`
  position: relative;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.4);

  .column_left {
    width: 400px;
    margin: 0 20px;
  }

  .column_right {
    flex-grow: 1;
    margin: 0 20px;

    .buttons {
      display: flex;
      align-items: flex-end;
      flex-direction: column-reverse;

      .catalog {
        width: 300px;
      }
    }
  }

  .add_to_cart {
    margin-top: 20px;
    span {
      font-size: 1.7rem;
      color: #00a1b4;
      margin-right: 20px;
    }
  }

  .category {
    text-align: center;
    text-transform: uppercase;
    margin: 0;
  }
  .wrapper {
    display: flex;

    .img_container {
      min-width: 400px;
      overflow: hidden;
      position: relative;
    }

    img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      max-height: 100%;
      max-width: 100%;
    }

    p {
      font-size: 1.2rem;
      padding: 25px;
      margin: 0;
      text-align: justify;
    }
  }

  button {
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(128, 128, 128, 0.2);
    text-align: center;
    padding: 10px 20px;
    font-size: 1.2rem;
    color: white;
    transition: 0.3s;
    font-family: "Catamaran", sans-serif;
    font-weight: bold;
    background-color: rgb(81, 156, 218);
    border: none;
    cursor: pointer;

    &:hover {
      background-color: rgb(24, 129, 216);
      box-shadow: 2px 2px 6px rgba(128, 128, 128, 0.6);
    }
  }
`;

export const Technical = styled.div`
  h3 {
    text-transform: 1.4rem;
    letter-spacing: 1px;
  }

  ul {
    list-style: disc;
  }

  ul li {
    letter-spacing: 1px;
    font-size: 1.1rem;

    span {
      font-weight: bold;
    }
  }
`;
