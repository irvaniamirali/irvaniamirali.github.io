import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";
import { SiLinux } from "react-icons/si";

export const DATA = {
  name: "AmirAli Irvani - DevOps Engineer",
  initials: "AI",
  url: "https://irvaniamirali.github.io",
  location: "Tehran, Iran",
  locationLink: "https://www.google.com/maps/search/?api=1&query=Iran",
  description:
    "DevOps Engineer interested in system architecture, infrastructure automation, and building reliable systems.",
  summary:
    "I'm a DevOps Engineer with hands-on experience in containerization, CI/CD pipelines, GitOps workflows, and infrastructure tooling. I've worked with a small DevOps team supporting larger companies, helping automate deployments, integrate services, and improve development workflows. I'm continuously learning, exploring system architecture, and building practical projects to deepen my understanding of reliable infrastructure.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: false, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "A collection of hands-on projects focused on DevOps, infrastructure, containerization, monitoring, and deployment automation. Each project is an opportunity to explore how systems work in practice.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.",
    },
  },
  
  skills: [
    { name: "Linux", icon: SiLinux },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "PostgreSQL", icon: Postgresql },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "irvaniamirali.dev@gmail.com",
    tel: "+989059158157",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/irvaniamirali",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/irvaniamirali",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:irvaniamirali.dev@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Amertka DevOps Yara",
      href: "",
      badges: ["DevOps"],
      location: "Iran",
      title: "DevOps Engineer",
      logoUrl: "/amertka.png",
      start: "2026",
      end: undefined,
      description:
        "Worked with a small DevOps team supporting larger companies. Contributed to containerizing services, implementing GitOps workflows with GitHub Actions and GitLab CI, building a Telegram notification gateway for GitLab pipelines, configuring Keycloak access, and working with Nginx.",
    },
  ],
  education: [],
  projects: [
    {
      title: "Observability Stack",
      href: "https://github.com/irvaniamirali/observability-stack",
      dates: "Personal Project",
      active: true,
      description:
        "A Docker Compose-based monitoring stack using Prometheus, Grafana, Node Exporter, and Alertmanager. Includes preconfigured monitoring dashboards, resource usage metrics, alerting rules, and Makefile commands for service management.",
      technologies: [
        "Docker",
        "Docker Compose",
        "Prometheus",
        "Grafana",
        "Node Exporter",
        "Alertmanager",
        "Linux",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/irvaniamirali/observability-stack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/observability.jpg",
      video: "",
    },
    {
      title: "Django Kubernetes Stack",
      href: "https://github.com/irvaniamirali/django-k8s-stack",
      dates: "Personal Project",
      active: true,
      description:
        "A containerized Django application deployed on Kubernetes with PostgreSQL. Demonstrates Kubernetes Deployments and Services, persistent storage, ConfigMaps, Secrets, health probes, resource requests and limits, and environment-specific configuration using Kustomize.",
      technologies: [
        "Docker",
        "Kubernetes",
        "Django",
        "PostgreSQL",
        "Kustomize",
        "Kind",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/irvaniamirali/django-k8s-stack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/django-k8s-stack.jpg",
      video: "",
    },
  ],
  hackathons: [],
} as const;
