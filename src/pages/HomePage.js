import { Flex, Heading, Text, Image, Card, CardBody, AccordionRoot, 
    AccordionItem, AccordionItemTrigger, AccordionItemContent,
    Spacer, List, ListItem, ListIcon }  
    from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { motion } from "framer-motion";
import '../App.jsx';

function HomePage() {
    const ySkew = { skewY: 2 };
    const yScale = { scaleY: 1.02 };
    const imageSkew = { skewY: 1.25 };

    return (
        <Flex direction="column">
            <Flex direction="row" p={18}>
                <Flex direction="column" flex={1} justify="center" align="center" p={5} color="black">
                    <motion.Box whileHover={ySkew}>
                        <Heading size="4xl">Apex Quant</Heading>
                    </motion.Box>
                    <motion.Box whileHover={ySkew}>
                        <Heading size="xl" p={6}>A Quantitative Finance Club at UMD</Heading>
                    </motion.Box>
                    <motion.Box whileHover={ySkew}>
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
                    <motion.Box whileHover={imageSkew}>
                        <Image src="images/stockstock.png" borderRadius="full" alt="Stock photo of stocks"/>
                    </motion.Box>
                </Flex>
            </Flex>
            <Flex direction="row" justify="space-between" p={10}>
                <motion.Box whileHover={yScale}>
                    <Card bg="#45aaf2" variant="elevated" size="lg" direction="column" align="center">
                        <CardBody>
                            <Text fontSize="3xl">22</Text>
                            <Text fontSize="lg">Members</Text>
                        </CardBody>
                    </Card>
                </motion.Box>
                <motion.Box whileHover={yScale}>
                    <Card bg="#45aaf2" variant="elevated" size="lg" direction="column" align="center">
                        <CardBody>
                            <Text fontSize="3xl">3</Text>
                            <Text fontSize="lg">Teams</Text>
                        </CardBody>
                    </Card>
                </motion.Box>
                <motion.Box whileHover={yScale}>
                    <Card bg="#45aaf2" variant="elevated" size="lg" direction="column" align="center">
                        <CardBody>
                            <Text fontSize="lg">Founded in</Text>
                            <Text fontSize="3xl">2021</Text>
                        </CardBody>
                    </Card>
                </motion.Box>
            </Flex>
            <Flex direction="column">
                <Flex justify="center">
                    <motion.Box whileHover={{ skewY: 2 }}>
                        <Heading size="4xl" p={16}>Our Organization</Heading>
                    </motion.Box>
                </Flex>
                <Spacer />
                <Flex justify="center">
                    <AccordionRoot allowMultiple width="50vw" maxWidth="800px">
                        <AccordionItem>
                            <AccordionItemTrigger fontSize="3xl">
                                Mission
                            </AccordionItemTrigger>
                            <AccordionItemContent fontSize="xl">
                                Apex Quant's mission is to gather goal-oriented individuals to research
                                and implement effective trading strategies. The goal of the organization
                                is to simply help each member gain access to the knowledge and/or
                                resources required to achieve this end. By enforcing these principles,
                                Apex Quant aims to maximize the returns on our stock portfolio and further
                                progress on our mission to expose UMD students to quantitative finance.
                            </AccordionItemContent>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTrigger fontSize="3xl" justify="center">
                                Recruiting
                            </AccordionItemTrigger>
                            <AccordionItemContent fontSize="xl">
                                <Text p={5}>
                                    Any UMD student is welcome to apply to Apex Quant, as long as you have
                                    basic knowledge and/or interest in finance or coding. The recruitment
                                    process will be as follows:
                                </Text>
                                <List.Root>
                                    <List.Item>
                                        <List.Indicator>
                                            <ArrowRightIcon />
                                        </List.Indicator>
                                        Apply by February 16th through this link
                                    </List.Item>
                                    <List.Item>
                                        <List.Indicator>
                                            <ArrowRightIcon />
                                        </List.Indicator>
                                        First round interview invitations will be sent out
                                    </List.Item>
                                    <List.Item>
                                        <List.Indicator>
                                            <ArrowRightIcon />
                                        </List.Indicator>
                                        First round interviews will be conducted
                                    </List.Item>
                                    <List.Item>
                                        <List.Indicator>
                                            <ArrowRightIcon />
                                        </List.Indicator>
                                        Recruitment will be finalized
                                    </List.Item>
                                </List.Root>
                            </AccordionItemContent>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTrigger fontSize="3xl">
                                Project and Team Assignment
                            </AccordionItemTrigger>
                            <AccordionItemContent fontSize="xl">
                                <Text p={5}>
                                    A part of recruiting is finding out what someone wants to do
                                    and what someone already has experience with. After gauging
                                    both of these things, officers will make recommendations as to
                                    how new recruits can fit into the club. However, the purpose of
                                    the club is to learn and gain as much exposure to quantitative
                                    finance as possible. Therefore, each person ultimately gets to
                                    choose what they work on.
                                </Text>
                            </AccordionItemContent>
                        </AccordionItem>
                    </AccordionRoot>
                </Flex>
            </Flex>
            <Flex justify="center" p={12}>
                <motion.Box whileHover={imageSkew}>
                    <Image src="images/neuralnet.png" borderRadius="full" alt="Stock photo of stocks"/>
                </motion.Box>
            </Flex>
        </Flex>
    )
}

export default HomePage;