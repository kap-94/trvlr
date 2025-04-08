import React from "react";
import classNames from "classnames/bind";
import styles from "./WhyTravel.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/_components";
import { WhyTravelPageData } from "./types";
import BenefitsGrid from "@/app/_components/BenefitsGrid";
import TripCard from "@/app/_components/TripCard";

const cx = classNames.bind(styles);

const WhyTravel: React.FC<WhyTravelPageData> = (data) => {
  const {
    title,
    subtitle,
    coverImage,
    introduction,
    benefits,
    inspirationQuotes,
    sections,
    testimonials,
    relatedTrips,
    statistics,
    callToAction,
    faqs,
  } = data;

  const sortedSections = [...sections].sort((a, b) => a.order - b.order);

  return (
    <article className={cx("why-travel")}>
      {/* Breadcrumb */}
      <nav className={cx("why-travel__breadcrumb")}>
        <Link href="/">Home</Link> / Why Travel
      </nav>

      {/* Hero Section */}
      <header className={cx("why-travel__hero")}>
        <div className={cx("why-travel__hero-image-container")}>
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            className={cx("why-travel__hero-image")}
            fill
            priority
            sizes="100vw"
          />
          <div className={cx("why-travel__hero-overlay")}>
            <Typography
              variant="h1"
              color="white"
              className={cx("why-travel__title")}
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              color="white"
              className={cx("why-travel__subtitle")}
            >
              {subtitle}
            </Typography>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className={cx("why-travel__introduction")}>
        <Typography variant="p1" fontWeight={400}>
          {introduction}
        </Typography>
      </section>

      {/* Statistics Highlights */}
      {statistics && statistics.length > 0 && (
        <section className={cx("why-travel__statistics")}>
          <div className={cx("why-travel__statistics-grid")}>
            {statistics.map((stat, index) => (
              <div key={index} className={cx("why-travel__stat-item")}>
                <Typography
                  variant="h2"
                  className={cx("why-travel__stat-number")}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="p2"
                  fontWeight={400}
                  className={cx("why-travel__stat-label")}
                >
                  {stat.label}
                </Typography>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Benefits Grid */}
      {benefits && benefits.length > 0 && (
        <BenefitsGrid
          benefits={benefits}
          className={cx("why-travel__benefits")}
        />
      )}

      {/* Content Sections */}
      <section className={cx("why-travel__content")}>
        {sortedSections.map((section, index) => (
          <div
            key={index}
            className={cx("why-travel__section", {
              "why-travel__section--reverse": index % 2 !== 0,
            })}
          >
            <div className={cx("why-travel__section-content")}>
              <Typography
                variant="h3"
                className={cx("why-travel__section-title")}
              >
                {section.title}
              </Typography>
              <Typography
                variant="p1"
                fontWeight={400}
                className={cx("why-travel__section-text")}
              >
                {section.body}
              </Typography>

              {/* {section.link && (
                <Link
                  href={section.link.href}
                  className={cx("why-travel__section-link")}
                >
                  <Typography
                    variant="p1"
                    className={cx("why-travel__link-text")}
                  >
                    {section.link.label}
                  </Typography>
                </Link>
              )} */}
            </div>

            {section.image && (
              <div className={cx("why-travel__section-image-container")}>
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  className={cx("why-travel__section-image")}
                  sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1200px) 50vw, 600px"
                />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Inspiration Quotes */}
      {inspirationQuotes && inspirationQuotes.length > 0 && (
        <section className={cx("why-travel__inspiration")}>
          {/* <Typography
            variant="h3"
            className={cx("why-travel__inspiration-title")}
          >
            Travel Inspiration
          </Typography> */}
          <div className={cx("why-travel__quotes")}>
            {inspirationQuotes.map((quote, index) => (
              <div key={index} className={cx("why-travel__quote")}>
                <Typography
                  variant="h4"
                  className={cx("why-travel__quote-text")}
                >
                  "{quote.text}"
                </Typography>
                <Typography
                  variant="p2"
                  className={cx("why-travel__quote-author")}
                >
                  — {quote.author}
                </Typography>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {/* {testimonials && testimonials.length > 0 && (
        <section className={cx("why-travel__testimonials")}>
          <Typography
            variant="h3"
            className={cx("why-travel__testimonials-title")}
          >
            Travelers' Stories
          </Typography>
          <div className={cx("why-travel__testimonials-grid")}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={cx("why-travel__testimonial")}>
                <div className={cx("why-travel__testimonial-header")}>
                  <div className={cx("why-travel__testimonial-avatar")}>
                    <Image
                      src={testimonial.avatar.src}
                      alt={testimonial.avatar.alt}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className={cx("why-travel__testimonial-name")}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="p3"
                      className={cx("why-travel__testimonial-location")}
                    >
                      {testimonial.location}
                    </Typography>
                  </div>
                </div>
                <Typography
                  variant="p2"
                  className={cx("why-travel__testimonial-text")}
                >
                  "{testimonial.text}"
                </Typography>
              </div>
            ))}
          </div>
        </section>
      )} */}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className={cx("why-travel__faqs")}>
          <Typography
            variant="h3"
            align="center"
            className={cx("why-travel__faqs-title")}
          >
            Frequently Asked Questions
          </Typography>
          <div className={cx("why-travel__faqs-list")}>
            {faqs.map((faq, index) => (
              <div key={index} className={cx("why-travel__faq-item")}>
                <Typography
                  variant="h5"
                  className={cx("why-travel__faq-question")}
                >
                  {faq.question}
                </Typography>
                <Typography
                  variant="p1"
                  fontWeight={400}
                  className={cx("why-travel__faq-answer")}
                >
                  {faq.answer}
                </Typography>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      {callToAction && (
        <section className={cx("why-travel__cta")}>
          <div className={cx("why-travel__cta-container")}>
            <div className={cx("why-travel__cta-background")}>
              {callToAction.backgroundImage && (
                <Image
                  src={callToAction.backgroundImage.src}
                  alt={callToAction.backgroundImage.alt || "Travel background"}
                  fill
                  className={cx("why-travel__cta-bg-image")}
                  sizes="100vw"
                  priority
                />
              )}
            </div>
            <div className={cx("why-travel__cta-overlay")}></div>
            <div className={cx("why-travel__cta-content")}>
              <Typography
                variant="h3"
                color="white"
                className={cx("why-travel__cta-title")}
              >
                {callToAction.title}
              </Typography>
              <Link
                href={callToAction.buttonLink}
                className={cx("why-travel__cta-button")}
              >
                {callToAction.buttonText}
              </Link>
            </div>
          </div>
        </section>
      )}
      {/* Related Trips */}
      {relatedTrips && relatedTrips.length > 0 && (
        <section className={cx("why-travel__related-trips")}>
          <Typography variant="h3" className={cx("why-travel__related-title")}>
            Popular Destinations
          </Typography>
          <div className={cx("why-travel__trips-grid")}>
            {relatedTrips.map((trip) => (
              <TripCard
                key={trip.id}
                data={{
                  id: trip.id.toString(), // Convert id to string
                  title: trip.title,
                  subtitle: trip.subtitle,
                  description: trip.description,
                  slug: trip.slug,
                  coverImage: trip.coverImage,
                  category: [], // Empty array for required field
                  countries: [], // Empty array for required field
                  duration: { days: 7, nights: 6 }, // Default duration values
                  rating: {
                    average: trip.rating.average,
                    total: trip.rating.count || 0, // Use count as total
                  },
                  pricing: {
                    basePrice: {
                      amount: trip.pricing.basePrice.amount,
                      currency: trip.pricing.basePrice.currency || "USD",
                    },
                    discounts: [], // Add required discounts array
                  },
                }}
                className={cx("why-travel__trip-card-item")}
                isPriority={trip.id === 1}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default WhyTravel;
