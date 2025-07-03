import { useState } from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";
import { FaAngular } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa"
import { FaVuejs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import './App.css'

function App() {
  return (
    <div className="min-h-screen text-white p-6 flex justify-center items-start">
      <div className="max-w-3xl w-full ">
        <div className="flex gap-6">
          <img
            src="https://avatars.githubusercontent.com/u/80979458?v=4"
            alt="Neo"
            className="w-40 h-40 rounded-full border-4 border-green-100 object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold flex items-center gap-2">Matías Rodríguez</h1>
            <p className="text-xl font-medium text-zinc-100 flex items-center gap-2">Ingeniero en Informática</p>
            <p className="text-gray-100 font-light mt-1 flex items-center gap-2">
              <FaLocationDot /> Puente Alto, Región Metropolitana
            </p>
            <p className="text-gray-100 font-light mt-1 flex items-center gap-2">
              <PiStudentFill /> Duoc Uc
            </p>
            <div className="flex flex-wrap mt-3 gap-2">
              <a
                href="https://mail.google.com/mail/?view=cm&to=mati.rodriguezmatus@gmail.com"
                target="_blank"
                title='Enviar Correo Electronico'
                className="text-sm text-white flex items-center gap-2 bg-green-900 hover:bg-emerald-700 transition rounded-3xl px-4 py-2"
              >
                <FaMessage className='w-4 h-4'/>
                mati.rodriguezmatus@gmail.com
              </a>
              <a
                href="https://github.com/MatiasRodriguezm?tab=repositories"
                target="_blank"
                title='GitHub'
                className="text-sm text-white flex items-center gap-2 bg-gray-800 hover:bg-gray-900 transition rounded-3xl px-4 py-2"
              >
                <FaGithub className='w-5 h-5'/>
              </a>
              <a
                href="/CurriculumMatiasRodriguez.pdf" download="CurriculumMatiasRodriguez2025.pdf"
                target="_blank"
                title='Descargar Curriculum'
                className="text-sm text-white flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-3xl px-4 py-2"
              >
                <FaNewspaper className='w-5 h-5'/>
              </a>
              <a
                href="/Certificado(Modulo).pdf" download="Certificado(Modulo).pdf"
                target="_blank"
                title='Descargar Certificación'
                className="text-sm text-white flex items-center gap-2 bg-amber-600 hover:bg-amber-700 transition rounded-3xl px-4 py-2"
              >
                <GrCertificate className='w-5 h-5'/>
              </a>
                            <a
                href="/CertificadosSantander.pdf" download="CertificadosSantander.zip" 
                target="_blank"
                title='Descargar Certificados Santander Open Academy'
                className="text-sm text-white flex items-center gap-2 bg-fuchsia-700 hover:bg-fuchsia-900 transition rounded-3xl px-4 py-2"
              >
                <GrCertificate className='w-5 h-5'/>
              </a>
            </div>
          </div>
        </div>


        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold text-white">Sobre mí</h2>
          <p className="text-zinc-300 mt-2 text-md">
          Soy un programador al que le gusta la creación de interfaces modernas, 
          funcionales y responsivas. Me apasiona construir soluciones digitales que combinan diseño y solución, 
          además de brindar experiencias de usuario excepcionales. Busco expandir mis conocimientos, aprendiendo y 
          experimentando en proyectos personales.
          </p>
        </div>
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold text-white">Formación</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-4">
                <PiStudentFill className='w-13 h-13 text-green-200' />
                <div>
                  <p className="text-xl font-semibold text-white">Duoc UC</p>
                  <p className="font-light text-white text-lg">Ingeniería en Informática</p>
                  <p className="text-zinc-400 text-md">
                  Estudié en el centro académico Duoc UC, en donde aprendí y 
                  desarrollé conocimientos de programación. Actualmente, me encuentro titulado.
                  </p>
                </div>
              </div>
              <p className="text-green-500 text-xs font-semibold bg-zinc-800 rounded-2xl p-2 flex">
                Completado
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold text-white">Tecnologías</h2>
          <div className="flex flex-wrap mt-3 gap-2">
            <p
              title='Python'
              className="text-sm text-white flex items-center gap-2 border-2 border-gray-100 hover:bg-emerald-700 transition rounded-3xl px-4 py-2"
            >
              <FaPython className='w-6 h-6' />
              Python
            </p>
            <p
              title='Base de datos Sql'
              className="text-sm text-white flex items-center gap-2 border-2 border-gray-100 hover:bg-emerald-700 transition rounded-3xl px-4 py-2"
            >
              <TbSql className='w-6 h-6' />
              Sql
            </p>
            <p
              title='Html'
              className="text-sm text-white flex items-center gap-2 border-2 border-gray-100 hover:bg-emerald-700 transition rounded-3xl px-4 py-2"
            >
              <FaHtml5 className='w-6 h-6' />
              Html
            </p>
            <p
              title='Más'
              className="text-sm text-white flex items-center gap-2 border-2 border-gray-100 hover:bg-emerald-700 transition rounded-3xl px-4 py-2"
            >
              <IoIosMore className='w-6 h-6' />
              Entre otros
            </p>
          </div>
        </div>
        <hr className="my-6 border-t border-zinc-700" />
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold text-white">Experiencia</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-start bg-zinc-900 rounded-2xl p-4">
              <div>
                <p className="text-xl font-semibold text-white">Macroactiva Spa</p>
                <p className="font-light text-white text-lg">Programador</p>
                <p className="text-zinc-400 text-md">
                  Práctica profesional en donde se realizó una página web para administrar arriendos, 
                  mediante la tecnología de Django.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-zinc-700" />
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold text-white">Proyectos</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-start bg-zinc-900 rounded-2xl p-4">
              <div>
                <p className="text-xl font-semibold text-white">Search Animes React</p>
                <p className="font-light text-white text-lg">Buscador de animes</p>
                <p className="text-zinc-400 text-md">
                Página de búsqueda de animes, la cual consume el API Jikan Anime. 
                Tiene la funcionalidad simple de buscar información de cualquier anime que exista y observar sus datos.
                </p>
                <p className="font-light text-white text-lg flex gap-3 mt-2">
                  <span
                    className="flex items-center gap-2 bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full shadow-sm hover:bg-cyan-600/30 transition"
                    title="React"
                  >
                    <FaReact className="w-5 h-5" /> React
                  </span>
                  <span
                    className="flex items-center gap-2 bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full shadow-sm hover:bg-cyan-600/30 transition"
                    title="Tailwind CSS"
                  >
                    <SiTailwindcss className="w-5 h-5" /> Tailwind
                  </span>
                </p>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://melodic-pony-56de45.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-400 hover:text-green-300 shadow-md"
                    title="Sitio Web"
                  >
                    <FaLink className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/MatiasRodriguezm/searchAnimeReact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-100 hover:text-green-200 shadow-md"
                    title="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start bg-zinc-900 rounded-2xl p-4">
              <div>
                <p className="text-xl font-semibold text-white">Search Animes Angular</p>
                <p className="font-light text-white text-lg">Guarda y busca animes vistos </p>
                <p className="text-zinc-400 text-md">
                Página web que consume el API Jikan Anime, con la finalidad de listar animes, además de agregar y observar su información respectiva.
                </p>
                <p className="font-light text-white text-lg flex gap-3 mt-2">
                  <span
                    className="flex items-center gap-2 bg-red-600/20 text-red-400 px-3 py-1 rounded-full shadow-sm hover:bg-red-600/30 transition"
                    title="Angular"
                  >
                    <FaAngular className="w-5 h-5" /> Angular
                  </span>
                  <span
                    className="flex items-center gap-2 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full shadow-sm hover:bg-blue-600/30 transition"
                    title="Css"
                  >
                    <FaCss3Alt className="w-5 h-5" /> Css
                  </span>
                </p>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://ubiquitous-dieffenbachia-f04353.netlify.app/"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-400 hover:text-green-300 shadow-md"
                    title="Sitio Web"
                  >
                    <FaLink className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/MatiasRodriguezm/searchAnimeAngular"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-100 hover:text-green-200 shadow-md"
                    title="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start bg-zinc-900 rounded-2xl p-4">
              <div>
                <p className="text-xl font-semibold text-white">Lista Tareas React</p>
                <p className="font-light text-white text-lg">Crea tareas</p>
                <p className="text-zinc-400 text-md">
                Página web que te permite agregar tareas, con el propósito de cumplir objetivos o, inclusive, agregar un contenido que no quieras olvidar.
                </p>
                <p className="font-light text-white text-lg flex gap-3 mt-2">
                  <span
                    className="flex items-center gap-2 bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full shadow-sm hover:bg-cyan-600/30 transition"
                    title="React"
                  >
                    <FaReact className="w-5 h-5" /> React
                  </span>
                  <span
                    className="flex items-center gap-2 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full shadow-sm hover:bg-blue-600/30 transition"
                    title="Css"
                  >
                    <FaCss3Alt className="w-5 h-5" /> Css
                  </span>
                </p>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://loquacious-hummingbird-9bbb97.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-400 hover:text-green-300 shadow-md"
                    title="Sitio Web"
                  >
                    <FaLink className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/MatiasRodriguezm/ListaTareasReact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-100 hover:text-green-200 shadow-md"
                    title="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start bg-zinc-900 rounded-2xl p-4">
              <div>
                <p className="text-xl font-semibold text-white">Note Page</p>
                <p className="font-light text-white text-lg">Crea y guarda notas</p>
                <p className="text-zinc-400 text-md">
                  Página web que agrega notas, tareas o ideas.
                </p>
                <p className="font-light text-white text-lg flex gap-3 mt-2">
                  <span
                    className="flex items-center gap-2 bg-green-600/20 text-green-400 px-3 py-1 rounded-full shadow-sm hover:bg-green-600/30 transition"
                    title="Vue"
                  >
                    <FaVuejs className="w-5 h-5" />Vue
                  </span>
                  <span
                    className="flex items-center gap-2 bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full shadow-sm hover:bg-cyan-600/30 transition"
                    title="Tailwind CSS"
                  >
                    <SiTailwindcss className="w-5 h-5" /> Tailwind
                  </span>
                </p>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://brilliant-gaufre-1097d6.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-400 hover:text-green-300 shadow-md"
                    title="Sitio Web"
                  >
                    <FaLink className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/MatiasRodriguezm/NotePage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-100 hover:text-green-200 shadow-md"
                    title="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start bg-zinc-900 rounded-2xl p-4">
              <div>
                <p className="text-xl font-semibold text-white">Count Me</p>
                <p className="font-light text-white text-lg">Contador de clicks</p>
                <p className="text-zinc-400 text-md">
                  Página para dar clics y contabilizarlos.
                </p>
                <p className="font-light text-white text-lg flex gap-3 mt-2">
                  <span
                    className="flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full shadow-sm hover:bg-orange-600/30 transition"
                    title="Html"
                  >
                    <FaHtml5 className="w-5 h-5" />Html
                  </span>
                  <span
                    className="flex items-center gap-2 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full shadow-sm hover:bg-blue-600/30 transition"
                    title="Css"
                  >
                    <FaCss3Alt className="w-5 h-5" /> Css
                  </span>
                  <span
                    className="flex items-center gap-2 bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full shadow-sm hover:bg-yellow-600/30 transition"
                    title="Js"
                  >
                    <FaJs className="w-5 h-5" /> Js
                  </span>
                </p>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://admirable-quokka-defa37.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-400 hover:text-green-300 shadow-md"
                    title="Sitio Web"
                  >
                    <FaLink className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/MatiasRodriguezm/CountMe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-100 hover:text-green-200 shadow-md"
                    title="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start bg-zinc-900 rounded-2xl p-4">
              <div>
                <p className="text-xl font-semibold text-white">Chat Gpt Local</p>
                <p className="font-light text-white text-lg">Chat Gpt de consumo local.</p>
                <p className="text-zinc-400 text-md">
                Página web con inteligencia artificial, que funciona de forma local y que incorpora modelos entrenados desde LLM Open Source.
                (Se recomienda utilizar el navegador Edge).
                </p>
                <p className="font-light text-white text-lg flex gap-3 mt-2">
                  <span
                    className="flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full shadow-sm hover:bg-orange-600/30 transition"
                    title="Html"
                  >
                    <FaHtml5 className="w-5 h-5" />Html
                  </span>
                  <span
                    className="flex items-center gap-2 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full shadow-sm hover:bg-blue-600/30 transition"
                    title="Css"
                  >
                    <FaCss3Alt className="w-5 h-5" /> Css
                  </span>
                  <span
                    className="flex items-center gap-2 bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full shadow-sm hover:bg-yellow-600/30 transition"
                    title="Js"
                  >
                    <FaJs className="w-5 h-5" /> Js
                  </span>
                </p>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://legendary-eclair-ff6b2b.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-400 hover:text-green-300 shadow-md"
                    title="Sitio Web"
                  >
                    <FaLink className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/MatiasRodriguezm/ChatGptLocal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-100 hover:text-green-200 shadow-md"
                    title="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start bg-zinc-900 rounded-2xl p-4">
              <div>
                <p className="text-xl font-semibold text-white">Twice Info</p>
                <p className="font-light text-white text-lg">Información de grupo Twice</p>
                <p className="text-zinc-400 text-md">
                Página web de información del grupo de K-pop Twice, para conocer un poco más de ellas.
                </p>
                <p className="font-light text-white text-lg flex gap-3 mt-2">
                  <span
                    className="flex items-center gap-2 bg-red-600/20 text-red-400 px-3 py-1 rounded-full shadow-sm hover:bg-red-600/30 transition"
                    title="Angular"
                  >
                    <FaAngular className="w-5 h-5" /> Angular
                  </span>
                  <span
                    className="flex items-center gap-2 bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full shadow-sm hover:bg-cyan-600/30 transition"
                    title="Tailwind CSS"
                  >
                    <SiTailwindcss className="w-5 h-5" /> Tailwind
                  </span>
                </p>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://playful-jalebi-137f73.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-400 hover:text-green-300 shadow-md"
                    title="Sitio Web"
                  >
                    <FaLink className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/MatiasRodriguezm/TwiceAngular"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-100 hover:text-green-200 shadow-md"
                    title="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start bg-zinc-900 rounded-2xl p-4">
              <div>
                <p className="text-xl font-semibold text-white">Lista de Animes</p>
                <p className="font-light text-white text-lg">Filtra animes</p>
                <p className="text-zinc-400 text-md">
                  Filtra animes por su tipo de género, funcionando en tiempo real.
                </p>
                <p className="font-light text-white text-lg flex gap-3 mt-2">
                  <span
                    className="flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full shadow-sm hover:bg-orange-600/30 transition"
                    title="Html"
                  >
                    <FaHtml5 className="w-5 h-5" />Html
                  </span>
                  <span
                    className="flex items-center gap-2 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full shadow-sm hover:bg-blue-600/30 transition"
                    title="Css"
                  >
                    <FaCss3Alt className="w-5 h-5" /> Css
                  </span>
                  <span
                    className="flex items-center gap-2 bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full shadow-sm hover:bg-yellow-600/30 transition"
                    title="Js"
                  >
                    <FaJs className="w-5 h-5" /> Js
                  </span>
                </p>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://note-page-gk22.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-400 hover:text-green-300 shadow-md"
                    title="Sitio Web"
                  >
                    <FaLink className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/MatiasRodriguezm/ListadoAnimeJS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-green-100 hover:text-green-200 shadow-md"
                    title="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App
