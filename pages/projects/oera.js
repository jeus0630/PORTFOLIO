import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Oera">
    <Container>
      <Title>
        Oera &nbsp;
        <Badge>2021.08 - 2021.12</Badge>
      </Title>
      <P style={{'text-indent':'0'}}>
        한섬 Oera 런칭 관련 신규 구축 사이트 입니다. <br></br>
        자세한 기여도는 이력서를 확인해주세요.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <a href="https://www.oera.com/" target="_blank">
            https://www.oera.com/
          </a>
        </ListItem>
        <ListItem>
        <Meta>STACK</Meta>
          EJS, Webpack, JS, SCSS
        </ListItem>
      </List>

      <WorkImage src="/images/works/oera_01.png" alt="oera" />
      <WorkImage src="/images/works/oera_02.png" alt="oera" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 