import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'

import thumbOpensea from '../public/images/works/Opensea.png'
import thumbPizza from '../public/images/works/Pizza.png'
import thumbNetflix from '../public/images/works/Netflix.png'
import thumbTravel from '../public/images/works/Travel.png'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Side Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="opensea" title="Opensea Blockchain" thumbnail={thumbOpensea}>
            Opensea NFT 사이트의 기능들을 클론 코딩한 프로젝트 입니다. <br></br>
            NFT Minting, MetaMask를 통한 코인 결제 및 관리자 페이지에서의 유저 관리가 가능합니다.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="restaurant"
            title="Restaurant"
            thumbnail={thumbPizza}
          >
            피자 주문이 가능한 레스토랑 프로젝트 입니다. <br></br>
            페이팔 및 캐쉬 결제가 가능하며 관리자 페이지에서 상품 추가 및 배달 현황 관리가 가능합니다.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="netflix"
            title="Netflix"
            thumbnail={thumbNetflix}
          >
            Netflix의 기능들을 클론 코딩한 프로젝트 입니다. <br></br>
            시리즈 및 영화 시청이 가능하며 관리자 페이지에서 영화 및 시리즈의 CRUD가 가능합니다. <br></br>
            또한 신규로 유입된 유저를 차트로 제공함으로서 비지니스 현황 파악이 가능합니다.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="travel" thumbnail={thumbTravel} title="Travel Map">
            다녀 온 곳에 핀을 꽂아 메모를 남길 수 있는 맵 어플리케이션 프로젝트 입니다. <br></br>
            여러 사람들과 공유가 가능하며 로그인 기능을 통해 내가 꽂은 핀과 상대방의 핀 구분이 가능합니다.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="inkdrop"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'