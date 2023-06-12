import { Typography } from "@mui/material";
import { useDarkMode } from "../hooks/contex/DarkModeContex";
import Divider from "@mui/material/Divider";

// icons
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";

const AttributesCard = () => {
    const { themeTatailwind } = useDarkMode();
    const Atributes = [
        {
            atribute: "La sustentabilidad dentro ti",
            description:
                "Sé sustentable, haz tu parte. Recicla tus desechos electrónicos y reduce el consumo de energía. Pequeñas acciones pueden hacer una gran  diferencia. ¿Qué puedes hacer hoy para proteger nuestro planeta?",
            icon: <PeopleRoundedIcon fontSize="large" />,
        },
        {
            atribute: "El producto de  hoy, prospera mañana",
            description:
                "Elige productos sostenibles para un futuro próspero. Piensa en las generaciones venideras y en el impacto que tus decisiones pueden tener  en el planeta.",
            icon: <AdminPanelSettingsRoundedIcon fontSize="large" />,
        },
        {
            atribute: "Una acción para una solución",
            description:
                "Cada pequeña acción cuenta. ¿Qué harás hoy para contribuir a un futuro más sostenible?",
            icon: <FlagRoundedIcon fontSize="large" />,
        },
        {
            atribute: "Si buscas resultados distintos sigue tu instinto",
            description:
                "Confía en ti mismo para encontrar nuevas soluciones sostenibles. ¿Qué cambios puedes hacer hoy para proteger el medio ambiente?",
            icon: <EmojiEventsRoundedIcon fontSize="large" />,
        },
    ];

    const AttributeCard = (id, atribute, description, icon) => {
        return (
            <div
                key={id}
                className={`flex flex-col ${themeTatailwind.secundary.main} max-w-md rounded-lg border-2 border-transparent ${themeTatailwind.primary.border_color} shadow-2xl gap-3 m-4 p-4`}
            >
                <Typography
                    className="flex justify-center"
                    color={themeTatailwind.primary.color}
                >
                    {icon}
                </Typography>
                <Typography
                    className="flex justify-center"
                    color={themeTatailwind.primary.color}
                    variant="h6"
                >
                    {atribute}
                </Typography>
                <Divider />
                <div className="flex text-justify gap-3">
                    <Typography
                        color={themeTatailwind.primary.color}
                        variant="subtitle2"
                    >
                        {description}
                    </Typography>
                </div>
            </div>
        );
    };

    const renderAttributesP1 = () => {
        const divAtributes = Atributes.slice(0, 3);
        return (
            <div className="grid grid-cols-1 md:grid-cols-3">
                {divAtributes.map((atribute, index) => {
                    return AttributeCard(
                        index,
                        atribute.atribute,
                        atribute.description,
                        atribute.icon
                    );
                })}
            </div>
        );
    };

    const renderAttributesP2 = () => {
        const divAtributes = Atributes.slice(3, 5);
        return (
            <div className="grid grid-cols-1">
                {divAtributes.map((atribute, index) => {
                    return AttributeCard(
                        index,
                        atribute.atribute,
                        atribute.description,
                        atribute.icon
                    );
                })}
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center">
            {renderAttributesP1()}
            {renderAttributesP2()}
        </div>
    );
};

export default AttributesCard;
