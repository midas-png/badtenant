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

export const About = () => {
  return (
    <AboutWrapper>
      <AboutForm>
        <AboutContent>
          <AboutTitle>About the Project</AboutTitle>
          <ContentWrapper>
            <Paragraph>
              The project is designed to monitor the rating of property owners
              and tenants, as well as to submit applications for lease
              agreements. We strive to provide users with a quality service that
              will allow them to conclude profitable real estate rental deals.
            </Paragraph>
            <SectionWrapper>
              <H2Title>How the rating works</H2Title>
              <Paragraph>
                We use the average rating method to evaluate user ratings. This
                method is based on analyzing the opinions of other users who
                have rated property owners and tenants. The resulting average
                rating allows users to quickly determine how comfortable they
                will be working with a specific property owner or tenant.
              </Paragraph>
            </SectionWrapper>
            <SectionWrapper>
              <Paragraph>
                We are constantly working to improve our service and add new
                features. We strive to create the most comfortable conditions
                for our users to work in and do everything possible to ensure
                that each of them is satisfied with the result.
              </Paragraph>
              <Paragraph>
                If you have any questions or suggestions for improving our
                service, please contact us. We are always happy to communicate
                and ready to help you with any questions. Thank you for choosing
                our service and we look forward to further cooperation!
              </Paragraph>
            </SectionWrapper>
          </ContentWrapper>
        </AboutContent>
      </AboutForm>
    </AboutWrapper>
  );
};
