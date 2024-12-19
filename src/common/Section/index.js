import { StyledSection, SectionHeader } from "./styled";

export const Section = ({ title, body }) => {
  return (
    <StyledSection>
      <SectionHeader>{title}</SectionHeader>
      {body}
    </StyledSection>
  );
};
