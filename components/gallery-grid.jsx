"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryItems } from "@/lib/school-data";
import { Icon } from "@/components/icons";

const filters = ["All moments", "School life", "Excursions", "Our team", "Awards", "Celebrations"];

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("All moments");
  const [selected, setSelected] = useState(null);
  const visibleItems = galleryItems.filter(
    (item) => activeFilter === "All moments" || item.category === activeFilter,
  );

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight" && selected) {
        const index = visibleItems.findIndex((item) => item.src === selected.src);
        setSelected(visibleItems[(index + 1) % visibleItems.length]);
      }
      if (event.key === "ArrowLeft" && selected) {
        const index = visibleItems.findIndex((item) => item.src === selected.src);
        setSelected(visibleItems[(index - 1 + visibleItems.length) % visibleItems.length]);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selected, visibleItems]);

  const moveImage = (direction) => {
    const index = visibleItems.findIndex((item) => item.src === selected.src);
    const nextIndex = (index + direction + visibleItems.length) % visibleItems.length;
    setSelected(visibleItems[nextIndex]);
  };

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Filter gallery">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={`filter-button ${activeFilter === filter ? "is-active" : ""}`}
            aria-pressed={activeFilter === filter}
            onClick={() => {
              setActiveFilter(filter);
              setSelected(null);
            }}>
            {filter}
            {filter === "All moments" && <span>{galleryItems.length}</span>}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {visibleItems.map((item, index) => (
          <button
            type="button"
            className={`gallery-card ${index % 9 === 0 ? "gallery-card-tall" : ""} ${index % 11 === 4 ? "gallery-card-wide" : ""}`}
            key={item.src}
            onClick={() => setSelected(item)}
            aria-label={`Open photo: ${item.alt}`}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
            />
            <span className="gallery-card-overlay">
              <small>{item.category}</small>
              <strong>{item.label}</strong>
              <span className="gallery-card-open"><Icon name="arrow" size={17} /></span>
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
          onClick={() => setSelected(null)}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelected(null)}
              aria-label="Close photo">
              <Icon name="close" size={23} />
            </button>
            <button
              type="button"
              className="lightbox-arrow lightbox-prev"
              onClick={() => moveImage(-1)}
              aria-label="Previous photo">
              <Icon name="chevron" size={23} />
            </button>
            <div className="lightbox-image">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="90vw"
                className="lightbox-photo"
              />
            </div>
            <button
              type="button"
              className="lightbox-arrow lightbox-next"
              onClick={() => moveImage(1)}
              aria-label="Next photo">
              <Icon name="chevron" size={23} />
            </button>
            <div className="lightbox-caption">
              <span>{selected.category}</span>
              <strong>{selected.label}</strong>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
