import { HStack, WrapItem, Wrap,Stack } from '@chakra-ui/react'
import { proyectos } from '../static/proyectos'
import Card from './generic_components/Card'
import SubTitulo from './generic_components/SubTitulo'

const Proyectos = () => {
    return (
        <Stack id="Proyectos">
            <SubTitulo data="PROYECTOS" size="2xl" type="h2" />
            <HStack w={'full'} h={"full"} py={5} justify={"center"}>
                <Wrap spacing={10} justify={"center"}>
                    {proyectos.map((proyecto, index) => {
                        return (
                            <WrapItem key={index}>
                                <Card imagen={proyecto.imagen} titulo={proyecto.titulo} descripcion={proyecto.descripcion} url={proyecto.url} tecnologias={proyecto.tecnologias} repositorio={proyecto.repositorio} />
                            </WrapItem>
                        )
                    })}
                </Wrap>
            </HStack>
        </Stack>
    )
}

export default Proyectos