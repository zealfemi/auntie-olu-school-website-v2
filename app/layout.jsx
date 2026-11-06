import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { schoolData } from "@/lib/school-data";
import "./globals.css";
import SiteLoader from "@/components/site-loader";

export const metadata = {
  title: {
    default: "Auntie Olu Nursery & Primary School | Isolo, Lagos",
    template: `%s | ${schoolData.header.name} School`,
  },
  description:
    "A joyful, faith-rooted nursery and primary school in Ire Akari Estate, Isolo, Lagos. Learn about Auntie Olu School, our community and admissions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteLoader />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
