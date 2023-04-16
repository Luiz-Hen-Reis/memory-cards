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

export const RightSide = styled.div`
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

export const PlusBtn = styled(HamburgerBtn)`
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
    cursor: pointer;

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin: 0 0.5rem;
    }

    p {
      font-size: 1.6rem;
      margin-right: 5px;
    }

    button {
      font-size: ${theme.font.sizes.small};
      background-color: ${theme.colors.ultraViolet};
      padding: 0 1rem;
      border-radius: ${theme.borderRadius};
      cursor: pointer;
    }

    @media ${theme.media.large} {
      display: flex;
      align-items: center;
    }
  `}
`;

export const MyDeck = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    background-color: ${theme.colors.ultraViolet};
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
    cursor: pointer;

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

export const MyDeckBtn = styled(HamburgerBtn)`
  ${({ theme }) => css`
    @media ${theme.media.large} {
      display: flex;
      transition: all ease 0.3s;

      span {
        &:nth-child(1) {
          width: 1rem;
        }

        &:nth-child(3) {
          width: 2rem;
        }

        &:nth-child(2) {
          width: 3rem;
        }
      }
    }
  `}
`;
