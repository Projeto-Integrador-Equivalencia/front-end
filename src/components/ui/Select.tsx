import React, { Children } from "react"


type SelectProps = {
    autofocus?: boolean,
    disabled?: boolean,
    multiple?: boolean,
    required?: boolean,

    name?: string,
    children?: React.ReactNode,
    label: string
    value?: string | number | undefined
}

type OptionProps = {
    id?: string,
    value?: string | number | undefined,
    children?: React.ReactNode,
    selected?: boolean
}

function Option({ id, value, children }: OptionProps) {
    return <option id={id} defaultValue={value}>{children}</option>;
}

function Select({ label, value, children, disabled = false, autofocus = false, multiple = false }: SelectProps) {

    return (
        <div>
            <label className=""> {label}</label >
            <select value={value} disabled={disabled} autoFocus={autofocus} multiple={multiple}>
                {children}
            </select>
        </div >
    )
}

export { Select, Option }