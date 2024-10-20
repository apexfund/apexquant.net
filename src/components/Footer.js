import { Flex, Text } from '@chakra-ui/react';
import '../App.jsx';

function Footer() {

    return (
        <Flex bg="#4b6584" direction="row" width="100%" maxHeight="500px">
            <Flex flex={1}>
                <Text>Contact Info</Text>
            </Flex>
            <Flex>
                <Text>Apex Quant</Text>
            </Flex>
        </Flex>
    )
}

export default Footer;