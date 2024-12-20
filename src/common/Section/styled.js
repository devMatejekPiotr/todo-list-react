import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ feature = false }) => (feature ? "row" : "column")};
  margin-top: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  border-top: 5px solid ${({ theme }) => theme.colors.grey};
  padding: 20px 0px 20px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
  }
`;

export const SectionHeader = styled.h2`
  align-self: start;
  margin: 0;
  word-break: normal;
  margin: ${({ feature = false }) => (feature ? "0px" : "0px 0px 20px")};
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-bottom: 20px;
  }
`;
