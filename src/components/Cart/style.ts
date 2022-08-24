import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;
  height: 30rem;

  .divH1 {
    background-color: var(--color-primary);
    border-radius: 5px 5px 0px 0px;
    padding: 15px;
  }

  .divH1 h1 {
    font-family: var(--font);
    color: var(--gray-0);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  .divProductsCart {
    border-radius: 0px 0px 5px 5px;
    background-color: var(--gray-0);
    padding: 20px 10px;
    gap: 21px;
    max-height: 15rem;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
  }

  .imgProducts {
    background-color: var(--gray-20);
    width: 5rem;
    height: 5rem;
    border-radius: 8px;
  }

  .divProductsCart div {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }

  .divNameAndCategory {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;
    overflow: hidden;
    width: 7rem;
  }

  .divNameAndCategory h2 {
    font-family: var(--font);
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: var(--gray-100);
    white-space: nowrap;
  }

  .divNameAndCategory p {
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--gray-50);
  }

  .buttonCart {
    font-family: var(--font);
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--gray-100);
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    position: relative;
  }
  .buttonCart::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    left: 50%;
    width: 0%;
    background-color: var(--color-primary);
    transition: 0.4s ease-out;
  }
  .buttonCart:hover::after {
    left: 0;
    width: 100%;
  }
  .buttonCart:hover {
    color: var(--color-primary);
  }
`;

export const ContainerTotalPrice = styled.div`
  width: 100%;
  height: 5.4rem;
  background-color: var(--gray-0);
  border-radius: 0px 0px 5px 5px;
  border-top: 3px solid var(--gray-20);
  padding-top: 15px;

  div h2 {
    font-family: var(--font);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--gray-100);
  }

  div h3 {
    font-family: var(--font);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--gray-50);
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }

  .buttonRemoveAll {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 100%;
    height: 3rem;
    background: var(--gray-20);
    border: 2px solid var(--gray-20);
    border-radius: 8px;

    cursor: pointer;
  }
  .buttonRemoveAll:hover,
  .buttonRemoveAll:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--color-primary);
    transform: translateY(-0.25em);
    /* border: 1px solid var(--color-primary); */
    /* border-radius: 2%; */
  }

  .divButtonRemoveAll {
    padding-top: 15px;
  }
`;

export const DivCartVazio = styled.div`
  border-radius: 0px 0px 5px 5px;
  background-color: var(--gray-0);

  width: 100%;
  height: 5.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-top: 30px;

  h1 {
    font-family: var(--font);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--gray-100);
  }

  h3 {
    font-family: var(--font);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--gray-50);
  }
`;
