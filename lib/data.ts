import {
  Atom,
  BookOpen,
  Calculator,
  FlaskConical,
  GraduationCap,
  Languages,
  Library,
  LineChart,
  PenLine,
  School,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

/* Institute statistics. */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const heroStats: Stat[] = [
  { value: 5000, suffix: "+", label: "Students Guided" },
  { value: 95, suffix: "%+", label: "Student Satisfaction" },
  { value: 20, suffix: "+", label: "Expert Faculty" },
  { value: 10, suffix: "+", label: "Years of Excellence" },
];

/* Courses. */
export interface Course {
  slug: string;
  name: string;
  category: string;
  description: string;
  target: string;
  subjects: string[];
  icon: LucideIcon;
}

export const courses: Course[] = [
  {
    slug: "foundation-6-8",
    name: "Foundation (Classes 6–8)",
    category: "School Education",
    description:
      "Concept-first Maths, Science and English with study habits that make higher classes easier.",
    target: "Classes 6–8 · All boards",
    subjects: ["Maths", "Science", "English"],
    icon: Library,
  },
  {
    slug: "classes-9-10",
    name: "Classes 9–10 (CBSE)",
    category: "School Education",
    description:
      "Board-aligned preparation with NCERT mastery, regular tests and answer-writing practice.",
    target: "Classes 9–10 · CBSE / ICSE",
    subjects: ["Maths", "Science", "SST", "English"],
    icon: School,
  },
  {
    slug: "classes-11-12-science",
    name: "Classes 11–12 Science",
    category: "Senior Secondary",
    description:
      "Physics, Chemistry and Maths/Biology taught for boards and competitive depth together.",
    target: "Classes 11–12 · Science",
    subjects: ["Physics", "Chemistry", "Maths / Biology"],
    icon: FlaskConical,
  },
  {
    slug: "classes-11-12-commerce",
    name: "Classes 11–12 Commerce",
    category: "Senior Secondary",
    description:
      "Accountancy, Economics and Business Studies with practical problem-solving sessions.",
    target: "Classes 11–12 · Commerce",
    subjects: ["Accountancy", "Economics", "Business Studies"],
    icon: LineChart,
  },
  {
    slug: "jee-preparation",
    name: "JEE (Main + Advanced)",
    category: "Competitive",
    description:
      "Structured Physics, Chemistry and Maths with DPPs, mock tests and rank-focused mentoring.",
    target: "Classes 11–12 + Droppers",
    subjects: ["Physics", "Chemistry", "Maths"],
    icon: Atom,
  },
  {
    slug: "neet-preparation",
    name: "NEET-UG Preparation",
    category: "Competitive",
    description:
      "NCERT-driven Biology with Physics and Chemistry support, plus regular NEET-pattern tests.",
    target: "Classes 11–12 + Droppers",
    subjects: ["Biology", "Physics", "Chemistry"],
    icon: GraduationCap,
  },
  {
    slug: "mathematics",
    name: "Mathematics Excellence",
    category: "School Education",
    description:
      "Small-group Maths batches focused on speed, accuracy and olympiad-style thinking.",
    target: "Classes 6–12",
    subjects: ["Maths", "Mental Aptitude"],
    icon: Calculator,
  },
  {
    slug: "spoken-english",
    name: "Spoken English & Study Skills",
    category: "Skill Development",
    description:
      "Confidence-building English speaking, grammar and exam presentation skills.",
    target: "Classes 6–12 · All students",
    subjects: ["Speaking", "Grammar", "Personality"],
    icon: Languages,
  },
];

export const courseCategories = [
  "School Education",
  "Senior Secondary",
  "Competitive",
  "Skill Development",
] as const;

/* ------------------------------------------------------------------ */
/*  Why choose us                                                      */
/* ------------------------------------------------------------------ */
export interface Benefit {
  title: string;
  text: string;
  icon: LucideIcon;
}

export const benefits: Benefit[] = [
  {
    title: "Experienced Faculty",
    text: "Career teachers for every subject — no ad-hoc or rotating tutors.",
    icon: Users,
  },
  {
    title: "Personal Attention",
    text: "Limited batch sizes so every student is known by name and tracked individually.",
    icon: BookOpen,
  },
  {
    title: "Regular Assessments",
    text: "Weekly tests, chapter-wise checks and honest parent-teacher reviews.",
    icon: PenLine,
  },
  {
    title: "Doubt Support",
    text: "Daily doubt hours and one-to-one clearing before doubts pile up.",
    icon: Trophy,
  },
  {
    title: "Smart Learning Approach",
    text: "Understand → Practise → Assess → Improve. A loop, not just lectures.",
    icon: LineChart,
  },
];

/* ------------------------------------------------------------------ */
/*  Teaching approach steps                                            */
/* ------------------------------------------------------------------ */
export const approachSteps = [
  {
    no: "01",
    title: "Understand",
    text: "Concept-focused teaching with real examples before formulae.",
  },
  {
    no: "02",
    title: "Practise",
    text: "Structured worksheets, DPPs and assignments after every topic.",
  },
  {
    no: "03",
    title: "Assess",
    text: "Regular tests with performance tracking shared with parents.",
  },
  {
    no: "04",
    title: "Improve",
    text: "Personal feedback, remedial classes and targeted support.",
  },
];

/* Faculty. */
export interface FacultyMember {
  name: string;
  subject: string;
  experience: string;
  qualification: string;
  text: string;
  image: string;
}

export const faculty: FacultyMember[] = [
  {
    name: "Dr. Ankit Sharma",
    subject: "Mathematics",
    experience: "12+ Years Experience",
    qualification: "M.Sc. Mathematics, B.Ed.",
    text: "Known for making advanced Maths feel simple with step-by-step problem solving.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Mrs. Meera Iyer",
    subject: "Biology (NEET)",
    experience: "10+ Years Experience",
    qualification: "M.Sc. Botany, NEET Mentor",
    text: "NCERT-line-by-line Biology teaching with diagrams, mnemonics and PYQ drills.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Mr. Rajesh Gupta",
    subject: "Physics (JEE / Boards)",
    experience: "14+ Years Experience",
    qualification: "B.Tech, IIT Alumnus Mentor",
    text: "Builds numerical confidence through concept ladders from basics to JEE Advanced.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: "Ms. Kavita Rao",
    subject: "English & SST",
    experience: "9+ Years Experience",
    qualification: "M.A. English, CBSE Expert",
    text: "Specialist in answer-writing, grammar and helping average students score 90+.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=70",
  },
];

/* Results. */
export const resultHighlights: Stat[] = [
  { value: 95, suffix: "%+", label: "Students improved scores" },
  { value: 500, suffix: "+", label: "Board exam distinctions" },
  { value: 1000, suffix: "+", label: "Competitive selections" },
  { value: 15, suffix: "+", label: "School toppers mentored" },
];

export const achievements = [
  {
    title: "Board Excellence",
    text: "Consistent 90+ scores in Class 10 & 12 boards across Maths, Science and SST.",
  },
  {
    title: "JEE / NEET Selections",
    text: "Classroom students qualifying JEE Main and NEET-UG every academic year.",
  },
  {
    title: "Olympiad & NTSE",
    text: "Foundation-batch students earning state and national olympiad ranks.",
  },
  {
    title: "Weak-to-Strong Turnarounds",
    text: "Structured remedial programme for students joining with backlogs.",
  },
];

/* Testimonials. */
export interface Testimonial {
  name: string;
  meta: string;
  quote: string;
  result?: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ananya",
    meta: "Class 10 · CBSE",
    quote:
      "The teachers explain concepts clearly and are always available when I have doubts. My Maths went from 68 to 93.",
    result: "93% in Class 10 Boards",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=70",
  },
  {
    name: "Rohan",
    meta: "Class 12 · JEE Aspirant",
    quote:
      "Weekly tests and personal feedback helped me fix silly mistakes. Physics finally started making sense.",
    result: "JEE Main Qualified",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=70",
  },
  {
    name: "Simran",
    meta: "Class 12 · Medical Aspirant",
    quote:
      "Biology NCERT sessions and regular revisions kept me consistent. The mentors genuinely care about every student.",
    result: "NEET-UG Qualified",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=70",
  },
  {
    name: "Aditya",
    meta: "Class 9 · Foundation",
    quote:
      "Small batches mean teachers know exactly where I am weak. Doubt hours after every class are the best part.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=70",
  },
  {
    name: "Parent of Ishita",
    meta: "Class 8 · Parent",
    quote:
      "We get honest monthly updates about our daughter's progress. The discipline and communication are excellent.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=70",
  },
];
