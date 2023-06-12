import { useDarkMode } from "../hooks/contex/DarkModeContex";
import { Typography } from "@mui/material";
import { PARTNERS } from "../helpers/configs";
import Divider from "@mui/material/Divider";

// icons
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";

const PartnersCard = () => {
    const { themeTatailwind } = useDarkMode();

    const renderPartners = () => {
        return PARTNERS.map((partner, index) => {
            return (
                <div
                    key={index}
                    className={`flex relative ${themeTatailwind.secundary.main_contrast} items-center border-2 border-yellow-600 rounded-xl p-4`}
                >
                    <a href={partner.link} target="_blank" rel="noreferrer">
                        <img
                            className="object-cover rounded-lg drop-shadow-lg w-24 h-24"
                            src={partner.logo}
                            alt={partner.name}
                        />
                    </a>
                </div>
            );
        });
    };
    return (
        <div className="flex justify-center mb-10">
            <div
                className={`${themeTatailwind.secundary.main} max-w-7xl w-full rounded-lg shadow-2xl m-5 p-5`}
            >
                <div className="flex flex-col items-center text-justify w-full gap-5 pb-2">
                    <Typography
                        color={themeTatailwind.primary.color}
                        component="div"
                        className="flex items-center justify-center gap-2"
                        variant="h4"
                    >
                        <HandshakeRoundedIcon fontSize="large" />
                        <b>Empresas afiliadas</b>
                    </Typography>
                    <Divider className="w-full" component="div" />
                    <div className="grid grid-cols-2 justify-items-center gap-4">
                        {renderPartners()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersCard;
