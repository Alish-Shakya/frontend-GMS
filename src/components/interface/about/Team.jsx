import React from "react";

const Person = ({ name, role, bio, img }) => (
  <article className="bg-white p-6 rounded-2xl shadow-sm border">
    <div className="flex items-center gap-4">
      <img
        src={img}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
    <p className="mt-4 text-sm text-slate-600">{bio}</p>
  </article>
);

export default function Team() {
  const people = [
    {
      name: "Asha Thapa",
      role: "Founder & CEO",
      bio: "Ex-gym manager, turned product builder. Passionate about making gym ops frictionless.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "Rijan Koirala",
      role: "Lead Developer",
      bio: "Builds scalable dashboards and loves clean UX. Sometimes lifts heavy code too.",
      img: "https://images.unsplash.com/photo-1531123414780-f5a4c1d4a4a3?auto=format&fit=crop&w=400&q=60",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-6 md:px-12">
      <h2 className="text-2xl font-bold mb-6">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {people.map((p) => (
          <Person key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
