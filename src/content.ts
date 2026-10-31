/**
 * All editable site content lives here, so wording, prices and reviews
 * can be changed without touching the layout code in App.tsx.
 */

export const PRACTICE_NAME = 'Pivot Point Bodywork'
export const THERAPIST_NAME = 'Bronson Davidson'

export const CALENDLY = 'https://calendly.com/bronsondavidson'
export const MAPS = 'https://maps.app.goo.gl/xmawtJZ72ihyiJVs9'
export const PHONE = '831.295.5707'
export const PHONE_HREF = 'tel:+18312955707'
export const EMAIL = 'pivotpointbodywork@gmail.com'
export const EMAIL_HREF = 'mailto:pivotpointbodywork@gmail.com'

/** Replace public/Intake_Form_-_Pivot_Point_Body_Work.pdf with the new PDF, keeping this file name. */
export const INTAKE_PDF = 'Intake_Form_-_Pivot_Point_Body_Work.pdf'

export const IMG_LOGO = 'images/logo-mark.png'
export const IMG_HEADSHOT = 'images/bronson-headshot.jpg'

export const CONDITIONS_LEFT = [
  'Chronic pain & tension',
  'Hip & back pain',
  'Carpal tunnel',
  'Stress & nervous system dysregulation',
]

export const CONDITIONS_RIGHT = [
  'Sports injuries & recovery',
  'Sciatica',
  'Postural imbalance',
  'Migraines & TMJ dysfunction',
  'And many other conditions',
]

export const MODALITIES = [
  'Swedish',
  'Thai',
  'Neuromuscular',
  'Deep Tissue',
  'Trigger Point',
  'Cupping',
  'Hot Stone',
  'Prenatal',
  'Biodynamic Craniosacral Therapy',
]

export type Testimonial = { text: string; name: string }

/** Shown first, always visible. */
export const FEATURED_TESTIMONIALS: Testimonial[] = [
  {
    text: "Bronson was beyond amazing. He addressed some chronic issues I have and gave me great confidence that with multiple sessions they could be resolved. He has a wonderful deep yet light touch that's like butter.",
    name: 'M. Hughes',
  },
  {
    text: 'Bronson was amazing, a true craftsman. Obviously very well trained and took it very seriously, doing his best. He was intuitive, considerate, and applied the perfect amount of pressure and techniques in all the right places. One of, if not the very best, massages of my life.',
    name: 'MM',
  },
  {
    text: "Practitioner was very intuitive and it was the best massage I have ever had at Pivot Point Bodywork! Professional, very skilled, intuitive, very present, and listened to preferences and areas to focus on. Pressure was perfect and he found lots of areas that needed attention that I wasn't even aware of.",
    name: 'SD',
  },
  {
    text: "Just got home, no pain sitting in the car on the way back. Bronson saved me, he's the best!",
    name: 'Tamara A',
  },
  {
    text: "One of the best massages I've had. Bronson asked questions about trouble areas and has an amazing technique with great muscle work that feels amazing while also getting to the needed areas. Thank you! I will be back and request Bronson.",
    name: 'KA',
  },
  {
    text: 'That was the best massage. I feel so supported and cared for. The techniques you used (pulsing on scalp) made me feel like I was in the water.',
    name: 'Alix Macdonald',
  },
]

/** Revealed by the "See more" button. */
export const MORE_TESTIMONIALS: Testimonial[] = [
  { text: 'Amazing massage. If I lived closer, I would go regularly. Definitely going back when I visit again.', name: 'TC' },
  { text: 'Cupping on lateral leg IT band — origin sure released. NOTICEABLE CHANGE. YES!!', name: 'SM' },
  { text: "One of the best massages I've ever had!", name: 'GP' },
  { text: 'Wonderful practitioner, had a very grounding and intuitive touch. I came in for upper back and shoulder stuff and he really pressed into the perfect spots for release.', name: 'KCM' },
  { text: "Always a wonderful experience, but Bronson gave me the absolute best massage I have ever had. It's obvious that he knew what he was doing. I will definitely be booking with him again!", name: 'HB' },
  { text: "Very professional. Perfect blend of 'work' and relaxation. Just what I needed.", name: 'AM' },
  { text: 'Super impressed, came in with a headache and he worked pain points out. Will rebook with him shortly. Props!', name: 'AW' },
  { text: "Best massage I've had in years! Bronson really focused on my problem areas and I felt amazing after my treatment. I will definitely be back!", name: 'BG' },
  { text: "Bronson is very skilled and finds areas that need to be worked on that you weren't even aware of.", name: 'SD' },
  { text: 'Bronson is amazing!', name: 'SD' },
  { text: "Last time I came in it was the best massage I've ever had.", name: 'DH' },
  { text: 'Great massage.', name: 'ED' },
  { text: "Great experience. I'll be back!!", name: 'BC' },
  { text: 'Very skilled! He has a natural ability to find the areas that needed the most work.', name: 'Anonymous' },
  { text: 'Perfect amount of Swedish, Deep Tissue, passive range of motion, shiatsu, and trigger point work all in one massage!', name: 'VK' },
  { text: "One of the best massages I've had, super awesome, definitely will be booking with Bronson in the future. Thank you!", name: 'SB' },
  { text: 'Bronson was able to hone in on my areas of discomfort and help me to relax. I would recommend him to anyone.', name: 'AA' },
  { text: 'Excellent massage. I felt awesome the next day. Noticeable difference.', name: 'Paul G' },
  { text: 'Bronson is amazing! Spent so much time on pressure points. The tightness is gone.', name: 'EC' },
  { text: 'It was so amazing and nurturing. Thank you.', name: 'GB' },
  { text: 'My massage therapist was wonderful! I appreciate a good massage! He listened to my issues and concerns and his amount of pressure was perfect! I will definitely request him in the future!', name: 'HB' },
  { text: "The best. I'm so happy I found someone for me and my husband who does deep work.", name: 'PO' },
  { text: 'That was amazing, you helped me so much.', name: 'KH' },
  { text: 'Extremely relaxing. He was very nice and gave a great massage.', name: 'AS' },
  { text: "I haven't had a bad massage at Pivot Point Bodywork, but Bronson was the best one.", name: 'SC' },
  { text: 'My massage with Bronson was absolutely fabulous!', name: 'RD' },
  { text: "That was probably the best massage I've had. Thank you so much!", name: 'CW' },
  { text: 'Quiet and knowledgeable.', name: 'MI' },
  { text: "I'm feeling energized since our BCST session after initially experiencing decreased pain but also decreased energy. I was wiped out for about an hour and then I just came bouncing back. I've been doing well. I'm so grateful!", name: 'DL' },
]
