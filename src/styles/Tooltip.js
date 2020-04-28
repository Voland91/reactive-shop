import styled from "styled-components";

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  span {
    visibility: hidden;
    width: 80px;
    top: 100%;
    left: 50%;
    margin-left: -40px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    text-align: center;
    padding: 3px 0;
    border-radius: 50px;
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.6s;
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;
