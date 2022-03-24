import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Sandbox">
    <Container>
      <Title>
        Sandbox &nbsp;
        <Badge>2021.07 - 2021.08</Badge>
      </Title>
      <P style={{'text-indent':'0'}}>
        샌드박스 사이트 내에 신규 페이지 구축을 담당하였습니다.<br></br>
        자세한 기여도는 이력서를 확인해주세요.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <a href="https://sandbox.co.kr/" target="_blank">
            https://sandbox.co.kr/
          </a>
        </ListItem>
        <ListItem>
        <Meta>STACK</Meta>
          Vue.js, SCSS
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 