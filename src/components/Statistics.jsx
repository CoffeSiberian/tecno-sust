import { Typography } from "@mui/material";
import { useDarkMode } from "../hooks/contex/DarkModeContex";
import Divider from "@mui/material/Divider";

// icons
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import DiscountRoundedIcon from "@mui/icons-material/DiscountRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";

const Statistics = () => {
    const { themeTatailwind } = useDarkMode();

    const renderStatistics = () => {
        const classStyle = `flex flex-col ${themeTatailwind.secundary.main_contrast} shadow-2xl w-full max-w-xs items-center border-2 border-green-600 rounded-xl gap-2 p-4`;
        return (
            <div className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-5 items-center md:justify-center">
                    <div className={classStyle}>
                        <div className="flex flex-col items-center gap-1">
                            <Typography color={themeTatailwind.primary.color}>
                                <BuildRoundedIcon fontSize="medium" />
                            </Typography>
                            <Typography
                                variant="h6"
                                color={themeTatailwind.primary.color}
                            >
                                Numero de reparaciones
                            </Typography>
                        </div>
                        <Divider className="w-full" component="div" />
                        <Typography
                            color={themeTatailwind.primary.color}
                            variant="h5"
                            className="text-center"
                            component="div"
                        >
                            <b>+200</b>
                        </Typography>
                    </div>
                    <div className={classStyle}>
                        <div className="flex flex-col items-center gap-1">
                            <Typography color={themeTatailwind.primary.color}>
                                <BusinessRoundedIcon fontSize="medium" />
                            </Typography>
                            <Typography
                                variant="h6"
                                color={themeTatailwind.primary.color}
                            >
                                Empresas asociadas
                            </Typography>
                        </div>
                        <Divider className="w-full" component="div" />
                        <Typography
                            color={themeTatailwind.primary.color}
                            variant="h5"
                            className="text-center"
                            component="div"
                        >
                            <b>2</b>
                        </Typography>
                    </div>
                    <div className={classStyle}>
                        <div className="flex flex-col items-center gap-1">
                            <Typography color={themeTatailwind.primary.color}>
                                <DiscountRoundedIcon fontSize="medium" />
                            </Typography>
                            <Typography
                                variant="h6"
                                color={themeTatailwind.primary.color}
                            >
                                Tickets entregados
                            </Typography>
                        </div>
                        <Divider className="w-full" component="div" />
                        <Typography
                            color={themeTatailwind.primary.color}
                            variant="h5"
                            className="text-center"
                            component="div"
                        >
                            <b>+500</b>
                        </Typography>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className="flex justify-center mb-10">
            <div
                className={`flex flex-col justify-center ${themeTatailwind.secundary.main} rounded-lg shadow-sm w-full max-w-7xl gap-4 m-5 p-5`}
            >
                <Typography
                    color={themeTatailwind.primary.color}
                    component="div"
                    className="flex items-center justify-center gap-2"
                    variant="h4"
                >
                    <QueryStatsRoundedIcon fontSize="large" />
                    <b>Estadisticas</b>
                </Typography>
                <Divider />
                {renderStatistics()}
            </div>
        </div>
    );
};

export default Statistics;
