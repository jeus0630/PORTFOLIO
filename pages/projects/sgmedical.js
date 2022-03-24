import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SG Medical">
    <Container>
      <Title>
        SG Medical &nbsp;
        <Badge>2021.10 - 2021.12</Badge>
      </Title>
      <P style={{'text-indent':'0'}}>
        씨젠 SG Medical 리뉴얼에 참여하였습니다. <br></br>
        자세한 기여도는 이력서를 확인해주세요.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <a href="https://www.sgmedical.kr/" target="_blank">
              https://www.sgmedical.kr/
          </a>
        </ListItem>
        <ListItem>
        <Meta>STACK</Meta>
          TypeScript, EJS, Webpack, SCSS
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 