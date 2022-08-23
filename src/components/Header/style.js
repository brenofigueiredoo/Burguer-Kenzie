import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-0);
  gap: 5px;

  height: 6rem;
  box-shadow: -1px -7px 8px 12px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: -1px -7px 8px 12px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: -1px -7px 8px 12px rgba(0, 0, 0, 0.14);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    height: 4.5rem;
  }
`;

export const DivInput = styled.div`
  height: 2.5rem;
  background: #ffffff;
  border: 2px solid var(--gray-20);
  border-radius: 8px;
  width: 15.02rem;

  display: flex;
  align-items: center;
  padding: 2px 18px 2px 2px;
  justify-content: space-between;

  input {
    height: 2rem;
    border: none;
    padding-top: 4px;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const Button = styled.button`
  border: none;
  color: var(--color-primary);
  background-color: transparent;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }
`;
