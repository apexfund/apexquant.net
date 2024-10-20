import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel, ScaleFade } from '@chakra-ui/react';
import HomePage from  './HomePage.js';
import ProjectsPage from './ProjectsPage.js';
import MembersPage from './MembersPage.js';
import ContactPage from './ContactPage.js';
import '../App.jsx';

function Main() {

    return (
        <ScaleFade in={true} initalScale={0}>
            <Flex direction="column">
                <Tabs variant="unstyled" align="center" size="lg" color="black" overflowX="hidden">
                    <TabList>
                        <Tab _selected={{ color: "#45aaf2" }}>Home</Tab>
                        <Tab _selected={{ color: "#45aaf2" }}>Projects</Tab>
                        <Tab _selected={{ color: "#45aaf2" }}>Members</Tab>
                        <Tab _selected={{ color: "#45aaf2" }}>Contact Us</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><HomePage /></TabPanel>
                        <TabPanel><ProjectsPage /></TabPanel>
                        <TabPanel><MembersPage /></TabPanel>
                        <TabPanel><ContactPage /></TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </ScaleFade>
    )
}

export default Main;