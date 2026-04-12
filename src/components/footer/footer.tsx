"use client";
import React from "react";
import Image from "next/image";
import styles from "./footer.module.css"; // Importando o CSS que criamos acima

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Coluna 1 */}
          <div className={`${styles.col} ${styles.logoCol}`}>
            <Image
              src="/images/logo-fatec.png"
              alt="Logo Fatec Atibaia"
              width={150}
              height={50}
              className={styles.fatecLogo}
              priority
            />
          </div>

          {/* Coluna 2 */}
          <div className={styles.col}>
            <h2 className={styles.contactTitle}>Contato</h2>
            <p className={styles.text}>(11) 4402-1047 / 4402 1010</p>
            <p className={styles.text}>f309adm@cps.sp.gov.br</p>

            <div className={styles.divider}></div>

            <p className={styles.text}>Avenida Jerônimo de Camargo, 421</p>
            <p className={styles.text}>Caetetuba, Atibaia - SP</p>

            <div className={styles.divider}></div>

            <div className={styles.socialArea}>
              <a
                href="https://instagram.com/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/Instagram.png"
                  alt="Siga-nos no Instagram"
                  width={24}
                  height={24}
                  className={styles.logoImage}
                />
              </a>
            </div>
          </div>

          {/* Coluna 3 */}
          <div className={`${styles.col} ${styles.rightCol}`}>
            <div className={styles.logos}>
              <Image
                src="/images/SP.png"
                alt="SP"
                width={80}
                height={30}
                className={`${styles.logoImage} ${styles.logoSP}`}
              />

              <div className={styles.verticalDivider}></div>

              <Image
                src="/images/CPS.png"
                alt="CPS"
                width={40}
                height={30}
                className={styles.logoImage}
              />
            </div>
            <p className={styles.text}>SP.GOV</p>
            <p className={styles.text}>Centro Paula Souza</p>
            <p className={styles.text}>Fatec Atibaia</p>
          </div>
        </div>

        <div className={styles.copyright}>Fatec© Direitos Reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;
