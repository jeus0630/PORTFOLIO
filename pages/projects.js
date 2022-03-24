import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbOpensea from '../public/images/works/Opensea.png'
import thumbPizza from '../public/images/works/Pizza.png'
import thumbNetflix from '../public/images/works/Netflix.png'
import thumbTravel from '../public/images/works/Travel.png'
import thumbLexus from '../public/images/works/Lexus.png'
import thumbSgmedical from '../public/images/works/Sgmedical.png'
import thumbOera from '../public/images/works/Oera.png'
import thumbSandbox from '../public/images/works/Sandbox.png'
import thumbYanolja from '../public/images/works/Yanolja.png'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Side Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="opensea" title="Opensea Blockchain" thumbnail={thumbOpensea}>
            Opensea NFT 사이트의 기능들을 클론 코딩한 프로젝트 입니다.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="restaurant"
            title="Restaurant"
            thumbnail={thumbPizza}
          >
            피자 주문이 가능한 레스토랑 프로젝트 입니다.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="netflix"
            title="Netflix"
            thumbnail={thumbNetflix}
          >
            Netflix의 기능들을 클론 코딩한 프로젝트 입니다.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="travel" thumbnail={thumbTravel} title="Travel Map">
            다녀온 곳들에 대해 별점 및 리뷰 등 간단한 메모를 할 수 있는 프로젝트 입니다.
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
            id="lexus"
            thumbnail={thumbLexus}
            title="Lexus"
          >
            도요타의 프리미엄 모델 렉서스 입니다.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem 
            id="sgmedical"
            thumbnail={thumbSgmedical}
            title="SG Medical">
            씨젠 SG Medical 리뉴얼 사이트 입니다.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem 
            id="oera"
            thumbnail={thumbOera}
            title="Oera">
            한섬 Oera 런칭 사이트 입니다.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem 
            id="sandbox"
            thumbnail={thumbSandbox}
            title="SANDBOX">
            MCN 회사 샌드박스의 소개 사이트 입니다.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem 
            id="yanolja"
            thumbnail={thumbYanolja}
            title="Yanolja">
            야놀자 리뉴얼 사이트 입니다.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'