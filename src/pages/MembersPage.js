import { Flex, Heading, SimpleGrid, Text, Card, Image, Link, CardBody } from '@chakra-ui/react';
import { motion } from "framer-motion";
import '../App.jsx';

function MembersPage() {
    const members = [
        {
            img: "akshita.png",
            name: "Akshita Badkundri",
            year: "Junior",
            major: "Computer Science and Math",
            linkedin: "https://www.linkedin.com/in/akshita-badkundri/"
        },
        {
            img: "bhuvan.png",
            name: "Bhuvan Jammalamadaka",
            year: "Senior",
            major: "Computer Science",
            linkedin: "https://www.linkedin.com/in/bhuvanj/"
        },
        {
            img: "caleb.png",
            name: "Caleb Chang",
            year: "Sophomore",
            major: "Computer Science and Math",
            linkedin: "https://www.linkedin.com/in/caleb-chang-45422a202/"
        },
        {
            img: "daniel.png",
            name: "Daniel Wang",
            year: "Sophomore",
            major: "Computer Science and Math",
            linkedin: "https://www.linkedin.com/in/daniel-e-wang/"
        },
        {
            img: "dhruv.png",
            name: "Dhruv Dewan",
            year: "Junior",
            major: "Computer Science",
            linkedin: "https://www.linkedin.com/in/dewan-dhruv/"
        },
        {
            img: "eric.png",
            name: "Eric Chen",
            year: "Sophomore",
            major: "Computer Science and Math",
            linkedin: "https://www.linkedin.com/in/eschen003/"
        },
        {
            img: "krishi.png",
            name: "Krishi Cherukupalli",
            year: "Freshman",
            major: "Computer Engineering",
            linkedin: "https://www.linkedin.com/in/krishi-cherukupalli/"
        },
        {
            img: "kushal.png",
            name: "Kushal Kapoor",
            year: "Junior",
            major: "Computer Science and Neuroscience",
            linkedin: "https://www.linkedin.com/in/kushalkapoor25/"
        },
        {
            img: "narain.png",
            name: "Narain Sriram",
            year: "Sophomore",
            major: "Computer Science",
            linkedin: "https://www.linkedin.com/in/narainsriram/"
        },
        {
            img: "saipraneeth.png",
            name: "Saipraneeth Mukku",
            year: "Senior",
            major: "Computer Science",
            linkedin: "https://www.linkedin.com/in/saipmukku/"
        },
        {
            img: "pranav.png",
            name: "Pranav Bykampadi",
            year: "Freshman",
            major: "Computer Science",
            linkedin: "https://www.linkedin.com/in/pranav-bykampadi-b89162262/"
        },
        {
            img: "sanjit.png",
            name: "Sanjit Thangarasu",
            year: "Senior",
            major: "Computer Science",
            linkedin: "https://www.linkedin.com/in/tsanjit/"
        },
        {
            img: "sashvad.png",
            name: "Sashvad (Sachin) Satish Kumar",
            year: "Sophomore",
            major: "Computer Science and Math",
            linkedin: "https://www.linkedin.com/in/sashvad-satishkumar/"
        },
        {
            img: "shivam.png",
            name: "Shivam Amin",
            year: "Sophomore",
            major: "Computer Science and Math",
            linkedin: "https://www.linkedin.com/in/shivamamin05/"
        },
        {
            img: "siddharth.png",
            name: "Siddharth Cherukupalli",
            year: "Senior",
            major: "Computer Science",
            linkedin: "https://www.linkedin.com/in/siddharth-cherukupalli/"
        },
        {
            img: "sohum.png",
            name: "Sohum Desai",
            year: "Sophomore",
            major: "Computer Science",
            linkedin: "https://www.linkedin.com/in/sohumdesaics/"
        },
        {
            img: "suchismit.png",
            name: "Suchismit Ghosh",
            year: "Sophomore",
            major: "Computer Science",
            linkedin: "https://www.linkedin.com/in/sitghosh/"
        },
        {
            img: "tanmay.png",
            name: "Tanmay Jyothis",
            year: "Junior",
            major: "Computer Science and Math",
            linkedin: "https://www.linkedin.com/in/tanmayjyothis/"
        },
        {
            img: "varunr.png",
            name: "Varun Rao",
            year: "Sophomore",
            major: "Computer Science and Math",
            linkedin: "https://www.linkedin.com/in/varunvellorerao/"
        },
        {
            img: "varunv.png",
            name: "Varun Vishnubhotla",
            year: "Senior",
            major: "Computer Science",
            linkedin: "https://www.linkedin.com/in/v-vishnubhotla/"
        },
        {
            img: "viraj.png",
            name: "Viraj Urs",
            year: "Sophomore",
            major: "Computer Science and Math",
            linkedin: "https://www.linkedin.com/in/viraj-urs/"
        },
        {
            img: "vishesh.png",
            name: "Vishesh Gupta",
            year: "Junior",
            major: "Computer Science and Math",
            linkedin: "https://www.linkedin.com/in/vishesh-gupta-975550206/"
        }
    ];

    return (
        <Flex direction="column" justify="center">
            <Heading>Our Members</Heading>
            <Text fontSize="xl" p={6}>Listed below are the members of Apex Quant in the 2024-2025 cohort</Text>
            <SimpleGrid columns={3} rows={8} gap="2vw">
                {members.map(member => (
                    <MemberCard img={member.img} name={member.name} year={member.year} 
                    major={member.major} linkedin={member.linkedin} />
                ))}
            </SimpleGrid>
        </Flex>
    )
}

function MemberCard({img, name, year, major, linkedin}) {
    return (
        <motion.Box whileHover={{ skewY: 1.25 }}>
            <Card width="30vw">
                <CardBody>
                    <Flex direction="column">
                        <Image src={`members/${img}`} alt="member" p={2}/>
                        <Heading>{name}, {year}</Heading>
                        <Text p={2}>{major}</Text>
                        <Link href={linkedin} isExternal>
                            <Image src="images/linkedinlogo.png" h="30px" w="30px" />
                        </Link>
                    </Flex>
                </CardBody>
            </Card>
        </motion.Box>
    )
}

export default MembersPage;