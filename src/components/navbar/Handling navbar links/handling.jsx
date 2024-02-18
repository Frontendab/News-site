"use client";
import styles from "../_navbar.module.scss";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "@/asset/data/data";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export let widthWindows = window.innerWidth;
const HandlingNavBarLinks = () => {
  const [currentIndexLink, setCurrentIndexLink] = useState();

  useEffect(() => {
    if (!currentIndexLink) setCurrentIndexLink(+localStorage.getItem("iLink"));
  }, [currentIndexLink]);

  const handlingLinks = (i) => {
    localStorage.setItem("iLink", i);
    setCurrentIndexLink(+localStorage.getItem("iLink"));
  };

  const [conditionMenu, setConditionMenu] = useState(false);

  return (
    <>
      {widthWindows <= 991 ? (
        <div>
          <FaBarsStaggered
            style={{
              fontSize: "40px",
              color: "white",
              marginRight: "12px",
              cursor: "pointer",
            }}
            onClick={() => {
              setConditionMenu(!conditionMenu);
            }}
          />
          <div
            className={`${conditionMenu ? styles.wapperMenuLinks : "d-none"}`}
          >
            <IoMdClose
              className={styles.iconClose}
              onClick={() => {
                setConditionMenu(!conditionMenu);
              }}
            />
            <ul>
              {links.map((link, i) => (
                <Link key={i} href={link.path}>
                  <li
                    onClick={() => handlingLinks(i)}
                    className={`text-capitalize ${
                      currentIndexLink === i ? styles.active : ""
                    } ${i === links.length - 1 ? styles.last_child : ""}`}
                  >
                    {link.link} {link.icon}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <ul className="d-flex align-items-center">
          {links.map((link, i) => (
            <Link key={i} href={link.path}>
              <li
                onClick={() => handlingLinks(i)}
                className={`text-capitalize ${
                  currentIndexLink === i ? styles.active : ""
                } ${i === links.length - 1 ? styles.last_child : ""}`}
              >
                {link.link} {link.icon}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default HandlingNavBarLinks;
