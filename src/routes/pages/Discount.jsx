import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useDarkMode } from "../../hooks/contex/DarkModeContex";
import ErrorData from "../../components/EmptyData";
import Divider from "@mui/material/Divider";

const Discount_Data = [
    {
        id: 1,
        title: "Google Chromecast 4",
        max_price: 20000,
        total_discount: 25,
    },
    {
        id: 2,
        title: "Cougar Minos X2",
        max_price: 2000,
        total_discount: 10,
    },
    {
        id: 3,
        title: "Razer Kraken X Lite black",
        max_price: 15000,
        total_discount: 60,
    },
    {
        id: 4,
        title: "Minibox I5-3330",
        max_price: 50000,
        total_discount: 30,
    },
];

const Discount = () => {
    const { id } = useParams();
    const { themeTatailwind } = useDarkMode();

    const getProduct = () => {
        return Discount_Data.find((obj) => obj.id === parseInt(id));
    };

    const renderProduct = () => {
        const product = getProduct();
        if (product) {
            return (
                <div className="flex flex-col pb-2">
                    <Typography
                        className="flex justify-center p-2"
                        color={themeTatailwind.primary.color}
                        variant="h6"
                    >
                        {product.title}
                    </Typography>
                    <Divider />
                    <Typography
                        component={"div"}
                        className="pt-2 pb-2"
                        color={themeTatailwind.primary.color}
                        variant="h6"
                    >
                        <b>Descuento:</b> {product.total_discount}%
                    </Typography>
                    <Typography
                        component={"div"}
                        className="pt-2 pb-2"
                        color={themeTatailwind.primary.color}
                        variant="h6"
                    >
                        <b>Precio maximo a aplicar descuento: </b>
                        {product.max_price}
                    </Typography>
                </div>
            );
        }
        return <ErrorData msj="No se encontro el producto" />;
    };

    return (
        <div className="flex justify-center">
            <div
                className={`flex flex-col ${themeTatailwind.secundary.main} rounded-lg border-2 border-transparent ${themeTatailwind.primary.border_color} shadow-2xl max-w-lg min-w-[300px] m-4 mb-12 p-4`}
            >
                <div className="flex flex-col pb-2">
                    <Typography
                        className="flex justify-center p-2"
                        color={themeTatailwind.primary.color}
                        variant="h5"
                    >
                        <b>Producto a aplicar descuento</b>
                    </Typography>
                    {renderProduct()}
                </div>
            </div>
        </div>
    );
};

export default Discount;
