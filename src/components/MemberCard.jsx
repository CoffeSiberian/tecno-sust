import { Typography } from "@mui/material";
import { useDarkMode } from "../hooks/contex/DarkModeContex";

const MemberCard = ({ username, roleName, imgLink }) => {
    const { themeTatailwind } = useDarkMode();

    const renderAvatar = () => {
        return (
            <img
                className="rounded-full w-24 h-auto"
                src={imgLink}
                alt={username + " avatar"}
            />
        );
    };

    return (
        <div
            className={`flex flex-col ${themeTatailwind.secundary.main} max-w-xs w-full rounded-lg border-2 border-transparent ${themeTatailwind.primary.border_color} shadow-2xl p-4 gap-3`}
        >
            <div className="flex justify-center">{renderAvatar()}</div>
            <div>
                <Typography
                    className="flex justify-center"
                    variant="h6"
                    component="div"
                    color={themeTatailwind.primary.color}
                >
                    <b>{username}</b>
                </Typography>
                <Typography
                    className="flex justify-center pt-1"
                    variant="body2"
                    component="div"
                    color={themeTatailwind.primary.color}
                >
                    {roleName}
                </Typography>
            </div>
        </div>
    );
};

export default MemberCard;
