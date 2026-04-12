import React, { Children } from "react"


type SelectProps = {
    autofocus?: boolean,
    disabled?: boolean,
    multiple?: boolean,
    required?: boolean,

    name?: string,
    children?: React.ReactNode,
    label: string
}

type OptionProps = {
    id?: string,
    value?: string | number | undefined,
    children?: React.ReactNode,
    selected?: boolean
}

function Option({ id, value, selected = false, children }: OptionProps) {
    return <option id={id} value={value} selected={selected}>{children}</option>;
}

function Select({ label, children, disabled = false, autofocus = false, multiple = false }: SelectProps) {

    return (
        <div>
            <label className=""> {label}</label >
            <select disabled={disabled} autoFocus={autofocus} multiple={multiple}>
                {children}
            </select>
        </div >
    )
}

export { Select, Option }