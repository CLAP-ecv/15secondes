"use client"
import { Label } from "@/src/components/ui/label";
import { Textarea, TextareaProps } from "./textarea";

export interface TextareaWithLabelProps extends TextareaProps{
    label: string
}

export const TextareaWithLabel = (props: TextareaWithLabelProps) => {
    return (
        <div className={props.className}>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Textarea id={props.id} rows={props.rows} name={props.name} placeholder={props.placeholder} />
        </div>
    );
}