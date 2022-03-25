import { Container, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Opensea">
    <Container>
      <Title>
        Opensea Blockchain
        {/* <Badge>2016-</Badge> */}
      </Title>
      <P style={{'text-indent':'0'}}>
        Opensea NFT 사이트의 기능들을 클론 코딩한 프로젝트 입니다. <br></br>
        MetaMask를 통해 코인 결제가 가능하며 thirdweb에서 상품 관리가 가능합니다. <br></br>
        Sanity로 구현된 관리자 페이지에서 User 관리가 가능합니다.
      </P>
      <List my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <a href="https://opensea-blockchain-clone-jeus0630.vercel.app/" target="_blank">
            https://opensea-blockchain-clone-jeus0630.vercel.app/
          </a>
        </ListItem>
        <ListItem>
          <Meta>Notion</Meta>
          <a href="https://spicy-damselfly-bd9.notion.site/Opensea-Blockchain-Clone-App-b82c1a3d407843fba4448bbb949cce59/" target="_blank">
            https://spicy-damselfly-bd9.notion.site/Opensea-Blockchain-Clone-App-b82c1a3d407843fba4448bbb949cce59
          </a>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <a href="https://github.com/jeus0630/OPENSEA" target="_blank">
            https://github.com/jeus0630/OPENSEA
          </a>
        </ListItem>
        <ListItem>
        <Meta>STACK</Meta>
          Vercel, Next.js, Typescript, Thirdweb, Sanity, MetaMask
        </ListItem>
      </List>

      <WorkImage src="/images/works/opensea_01.png" alt="opensea" />
      <WorkImage src="/images/works/opensea_02.png" alt="opensea" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra' 