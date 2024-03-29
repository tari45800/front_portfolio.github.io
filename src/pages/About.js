import styled from "styled-components";
import Observer from "../components/Observer";
import Button from "../components/Button";

const AboutContainer = styled.div`
  display: flex;
  margin-top: 8rem;
  padding: 5rem;

  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
  .nanumgothic * {
    font-family: "Nanum Gothic", sans-serif;
  }
  font-family: "Nanum Gothic", sans-serif;
  font-size: 1.5vw;
  font-weight: 100;
  line-height: 2.4vw;

  @media screen and (max-width: 80rem) {
    flex-direction: column;
    gap: 2rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  @media screen and (max-width: 36rem) {
    padding: 2rem;
  }
`;

const AboutTitle = styled.div`
  flex: 1;
  font-size: 3.5vw;
  font-weight: normal;

  @media screen and (max-width: 80rem) {
    font-size: 3rem;
  }

  @media screen and (max-width: 36rem) {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const AboutContent = styled.div`
  flex: 2.5;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2vw;

  @media screen and (max-width: 36rem) {
    font-size: 0.9rem;
    line-height: 1.5rem;
    gap: 1rem;
  }
`;

function About() {
  return (
    <>
      <AboutContainer>
        <AboutTitle>
          <Observer>ABOUT</Observer>
        </AboutTitle>
        <AboutContent>
          <div>
            <Observer>
              <div>4개월의 실무 경험과 3번의 팀 프로젝트를 통해,</div>
              <div>
                이제는 자력으로 홈페이지의 기본적인 프론트를 제작할 수 있습니다.
              </div>
              <div>
                지금은 컴포넌트 재사용, 폴더구조, 상태관리 등, 개발의 효율을
                높이는 방법을 찾아가고 있습니다.
              </div>
              <div>
                유저를 위한 UI/UX의 가치를 알기에 이를 우선으로 고민합니다.
              </div>
            </Observer>
          </div>
          <div>
            <Observer>
              <div>빠르게 발전하는 기술을 따라가지 못한, 소외된 사각지대를</div>
              <div>개발을 통해 매워나가고 싶다는 목표가 있습니다.</div>
              <div>
                그러한 비전에 다가갈 수 있도록 늘 주도적으로 배움을 추구하며
              </div>
              <div>
                특히 기초를 단단히 하기 위해 javascript, react를 책으로 정리해
                나가고 있습니다.
              </div>
            </Observer>
          </div>
          <div>
            <Observer>
              <div>
                주변인들과 함께 누리는 소중한 일상이 저의 노력의 원동력이
                됩니다.
              </div>
              <div>
                그들에게 더 나은 사람이 되고 싶어 양심에 따라 살도록 노력하며,
              </div>
              <div>
                함께하는 일상을 지키기 위해 맡은 일을 책임감을 가지고 최선의
                결과를 만듭니다.
              </div>
            </Observer>
          </div>
          <Observer>
            <Button
              content={"이력서 바로가기"}
              link={`https://tarispersonalspace.notion.site/e1c6fb832bce4e7f8bac05557afd157b?pvs=74`}
            />
          </Observer>
        </AboutContent>
      </AboutContainer>
    </>
  );
}

export default About;
