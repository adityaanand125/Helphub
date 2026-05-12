export const ROLE_ADMIN = 'admin'
export const ROLE_DONOR = 'donor'
export const ROLE_NGO = 'ngo'
export const ROLE_VOLUNTEER = 'volunteer'

export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
  login: '/login',
  register: '/register',
  donate: '/donate',
  food: '/donate/food',
  blood: '/donate/blood',
  money: '/donate/money',
  organ: '/donate/organ',
  dashboard: '/dashboard',
  admin: '/admin',
  profile: '/profile',
}

export const donationTypes = [
  { label: 'Food', value: 'food' },
  { label: 'Blood', value: 'blood' },
  { label: 'Money', value: 'money' },
  { label: 'Organ', value: 'organ' },
]
