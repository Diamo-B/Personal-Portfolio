declare module "@iconscout/react-unicons" {
    import { ComponentType, SVGProps } from "react";

    type Icon = ComponentType<SVGProps<SVGSVGElement>>;

    export const UilUser : Icon;
    export const UilHome : Icon;
    export const UilFolder : Icon;
    export const UilDesktop : Icon; 
    export const UilArrowUp : Icon;
    export const UilArrowCircleRight: Icon;
    export const UilArrowCircleLeft: Icon;
}