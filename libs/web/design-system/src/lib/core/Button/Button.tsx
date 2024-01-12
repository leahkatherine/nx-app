
import { Button } from '@mui/material';

interface ButtonProps {
    label: string;
}

export const ButtonComponent = ({ label }: ButtonProps) => {
    return <Button>{label}</Button>;
};
