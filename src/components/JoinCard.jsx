import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../hooks/contex/DarkModeContex";
import { Typography } from "@mui/material";
import { TITLE } from "../helpers/configs";
import DomainRoundedIcon from "@mui/icons-material/DomainRounded";
import Button from "@mui/material/Button";
import my_welcome from "../static/img/welcome.png";

const JoinCard = () => {
    const { themeTatailwind } = useDarkMode();
    const navigate = useNavigate();
    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col max-w-7xl md:flex-row">
                <div className="flex justify-center p-2">
                    <img
                        className="object-cover rounded-lg drop-shadow-lg aspect-video"
                        style={{ width: "1000px", height: "auto" }}
                        src={my_welcome}
                        alt="welcome_image_card"
                    />
                </div>

                <div
                    className={`flex flex-col ${themeTatailwind.secundary.main} rounded-lg border-2 border-cyan-600 shadow-2xl m-4 p-4`}
                >
                    <div className="flex flex-col text-justify h-full gap-5 pb-2">
                        <Typography
                            color={themeTatailwind.primary.color}
                            variant="h4"
                        >
                            <b>¡Bienvenidos a {TITLE}!</b>
                        </Typography>
                        <Typography
                            color={themeTatailwind.primary.color}
                            variant="subtitle1"
                        >
                            ¡Recicla tus dispositivos electrónicos sin uso y
                            obtén increíbles descuentos! Ayuda al planeta y
                            ahorra dinero al entregar tus dispositivos a
                            empresas seleccionadas. ¡Descubre cómo obtener tu
                            ticket de descuento hoy mismo!
                        </Typography>
                        <div className="grid content-end h-full">
                            <div className="flex justify-center">
                                <Button
                                    startIcon={<DomainRoundedIcon />}
                                    variant="contained"
                                    onClick={() => navigate("/contact")}
                                >
                                    Contactarse
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinCard;
