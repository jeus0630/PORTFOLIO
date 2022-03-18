import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
display: inline-flex;
align-items: center;
height: 30px;
padding: 10px;
line-height: 20px;
font-weight: bold;
font-size: 18px;

&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={20} height={20} alt="logo"></Image>
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight={"bold"}
                        ml={3}>Jewoo Ham</Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;