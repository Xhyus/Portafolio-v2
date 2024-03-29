import { Stack } from "@chakra-ui/react";
import experiencias from "../static/experiencias";
import SubTitulo from "./generic_components/SubTitulo";
import PresentacionExperiencia from "./generic_components/PresentacionExperiencia";

const Experiencia = () => {
  return (
    <Stack justify={"center"} py={10} w={"full"} id={"Experiencias"}>
      <SubTitulo type="h2" size="2xl" data="EXPERIENCIAS" />
      {experiencias.map((experiencia) => {
        return (
          <PresentacionExperiencia
            key={experiencia.code}
            periodo={experiencia.periodo}
            empresa={experiencia.empresa}
            detalle={experiencia.descripcion}
            experiencia={experiencia.experiencia}
            nombre={experiencia.nombre}
            correo={experiencia.correo}
            referencia={experiencia.referencia}
          />
        );
      })}
    </Stack>
  );
};

export default Experiencia;
