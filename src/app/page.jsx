import AcademicFacilities from "@/Components/Facilities";
import Homepage from "@/Components/Homepage";
import NewsEvents from "@/Components/NewsEvents";
import QuickAccessSection from "@/Components/QuickAccessSection";
import QuickPortal from "@/Components/QuickPortal";
import StatSection from "@/Components/StatSection";
import UniversitySection from "@/Components/UniversitySection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Homepage />
      <StatSection />
      <QuickPortal />
      <UniversitySection />
      <NewsEvents />
      <AcademicFacilities />
      <QuickAccessSection />
    </div>
  );
}
