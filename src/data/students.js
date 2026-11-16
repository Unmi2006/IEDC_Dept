// Student profiles (source: IEDC Responses form). Photos are picked up automatically from
// src/assets/team/<slug>.(jpg|jpeg|png|webp); if none exists the card shows initials.
export const students = {
  'AHAANA BHATTACHARYA': {
    slug: 'ahaana-bhattacharya',
    email: 'ahaana.bhattacharya07@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ahaana-bhattacharya-386507391',
  },
  'Megha Mondal': {
    slug: 'megha-mondal',
    email: 'meghamondal6527@gmail.com',
    linkedin: 'https://www.linkedin.com/in/megha-mondal-7325a23a4',
  },
  'Agnibh Ghosh': {
    slug: 'agnibh-ghosh',
    email: 'mousumighosh14071982@gmail.com',
    linkedin: 'https://www.linkedin.com/in/agnibhg007',
  },
  'Pritam Paul': {
    slug: 'pritam-paul',
    email: 'paulpritam417@gmail.com',
    linkedin: 'https://www.linkedin.com/in/pritam-paul-530660306',
  },
  'PIYASA MANDAL': {
    slug: 'piyasa-mandal',
    email: 'piyasamndl0220@gmail.com',
    linkedin: 'https://www.linkedin.com/in/piyasa-mandal-377003396',
  },
  'SK SAQIBUL ISLAM': {
    slug: 'sk-saqibul-islam',
    email: 'saqib07islam@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sk-saqibul-islam-97a7a8377',
  },
  'Shreyasee Chatterjee': {
    slug: 'shreyasee-chatterjee',
    email: 'shreyaseesana2007@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shreyasee-chatterjee-1634b5377',
  },
  'Soumik Bid': {
    slug: 'soumik-bid',
    email: 'bidsoumik@gmail.com',
    linkedin: 'https://www.linkedin.com/in/soumik-bid-b7658b273',
  },
  'KOUSHIK SARKAR': {
    slug: 'koushik-sarkar',
    email: 'cr7lovers99229@gmail.com',
    linkedin: 'https://www.linkedin.com/in/koushik-sarkar-102977389',
  },
  'Siddhartha Lenka': {
    slug: 'siddhartha-lenka',
    email: 'siddharthalenka123@gmail.com',
    linkedin: 'https://www.linkedin.com/in/siddhartha-lenka-8258a0364',
  },
}

const photoModules = import.meta.glob('../assets/team/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

export const photoFor = (slug) => {
  const key = Object.keys(photoModules).find((p) => {
    const file = p.split('/').pop().replace(/\.[^.]+$/, '')
    return file === slug
  })
  return key ? photoModules[key] : null
}

// Looks up a member by name, ignoring case, dots and extra spaces ("Sk. Saqibul Islam" = "SK SAQIBUL ISLAM").
const norm = (s) => s.toLowerCase().replace(/\./g, '').replace(/\s+/g, ' ').trim()
const index = Object.fromEntries(Object.entries(students).map(([n, v]) => [norm(n), v]))

export const profileFor = (name) => {
  const p = index[norm(name)]
  return p ? { ...p, photo: photoFor(p.slug) } : null
}
