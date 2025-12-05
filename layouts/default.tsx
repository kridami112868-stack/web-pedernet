import React from "react";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { MainLogo } from "@/components/MainLogo";
import { Button } from "@nextui-org/button";
import {
  InstagramIcon,
  FacebookIcon,
  WhatsappIcon,
} from "@/components/icons";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="footer-container">
        <div className="main-footer w-full flex py-3">
          <div className="footer1">
            <div className="footer-logo">
              <MainLogo></MainLogo>
              <div>
                <Button
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-default-600 bg-default-100"
                  href={siteConfig.links.whatsapp}
                  startContent={<WhatsappIcon className="text-success" />}
                  variant="flat"
                >
                  ¡Contrata Ya!
                </Button>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <span className="footer-title">Leyes y Reglamentos</span>
            <Link href="/docs/REGLAMENTO_TERCERA_EDAD.pdf" target="_blank" rel="noreferrer" underline="hover">Reglamento Tercera Edad</Link>
            <Link href="/docs/REGLAMENTO_LEY_ORGANICA_DE_TELECOMUNICACIONES.pdf" target="_blank" rel="noreferrer" underline="hover">Reglamento Ley orgánica de telecomunicaciones</Link>
            <Link href="/docs/REGLAMENTO_PRESTACION_SERVICIOS_VALOR_AGREGADO.pdf" target="_blank" rel="noreferrer" underline="hover">Reglamento para la prestación de servicios y valor agregado</Link>
            <Link href="/docs/REGLAMENTO_PRESTACION_SERVICIOS_TELECOMUNICACIONES.pdf" target="_blank" rel="noreferrer" underline="hover">Reglamento de prestación de servicios de telecomunicaciones y radiodifusión suscripción</Link>
            <Link href="/docs/LEY_ORGANICA_PERSONAS_ADULTOS_MAYORES.pdf" target="_blank" rel="noreferrer" underline="hover">Ley Orgánica de personas adultos mayores</Link>
            <Link href="/docs/LEY_ORGANICA_DE_TELECOMUNICACIONES.pdf" target="_blank" rel="noreferrer" underline="hover">Ley Orgánica de Telecomunicaciones</Link>
            <Link href="/docs/LEY_ORGANICA_DISCAPACIDADES.pdf" target="_blank" rel="noreferrer" underline="hover">Ley Orgánica de Discapacidades</Link>
            <Link href="/docs/POLITICA_PUBLICA_INTERNET_SEGURA.pdf" target="_blank" rel="noreferrer" underline="hover">Política publica por una internet segura</Link>
          </div>
          <div className="footer-section">
            <span className="footer-title">Información Adiconal</span>
            <Link href="/docs/CONSEJOS_DE_SEGURIDAD.pdf" target="_blank" rel="noreferrer" underline="hover">Consejos de seguridad</Link>
            <Link href="/docs/QOS_SVA.pdf" target="_blank" rel="noreferrer" underline="hover">QOS</Link>
            <Link href="/docs/NORMA_TECNICA_REGULA_CONTRATOS_DE_ADHESION.pdf" target="_blank" rel="noreferrer" underline="hover">Norma técnica regula contratos de adhesión</Link>
            <Link href="/docs/CONTROL_PARENTAL.pdf" target="_blank" rel="noreferrer" underline="hover">Control Parental</Link>
            <Link href="/docs/PARAMETROS_DE_CALIDAD_GOBRAVCORPSA.pdf" target="_blank" rel="noreferrer" underline="hover">Parámetros de calidad</Link>
            <Link href="/docs/TERMINOLOGIAS.pdf" target="_blank" rel="noreferrer" underline="hover">Terminologías</Link>
          </div>
          {/* <div className="footer-section">
            <span className="footer-title">Otros enlaces</span>
            <Link href="#" target="_blank" rel="noreferrer" underline="hover">Internet Corporativo</Link>
            <Link href="#" target="_blank" rel="noreferrer" underline="hover">Test de Velocidad</Link>
            <Link href="#" target="_blank" rel="noreferrer" underline="hover">Preguntas frecuentes</Link>
          </div> */}
        </div>
        <div className="credit-footer w-full flex items-center justify-center py-3">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="/"
            title="Tu internet de confianza"
          >
            <p className="text-primary">Pedernet 2025</p>
          </Link>
        </div>
      </footer>
    </div>
  );
}


