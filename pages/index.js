import { Link, Container, Box, Heading, Image, useColorModeValue, Button } from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from "../components/paragraph";
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from '../components/bio'


const Page = () => {
    return (
        <Container>
            <Box borderRadius={"lg"} bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m Full-stack Developer!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Jewoo Ham
                    </Heading>
                    <p>Digital Craftzman ( Artist / Developer / Designer )</p>
                </Box>
                <Box flexShrink={0} mt={{base:4, md:0}} ml={{md: 6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/takuya.jpg" alt="Profile Image"></Image>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Takuya is a freelance and a full-stack developer based in Osaka with a
                    passion for building digital services/stuff he wants. He has a knack
                    for all things launching products, from planning and designing all the
                    way to solving real-life problems with code. When not online, he loves
                    hanging out with his camera. Currently, he is living off of his own
                    product called{' '}
                     <NextLink href="/works/inkdrop" scroll={false}>
                        <Link>Inkdrop</Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon></ChevronRightIcon>} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
             <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Works as a freelance
        </BioSection>
            </Section>
            <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>

        </Container>
        
        
    )
}

export default Page;