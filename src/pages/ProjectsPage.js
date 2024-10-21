import { Flex, ScaleFade, Card, CardHeader, Heading, CardBody, Text } from '@chakra-ui/react';
import { motion } from "framer-motion";
import '../App.jsx';

function ProjectsPage() {

    return (
        <ScaleFade in={true} initalScale={0}>
            <Flex direction="column" gap={10}>
                {ProjectCard("Project 1", "This is an example description of a project",
                    "John Doe, Jane Doe, Joe Doe", "This is an example description of a project.")}
                {ProjectCard("Project 2", "This is an example description of a project",
                "John Doe, Jane Doe, Joe Doe", "This is an example description of a project.")}
                {ProjectCard("Project 3", "This is an example description of a project",
                "John Doe, Jane Doe, Joe Doe", "This is an example description of a project.")}
                {ProjectCard("Project 4", "This is an example description of a project",
                "John Doe, Jane Doe, Joe Doe", "This is an example description of a project.")}
            </Flex>
        </ScaleFade>
    )
}

function ProjectCard(title, frontDescription, members, inDepthDescription) {
    return (
        <motion.Box whileHover={{ skewX: 1.1 }}>
            <Flex justify="center">
                <Card bg="#4b7bec" width="50vw">
                    <CardHeader>
                        <Heading size="xl">{title}</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text fontSize="xl">{frontDescription}</Text>
                    </CardBody>
                    <CardBody>
                        <Text fontSize="xl">Who's working on this: {members}</Text>
                    </CardBody>
                </Card>
            </Flex>
        </motion.Box>
    )
}

export default ProjectsPage;