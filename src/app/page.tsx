export default function Home() {
  const projects = [
    {
      title: "Responsible AI for Public Services",
      description:
        "A concept platform for evaluating fairness, accessibility, and transparency in AI systems used by civic and social programs.",
    },
    {
      title: "Low-Cost AI Learning Labs",
      description:
        "An initiative focused on practical, affordable AI education resources for students and builders in low-income countries.",
    },
    {
      title: "Open Ethics Research Toolkit",
      description:
        "A research-driven toolkit for documenting model risks, community impact, and accountability practices in applied AI work.",
    },
  ];

  const workExperience = [
    {
      role: "Ethical AI Researcher",
      period: "2023 - Present",
      summary:
        "Researching practical, people-centered AI with an emphasis on fairness, inclusion, and responsible deployment in underserved communities.",
    },
    {
      role: "AI Collaboration Partner",
      period: "2021 - 2023",
      summary:
        "Worked across interdisciplinary teams to shape research ideas, prototype solutions, and translate technical work into real-world impact.",
    },
  ];

  const publications = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ];

  const conferences = [
    "Ethics in AI Summit",
    "Global Research for Inclusive Technology Forum",
    "Open Collaboration in Emerging Tech Conference",
  ];

  const openSource = [
    "Contributing to open documentation, research tooling, and accessible AI learning resources.",
    "Supporting transparent development practices and community-first problem solving.",
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f7f0ff,_#efe1ff_45%,_#e4d2ff_100%)] px-6 py-10 text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <section className="overflow-hidden rounded-[2rem] border border-white/50 bg-white/60 p-8 shadow-[0_20px_60px_rgba(119,83,181,0.15)] backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-700">
            malahat.vercel.com
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-[1.4fr_0.9fr] md:items-end">
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-violet-950 md:text-6xl">
                Malahat
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                Ethical AI researcher passionate about building responsible,
                human-centered technology for low-income countries and open to
                thoughtful collaborations that create meaningful impact.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-violet-950 p-6 text-violet-100 shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-violet-300">
                Mission
              </p>
              <p className="mt-3 text-base leading-7">
                I aim to create ethical, accessible AI systems that support
                equity, opportunity, and sustainable progress for underserved
                communities around the world.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] border border-white/50 bg-[#fbf7ff] p-8 shadow-[0_12px_40px_rgba(145,118,196,0.12)]">
            <h2 className="text-2xl font-semibold text-violet-950">About</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/50 bg-[#f6efff] p-8 shadow-[0_12px_40px_rgba(145,118,196,0.12)]">
            <h2 className="text-2xl font-semibold text-violet-950">
              Collaboration
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              I am always open to collaborating with researchers, public
              interest technologists, mission-driven startups, educators,
              nonprofit teams, and builders working toward more just and
              inclusive digital futures.
            </p>
          </article>
        </section>

        <section className="rounded-[2rem] border border-white/50 bg-white/65 p-8 shadow-[0_12px_40px_rgba(145,118,196,0.12)]">
          <h2 className="text-2xl font-semibold text-violet-950">Projects</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[1.5rem] border border-violet-100 bg-[#faf5ff] p-5"
              >
                <h3 className="text-lg font-semibold text-violet-900">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/50 bg-[#faf6ff] p-8 shadow-[0_12px_40px_rgba(145,118,196,0.12)]">
            <h2 className="text-2xl font-semibold text-violet-950">
              Work Experience
            </h2>
            <div className="mt-6 space-y-5">
              {workExperience.map((item) => (
                <div
                  key={`${item.role}-${item.period}`}
                  className="rounded-[1.25rem] border border-violet-100 bg-white/80 p-5"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-violet-900">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-violet-700">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-3 leading-7 text-slate-700">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/50 bg-[#f3ebff] p-8 shadow-[0_12px_40px_rgba(145,118,196,0.12)]">
            <h2 className="text-2xl font-semibold text-violet-950">
              Publications
            </h2>
            <div className="mt-6 space-y-4">
              {publications.map((publication, index) => (
                <p
                  key={publication}
                  className="rounded-[1.25rem] border border-violet-100 bg-white/70 p-5 leading-7 text-slate-700"
                >
                  <span className="font-semibold text-violet-800">
                    Paper {index + 1}.
                  </span>{" "}
                  {publication}
                </p>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-[2rem] border border-white/50 bg-white/65 p-8 shadow-[0_12px_40px_rgba(145,118,196,0.12)]">
            <h2 className="text-2xl font-semibold text-violet-950">
              Conferences
            </h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {conferences.map((conference) => (
                <li
                  key={conference}
                  className="rounded-xl bg-[#faf5ff] px-4 py-3 leading-7"
                >
                  {conference}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-white/50 bg-[#fbf7ff] p-8 shadow-[0_12px_40px_rgba(145,118,196,0.12)]">
            <h2 className="text-2xl font-semibold text-violet-950">
              Open Source Work
            </h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {openSource.map((item) => (
                <li
                  key={item}
                  className="rounded-xl bg-white/80 px-4 py-3 leading-7"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-white/50 bg-[#f4ecff] p-8 shadow-[0_12px_40px_rgba(145,118,196,0.12)]">
            <h2 className="text-2xl font-semibold text-violet-950">
              Contact Details
            </h2>
            <div className="mt-5 space-y-4 text-slate-700">
              <p>
                <span className="font-semibold text-violet-900">Email:</span>{" "}
                malahat.research@example.com
              </p>
              <p>
                <span className="font-semibold text-violet-900">Location:</span>{" "}
                Available for remote and international collaborations
              </p>
              <p>
                <span className="font-semibold text-violet-900">
                  Focus Areas:
                </span>{" "}
                ethical AI, accessibility, public-interest technology, and
                low-cost innovation
              </p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
