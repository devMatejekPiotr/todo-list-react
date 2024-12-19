import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  gap: 10px;
  align-self: stretch;
  border-top: 2px solid ${({ theme }) => theme.colors.grey};
  padding: 20px 20px 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Button = styled.button`
  background-color: teal;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
    background-color: ${({ theme }) => theme.colors.formBtnHover};
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.colors.grey};

  &:focus {
    border: 2px solid black;
    outline: none;
  }
`;
