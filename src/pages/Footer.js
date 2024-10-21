import { Flex, Heading, Image, Spacer } from '@chakra-ui/react';
import '../App.jsx';

function Footer() {

    return (
        <Flex bg="#4b6584" direction="row" justify="space-between">
            <Flex flex={2} align="center" justify="center">
                <Heading>Contact Info</Heading>
            </Flex>
            <Image src="umd.png" maxHeight="200px" maxWidth="200px" flex={1}/>
            <Spacer />
            <Image src="apexlogo.png" maxHeight="200px" maxWidth="200px" flex={1}/>
            <Flex flex={2} align="center" justify="center">
                <Heading>Apex Quant</Heading>
            </Flex>
        </Flex>
    )
}

export default Footer;