import EducationTimeline from "@/components/EducationTimeline";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import TechStack from "@/components/tech-stack";
import Intro from "@/components/ui/Intro";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl mx-auto px-5 space-y-12">
        <div className="animate-fade-in-up">
          <Intro />
        </div>
        <div className="animate-fade-in-up delay-100">
          <RecentPosts />
        </div>
        <div className="animate-fade-in-up delay-200">
          <TechStack />
        </div>
        <div className="animate-fade-in-up delay-300">
          <RecentProjects />
        </div>
        <div className="animate-fade-in-up delay-400">
          <EducationTimeline />
        </div>
      </div>
    </section>
  );
}
