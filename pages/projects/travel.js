import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Travel">
    <Container>
      <Title>
        Travel Map
        {/* <Badge>2016-</Badge> */}
      </Title>
      <P style={{'text-indent':'0'}} ml={2}>
        다녀온 곳들에 대해 별점 및 리뷰 등 간단한 메모를 할 수 있는 프로젝트 입니다.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <a href="https://jewoo-travel-map-app.herokuapp.com/" target="_blank">
            https://jewoo-travel-map-app.herokuapp.com/
          </a>
        </ListItem>
        <ListItem>
          <Meta>Notion</Meta>
          <a href="https://spicy-damselfly-bd9.notion.site/Travel-Map-App-d660459bf46644c08d18f4a4fba74052" target="_blank">
            https://spicy-damselfly-bd9.notion.site/Travel-Map-App-d660459bf46644c08d18f4a4fba74052
          </a>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <a href="https://github.com/jeus0630/Travel-Map-App" target="_blank">
            https://github.com/jeus0630/Travel-Map-App
          </a>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 