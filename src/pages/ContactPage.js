import { Flex, Heading } from '@chakra-ui/react';
import { motion } from "framer-motion";
import '../App.jsx';

function ContactPage() {

    return (
        <Flex justify="center" align="center" minHeight="69.5vh">
            <motion.Box whileHover={{ skewY: 1.25 }}>
                <Heading>Look at the footer below for our contact information!</Heading>
            </motion.Box>
        </Flex>
    )
}

export default ContactPage;