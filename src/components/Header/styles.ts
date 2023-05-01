import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    min-height: 7.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.columbiaBlue};
    padding: 0 1rem;
    box-shadow: ${theme.boxShadow};
  `}
`;

export const HamburgerBtn = styled.div`
  ${({ theme }) => css`
    width: 6rem;
    height: 6rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all ease 0.3s;

    @media ${theme.media.large} {
      display: none;
    }

    &:hover {
      background-color: ${theme.colors.columbiaBlue};
    }

    span {
      position: absolute;
      width: 3rem;
      height: 0.6rem;
      background-color: ${theme.colors.mintCream};

      &:nth-child(1) {
        transform: translateY(-1rem);
      }

      &:nth-child(2) {
        transform: translateY(1rem);
      }
    }
  `}
`;

export const AddBtn = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    background-color: ${theme.colors.ultraViolet};
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.borderRadius};
    cursor: pointer;
    box-shadow: ${theme.boxShadow};

    &:hover {
      background-color: ${theme.colors.columbiaBlue};
      color: ${theme.colors.ultraViolet};
    }

    p {
      padding: 0 2rem;
      z-index: 1;
    }
  `}
`;

export const PlusSign = styled(HamburgerBtn)`
  ${({ theme }) => css`
    background-color: transparent;
    width: 6rem;
    height: 6rem;

    @media ${theme.media.large} {
      display: flex;
    }

    span {
      height: 0.1rem;

      &:nth-child(1) {
        transform: translateY(0);
      }

      &:nth-child(2) {
        transform: rotate(90deg);
      }
    }
  `}
`;

export const UserInfo = styled.nav`
  ${({ theme }) => css`
    display: none;
    order: 2;
    position: relative;
    font-size: 1.6rem;

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin: 0 0.5rem;
    }

    a {
      cursor: pointer;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.columbiaBlue};
      
      &:not(:last-child) {
        margin-right: 1rem;
      }

      &:hover {
        color: ${theme.colors.mintCream};
      }
    }

    div {
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;

      span {
        width: 0;
        height: 0;
        margin-left: 5px;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;

        border-top: 7px solid ${theme.colors.ultraViolet};
      }
    }

    @media ${theme.media.large} {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;
      align-items: center;
    }
  `}
`;

export const DropDownMenu = styled.nav`
  ${({ theme }) => css`
    position: absolute;
    bottom: -1rem;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.ultraViolet};
    border-radius: ${theme.borderRadius};
    padding: 0 1rem;

    a:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.columbiaBlue};
    }
  `}
`;