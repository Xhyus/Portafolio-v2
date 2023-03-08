import { HStack, Heading, WrapItem, Wrap, Text, Image, Link, Tag, Stack, Button } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const Card = ({ imagen, descripcion, titulo, tecnologias, repositorio, url }) => {
    return (
        <WrapItem>
            <Stack w={"full"} flexDirection={{ base: 'column', md: 'row' }}>
                <Image src={imagen} alt={titulo} w={{ base: "100%", md: "50%" }} h="fit-content" />
                <Stack spacing={5} p={5} w={{ base: "100%", md: "50%" }} >
                    <Heading as="h3" size="md" fontWeight="bold" lineHeight="tight" isTruncated>{titulo}</Heading>
                    <Text noOfLines={3} textAlign="justify">{descripcion}</Text>
                    <Wrap justify="center">
                        {tecnologias.map((tecnologia, index) => (
                            <Tag key={index} size="md" variant="solid" colorScheme="teal">{tecnologia}</Tag>
                        ))}
                    </Wrap>
                    <HStack justify={{ base: "center" }}>
                        <Link href={repositorio} isExternal>
                            <Button leftIcon={<FaGithub />} colorScheme="blackAlpha" disabled="true" variant="outline">Repositorio</Button>
                        </Link>
                        <Link href={url} isExternal>
                            <Button colorScheme="teal" variant="solid">Ver</Button>
                        </Link>
                    </HStack>
                </Stack>
            </Stack>
        </WrapItem >

    )
}

export default Card