import styled from "styled-components";
import Line from "../components/Line";
import Observer from "../components/Observer";
import Button from "../components/Button";
import VerticalLine from "../components/VerticalLine";
import project1 from "../imgs/project1.png";
import project2 from "../imgs/project2.png";
import project3 from "../imgs/project3.png";
import project4 from "../imgs/project4.png";
import project5 from "../imgs/project5.png";
import project6 from "../imgs/project6.png";
import project7 from "../imgs/project7.png";

const ProjectContainer = styled.div`
  height: 80vh;
  display: flex;
`;

const ProjectContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  flex: 1;
  justify-content: space-between;
`;

const ProjectTitle = styled.div`
  font-size: 2.5vw;
`;

const ProjectContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
`;

const ProjectContent = styled.div`
  @font-face {
    font-family: "SUIT-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "SUIT-Regular";

  display: flex;
  font-size: 0.8vw;
  gap: 1.5vw;
  font-weight: 100;
  line-height: 1.2vw;

  :nth-child(1) {
    flex: 1.2;
    color: #b3b3b3;
    max-width: 8rem;
  }
  :nth-child(2) {
    flex: 3;
    max-width: 16rem;
  }
`;

const ProjectImg = styled.div`
  flex: 3.5;
  display: flex;
  overflow: scroll;
  padding: 3rem;
  gap: 3rem;

  img {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    filter: brightness(97%);
    width: 45vw;
    height: 100%;
    object-fit: cover;
  }

  &::-webkit-scrollbar {
    width: 0;
  }
`;

function Project() {
  return (
    <>
      <ProjectContainer>
        <ProjectContentContainer>
          <ProjectTitle>
            <Observer>The Gong</Observer>
          </ProjectTitle>
          <Observer>
            <ProjectContentBox>
              <ProjectContent>
                <div>PERIOD</div>
                <div>2023.05</div>
              </ProjectContent>
              <ProjectContent>
                <div>DESC</div>
                <div>
                  웹 소켓을 기반으로 다수의 유저를 화상으로 연결하는 온라인
                  스터디 사이트
                </div>
              </ProjectContent>
              <ProjectContent>
                <div>SKILLS</div>
                <div>
                  react, typescript, styled-components, axios, sockJS, Stomp,
                  Kurento
                </div>
              </ProjectContent>
              <Button
                content={"프로젝트 상세"}
                link={`https://www.notion.so/528cc6e552ff4b97a73f6153e1702d28?pvs=4#40879cae560744cfb328748dc40c457a`}
              />
            </ProjectContentBox>
          </Observer>
        </ProjectContentContainer>
        <VerticalLine />
        <ProjectImg>
          <Observer>
            <img src={project1} alt="project1" />{" "}
          </Observer>
          <Observer>
            <img src={project2} alt="project2" />{" "}
          </Observer>
          <Observer>
            <img src={project3} alt="project3" />{" "}
          </Observer>
          <Observer>
            <img src={project4} alt="project4" />{" "}
          </Observer>
        </ProjectImg>
      </ProjectContainer>

      <Line></Line>

      <ProjectContainer>
        <ProjectContentContainer>
          <ProjectTitle>
            {" "}
            <Observer>KREAM </Observer>
          </ProjectTitle>
          <Observer>
            <ProjectContentBox>
              <ProjectContent>
                <div>PERIOD</div>
                <div>2023.03</div>
              </ProjectContent>
              <ProjectContent>
                <div>DESC</div>
                <div>flex와 미디어쿼리를 활용한 반응형 웹사이트 프로젝트</div>
              </ProjectContent>
              <ProjectContent>
                <div>SKILLS</div>
                <div>react, Redux, styled-components</div>
              </ProjectContent>
              <Button
                content={"프로젝트 상세"}
                link={`https://www.notion.so/528cc6e552ff4b97a73f6153e1702d28?pvs=4#bd82bc285e5c4d73a22e4bee508a46a4`}
              />
            </ProjectContentBox>
          </Observer>
        </ProjectContentContainer>
        <VerticalLine />
        <ProjectImg>
          <Observer>
            <img src={project5} alt="project5" />{" "}
          </Observer>
          <Observer>
            <img src={project6} alt="project6" />{" "}
          </Observer>
          <Observer>
            <img src={project7} alt="project7" />{" "}
          </Observer>
        </ProjectImg>
      </ProjectContainer>
    </>
  );
}

export default Project;
