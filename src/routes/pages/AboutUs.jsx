import { useDarkMode } from "../../hooks/contex/DarkModeContex";
import ReactMarkdown from "react-markdown";
import { Typography } from "@mui/material";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
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
                <div className="flex flex-col p-2 md:p-10">
                    {renderInfo()}
                    <Typography
                        className="text-justify space-y-1"
                        component={"div"}
                        color={themeTatailwind.primary.color}
                        variant="body1"
                    >
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm, remarkBreaks]}
                        >
                            MARKDOWN
                        </ReactMarkdown>
                    </Typography>
                </div>
            </>
        );
    };

    return <>{renderPage()}</>;
};

export default AboutUs;
