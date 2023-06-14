import { useDarkMode } from "../../hooks/contex/DarkModeContex";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import "../../static/css/NewViewStyle.scss";
import { TITLE } from "../../helpers/configs";

const AboutUs = () => {
    const { themeTatailwind } = useDarkMode();

    const renderInfo = () => {
        document.title = `${TITLE} | Sobre nosotros`;
        return (
            <div className="pt-4 pb-4">
                <Typography
                    component={"div"}
                    className="flex h-full w-full"
                    color={themeTatailwind.primary.color}
                    variant="caption"
                >
                    <Typography
                        className="hidden md:flex w-full justify-center"
                        component={"div"}
                        variant="h6"
                        color={themeTatailwind.primary.color}
                    >
                        <b>Sobre Nosotros</b>
                    </Typography>
                </Typography>
                <Divider className="pt-5" variant="middle" />
            </div>
        );
    };

    const renderPage = () => {
        return (
            <>
                <Typography
                    className="flex md:hidden w-full justify-center"
                    component={"div"}
                    variant="h6"
                    color={themeTatailwind.primary.color}
                >
                    <b>Sobre Nosotros</b>
                </Typography>
                <div className="flex flex-col gap-4 p-2 md:p-10">
                    {renderInfo()}
                    <Typography
                        className="text-justify space-y-1"
                        color={themeTatailwind.primary.color}
                        variant="body1"
                    >
                        <p>
                            Somos TecnoSust, una empresa comprometida con la
                            protección del medio ambiente y la promoción de la
                            sostenibilidad a través del reciclaje de tecnología.
                            Desde los establecimientos que nos han prestado su
                            ayuda, nos hemos dedicado a brindar soluciones
                            innovadoras y responsables para el manejo adecuado
                            de los desechos electrónicos. Nuestro equipo está
                            conformado por expertos en reciclaje y profesionales
                            apasionados por la conservación del planeta. En
                            TecnoSust, creemos en la importancia de darle una
                            segunda vida a los dispositivos electrónicos
                            obsoletos o dañados. Trabajamos arduamente para
                            reducir el impacto ambiental generado por los
                            desechos electrónicos y contribuir a la economía
                            circular. A través de nuestra experiencia y
                            conocimientos en el campo del reciclaje, nos
                            esforzamos por ofrecer servicios confiables y
                            eficientes a nuestros clientes.
                        </p>
                    </Typography>
                    <Typography
                        className="text-justify space-y-1"
                        color={themeTatailwind.primary.color}
                        variant="h3"
                    >
                        <b>Nuestro Equipo</b>
                    </Typography>
                    <Typography
                        className="text-justify space-y-1"
                        color={themeTatailwind.primary.color}
                        variant="body1"
                    >
                        <p>
                            Contamos con un equipo de técnicos altamente
                            capacitados y certificados, quienes se mantienen
                            actualizados con las últimas tecnologías y
                            tendencias del mercado. Están preparados para
                            resolver cualquier problema que tengas con tus
                            dispositivos.
                        </p>
                    </Typography>
                    <Typography
                        className="text-justify space-y-1"
                        color={themeTatailwind.primary.color}
                        variant="h3"
                    >
                        <b>Nuestros Objetivos</b>
                    </Typography>
                    <Typography
                        className="text-justify space-y-1"
                        color={themeTatailwind.primary.color}
                        variant="body1"
                    >
                        <p>
                            <ul className="flex flex-col list-disc gap-3">
                                <li>
                                    Minimizar el impacto negativo de los
                                    desechos electrónicos en el medio ambiente y
                                    fomentar la reutilización responsable de la
                                    tecnología.
                                </li>
                                <li>
                                    Trabajamos para garantizar que los
                                    dispositivos electrónicos sean reciclados de
                                    manera segura y cumpliendo con todas las
                                    regulaciones ambientales.
                                </li>
                                <li>
                                    Nuestro proceso de reciclaje está diseñado
                                    para maximizar la recuperación de materiales
                                    valiosos y minimizar la generación de
                                    residuos.
                                </li>
                                <li>
                                    Reutilización y donación: Promovemos la
                                    reutilización de dispositivos electrónicos
                                    en buen estado a través de programas de
                                    donación. Nos asociamos con organizaciones
                                    benéficas y entidades sin fines de lucro
                                    para ofrecer equipos reacondicionados a
                                    personas y comunidades que los necesitan.
                                </li>
                                <li>
                                    Concientización y educación: Buscamos educar
                                    a la sociedad sobre la importancia del
                                    reciclaje de tecnología y los riesgos
                                    asociados con el manejo incorrecto de los
                                    desechos electrónicos.
                                </li>
                                <li>
                                    Organizamos campañas de concientización,
                                    charlas y talleres en escuelas, empresas y
                                    eventos comunitarios Innovación y desarrollo
                                    sostenible: Nos mantenemos actualizados con
                                    las últimas tecnologías y mejores prácticas
                                    en el campo del reciclaje.
                                </li>
                                <li>
                                    Buscamos continuamente nuevas formas de
                                    mejorar nuestros procesos, promoviendo la
                                    adopción de soluciones sostenibles y
                                    reduciendo nuestra huella ambiental.
                                </li>
                            </ul>
                        </p>
                    </Typography>
                    <Typography
                        className="text-justify space-y-1"
                        color={themeTatailwind.primary.color}
                        variant="h3"
                    >
                        <b>Nuestros Servicios</b>
                    </Typography>
                    <Typography
                        className="text-justify space-y-1"
                        color={themeTatailwind.primary.color}
                        variant="body1"
                    >
                        <ul className="flex flex-col list-disc gap-3">
                            <li>
                                Reparación de hardware y software de
                                computadoras y laptops.
                            </li>
                            <li>
                                Reparación de pantallas y baterías de teléfonos
                                móviles.
                            </li>
                            <li>
                                Reparación de tablets y otros dispositivos
                                electrónicos.
                            </li>
                            <li>
                                Mantenimiento preventivo y limpieza de equipos.
                            </li>
                            <li>Recuperación de datos.</li>
                            <li>
                                Asesoramiento y venta de productos tecnológicos.
                            </li>
                        </ul>
                    </Typography>
                </div>
            </>
        );
    };

    return <>{renderPage()}</>;
};

export default AboutUs;
