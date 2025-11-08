// File: components/WhatWeDo.jsx
import React from "react";
import {
  Dumbbell,
  Users,
  CalendarCheck,
  CreditCard,
  ClipboardList,
  BarChart3,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const Feature = ({ Icon, title, desc }) => (
  <div className="p-6 bg-white rounded-2xl shadow-sm border hover:shadow-md transition">
    <div className="w-12 h-12 grid place-items-center rounded-lg bg-sky-100 mb-4">
      <Icon className="w-6 h-6 text-sky-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default function WhatWeDo() {
  const features = [
    {
      Icon: Users,
      title: "Member Management",
      desc: "Easily register members, track their progress, attendance, renewals, and maintain detailed profiles with contact and payment info.",
    },
    {
      Icon: Dumbbell,
      title: "Workout & Diet Planning",
      desc: "Create personalized workout routines and diet charts for each member, assign trainers, and monitor progress through the dashboard.",
    },
    {
      Icon: CalendarCheck,
      title: "Scheduling & Classes",
      desc: "Organize group classes, personal training sessions, and events with an interactive calendar that syncs across trainers and members.",
    },
    {
      Icon: CreditCard,
      title: "Billing & Payment Automation",
      desc: "Automate invoicing, membership renewals, and track payment history. Accept online payments via multiple gateways securely.",
    },
    {
      Icon: ClipboardList,
      title: "Staff & Trainer Management",
      desc: "Manage trainers’ schedules, payroll, attendance, and assign them to clients or classes seamlessly through the platform.",
    },
    {
      Icon: BarChart3,
      title: "Analytics & Reports",
      desc: "Gain insights into performance metrics — revenue, active members, retention rates, and attendance trends — all in real-time.",
    },
    {
      Icon: MessageSquare,
      title: "Member Communication",
      desc: "Send reminders, promotions, or personalized notifications to members through in-app messages, email, or SMS.",
    },
    {
      Icon: ShieldCheck,
      title: "Access Control & Security",
      desc: "Integrate with smart access systems, verify memberships at entry points, and ensure safe, authorized access for all members.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-6 md:px-12">
      <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
        What We Do
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <Feature key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
