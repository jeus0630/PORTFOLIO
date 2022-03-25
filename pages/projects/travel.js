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
        다녀온 곳들에 대해 별점 및 리뷰 등 간단한 메모를 할 수 있는 프로젝트 입니다. <br></br>
        여러 사람들과 공유가 가능하며 로그인을 통해 내가 꽂은 핀과 상대방의 핀 구분이 가능합니다.
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
        <ListItem>
        <Meta>STACK</Meta>
          Heroku, Mapbox, Node.js, Express, Mongoose, React, Typescript
        </ListItem>
      </List>

      <WorkImage src="/images/works/travel_01.png" alt="travel" />
      <WorkImage src="/images/works/travel_02.png" alt="travel" /> 
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 