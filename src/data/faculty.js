import maumita from '../assets/maumita-chakraborty.jpg'
import anirban from '../assets/anirban-ganguly.jpg'
import ayan from '../assets/ayan-das.jpg'
import chiradeep from '../assets/chiradeep-mukherjee.png'
import aniket from '../assets/aniket-kundu.png'

export const faculty = [
  {
    slug: 'maumita-chakraborty',
    name: 'Prof. (Dr.) Maumita Chakraborty',
    designation: 'Professor and HOD',
    iedcRole: 'HoD and In-charge of IEDC Lab',
    email: 'maumita.chakraborty@iem.edu.in',
    photo: maumita,
    areas: ['Blockchain', 'Computer Algorithm', 'Cyber Security'],
    links: [
      { label: 'Faculty Profile', href: 'https://faculty.iem.edu.in/faculty/293' },
    ],
  },
  {
    slug: 'anirban-ganguly',
    name: 'Prof. (Dr.) Anirban Ganguly',
    designation: 'Associate Professor',
    iedcRole: 'SPOC and Coordinator',
    email: 'anirban.ganguly@iem.edu.in',
    photo: anirban,
    areas: ['Neuromorphic Computing', 'In-Memory Computing', 'VLSI', 'Deep Learning'],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dr-anirban-ganguly-6b211a4b' },
      { label: 'Faculty Profile', href: 'https://faculty.iem.edu.in/faculty/63' },
    ],
  },
  {
    slug: 'chiradeep-mukherjee',
    name: 'Prof. (Dr.) Chiradeep Mukherjee',
    designation: 'Associate Professor',
    iedcRole: 'Coordinator',
    email: 'chiradeep.mukherjee@uem.edu.in',
    photo: chiradeep,
    areas: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Natural Language Processing'],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chiradeep-mukherjee-38a0b019' },
      { label: 'Faculty Profile', href: 'https://faculty.iem.edu.in/faculty/149' },
    ],
  },
  {
    slug: 'ayan-das',
    name: 'Prof. Ayan Das',
    designation: 'Assistant Professor',
    iedcRole: 'Coordinator',
    email: 'ayan.das@uem.edu.in',
    photo: ayan,
    areas: [
      'Multimodal Deep Learning',
      'Representation Learning',
      'Explainable Artificial Intelligence (XAI)',
      'Meta-learning',
      'Applied Machine Learning (Healthcare & Agriculture)',
      'Class Imbalance',
    ],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayan-das-775529215' },
      { label: 'Faculty Profile', href: 'https://faculty.iem.edu.in/faculty/332' },
    ],
  },
  {
    slug: 'aniket-kundu',
    name: 'Mr. Aniket Kundu',
    designation: 'Coordinator',
    iedcRole: 'Coordinator',
    email: '',
    photo: aniket,
    areas: [],
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aniket-kundu-540b96227' },
    ],
  },
]

export function getFaculty(slug) {
  return faculty.find((person) => person.slug === slug)
}
