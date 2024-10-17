import { Flex, Heading } from '@chakra-ui/react';
import '../App.jsx';

function HomePage() {

    return (
        <Flex direction="row" padding={6}>
            <Flex direction="column" justify="flex-start">
                <Heading size="3xl">Apex Quant</Heading>
                <Heading size="xl">A Quantitative Finance Club at UMD</Heading>
            </Flex>
        </Flex>
    )
}

export default HomePage;