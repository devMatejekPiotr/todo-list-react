import { StyledSection, SectionHeader } from "./styled";

export const Section = ({ title, body, feature }) => {
  return (
    <StyledSection feature={feature}>
      <SectionHeader feature={feature}>{title}</SectionHeader>
      {body}
    </StyledSection>
  );
};
