// "use client";
// import { FC, useRef, useCallback } from "react";
// import classnames from "classnames/bind";
// import CustomIcon from "@/app/_components/CustomIcon";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "./CardSlider.module.scss";
// import TripCard from "@/app/_components/TripCard";

// const cx = classnames.bind(styles);

// interface Props {
//   isCentered?: boolean;
//   title: string;
//   eyebrow: string;
//   custom_anchor_id?: string;
//   showButtons?: "both" | "next" | "prev" | "none";
// }

// const CardSlider: FC<Props> = ({
//   isCentered = false,
//   eyebrow,
//   title,
//   showButtons = "both",
// }) => {
//   const sliderRef = useRef<any>(null);

//   const gotoNext = useCallback(() => {
//     sliderRef.current?.slickNext();
//   }, []);

//   const gotoPrev = useCallback(() => {
//     sliderRef.current?.slickPrev();
//   }, []);

//   return (
//     <section
//       className={cx("slider", { "slider--centered": isCentered })}
//       id={"card-slider"}
//     >
//       {eyebrow && (
//         <h5 className={cx("slider__eyebrow")}>
//           {eyebrow.replace("&amp;", "&")}
//         </h5>
//       )}
//       <h2 className={cx("slider__heading")}>{title}</h2>
//       <div className={cx("slider__content")}>
//         <div className={cx("slider__wrapper")}>
//           <Slider
//             ref={sliderRef}
//             dots={false}
//             infinite
//             speed={700}
//             slidesToShow={3}
//             slidesToScroll={1}
//             autoplay
//             arrows={false}
//             responsive={[
//               {
//                 breakpoint: 900,
//                 settings: {
//                   slidesToShow: 1,
//                 },
//               },
//             ]}
//           >
//             {/* <div className={styles1.slickSlide}> */}
//             <TripCard
//               data={{
//                 image: {
//                   src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww",
//                   alt: "",
//                 },
//                 id: "1",
//                 title: "A Serene Journey Over the Alps",
//                 subtitle: "Sunset at the Sea",
//                 travelCategory: "adventure",
//                 description:
//                   "Discover the majesty of the Alps from above, capturing the serene beauty of snow-covered peaks and tranquil blue skies. Ideal for adventurers seeking peace in nature’s heights.",

//                 // link: {
//                 //   href: "/service-1",
//                 //   text: "Learn More",
//                 // },
//               }}
//             />
//             {/* </div> */}
//             {/* <div className={styles1.slickSlide}> */}
//             <TripCard
//               data={{
//                 image: {
//                   src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D",
//                   alt: "",
//                 },
//                 id: "2",
//                 title: "Sunset at the Edge of the Pacific",
//                 travelCategory: "adventure",
//                 subtitle: "Sunset at the Edge",
//                 description:
//                   "Watch the golden hues of sunset reflecting off the rugged cliffs by the sea. A perfect experience for those seeking moments of tranquility and awe at nature’s edge. Watch the golden hues of sunset reflecting off the rugged cliffs by the sea. A perfect experience for those seeking moments of tranquility and awe at nature’s edge.",
//               }}
//             />
//             {/* </div> */}
//             {/* <div className={styles1.slickSlide}> */}
//             <TripCard
//               data={{
//                 image: {
//                   src: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D",
//                   alt: "",
//                 },
//                 id: "3",
//                 title: "Mystical Mornings in the Jungle",
//                 subtitle: "Sunset at the Edge",
//                 travelCategory: "adventure",
//                 description:
//                   "Embark on a journey through the misty forest, where the quiet rustling of leaves underfoot is your only companion. Ideal for explorers who enjoy peaceful mornings surrounded by nature.",
//               }}
//             />
//             {/* </div> */}
//           </Slider>
//         </div>
//         {showButtons !== "none" && (
//           <>
//             {(showButtons === "both" || showButtons === "prev") && (
//               <button
//                 className={cx("slider__button", "slider__button--prev")}
//                 onClick={gotoPrev}
//               >
//                 <CustomIcon icon="left-arrow" />
//               </button>
//             )}
//             {(showButtons === "both" || showButtons === "next") && (
//               <button
//                 className={cx("slider__button", "slider__button--next")}
//                 onClick={gotoNext}
//               >
//                 <CustomIcon icon="right-arrow" />
//               </button>
//             )}
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default CardSlider;
