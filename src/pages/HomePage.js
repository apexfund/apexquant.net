import { Flex, Heading, Text, ScaleFade, Image, Card, CardBody } from '@chakra-ui/react';
import { motion } from "framer-motion";
import '../App.jsx';

function HomePage() {

    return (
        <ScaleFade in={true} initalScale={0}>
            <Flex direction="column" bg="#d1d8e0">
                <Flex direction="row" padding={18}>
                    <Flex direction="column" flex={1} justify="center" align="center" padding={5} color="black">
                        <motion.Box whileHover={{ skewY: 2 }}>
                            <Heading size="4xl" pb={5}>Apex Quant</Heading>
                        </motion.Box>
                        <motion.Box whileHover={{ skewY: 2 }}>
                            <Heading size="xl" pb={12}>A Quantitative Finance Club at UMD</Heading>
                        </motion.Box>
                        <motion.Box whileHover={{ skewY: 2 }}>
                            <Text fontSize="xl">
                                We are a quantitative finance group at UMD consisting 
                                of a diverse group of students. Our purpose is to research 
                                and refine trading strategies we believe are effective so 
                                as to grow and maintain a fruitful and market-exploiting 
                                stock portfolio.
                            </Text>
                        </motion.Box>
                    </Flex>
                    <Flex flex={1}>
                        <motion.Box whileHover={{ skewY: 1.25 }}>
                            <Image src="stockstock.png" borderRadius="full" alt="Stock photo of stocks"/>
                        </motion.Box>
                    </Flex>
                </Flex>
                <Flex direction="row" justify="space-between" p={10}>
                    <motion.Box whileHover={{ scaleY: 1.02 }}>
                        <Card bg="#4b7bec" variant="elevated" size="lg">
                            <CardBody>
                                <Flex direction="column" align="center">
                                    <Text fontSize="3xl">22</Text>
                                    <Text fontSize="lg">Members</Text>
                                </Flex>
                            </CardBody>
                        </Card>
                    </motion.Box>
                    <motion.Box whileHover={{ scaleY: 1.02 }}>
                        <Card bg="#4b7bec" variant="elevated" size="lg">
                            <CardBody>
                                <Flex direction="column" align="center">
                                    <Text fontSize="3xl">3</Text>
                                    <Text fontSize="lg">Teams</Text>
                                </Flex>
                            </CardBody>
                        </Card>
                    </motion.Box>
                    <motion.Box whileHover={{ scaleY: 1.02 }}>
                        <Card bg="#4b7bec" variant="elevated" size="lg">
                            <CardBody>
                                <Flex direction="column" align="center">
                                    <Text fontSize="3xl">X</Text>
                                    <Text fontSize="lg">Years since founding</Text>
                                </Flex>
                            </CardBody>
                        </Card>
                    </motion.Box>
                </Flex>
            </Flex>
        </ScaleFade>
    )
}

export default HomePage;