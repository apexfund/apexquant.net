import { Flex, ScaleFade } from '@chakra-ui/react';
import '../App.jsx';

function ProjectsPage() {

    return (
        <ScaleFade in={true} initalScale={0}>
            <Flex direction="column">
                Projects
            </Flex>
        </ScaleFade>
    )
}

export default ProjectsPage;