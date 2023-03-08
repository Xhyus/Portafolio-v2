import { HStack, Heading, Wrap, Text, Image, Link, Tag, Stack, Button } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const Card = ({ imagen, descripcion, titulo, tecnologias, repositorio, url }) => {
    return (
        <Stack w={"full"} flexDirection={{ base: 'column', md: 'row' }} align="center">
            <Image src={imagen} alt={titulo} w={{ base: "100%", md: "50%" }} h="fit-content" />
            <Stack spacing={5} p={{ base: 0, md: 5 }} w={{ base: "100%", md: "50%" }} >
                <Heading as="h3" size="md" fontWeight="bold" lineHeight="tight" isTruncated>{titulo}</Heading>
                <Text noOfLines={3} textAlign="justify" fontSize={{ base: "md", md: "xl" }}>{descripcion}</Text>
                <Wrap justify="center">
                    {tecnologias.map((tecnologia, index) => (
                        <Tag key={index} size="md" variant="solid" colorScheme="teal">{tecnologia}</Tag>
                    ))}
                </Wrap>
                <HStack justify={{ base: "center" }}>
                    {repositorio ?
                        <Link href={repositorio} isExternal>
                            <Button leftIcon={<FaGithub />} colorScheme="teal" variant="outline">Repositorio</Button>
                        </Link>
                        :
                        <Button leftIcon={<FaGithub />} colorScheme="blackAlpha" isDisabled variant="outline">Repositorio</Button>
                    }
                    {url ?
                        <Link href={url} isExternal>
                            <Button colorScheme="teal" variant="solid">Ver</Button>
                        </Link>
                        :
                        <Button colorScheme="blackAlpha" isDisabled variant="solid">Ver</Button>
                    }
                </HStack>
            </Stack>
        </Stack>

    )
}

export default Card