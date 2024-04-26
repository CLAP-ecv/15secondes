"use client"
import { Input, InputProps } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label";

export interface InputWithLabelProps extends InputProps{
    label: string
}

export const InputWithLabel = (props: InputWithLabelProps) => {
    return (
        <div className={props.className}>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} />
        </div>
    );
}