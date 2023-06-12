import { Typography } from "@mui/material";
import { useDarkMode } from "../../hooks/contex/DarkModeContex";
import ProductCard from "../../components/ProductCard";
import { TITLE } from "../../helpers/configs";

// imgs
import imgp1 from "../../static/img/products_img/p1.png";
import imgp2 from "../../static/img/products_img/p2.png";
import imgp3 from "../../static/img/products_img/p3.png";
import imgp4 from "../../static/img/products_img/p4.png";

// qr
import qr1 from "../../static/img/products_img/qr/p1.png";
import qr2 from "../../static/img/products_img/qr/p2.png";
import qr3 from "../../static/img/products_img/qr/p3.png";
import qr4 from "../../static/img/products_img/qr/p4.png";

const ExampleProduct = [
    {
        img: imgp1,
        name: "Google Chromecast 4",
        price: 39990,
        description:
            "Con los beneficios del Chromecast, las pantallas se convertirán en un mundo de contenidos para disfrutar. Este media player permite acceder a distintas plataformas multimedia. Se destaca también por actualizarse automáticamente para que interactúes con un mayor número de aplicaciones.",
        QR: qr1,
    },
    {
        img: imgp3,
        name: "Razer Kraken X Lite black",
        price: 29990,
        description:
            "¡Experimenta la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Razer Kraken X Lite no te pierdes ningún detalle y escuchas el audio tal y como fue diseñado por los creadores.",
        QR: qr3,
    },
    {
        img: imgp2,
        name: "Cougar Minos X2",
        price: 6000,
        description:
            "Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitas comodidad y facilidad de movimiento. Con tu Cougar Minos X2 encuentra eso que buscas en un solo aparato con la mejor tecnología.",
        QR: qr2,
    },
    {
        img: imgp4,
        name: "Minibox I5-3330",
        price: 95000,
        description:
            "Este equipo es una excelente opción para aquellos que buscan una computadora funcional a un precio asequible. A pesar de ser usado, ha sido cuidadosamente reacondicionado y revisado para asegurar su funcionamiento óptimo.",
        QR: qr4,
    },
];

const Product = () => {
    document.title = TITLE + " | Productos de prueba";

    const { themeTatailwind } = useDarkMode();

    const renderEvents = () => {
        return ExampleProduct.map((product, index) => {
            return (
                <div key={index + "div1"} className="flex justify-center">
                    <div key={index + "div2"} className="flex max-w-xl">
                        <ProductCard
                            img={product.img}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            QR={product.QR}
                        />
                    </div>
                </div>
            );
        });
    };

    const renderPage = () => {
        return (
            <>
                <div className="grid md:grid-cols-2">{renderEvents()}</div>
            </>
        );
    };

    return (
        <>
            <div className="flex justify-center m-2">
                <Typography color={themeTatailwind.primary.color} variant="h4">
                    <b>Productos de prueba</b>
                </Typography>
            </div>

            {renderPage()}
        </>
    );
};

export default Product;
