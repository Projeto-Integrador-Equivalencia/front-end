"use client";
import BackgroundWhiteRed from "@/components/backgrounds/WhiteRedBackground";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StudentDashboard() {
  const router = useRouter();

  return (
    <BackgroundWhiteRed>
      <div className="flex flex-col gap-15">
        <header className="flex flex-col ml-105 mt-5 z-50">
          <p className="font-bold">EQUIVALÊNCIA DE ESTÁGIO</p>
          <h1 className="text-5xl font-bold">
            Selecione o tipo de serviço<span className="text-red-600">.</span>
          </h1>
        </header>
        <div className="flex justify-center space-x-50">
          <button onClick={() => router.push("./equivalency")}>
            <div className="flex flex-col h-120 w-85 border-2 border-gray-200 border-opacity-25 bg-white shadow-2xl shadow-black-80">
              <div className="flex justify-center">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 250 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M83.3334 166.667H166.667V187.5H83.3334V166.667ZM83.3334 125H166.667V145.833H83.3334V125ZM145.833 20.8334H62.5001C51.0417 20.8334 41.6667 30.2084 41.6667 41.6667V208.333C41.6667 219.792 50.9376 229.167 62.3959 229.167H187.5C198.958 229.167 208.333 219.792 208.333 208.333V83.3334L145.833 20.8334ZM187.5 208.333H62.5001V41.6667H135.417V93.75H187.5V208.333Z"
                    fill="#28A745"
                  />
                </svg>
              </div>
              <h1 className="flex justify-center font-bold text-4xl">
                Solicitar
              </h1>
              <p className="text-center text-gray-500 text-opacity-50 font-bold">
                Selecione e solicite um de <br />
                nossos tipos de equivalência <br />
                disponíveis.
              </p>
              <div className="flex justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="30"
                    cy="30"
                    r="28.5"
                    stroke="#28A745"
                    strokeWidth="3"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.9283 31.1849L27.5 40.6132L25.1433 38.2566L33.3933 30.0066L25.1433 21.7566L27.5 19.3999L36.9283 28.8282C37.2408 29.1408 37.4163 29.5646 37.4163 30.0066C37.4163 30.4485 37.2408 30.8724 36.9283 31.1849Z"
                    fill="#28A745"
                  />
                </svg>
              </div>
            </div>
          </button>

          <button onClick={() => router.push("/student/requestList")}>
            <div className="flex flex-col h-120 w-85 border-2 border-gray-200 border-opacity-25 bg-white shadow-2xl shadow-black-80">
              <div className="flex ml-20 border-white">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 250 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M132.813 132.812C138.993 132.812 145.035 134.645 150.174 138.079C155.313 141.513 159.319 146.393 161.684 152.104C164.049 157.814 164.668 164.097 163.462 170.159C162.256 176.221 159.28 181.789 154.91 186.16C150.539 190.53 144.971 193.506 138.909 194.712C132.847 195.918 126.564 195.299 120.854 192.934C115.143 190.568 110.263 186.563 106.829 181.424C103.395 176.285 101.563 170.243 101.563 164.062C101.573 155.778 104.869 147.835 110.727 141.977C116.585 136.119 124.528 132.823 132.813 132.812ZM132.813 109.375C121.996 109.375 111.423 112.582 102.43 118.592C93.4365 124.601 86.427 133.142 82.2879 143.135C78.1487 153.127 77.0657 164.123 79.1758 174.732C81.286 185.34 86.4944 195.084 94.1426 202.732C101.791 210.381 111.535 215.589 122.144 217.699C132.752 219.809 143.748 218.726 153.741 214.587C163.733 210.448 172.274 203.439 178.284 194.445C184.293 185.452 187.5 174.879 187.5 164.062C187.5 149.558 181.738 135.648 171.482 125.393C161.227 115.137 147.317 109.375 132.813 109.375Z"
                    fill="#007BFF"
                  />
                  <path
                    d="M153.016 206.359L175.109 184.266L203.125 212.266L181.016 234.375L153.016 206.359ZM78.125 203.125H46.875V31.25H118.531L171.875 84.5938V93.75H187.5V78.125L125 15.625H46.875C42.731 15.625 38.7567 17.2712 35.8265 20.2015C32.8962 23.1317 31.25 27.106 31.25 31.25V203.125C31.25 207.269 32.8962 211.243 35.8265 214.174C38.7567 217.104 42.731 218.75 46.875 218.75H78.125V203.125Z"
                    fill="#007BFF"
                  />
                  <path
                    d="M171.875 93.75H109.375V31.25H125L171.875 78.125V93.75ZM171.875 93.75H187.5V109.375H171.875V93.75Z"
                    fill="#007BFF"
                  />
                </svg>
              </div>
              <h1 className="flex justify-center font-bold text-4xl">
                Acompanhar
              </h1>
              <p className="text-center text-gray-500 text-opacity-50 font-bold">
                Acompanhe as informações das <br />
                solicitações de equivalência <br />
                realizadas.
              </p>
              <div className="flex justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="30"
                    cy="30"
                    r="28.5"
                    stroke="#007BFF"
                    strokeWidth="3"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.9286 31.1849L27.5002 40.6132L25.1436 38.2566L33.3936 30.0066L25.1436 21.7566L27.5002 19.3999L36.9286 28.8282C37.241 29.1408 37.4165 29.5646 37.4165 30.0066C37.4165 30.4485 37.241 30.8724 36.9286 31.1849Z"
                    fill="#007BFF"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </BackgroundWhiteRed>
  );
}
