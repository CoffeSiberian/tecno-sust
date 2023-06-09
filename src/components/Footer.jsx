import { Typography } from "@mui/material";
import { useDarkMode } from "../hooks/contex/DarkModeContex";
import { TITLE } from "../helpers/configs";
import Paper from "@mui/material/Paper";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";

import logo from "../static/img/logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    const { darkMode, themeTatailwind } = useDarkMode();
    const social = [
        {
            name: "Instagram",
            logo: <InstagramIcon />,
            link: "https://www.instagram.com/_.tecnosust/",
        },
    ];

    return (
        <div className="mt-auto mb-4">
            <Paper
                elevation={24}
                sx={{
                    backgroundColor: darkMode
                        ? themeTatailwind.secundary.main
                        : "secundary.main",
                }}
            >
                <div className="flex justify-center p-2 drop-shadow-md">
                    <img
                        className="h-auto w-10 mr-2 rounded-lg"
                        src={logo}
                        alt="logo"
                    />
                    <Typography variant="h4">{TITLE}</Typography>
                </div>
                <div className="flex justify-center p-2">
                    <Typography>Reciclaje y sustentabilidad&nbsp;</Typography>
                    <Typography color="error">
                        <b>para todos&nbsp;</b>
                    </Typography>
                    <VerifiedUserIcon color="secondary" />
                </div>
                <div className="flex justify-center mb-3 mt-3">
                    <ul className="justify-end md:inline-flex">
                        {social.map((obj) => (
                            <li className="mr-3 ml-3" key={obj.name}>
                                <Link
                                    className="flex justify-start md:justify-center items-center p-2"
                                    color={darkMode ? "white" : "black"}
                                    href={obj.link}
                                    target="_blank"
                                    underline="none"
                                >
                                    {obj.logo}
                                    <Typography variant="subtitle2">
                                        {obj.name}
                                    </Typography>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center mb-2">
                    <Link
                        className="flex justify-center gap-1 items-center p-2"
                        color={darkMode ? "white" : "black"}
                        href="https://github.com/CoffeSiberian"
                        target="_blank"
                        underline="none"
                    >
                        <Typography variant="caption">
                            by: <b>SiberianCoffe</b>
                        </Typography>
                        <GitHubIcon />
                    </Link>
                </div>
            </Paper>
        </div>
    );
};

export default Footer;
