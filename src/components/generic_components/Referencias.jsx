import { Box, Link, Text } from "@chakra-ui/react"

const Referencias = ({ nombre, correo }) => {
    return (
        <Box bgColor="black" p={2} w="full">
            <Text color="white" fontWeight="light" textAlign="center" fontSize={{ base: "md", md: "xl" }}>Para referencias contactarse con {nombre} - <Link href={"mailto:" + correo}>{correo}</Link></Text>
        </Box>
    )
}

export default Referencias