import { assetPath } from "@/lib/site-path";

export const schoolData = {
  header: {
    name: "Auntie Olu",
    subtitle: "Nursery & Primary School",
    description:
      "A joyful place where children learn, grow and shine. We put God First in all we do.",
  },
  contact: {
    address:
      "34 Olufemi Peters Street, Ire Akari Estate, Isolo, Lagos, Nigeria.",
    phone: "07066521947 / 08023691644",
    phones: ["07066521947", "08023691644"],
    email: "info@auntieoluschools.edu.ng",
    hours: "Monday – Friday, 8:00am – 4:00pm",
  },
  about: {
    mission:
      "To provide a caring, stimulating and faith-rooted education that enables every child to discover their gifts and excel.",
    vision:
      "To be the leading nursery and primary institution recognized for producing confident, disciplined, and academically sound future leaders.",
    promise:
      "To see every child, celebrate every step forward and teach with excellence, warmth and purpose.",
    services: [
      "A warm nursery that feels like home",
      "Fun, purposeful classroom activities",
      "Reading, writing and maths confidence",
      "Music, art, storytelling and drama",
      "Sports, movement and outdoor play",
      "Regular parent-school partnership",
      "Respect, faith and good character",
      "Celebrations of every child’s progress",
      "A safe and supportive environment",
    ],
  },
  values: [
    {
      title: "Character & faith",
      text: "We nurture kind hearts, confident voices and strong values — with God First at the centre.",
      icon: "heart",
    },
    {
      title: "Learning that lasts",
      text: "Our vibrant classrooms make foundational literacy, numeracy and curiosity feel exciting.",
      icon: "book",
    },
    {
      title: "A caring community",
      text: "Teachers and families work hand in hand so every child feels known and supported.",
      icon: "users",
    },
  ],
  gallery: [
    ["/images/students-001.jpg", "Learning together"],
    ["/images/students-002.jpg", ""],
    ["/images/students-003.jpg", ""],
    ["/images/students-004.jpg", ""],
    ["/images/students-005.jpg", ""],
    ["/images/students-006.jpg", ""],
    ["/images/excursion-001.jpg", "Excursions"],
    ["/images/excursion-002.jpg", ""],
    ["/images/excursion-003.jpg", ""],
    ["/images/excursion-004.jpg", ""],
    ["/images/teacher-students-001.jpg", "Teachers & Students"],
    ["/images/teacher-students-002.jpg", ""],
    ["/images/teacher-students-003.jpg", ""],
    ["/images/teacher-students-004.jpg", ""],
    ["/images/teacher-students-005.jpg", ""],
    ["/images/teacher-students-006.jpg", ""],
    ["/images/teacher-students-007.jpg", ""],
    ["/images/teachers-001.jpg", "Staffs"],
    ["/images/teachers-002.jpg", ""],
    ["/images/teachers-003.jpg", ""],
    ["/images/awards-012.jpg", "Awards"],
    ["/images/awards-013.jpg", ""],
    ["/images/awards-001.jpg", ""],
    ["/images/awards-002.jpg", ""],
    ["/images/awards-003.jpg", ""],
    ["/images/awards-004.jpg", ""],
    ["/images/awards-005.jpg", ""],
    ["/images/awards-006.jpg", ""],
    ["/images/awards-007.jpg", ""],
    ["/images/awards-008.jpg", ""],
    ["/images/awards-009.jpg", ""],
    ["/images/awards-010.jpg", ""],
    ["/images/awards-011.jpg", ""],
    ["/images/christmas-002.jpg", "End of year party"],
    ["/images/christmas-003.jpg", ""],
    ["/images/christmas-001.jpg", ""],
  ],
};

export function categoryForImage(src) {
  if (src.includes("awards")) return "Awards";
  if (src.includes("christmas")) return "Celebrations";
  if (src.includes("excursion")) return "Excursions";
  if (src.includes("teachers") || src.includes("teacher-students")) {
    return "Our team";
  }
  return "School life";
}

export const galleryItems = schoolData.gallery.map(([src, alt], index) => {
  const category = categoryForImage(src);
  const number = String(index + 1).padStart(2, "0");
  return {
    src: assetPath(src),
    category,
    alt: alt || `${category} at Auntie Olu School`,
    label: alt || category,
    number,
  };
});
