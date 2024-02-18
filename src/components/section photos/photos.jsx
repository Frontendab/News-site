import React from "react";
import styles from "./photos.module.scss";
import { photos } from "@/asset/data/data";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const SectionPhotos = () => {
  return (
    <div className={`${styles.photos} mt-4`}>
      {photos.map((img) => (
        <img loading="lazy" src={img.src} width={200} height={245} />
      ))}
      <Link
        href="https://www.instagram.com/frontendab/"
        target="_blank"
        className={styles.bgIconInstagram}
      >
        <div className="content text-center">
          <FaInstagram fontSize={30} />
          <p className="text-capitalize m-1">follow us</p>
        </div>
      </Link>
    </div>
  );
};

export default SectionPhotos;
