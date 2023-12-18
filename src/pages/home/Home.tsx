import React from "react";
import styled from "styled-components";

import Button from "../../components/button/Button";

import logoImg from "../../components/header/assets/logo.svg";
import expertsImg from "../../assets/img/header/experts.png";
import learnersImg from "../../assets/img/header/learners.png";
import servicesImg from "../../assets/img/header/services.png";
import bgPhoto from "../../assets/img/bg-photo.png";
import demoPhoneImg1 from "../../assets/img/demo/phone-1.png";
import demoPhoneImg2 from "../../assets/img/demo/phone-2.png";
import demoPhoneImg3 from "../../assets/img/demo/phone-3.png";
import demoPhoneImg4 from "../../assets/img/demo/phone-4.png";
import demoPhoneImg5 from "../../assets/img/demo/phone-5.png";
import joinPhotoImg1 from "../../assets/img/join/photo-1.png";
import joinPhotoImg2 from "../../assets/img/join/photo-2.png";
import joinPhotoImg3 from "../../assets/img/join/photo-3.png";
import joinPhotoImg4 from "../../assets/img/join/photo-4.png";
import joinPhotoImg5 from "../../assets/img/join/photo-5.png";
import joinPhotoImg6 from "../../assets/img/join/photo-6.png";
import joinPhotoImg7 from "../../assets/img/join/photo-7.png";
import joinPhotoImg8 from "../../assets/img/join/photo-8.png";
import joinPhotoImg9 from "../../assets/img/join/photo-9.png";
import joinPhotoImg10 from "../../assets/img/join/photo-10.png";
import featureImg1 from "../../assets/img/features/feature-1.png";
import featureImg2 from "../../assets/img/features/feature-2.png";
import featureImg3 from "../../assets/img/features/feature-3.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;
const LabeledIcon = styled.div`
  display: flex;
  align-items: center;
`;
// const Button = styled.button`
//   border: none;
//   outline: none;
//   background: none;
//   cursor: pointer;
//   font-family: Nunito, Calibri, Arial, sans-serif;
//   &.wide {
//     min-width: 138px;
//     height: 46px;
//     border-radius: 23px;
//   }
//   &.accent {
//     background: #8726B9;
//     color: white;
//   }
//   &.bold {
//     font-weight: 700;
//   }
//   &.border {
//     border: 1px solid var(--c-accent-purple);
//   }
// `;
const HeaderLogo = styled(LabeledIcon)`
  font-family: Futura, Calibri, Arial, sans-serif;
  span {
    font-size: 24px;
    margin-left: 40px;
    margin-right: 110px;
  }
`;
const HeaderLink = styled(LabeledIcon)`
  span {
    margin-left: 12px;
  }
`;
const HeaderLinks = styled.div`
  display: flex;
  font-family: Nunito, Calibri, Arial, sans-serif;
  font-weight: 500;
  a:last-child {
    margin-left: 83px;
  }
`;
const HeaderUser = styled.div``;
const Header = styled.header`
  height: 90px;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    height: 100%;
  }
`;
const PhotoBlock = styled.section`
  background: linear-gradient(#13002c56, #13002c56),
    url("${bgPhoto}") no-repeat center center / cover; /* #13002C56 */
  height: 83vh;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 33%;
    background-image: linear-gradient(transparent, var(--c-body));
  }
  ${Container} {
    height: 80%;
    display: flex;
    align-items: center;
    padding: 0 40px;
  }
  p {
    font-family: Futura, Calibri, Arial, sans-serif;
    line-height: 1.11em;
    font-weight: 400;
    font-size: 68px;
    color: white;
    width: 531px;
  }
`;
const SectionDescription = styled.div`
  text-align: center;
  font-size: 18px;
  width: 730px;
  margin: 0 auto;
  .desc-txt-above {
    text-transform: uppercase;
    font-weight: 600;
    color: #7f30ac;
    letter-spacing: -0.03em;
  }
  .desc-txt-large {
    font-size: 52px;
    margin: 38px 0 25px;
    font-family: Futura, Calibri, Arial, sans-serif;
    line-height: 1.15em;
    color: var(--c-accent-purple);
  }
  .desc-txt-below {
    letter-spacing: -0.024em;
    line-height: 1.55em;
  }
  &.left {
    text-align: left;
    -width: auto;
    margin: initial;
  }
`;
const DemoCard = styled.div`
  --card-radius: 32px;
  padding: 32px 32px 302px;
  border-radius: var(--card-radius);
  border: 1px solid #d9d9eb;
  background: linear-gradient(#faf4ff, #f0ddff);
  position: relative;
  overflow: hidden;
  .card-title {
    font-family: Futura, Calibri, Arial, sans-serif;
    font-size: 24px;
    margin-bottom: 18px;
    line-height: 1.2em;
    color: var(--c-accent-purple);
  }
  .card-description {
    line-height: 1.62em;
    letter-spacing: -0.024em;
  }
`;
const DemoCardPhoto = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  bottom: 0;
  left: 0;
  margin-top: auto;
  --move-offset: calc(var(--card-radius) - 8px);
  img {
    border-radius: 16px 16px 0 0;
    box-shadow: 0 0 22px #8f689c59;
    position: absolute;
    bottom: 0;
  }
  .img-1,
  .img-4 {
    left: var(--move-offset);
  }
  .img-3 {
    left: 50%;
    transform: translateX(-50%);
  }
  .img-2,
  .img-5 {
    right: var(--move-offset);
  }
`;
const DemoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 47px;
  justify-content: space-between;
`;
const JoinCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  row-gap: 12px;
  img {
    border-radius: 12px;
  }
  &.left {
    img {
      align-self: flex-end;
    }
    img:nth-child(2n) {
      align-self: flex-start;
    }
  }
  &.right {
    img {
      align-self: flex-start;
    }
    img:nth-child(2n) {
      align-self: flex-end;
    }
  }
`;
const FeatureImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;
const FeatureCard = styled.div`
  text-align: center;
  border-radius: 24px;
  padding: 28px 18px;
  box-shadow: 0 0 15px #d6bee572;
  background: #fcfcfd;
  .card-title {
    letter-spacing: -0.02em;
    font-size: 24px;
    margin: 13px 0 12px;
    font-weight: 700;
    color: var(--c-accent-purple);
  }
  .card-description {
    line-height: 1.4em;
    letter-spacing: -0.024em;
  }
  ${FeatureImage} {
    margin: 0 auto;
  }
`;
const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 53px;
  row-gap: 32px;
`;
const DemoSection = styled.section`
  ${SectionDescription} {
    margin: 62px auto 81px;
  }
`;
const JoinSection = styled.section`
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 160px auto;
  }

  ${SectionDescription} {
    width: 596px;
    padding: 17px;
  }
`;
const FeaturesSection = styled.section`
  padding: 10px 0 175px;
  ${SectionDescription} {
    margin-bottom: 55px;
  }
`;
const Footer = styled.footer`
  background: var(--c-accent-purple);
  padding: 48px 0;
  color: white;
  letter-spacing: -0.01em;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 118px;
    li.domain {
      font-size: 24px;
    }
  }
  p {
    margin-top: 54px;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header>
        <Container>
          <HeaderLogo>
            <img src={logoImg} alt="Logo" />
            <span style={{ color: "var(--c-accent-purple)", fontSize: "24px" }}>
              Wisdocity
            </span>
          </HeaderLogo>
          <HeaderLinks>
            <a onClick={() => navigate("become-an-expert/registration")}>
              <HeaderLink>
                <img src={expertsImg} alt="Icon" />
                <span>Experts</span>
              </HeaderLink>
            </a>
            <a onClick={() => navigate("become-a-learner/registration")}>
              <HeaderLink>
                <img src={learnersImg} alt="Icon" />
                <span>Learners</span>
              </HeaderLink>
            </a>
          </HeaderLinks>
          <HeaderUser>
            <Button className="services">
              <img src={servicesImg} alt="Services" />
            </Button>
          </HeaderUser>
        </Container>
      </Header>
      <PhotoBlock>
        <Container>
          <p>Lorem ipsum dolor sit amet</p>
        </Container>
      </PhotoBlock>
      <DemoSection>
        <Container>
          <SectionDescription>
            <p className="desc-txt-above">
              <a>Learn Here</a>
            </p>
            <h2 className="desc-txt-large">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="desc-txt-below">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis
              nostrud exercitation.
            </p>
          </SectionDescription>
          <DemoRow>
            <DemoCard>
              <p className="card-title">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p className="card-description">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
              <DemoCardPhoto>
                <img src={demoPhoneImg1} alt="Phone" className="img-1" />
                <img src={demoPhoneImg2} alt="Phone" className="img-2" />
              </DemoCardPhoto>
            </DemoCard>
            <DemoCard>
              <p className="card-title">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p className="card-description">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
              <DemoCardPhoto>
                <img src={demoPhoneImg3} alt="Phone" className="img-3" />
              </DemoCardPhoto>
            </DemoCard>
            <DemoCard>
              <p className="card-title">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p className="card-description">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
              <DemoCardPhoto>
                <img src={demoPhoneImg4} alt="Phone" className="img-4" />
                <img src={demoPhoneImg5} alt="Phone" className="img-5" />
              </DemoCardPhoto>
            </DemoCard>
          </DemoRow>
        </Container>
      </DemoSection>
      <JoinSection>
        <Container>
          <JoinCol className="left">
            <img src={joinPhotoImg1} alt="Photo" />
            <img src={joinPhotoImg2} alt="Photo" />
            <img src={joinPhotoImg3} alt="Photo" />
            <img src={joinPhotoImg4} alt="Photo" />
            <img src={joinPhotoImg5} alt="Photo" />
          </JoinCol>
          <SectionDescription>
            <p className="desc-txt-above">Join the Best</p>
            <p className="desc-txt-large">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="desc-txt-below">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis
              nostrud exercitation.
            </p>
            <div>
              {/*<Button className="wide accent">Become an expert</Button>*/}
            </div>
          </SectionDescription>
          <JoinCol className="right">
            <img src={joinPhotoImg6} alt="Photo" />
            <img src={joinPhotoImg7} alt="Photo" />
            <img src={joinPhotoImg8} alt="Photo" />
            <img src={joinPhotoImg9} alt="Photo" />
            <img src={joinPhotoImg10} alt="Photo" />
          </JoinCol>
        </Container>
      </JoinSection>
      <FeaturesSection>
        <Container>
          <SectionDescription className="left">
            <p className="desc-txt-large">Key Features of Wisdocity</p>
            <p className="desc-txt-below">
              Wisdocity offers a range of powerful features designed to enhance
              your learning experience:
            </p>
          </SectionDescription>
          <FeatureList>
            <FeatureCard>
              <FeatureImage>
                <img src={featureImg1} alt="Icon" />
              </FeatureImage>
              <p className="card-title">Virtual Avatar</p>
              <p className="card-description">
                Interact with industry experts through lifelike virtual avatars
                for personalized guidance.
              </p>
            </FeatureCard>
            <FeatureCard>
              <FeatureImage>
                <img src={featureImg2} alt="Icon" />
              </FeatureImage>
              <p className="card-title">Wisdom Repository</p>
              <p className="card-description">
                Access a continually updated repository of expert knowledge for
                up-to-date insights.
              </p>
            </FeatureCard>
            <FeatureCard>
              <FeatureImage>
                <img src={featureImg3} alt="Icon" />
              </FeatureImage>
              <p className="card-title">Rating System</p>
              <p className="card-description">
                Rate expert responses and contribute to the improvement of the
                platform.
              </p>
            </FeatureCard>
            <FeatureCard>
              <FeatureImage>
                <img src={featureImg1} alt="Icon" />
              </FeatureImage>
              <p className="card-title">Community Support</p>
              <p className="card-description">
                Join a supportive community of learners and experts to nurture
                your growth.
              </p>
            </FeatureCard>
            <FeatureCard>
              <FeatureImage>
                <img src={featureImg2} alt="Icon" />
              </FeatureImage>
              <p className="card-title">Continuous Learning</p>
              <p className="card-description">
                Keep up with the latest industry trends and best practices.
              </p>
            </FeatureCard>
            <FeatureCard>
              <FeatureImage>
                <img src={featureImg3} alt="Icon" />
              </FeatureImage>
              <p className="card-title">Feedback Loop</p>
              <p className="card-description">
                Provide constructive feedback to help experts refine their
                advisory skills.
              </p>
            </FeatureCard>
          </FeatureList>
        </Container>
      </FeaturesSection>
      <Footer>
        <Container>
          <ul>
            <li className="domain">
              <a>Wisdocity.ai</a>
            </li>
            <li>
              <a>Learner</a>
            </li>
            <li>
              <a>Expert</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Apps</a>
            </li>
          </ul>
          <p style={{ textAlign: "center" }}>
            Copyright &copy; 2023 Wisdocity AI
          </p>
        </Container>
      </Footer>
    </div>
  );
}

export default Home;
