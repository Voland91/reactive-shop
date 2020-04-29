import styled from "styled-components";

export const CatalogBtn = styled.button`
  &.catalog {
    background: #f38c33;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(128, 128, 128, 0.2);
    text-align: center;
    padding: 5px 15px;
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      background: #f67f19;
      box-shadow: 2px 2px 6px rgba(128, 128, 128, 0.6);
    }
  }
`;
