import { FloatingNav } from "@/components/ui/sections/FloatingNavbar";
import Footer from "@/components/ui/sections/Footer";

const navItems = [
  { name: "Home", link: "/" },
  {
    name: "Projects",
    link: "#projects",
    children: [
      { name: "AddPoster", link: "/addposter" },
      { name: "HotelSimulator", link: "/hotelsimulator" },
      { name: "Mindify", link: "/mindify" },
    ],
  },
];

export default function AddPosterPage() {
  return (
    <main className="min-h-screen">
      <FloatingNav navItems={navItems} />
      <section className="min-h-[90vh] p-16">
        <h1 className="text-4xl font-bold mb-4">AddPoster</h1>
        <p>Details and demo for the AddPoster desktop application.</p>
      </section>
      <Footer />
    </main>
  );
}
