import { Flex, Heading, Text, ScaleFade, Image, Card, CardBody, 
    Accordion, AccordionItem, AccordionButton, AccordionPanel, 
    Spacer, List, ListItem, ListIcon }  
    from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { motion } from "framer-motion";
import Footer from '../components/Footer.js';
import '../App.jsx';

function HomePage() {

    return (
        <ScaleFade in={true} initalScale={0}>
            <Flex direction="column">
                <Flex direction="row" p={18}>
                    <Flex direction="column" flex={1} justify="center" align="center" p={5} color="black">
                        <motion.Box whileHover={{ skewY: 2 }}>
                            <Heading size="4xl">Apex Quant</Heading>
                        </motion.Box>
                        <motion.Box whileHover={{ skewY: 2 }}>
                            <Heading size="xl" p={6}>A Quantitative Finance Club at UMD</Heading>
                        </motion.Box>
                        <motion.Box whileHover={{ skewY: 2 }}>
                            <Text fontSize="2xl" p={6}>
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
                        <Card bg="#4b7bec" variant="elevated" size="lg" direction="column" align="center">
                            <CardBody>
                                <Text fontSize="3xl">22</Text>
                                <Text fontSize="lg">Members</Text>
                            </CardBody>
                        </Card>
                    </motion.Box>
                    <motion.Box whileHover={{ scaleY: 1.02 }}>
                        <Card bg="#4b7bec" variant="elevated" size="lg" direction="column" align="center">
                            <CardBody>
                                <Text fontSize="3xl">3</Text>
                                <Text fontSize="lg">Teams</Text>
                            </CardBody>
                        </Card>
                    </motion.Box>
                    <motion.Box whileHover={{ scaleY: 1.02 }}>
                        <Card bg="#4b7bec" variant="elevated" size="lg" direction="column" align="center">
                            <CardBody>
                                <Text fontSize="3xl">X</Text>
                                <Text fontSize="lg">Years since founding</Text>
                            </CardBody>
                        </Card>
                    </motion.Box>
                </Flex>
                <Flex direction="column" p={20}>
                    <Flex justify="center">
                        <motion.Box whileHover={{ skewY: 2 }}>
                            <Heading size="4xl" p={16}>Our Organization</Heading>
                        </motion.Box>
                    </Flex>
                    <Spacer />
                    <Flex justify="center">
                        <Accordion allowMultiple width="50vw" maxWidth="800px">
                            <AccordionItem>
                                <AccordionButton fontSize="3xl">
                                    Mission
                                </AccordionButton>
                                <AccordionPanel fontSize="xl">
                                    Apex Quant's mission is to gather goal-oriented individuals to research
                                    and implement effective trading strategies. The goal of the organization
                                    is to simply help each member gain access to the knowledge and/or
                                    resources required to achieve this end. By enforcing these principles,
                                    Apex Quant aims to maximize the returns on our stock portfolio and further
                                    progress on our mission to expose UMD students to quantitative finance.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton fontSize="3xl" justify="center">
                                    Recruiting
                                </AccordionButton>
                                <AccordionPanel fontSize="xl">
                                    <Text p={5}>
                                        Any UMD student is welcome to apply to Apex Quant, as long as you have
                                        basic knowledge and/or interest in finance or coding. The recruitment
                                        process will be as follows:
                                    </Text>
                                    <List>
                                        <ListItem>
                                            <ListIcon as={ArrowRightIcon} />
                                            Apply by February 16th through this link
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={ArrowRightIcon} />
                                            First round interview invitations will be sent out
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={ArrowRightIcon} />
                                            First round interviews will be conducted
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={ArrowRightIcon} />
                                            Recruitment will be finalized
                                        </ListItem>
                                    </List>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton fontSize="3xl">
                                    Project and Team Assignment
                                </AccordionButton>
                                <AccordionPanel fontSize="xl">
                                    <Text p={5}>
                                        A part of recruiting is finding out what someone wants to do
                                        and what someone already has experience with. After gauging
                                        both of these things, officers will make recommendations as to
                                        how new recruits can fit into the club. However, the purpose of
                                        the club is to learn and gain as much exposure to quantitative
                                        finance as possible. Therefore, each person ultimately gets to
                                        choose what they work on.
                                    </Text>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Flex>
                </Flex>
                <Flex justify="center" p={10}>
                    <motion.Box whileHover={{ skewY: 1.25 }}>
                        <Image src="neuralnet.png" borderRadius="full" alt="Stock photo of stocks"/>
                    </motion.Box>
                </Flex>
                <Flex bg="#4b6584" direction="row" justify="space-between">
                    <Flex flex={1} align="center" justify="center">
                        <Text>Contact Info</Text>
                    </Flex>
                    <Image src="umd.png" maxHeight="250px" flex={2}/>
                    <Image src="apexlogo.png" maxHeight="250px" flex={2}/>
                    <Flex flex={1} align="center" justify="center">
                        <Text>Apex Quant</Text>
                    </Flex>
                </Flex>
            </Flex>
        </ScaleFade>
    )
}

export default HomePage;