import { Typography } from "@mui/material";
import { useDarkMode } from "../hooks/contex/DarkModeContex";
import Divider from "@mui/material/Divider";

// icons
//

const ProductCard = ({ img, name, price, description, QR }) => {
    const { themeTatailwind } = useDarkMode();

    return (
        <div
            className={`flex flex-col ${themeTatailwind.secundary.main} rounded-lg border-2 border-transparent ${themeTatailwind.primary.border_color} shadow-2xl min-w-[300px] m-4 mb-12 p-4`}
        >
            <img
                className="object-cover max-h-[500px] rounded-xl drop-shadow-lg"
                src={img}
                alt={"Imagen de " + name}
            />
            <div className="flex flex-col pb-2">
                <Typography
                    className="flex justify-center p-2"
                    color={themeTatailwind.primary.color}
                    variant="h6"
                >
                    {name}
                </Typography>
                <Divider />
                <Typography
                    component={"div"}
                    className="pt-2 pb-2"
                    color={themeTatailwind.primary.color}
                    variant="body1"
                >
                    {description}
                </Typography>
                <Divider />
                <Typography
                    component={"div"}
                    className="pt-2 pb-2"
                    color={themeTatailwind.primary.color}
                    variant="h6"
                >
                    <b>Precio:</b> ${price}
                </Typography>
            </div>
            <div className="flex justify-center items-end h-full gap-3">
                <img
                    className="object-contain max-w-[180px] rounded-xl drop-shadow-lg"
                    src={QR}
                    alt={"QR" + name}
                />
            </div>
        </div>
    );
};

export default ProductCard;
