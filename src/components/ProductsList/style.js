import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 21rem;
  gap: 15px;
  padding-left: 5px;

  border-radius: 5px;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    overflow-x: hidden;
    overflow-y: hidden;
    flex-wrap: wrap;
    justify-content: center;

    height: 100%;
    width: 55rem;
  }

  @media screen and (max-width: 1140px) {
    overflow-y: scroll;
  }

  @media screen and (min-width: 1666px) {
    overflow-y: hidden;
  }

  @media screen and (max-width: 768px) {
    overflow-y: hidden;
  }

  .divCards {
    border: 2px solid #e0e0e0;
  }

  .divCards:hover,
  .divCards:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--color-primary);
    transform: translateY(-0.25em);
    border: 1px solid var(--color-primary);
    border-radius: 5%;
  }

  div {
    width: 16rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  div h2 {
    font-family: var(--font);
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--gray-100);
  }

  div p {
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--gray-50);
  }

  div h3 {
    font-family: var(--font);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-primary);
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--gray-0);

  img {
    width: 11rem;
    height: 11rem;
  }
`;

export const DivButton = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 5rem;
    height: 1.8rem;
    padding: 15px;

    border: 2px solid var(--color-primary);
    border-radius: 8px;
    background-color: var(--color-primary);
    color: var(--gray-0);

    cursor: pointer;
  }

  button:hover {
    filter: brightness(0.9);
  }
`;

export const ContainerInfo = styled.div`
  height: 100%;
  padding: 15px;
`;
