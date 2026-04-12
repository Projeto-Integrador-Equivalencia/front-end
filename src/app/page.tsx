'use client';
import Button from "@/components/ui/Button"
import { Option, Select } from "@/components/ui/Select";
import React from "react"

export default function Home() {


    return <>
        <h1>Five Nights at Luiz's</h1>
        <Select label="LEGAL" >
            <Option value={"AAA"}>TESTE LEGAL</Option>
            <Option >TEST</Option>
        </Select>
    </>
}