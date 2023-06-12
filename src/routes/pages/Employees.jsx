import { useDarkMode } from "../../hooks/contex/DarkModeContex";
import { Typography } from "@mui/material";
import { TITLE } from "../../helpers/configs";
import MemberCard from "../../components/MemberCard";

// photos
import p1 from "../../static/img/employees_photos/1.jpg";
import p2 from "../../static/img/employees_photos/2.jpg";
import p3 from "../../static/img/employees_photos/3.jpg";
import p5 from "../../static/img/employees_photos/5.jpg";
import p6 from "../../static/img/employees_photos/6.jpg";

const listEmployees = [
    {
        id: 1,
        username: "CAROLINA MENDOZA",
        roleName: "COMMUNITY MANAGER",
        imgLink: p1,
    },
    {
        id: 2,
        username: "NICOLAS MACHUCA",
        roleName: "FINANZAS",
        imgLink: p2,
    },
    {
        id: 3,
        username: "ALINE SUAREZ",
        roleName: "MARKETING",
        imgLink: p3,
    },
    {
        id: 4,
        username: "FERNANDO GARRIDO",
        roleName: "DESARROLLADOR Y PROGRAMADOR",
        imgLink: "https://i.imgur.com/xz34fmF.jpg",
    },
    {
        id: 5,
        username: "MARÍA POBLETE",
        roleName: "DIRECTOR DE OPERACIONES",
        imgLink: p5,
    },
    {
        id: 6,
        username: "MARIA SALGADO",
        roleName: "DIRECTORA EJECUTIVA",
        imgLink: p6,
    },
];

const Employees = () => {
    document.title = TITLE + " | Miembros";

    const { themeTatailwind } = useDarkMode();

    const renderPage = () => {
        return (
            <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 self-center gap-10 md:gap-8 p-3">
                    {listEmployees.map((member) => {
                        return (
                            <MemberCard
                                key={member.id}
                                username={member.username}
                                roleName={member.roleName}
                                imgLink={member.imgLink}
                            />
                        );
                    })}
                </div>
            </>
        );
    };

    return (
        <div className="flex flex-col">
            <div className="flex justify-center m-2">
                <Typography color={themeTatailwind.primary.color} variant="h4">
                    <b>Nuestros Empleados</b>
                </Typography>
            </div>
            {renderPage()}
        </div>
    );
};

export default Employees;
