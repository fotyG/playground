"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
      className="flex flex-col items-center md:flex-row md:justify-between md:items-center footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 transition-colors duration-500"
    >
      <div className="flex justify-center items-center">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M13.001 24.022h-2l-.001-19 1.016 1 .984-1 .001 19zm-2.78-8.387c-1.578-.51-3.142-.232-4.108.629-1.519 1.354-1.22 3.616-1.22 3.616s2.58.749 4.109-.614c1.458-1.3 1.219-3.457 1.219-3.631zm3.545 0c1.578-.51 3.142-.232 4.108.629 1.519 1.354 1.221 3.616 1.221 3.616s-2.58.749-4.109-.614c-1.459-1.3-1.219-3.457-1.22-3.631zm4.306-1.148c1.15-.969 2.559-1.271 3.664-.879 1.739.616 2.264 2.617 2.264 2.617s-1.91 1.513-3.66.893c-1.669-.592-2.208-2.485-2.268-2.631zm-12.144 0c-1.15-.969-2.559-1.271-3.664-.879-1.739.616-2.264 2.617-2.264 2.617s1.91 1.513 3.66.893c1.669-.592 2.208-2.485 2.268-2.631zm4.234-.035c.253-1.397-.162-2.693-1.003-3.414-1.322-1.134-3.207-.623-3.207-.623s-.341 2.274.99 3.416c1.269 1.089 3.072.64 3.22.621zm3.676 0c-.253-1.397.162-2.693 1.003-3.414 1.322-1.134 3.207-.623 3.207-.623s.341 2.274-.99 3.416c-1.269 1.089-3.072.64-3.22.621zm4.539-2.347c.42-1.21 1.32-2.045 2.3-2.24 1.542-.306 2.798.93 2.798.93s-.74 1.94-2.291 2.248c-1.481.295-2.699-.857-2.807-.938zm-12.754 0c-.42-1.21-1.32-2.045-2.3-2.24-1.542-.306-2.798.93-2.798.93s.74 1.94 2.291 2.248c1.481.295 2.699-.857 2.807-.938zm7.956-2.362c-.024-1.32.551-2.447 1.43-2.983 1.382-.843 3.036-.093 3.036-.093s-.027 2.139-1.419 2.987c-1.327.81-2.915.128-3.047.089zm-3.158 0c.024-1.32-.551-2.447-1.43-2.983-1.382-.843-3.036-.093-3.036-.093s.027 2.139 1.419 2.987c1.327.81 2.915.128 3.047.089zm-4.788-.5c.075-1.165-.386-2.184-1.14-2.694-1.187-.802-2.678-.207-2.678-.207s-.065 1.89 1.129 2.697c1.14.77 2.57.233 2.689.204zm12.734 0c-.075-1.165.386-2.184 1.14-2.694 1.187-.802 2.678-.207 2.678-.207s.065 1.89-1.129 2.697c-1.14.77-2.57.233-2.689.204zm-4.158-2.955c-.569-1.104-.553-2.293-.034-3.111.816-1.287 2.524-1.341 2.524-1.341s.866 1.815.045 3.11c-.784 1.236-2.407 1.321-2.535 1.342zm-4.418 0c.569-1.104.553-2.293.034-3.111-.816-1.287-2.524-1.341-2.524-1.341s-.866 1.815-.045 3.11c.784 1.236 2.407 1.321 2.535 1.342zm-2.992-.292c.063-.981-.325-1.838-.96-2.268-.998-.675-2.254-.174-2.254-.174s-.054 1.591.951 2.27c.959.648 2.163.197 2.263.172zm10.402 0c-.063-.981.325-1.838.96-2.268.998-.675 2.254-.174 2.254-.174s.054 1.591-.951 2.27c-.959.648-2.163.197-2.263.172zm-5.162-1.057c-.995-.667-1.538-1.679-1.482-2.612.088-1.467 1.504-2.31 1.504-2.31s1.58 1.128 1.492 2.605c-.085 1.408-1.415 2.238-1.514 2.317z" />
        </svg>
        <p>
          Developed by foty <br />
          Fastest growing developer since July 1989
        </p>
      </div>

      {(pathname === "/memory-game" || pathname === "/blog") && (
        <a
          href="https://www.flaticon.com/free-icons/pokemon"
          title="pokemon icons"
          target="_blank"
        >
          Find these wonderful icons on Flaticon
        </a>
      )}

      <div className="md:place-self-center justify-self-center md:justify-self-end mb-2">
        <div className="grid grid-flow-col gap-4">
          <Link
            target="_blank"
            href={"https://github.com/fotyG"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current hover:fill-secondary"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/sota-giorgadze/"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current hover:fill-secondary"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
          <Link
            href={"https://www.instagram.com/fotylishas/"}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current hover:fill-secondary"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UCGELtxhCGI9OIEpwmNvNl7A"}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current hover:fill-secondary"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
