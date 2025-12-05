import { Link } from "@nextui-org/link";

import { button as buttonStyles } from "@nextui-org/theme";

import React from "react";
import { useTheme } from "next-themes";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  return (
    <DefaultLayout>
      <section id="inicio" className="flex gap-3 justify-center items-center flex-wrap">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className={title()}>Disfruta de una experiencia&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Única&nbsp;</h1>
          <br />
          <div className="conexion">
            <h1 className={title()}>
              Conexión sin límites.
            </h1>
            <h4>
              Solicita tu plan para empresa u hogar.
            </h4>
          </div>
          <div>
            <Link
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.planes}
            >
              ¡Quiero mi plan!
            </Link>
          </div>
        </div>
        <div className="inline-block max-w-lg">
          <div className="bg-[url('/fondo.png')] bg-[length:320px] w-[320px] h-[320px] shadow-[inset_0_0_8px_8px_white] dark:shadow-[inset_0_0_8px_8px_rgb(0,0,0)]"></div>
        </div>
      </section>
      <section id="planes" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Planes</h1>
        </div>
        <div className="planes">
          <Card isFooterBlurred className="w-[310px] h-[300px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">PLAN BÁSICO</p>
              <h4 className="price">$25.00</h4>
              <h4 className="text-white/90 font-medium text-xl">Wifi 6</h4>
              <h4 className="text-white/90 font-medium text-xl">Router Dual Band</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="/basico.jpg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="/wifi.png"
                />
                <div className="flex flex-col">
                  <p className=" text-white/90">25 Megas</p>
                  <p className="text-tiny text-white/60">Compartición 4:1</p>
                </div>
              </div>
              <a className="bg-[#e0e0e0] text-black dark:bg-[#4b4b4b] dark:text-white p-2 rounded-[20px] text-xs" target="_blank" rel="noreferrer" href="https://w.app/esetelplanbasico">¡Contratar ahora!</a>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="w-[310px] h-[300px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">PLAN PRO</p>
              <h4 className="price">$30.00</h4>
              <h4 className="text-white/90 font-medium text-xl">Wifi 6</h4>
              <h4 className="text-white/90 font-medium text-xl">Router Dual Band</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="/standard.jpg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="/rayo.png"
                />
                <div className="flex flex-col">
                  <p className=" text-white/90">30 Megas</p>
                  <p className="text-tiny text-white/60">Compartición 4:1</p>
                </div>
              </div>
              <a className="bg-[#e0e0e0] text-black dark:bg-[#4b4b4b] dark:text-white p-2 rounded-[20px] text-xs" target="_blank" rel="noreferrer" href="https://w.app/esetelplanstandard">¡Contratar ahora!</a>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="w-[310px] h-[300px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">PLAN PREMIUM</p>
              <h4 className="price">$40.00</h4>
              <h4 className="text-white/90 font-medium text-xl">Wifi 6</h4>
              <h4 className="text-white/90 font-medium text-xl">Router Dual Band</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="/corporativo.png"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="/global.png"
                />
                <div className="flex flex-col">
                  <p className=" text-white/90">50 Megas</p>
                  <p className="text-tiny text-white/60">Compartición 4:1</p>
                </div>
              </div>
              <a className="bg-[#e0e0e0] text-black dark:bg-[#4b4b4b] dark:text-white p-2 rounded-[20px] text-xs" target="_blank" rel="noreferrer" href="https://w.app/esetelplancorporativo">¡Contratar ahora!</a>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section id="contacto" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Contacto</h1>
          <h1 className={subtitle()}>+593997257997 Whatsapp</h1>
          <h1 className={subtitle()}>info@pedernet.com</h1>
        </div>
      </section>
    </DefaultLayout>
  );
}
