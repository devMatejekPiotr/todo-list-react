import styled, { css } from "styled-components";

export const ContainerBtn = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 10px;
  justify-content: flex-end;
  align-self: end;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
    align-self: normal;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.teal};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverBtn};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.disabledBtn};

      &:disabled {
        color: ${({ theme }) => theme.colors.disabledBtn};
        cursor: auto;
      }
    `}
`;
