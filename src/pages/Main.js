import { Flex, Tabs, Heading, Image, Spacer, VStack,
    Text, Link } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { motion } from "framer-motion";
import HomePage from  './HomePage.js';
import ProjectsPage from './ProjectsPage.js';
import MembersPage from './MembersPage.js';
import ContactPage from './ContactPage.js';
import '../App.jsx';

function Main() {
    const image = { skewY: 1.02 };

    return (
        <Flex direction="column">
            <Tabs.Root variant="unstyled" align="center" size="lg" color="black" overflowX="hidden">
                <Tabs.List>
                    <Tabs.Trigger _selected={{ color: "#45aaf2" }}>Home</Tabs.Trigger>
                    <Tabs.Trigger _selected={{ color: "#45aaf2" }}>Projects</Tabs.Trigger>
                    <Tabs.Trigger _selected={{ color: "#45aaf2" }}>Members</Tabs.Trigger>
                    <Tabs.Trigger _selected={{ color: "#45aaf2" }}>Contact Us</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content><HomePage /></Tabs.Content>
                <Tabs.Content><ProjectsPage /></Tabs.Content>
                <Tabs.Content><MembersPage /></Tabs.Content>
                <Tabs.Content><ContactPage /></Tabs.Content>
            </Tabs.Root>
            <Flex as="footer" bg="#2d98da" direction="row" justify="space-between" p={4}>
                <Flex flex={2} align="center" justify="center">
                    <VStack spacing="24px">
                        <Text><PhoneIcon h="24px" w="24px"/>  +1 (240) 481-5975</Text>
                        <Text><EmailIcon h="24px" w="24px"/>  apexquant@gmail.com</Text>
                        <motion.Box whileHover={image}>
                            <Link href="https://www.linkedin.com/company/apexfund-md/mycompany/" isExternal>
                                <Image src="images/linkedinlogo.png" h="30px" w="30px" />
                            </Link>
                        </motion.Box>
                    </VStack>
                </Flex>
                <motion.Box whileHover={image}>
                    <Image src="images/umd.png" maxHeight="150px" maxWidth="150px" flex={1}/>
                </motion.Box>
                <Spacer />
                <motion.Box whileHover={image}>
                    <Image src="images/apexlogo.png" maxHeight="150px" maxWidth="150px" flex={1}/>
                </motion.Box>
                <Flex flex={2} align="center" justify="center">
                    <Heading>Apex Quant</Heading>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Main;