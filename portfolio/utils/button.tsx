import { ReactNode } from "react";

interface ButtonProps {
    size?: number;
    children: ReactNode;
}

const Button = ({ size, children}: ButtonProps) => {
    return (
        <div className="border text-lg">
            {children}
        </div>
    )
};

Button.defaultProps = {
    size: 10,
    children: null
};

export default Button;