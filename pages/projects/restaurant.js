import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Restaurant">
    <Container>
      <Title>
        Restaurant
        {/* <Badge>2016-</Badge> */}
      </Title>
      <P style={{'text-indent':'0'}}>
        피자 주문이 가능한 레스토랑 프로젝트 입니다.
        페이팔 및 캐쉬 결제가 가능하며 관리자 페이지에서 상품 추가 및 배달 현황 관리가 가능합니다.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <a href="https://restaurant-jeus0630.vercel.app/" target="_blank">
              https://restaurant-jeus0630.vercel.app/
          </a>
        </ListItem>
        <ListItem>
          <Meta>Notion</Meta>
          <a href="https://spicy-damselfly-bd9.notion.site/Pizza-App-c8dad0699faa404cb4e8f20f7d21c7d4" target="_blank">
            https://spicy-damselfly-bd9.notion.site/Pizza-App-c8dad0699faa404cb4e8f20f7d21c7d4
          </a>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <a href="https://github.com/jeus0630/PIZZA" target="_blank">
            https://github.com/jeus0630/PIZZA
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