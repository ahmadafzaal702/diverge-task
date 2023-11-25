import { LeftSidebar, MainSection, RightSideBar } from "@/components";
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex gap-x-4 gap-y-3">
        <div className="basis-3/12">
          <LeftSidebar />
        </div>
        <div className="basis-6/12">
          <MainSection />
        </div>
        <div className="basis-3/12">
          <RightSideBar />
        </div>
      </div>
    </main>
  );
}
