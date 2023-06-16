import {
  AboutWrapper,
  AboutForm,
  AboutTitle,
  AboutContent,
  ContentWrapper,
  H2Title,
  Paragraph,
  SectionWrapper,
} from './styles';

export const Contacts = () => {
  return (
    <AboutWrapper>
      <AboutForm>
        <AboutContent>
          <AboutTitle>How to contact us</AboutTitle>
          <ContentWrapper>
            <SectionWrapper>
              <H2Title>Support</H2Title>
              <Paragraph>supportbadtenant@gmail.com</Paragraph>
              <H2Title>Bug report</H2Title>
              <Paragraph>bugbadtenant@gmail.com</Paragraph>
            </SectionWrapper>
          </ContentWrapper>
        </AboutContent>
      </AboutForm>
    </AboutWrapper>
  );
};
