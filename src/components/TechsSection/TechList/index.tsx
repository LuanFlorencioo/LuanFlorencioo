"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import useMedia  from "use-media";
import techs from "./techs";
import styles from "./styles.module.css";
import "@splidejs/react-splide/css";

const TechList = () => {
  const isWide: boolean = useMedia({minWidth: "768px"});

  return (
    <>
      <Splide
        aria-label="Tech list"
        hasTrack={false}
        options={{
          type: "loop",
          perPage: isWide ? 4 : 2,
          gap: "4rem",
          autoplay: true,
          focus: isWide ? undefined : "center",
        }}
      >
        <SplideTrack className={styles.tech_list}>

          {techs.map(({icon, placeholder}, i) => (
            <SplideSlide key={i}>
              {icon}

              <span>{placeholder}</span>
            </SplideSlide>
          ))}

        </SplideTrack>
      </Splide>
    </>
  )
}

export default TechList;
