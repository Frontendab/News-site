"use client";
import Image from "next/image";
import Link from "next/link";
import brand from "@/asset/images/news.png";
import {
  categories_sports,
  followersOnPlatforms,
  photos,
} from "@/asset/data/data";
import styles from "./footer.module.scss";
import styleDoNotMiss from "../dont miss/_don't_miss.module.scss";
import { useState } from "react";

export let condition = true;

const Footer = () => {
  const [valueEmailForm, setValueEmailForm] = useState("");
  return (
    <footer className={styles.footer}>
      <div className="container p-0">
        <div className="row">
          <div className={`col-lg-3 col-md-6 col-sm-12 ${styles.first}`}>
            <Image
              src={brand}
              style={{ width: "270px" }}
              width={100}
              height={75}
              alt="brand"
            />
            <p className={styles.firstLorem}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              obcaecati molestias a in id. Ipsum quia aperiam vitae itaque
              inventore!
            </p>
            <ul className="p-0 m-0">
              {followersOnPlatforms.map((v, i) => {
                if (i <= 4)
                  return (
                    <li className="p-2 m-0" style={{ background: `${v.bg}` }}>
                      {v.icon}
                    </li>
                  );
              })}
            </ul>
          </div>
          <div
            className={`${styles.onMobile} col-lg-3 col-md-6 col-sm-12 pe-0 ps-4`}
          >
            <div className={styles.parentTitle}>
              <h3 className={`${styles.title} my-3 text-capitalize`}>
                Photo gallery
              </h3>
            </div>
            <div className={`${styles.gallery} mt-5`}>
              {photos.map((img) => (
                <img
                  src={img.src}
                  alt=""
                  width={95}
                  height={75}
                  style={{ objectFit: "fill" }}
                />
              ))}
              <img
                src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={95}
                height={75}
                style={{ objectFit: "fill" }}
              />
            </div>
          </div>
          <div
            className={`${styleDoNotMiss.section} ${styles.onMobile} col-lg-3 col-md-6 col-sm-12 pe-0 ps-4`}
          >
            <div className={styles.parentTitle}>
              <h3 className={`${styles.title} my-3 text-capitalize`}>tags </h3>
            </div>
            <div className={`${styles.tags} mt-5`}>
              {categories_sports.map((v) => (
                <p className={`${styleDoNotMiss[v.name]} text-capitalize m-0`}>
                  {v.name}
                </p>
              ))}
            </div>
          </div>
          <div
            className={`${styles.onMobile} col-lg-3 col-md-6 col-sm-12 pe-0 ps-4`}
          >
            <div className={styles.parentTitle}>
              <h3 className={`${styles.title} my-3 text-capitalize`}>
                stay in touch
              </h3>
            </div>
            <div className="text mt-5">
              <small>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                quos est similique ex! Praesentium, sit?
              </small>
              <form
                style={{ userSelect: "none" }}
                onSubmit={(e) => e.preventDefault()}
                className={`${styles.formEmail} text-center text-capitalize mt-3`}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  onChange={(e) => setValueEmailForm(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  style={{
                    transition: "opacity .3s",
                    opacity: valueEmailForm.length >= 1 ? 1 : 0.8,
                    pointerEvents:
                      valueEmailForm.length >= 1 ? "inherit" : "none",
                  }}
                >
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
