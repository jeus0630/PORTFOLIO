import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Yanolja">
    <Container>
      <Title>
        Yanolja &nbsp;
        <Badge>2021.05 - 2021.07</Badge>
      </Title>
      <P style={{'text-indent':'0'}}>
        야놀자 리뉴얼 사이트 입니다. <br></br>
        자세한 기여도는 이력서를 확인해주세요.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <a href="https://yanolja.in/" target="_blank">
            https://yanolja.in/
          </a>
        </ListItem>
        <ListItem>
        <Meta>STACK</Meta>
          EJS, Webpack, JS, SCSS
        </ListItem>
      </List>

      <WorkImage src="/images/works/yanolja.png" alt="yanolja" />
      <WorkImage src="/images/works/yanolja_02.png" alt="yanolja" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 