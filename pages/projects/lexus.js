import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Lexus">
    <Container>
      <Title>
        Lexus &nbsp;
        <Badge>2021.01 - 2022.02</Badge>
      </Title>
      <P style={{'text-indent':'0'}}>
        렉서스, 렉서스 중고차 그리고 각 딜러페이지 유지보수 및 운영을 담당하였습니다. <br></br>
        자세한 기여도는 이력서를 확인해주세요.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Website (Lexus)</Meta>
          <a href="https://www.lexus.co.kr/" target="_blank">
              https://www.lexus.co.kr/
          </a>
        </ListItem>
        <ListItem>
          <Meta>Website (Lexus certificate)</Meta>
          <a href="https://certified.lexus.co.kr/" target="_blank">
          https://certified.lexus.co.kr/
          </a>
        </ListItem>
        <ListItem>
        <Meta>Website (Lexus dealer)</Meta>
          <a href="https://www.lexus.co.kr/dealers/lnt/" target="_blank">
            https://www.lexus.co.kr/dealers/lnt/
          </a>
        </ListItem>
        <ListItem>
        <Meta>STACK</Meta>
          Vue.js, Vuex, JS, HTML, SCSS, GA
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 