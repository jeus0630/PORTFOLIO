import { Link, Container, Box, Heading, Image, useColorModeValue, Button, SimpleGrid, List, ListItem } from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from "../components/paragraph";
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from '../components/layouts/article'

const Page = () => { 
  return (
        <Layout>

        <Container>
            <Box borderRadius={"lg"} bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center" fontWeight={600}>
                안녕하세요, 소프트웨어 엔지니어 (프론트엔드) 함제우 입니다.
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Jewoo Ham
                    </Heading>
                    <p>Software Engineer ( Front-end / UI / UX )</p>
                </Box>
                <Box flexShrink={0} mt={{base:4, md:0}} ml={{md: 6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/profile.jpeg" alt="Profile Image"></Image>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Paragraph style={{'text-indent':'0em'}}>
                    새로운 지식을 습득하고 정리하는 것을 좋아하는 개발자 입니다. <br></br>
                    개발자로서 세상을 더 아름답게 만드는데에 기여하기를 희망합니다. <br></br>
                    <br></br>
                    <a href="https://github.com/jeus0630" target="_blank" style={{'font-weight':'500'}}><i>Github </i>/  </a><a href="https://velog.io/@jewoo" target="_blank" style={{'font-weight':'500'}}><i>Blog</i> </a>
                </Paragraph>
                <Box my={6}>
                    <NextLink href="/projects">
                        <Button rightIcon={<ChevronRightIcon></ChevronRightIcon>} colorScheme="teal">
                            Projects
                        </Button>
                    </NextLink>
                </Box>
            </Section>
        </Container>
        </Layout>
        
    )  
}

export default Page;