import { Container, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Netflix">
    <Container>
      <Title>
        Netflix
        {/* <Badge>2016-</Badge> */}
      </Title>
      <P style={{'text-indent':'0'}}>
        Netflix의 기능들을 클론 코딩한 프로젝트 입니다. <br></br>
        Admin, Backend, Frontend를 각각 구현함으로서 실제 넷플릭스와 같이 동작하도록 만들었습니다.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Website (Client)</Meta>
          <a href="https://jewoo-netflix-app.herokuapp.com/" target="_blank">
            https://jewoo-netflix-app.herokuapp.com/
          </a>
        </ListItem>
        <ListItem>
          <Meta>Website (Admin)</Meta>
          <a href="https://jewoo-netflix-admin.herokuapp.com/" target="_blank">
            https://jewoo-netflix-admin.herokuapp.com/
          </a>
        </ListItem>
        <ListItem>
          <Meta>Notion</Meta>
          <a href="https://spicy-damselfly-bd9.notion.site/Netflix-Clone-App-84cf1813968b46479d9fe50773d9dfc9" target="_blank">
            https://spicy-damselfly-bd9.notion.site/Netflix-Clone-App-84cf1813968b46479d9fe50773d9dfc9
          </a>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <a href="https://github.com/jeus0630/NETFLIX" target="_blank">
            https://github.com/jeus0630/NETFLIX
          </a>
        </ListItem>
        <ListItem>
        <Meta>STACK</Meta>
          Heroku, JWT, Firebase, Node.js, Express, Mongoose, React, ReduxToolkit, ReactRouter, Typescript
        </ListItem>
      </List>

      <WorkImage src="/images/works/netflix_01.png" alt="netflix" />
      <WorkImage src="/images/works/netflix_02.png" alt="netflix" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 