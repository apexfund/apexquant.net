import { Flex, Heading, Text, ScaleFade, Image, Card, CardBody } from '@chakra-ui/react';
import { motion } from "framer-motion";
import '../App.jsx';

function HomePage() {

    return (
        <ScaleFade in={true} initalScale={0} unmountOnExit={true}>
            <Flex direction="column">
                <Flex direction="row" padding={6}>
                    <Flex direction="column" justify="center" align="center" flex={1} padding={5}>
                        <motion.Box whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.03 }}>
                            <Heading size="4xl" pb={5}>Apex Quant</Heading>
                        </motion.Box>
                        <motion.Box whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.03 }}>
                            <Heading size="xl" pb={12}>A Quantitative Finance Club at UMD</Heading>
                        </motion.Box>
                        <motion.Box whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.03 }}>
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
                        <motion.Box whileHover={{ scale: 1.02 }} whileTap={{ scale: 1.03 }}>
                            <Image src="stockstock.png" borderRadius="full" alt="Stock photo of stocks"/>
                        </motion.Box>
                    </Flex>
                </Flex>
                <Flex direction="row" justify="space-between">
                    <motion.Box whileHover={{ scale: 1.01 }} whileTap={{ scale: 1.02 }}>
                        <Card bg="#778ca3" variant="elevated" size="lg">
                            <CardBody>
                                <Flex direction="column" align="center">
                                    <Text fontSize="3xl">22</Text>
                                    <Text fontSize="lg">Members</Text>
                                </Flex>
                            </CardBody>
                        </Card>
                    </motion.Box>
                    <motion.Box whileHover={{ scale: 1.01 }} whileTap={{ scale: 1.02 }}>
                        <Card bg="#778ca3" variant="elevated" size="lg">
                            <CardBody>
                                <Flex direction="column" align="center">
                                    <Text fontSize="3xl">3</Text>
                                    <Text fontSize="lg">Teams</Text>
                                </Flex>
                            </CardBody>
                        </Card>
                    </motion.Box>
                    <motion.Box whileHover={{ scale: 1.01 }} whileTap={{ scale: 1.02 }}>
                        <Card bg="#778ca3" variant="elevated" size="lg">
                            <CardBody>
                                <Flex direction="column" align="center">
                                    <Text fontSize="3xl">8</Text>
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