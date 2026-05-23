// ============================================================
// Data sumber Cultural Encyclopedia
// ------------------------------------------------------------
// NOTE: gambar di-import (bukan path string) supaya URL-nya benar
// di semua halaman & saat build. File ada di src/assets/cultural-encyclopedia/.
// Untuk ganti gambar: ganti file-nya, atau ubah import di bawah.
//
// `content` = isi lengkap artikel untuk halaman Read (ArticleDetail).
// Bentuknya array of block: { type: 'paragraph' | 'heading' | 'list' }.
// ============================================================

import culture1 from '../assets/cultural-encyclopedia/culture-1.png';
import art1 from '../assets/cultural-encyclopedia/art-1.png';
import feast1 from '../assets/cultural-encyclopedia/feast-1.png';
import etiquette1 from '../assets/cultural-encyclopedia/etiquette-1.png';
import history1 from '../assets/cultural-encyclopedia/history-1.png';
import culture2 from '../assets/cultural-encyclopedia/culture-2.png';
import etiquette2 from '../assets/cultural-encyclopedia/etiquette-2.png';
import local1 from '../assets/cultural-encyclopedia/local-1.png';

export const CATEGORIES = [
  'Show All',
  'Etiquette & Rules',
  'Culture & Tradition',
  'History & Heritage',
  'Arts & Performances',
  'Local Wisdom',
  'Feast',
];

export const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'az', label: 'Title (A–Z)' },
  { value: 'shortest', label: 'Shortest read' },
  { value: 'longest', label: 'Longest read' },
];

export const ARTICLES = [
  {
    id: 1,
    category: 'Culture & Tradition',
    title: 'The Deep Meaning of Canang Sari in Balinese Hindu Life',
    excerpt:
      'Canang Sari is a daily offering made from woven young coconut leaves filled with colorful flowers and incense. Each flower color has a profound spiritual meaning.',
    readTime: 5,
    image: culture1,
    content: [
      { type: 'paragraph', text: 'Canang sari is the most familiar sight in Bali. These small, square trays woven from young coconut leaf (janur) appear everywhere from temple shrines and family compounds to shop counters and motorbike seats. Offered several times a day, the canang is a tangible expression of Tri Hita Karana, the Balinese philosophy of harmony between humans, nature, and the divine.' },
      { type: 'heading', text: 'The Meaning of Each Element' },
      { type: 'paragraph', text: 'The woven base represents the body and the earth. On top sits the peporosan, a small parcel of betel leaf, lime, and areca nut symbolising the Hindu trinity of Brahma, Vishnu, and Shiva. Flowers are arranged by colour and direction, and a final touch of fragrance, a coin, or a sweet treat completes the offering. The true gift is not the material itself but the sari, its essence, sincerity, and gratitude.' },
      { type: 'heading', text: 'Colours and Cardinal Directions' },
      { type: 'paragraph', text: 'The placement of each flower follows a cosmic map, with a colour and a deity assigned to each direction:' },
      {
        type: 'list',
        items: [
          'White flowers point east, honouring Iswara.',
          'Red flowers point south, honouring Brahma.',
          'Yellow flowers point west, honouring Mahadeva.',
          'Blue or green flowers point north, honouring Vishnu.',
        ],
      },
      { type: 'heading', text: 'How It Is Offered' },
      { type: 'paragraph', text: 'The offering is presented with a lit stick of incense, whose smoke carries the prayer upward, and a sprinkle of holy water, accompanied by a quiet mantra. Once offered, the canang has fulfilled its purpose; the Balinese do not mind that it is later swept away.' },
      { type: 'heading', text: 'A Note for Visitors' },
      { type: 'paragraph', text: 'You will see canang placed directly on the ground. Take care never to step on or over them, and never move one for a photo. A little awareness goes a long way in showing respect for a living daily ritual.' },
    ],
  },
  {
    id: 2,
    category: 'Arts & Performances',
    title: 'Kecak Dance: From Sanghyang Ritual to the World Stage',
    excerpt:
      'The Kecak dance has its roots in the Sanghyang ritual and is accompanied by the "cak" sound of a choir of hundreds of men. It was popularized by Walter Spies and I Wayan Limbak in the 1930s as a performance for tourists.',
    readTime: 6,
    image: art1,
    content: [
      { type: 'paragraph', text: 'Few performances capture Bali as powerfully as the Kecak. Dozens of men sit in tight concentric circles around a flickering oil lamp, their voices weaving a hypnotic rhythm that needs no instruments at all. Its roots reach back to the Sanghyang, a sacred trance ritual once performed to drive away illness and evil spirits.' },
      { type: 'heading', text: 'The Sound of "Cak"' },
      { type: 'paragraph', text: 'The entire soundtrack is produced by the human voice. A choir, often a hundred strong, chants an interlocking "cak-cak-cak" that rises and falls like waves, while a leader cues changes in tempo. The effect is both meditative and electric.' },
      { type: 'heading', text: 'The Ramayana on Stage' },
      { type: 'paragraph', text: 'Modern Kecak tells the epic of the Ramayana: Prince Rama, his wife Sita, the loyal monkey Hanuman, and the demon king Ravana. This narrative form was developed in the 1930s when artist Walter Spies and dancer I Wayan Limbak reshaped the ritual into a performance that could be shared with visitors.' },
      { type: 'heading', text: 'Where to Watch' },
      { type: 'paragraph', text: 'The most iconic setting is the Uluwatu temple at sunset, where the dance unfolds against a cliff and the open sea. Performances are also held at Tanah Lot, in Ubud, and at the Garuda Wisnu Kencana cultural park.' },
      { type: 'heading', text: 'Watching Respectfully' },
      { type: 'paragraph', text: 'Arrive early for a good seat, silence your phone, and avoid using flash. Although Kecak is now a performance, it carries the dignity of its sacred origins.' },
    ],
  },
  {
    id: 3,
    category: 'Feast',
    title: 'Galungan Day: Victory of Dharma over Adharma',
    excerpt:
      'Galungan is celebrated every 210 days according to the Pawukon calendar. Penjor curved bamboo poles decorated with coconut leaves, fruit, and cloth are installed in front of every house as a symbol of victory.',
    readTime: 6,
    image: feast1,
    content: [
      { type: 'paragraph', text: 'Galungan is one of the most important holy days in Bali, marking the victory of dharma (goodness) over adharma (evil). It falls every 210 days according to the Balinese Pawukon calendar, so its date on the Gregorian calendar shifts each year.' },
      { type: 'heading', text: 'The Penjor' },
      { type: 'paragraph', text: 'In the days before Galungan, tall, gracefully curved bamboo poles called penjor appear in front of nearly every home. Decorated with young coconut leaves, fruit, grain, and cloth, the penjor expresses gratitude for the earth\u2019s abundance and represents the sacred mountain, Gunung Agung.' },
      { type: 'heading', text: 'From Galungan to Kuningan' },
      { type: 'paragraph', text: 'Balinese believe the spirits of ancestors return to visit their families during this period. Prayers and offerings welcome them home. The celebration culminates ten days later in Kuningan, when the ancestral spirits are believed to ascend once more.' },
      { type: 'heading', text: 'What Visitors Should Know' },
      { type: 'paragraph', text: 'Temples and family compounds are especially busy and beautifully decorated. Some shops and warungs may close as families gather. If you visit a temple during this time, dress respectfully with a sarong and sash, and keep a polite distance from those at prayer.' },
    ],
  },
  {
    id: 4,
    category: 'Etiquette & Rules',
    title: 'How to Dress When Visiting a Temple',
    excerpt:
      'All visitors, both domestic and international, are required to wear a kamen (a traditional Balinese sarong) and a shawl upon entering the temple grounds. This is a sign of respect for the gods and ancestors.',
    readTime: 3,
    image: etiquette1,
    content: [
      { type: 'paragraph', text: 'A Balinese temple, or pura, is a living place of worship, not merely a tourist attraction. Dressing correctly is the simplest and most meaningful way to show respect for the gods, the ancestors, and the community that maintains the temple.' },
      { type: 'heading', text: 'The Kamen and Selendang' },
      { type: 'paragraph', text: 'Every visitor must wear a kamen, a traditional sarong that wraps around the waist and covers the legs, secured with a selendang, a sash tied around the waist. The sash symbolises the control of one\u2019s base desires before entering a sacred space.' },
      { type: 'heading', text: 'What to Avoid' },
      {
        type: 'list',
        items: [
          'Bare shoulders, crop tops, or revealing clothing.',
          'Short shorts or skirts above the knee.',
          'Hats or sunglasses worn during prayer.',
          'Standing on or climbing temple structures for photos.',
        ],
      },
      { type: 'heading', text: 'Renting Attire' },
      { type: 'paragraph', text: 'Most major temples provide or rent sarongs and sashes at the entrance, often included in the ticket price, so you do not need to bring your own. When in doubt, follow the lead of local worshippers around you.' },
    ],
  },
  {
    id: 5,
    category: 'History & Heritage',
    title: 'Besakih Temple: The History of the Mother of All Temples',
    excerpt:
      'Located on the slopes of Mount Agung, Besakih Temple is the largest and holiest temple complex in Bali. Estimated to have been built in the 8th century AD, it serves as a major spiritual center for Balinese Hindus.',
    readTime: 7,
    image: history1,
    content: [
      { type: 'paragraph', text: 'Perched on the slopes of Mount Agung, Bali\u2019s highest and most sacred volcano, Pura Besakih is revered as the Mother Temple of the entire island. It is the largest and holiest temple complex in Bali and the spiritual heart of Balinese Hinduism.' },
      { type: 'heading', text: 'A Complex of Many Temples' },
      { type: 'paragraph', text: 'Besakih is not a single building but a vast complex of more than twenty separate temples spread across rising terraces. At its centre stands Pura Penataran Agung, the great central temple, with its dramatic split gates and tiered shrines climbing toward the mountain.' },
      { type: 'heading', text: 'Ancient Origins' },
      { type: 'paragraph', text: 'The site is believed to have been a place of worship since prehistoric times, with the sage Rsi Markandeya often credited in legend with establishing it. Historical foundations are commonly dated to around the 8th century, and the temple later became closely tied to Bali\u2019s royal dynasties.' },
      { type: 'heading', text: 'The 1963 Eruption' },
      { type: 'paragraph', text: 'When Mount Agung erupted violently in 1963, lava flows narrowly spared the temple complex, stopping just short of its grounds. Many Balinese regard this as a powerful sign of the mountain\u2019s sacred protection.' },
      { type: 'heading', text: 'Visiting Today' },
      { type: 'paragraph', text: 'Wear a sarong and sash, and consider hiring a guide from the official temple office to learn the meaning of each courtyard. Be polite but firm with informal touts, and remember that inner sanctums are reserved for worshippers.' },
    ],
  },
  {
    id: 6,
    category: 'Culture & Tradition',
    title: 'Balinese Masks: The Art of Carving the Faces of Gods and Humans',
    excerpt:
      'Balinese masks are not merely ornaments, but sacred media used in ritual dance dramas. Each mask has a unique character representing a figure from Hindu mythology.',
    readTime: 4,
    image: culture2,
    content: [
      { type: 'paragraph', text: 'In Bali, a mask is far more than decoration. Known as topeng, masks are sacred vessels through which spirits, deities, and ancestral characters come to life in ritual dance-dramas that blend storytelling with devotion.' },
      { type: 'heading', text: 'Sacred Versus Performance Masks' },
      { type: 'paragraph', text: 'Some masks are considered tenget, or spiritually charged, and are treated with great reverence, kept in temples and brought out only for ceremonies. Others are made for regular performances, yet even these are crafted with care and intention.' },
      { type: 'heading', text: 'Familiar Characters' },
      { type: 'paragraph', text: 'Among the best known are the Barong, a benevolent lion-like guardian representing good, and Rangda, the fearsome widow-witch who embodies chaos. The Topeng Tua, the gentle old man, is admired for the subtle, lifelike movements a skilled dancer brings to a fixed wooden face.' },
      { type: 'heading', text: 'The Craft' },
      { type: 'paragraph', text: 'Masks are traditionally carved from the soft, sacred wood of the pule tree, often accompanied by offerings and prayers at each stage. The carver must capture not just a face but a living character, a process that can take weeks of patient work.' },
    ],
  },
  {
    id: 7,
    category: 'Etiquette & Rules',
    title: 'Prohibitions and Taboos in the Sacred Temple Area of Bali',
    excerpt:
      'There are several taboos that tourists must adhere to in the temple area. Menstruation, mourning, and revealing clothing are the main reasons for not being allowed to enter.',
    readTime: 4,
    image: etiquette2,
    content: [
      { type: 'paragraph', text: 'Balinese temples are governed by rules of ritual purity that may surprise first-time visitors. Understanding these taboos helps you avoid causing offence and shows genuine respect for a sacred space.' },
      { type: 'heading', text: 'When You Should Not Enter' },
      {
        type: 'list',
        items: [
          'Women who are menstruating are traditionally asked not to enter.',
          'Those who are in a period of mourning after a recent death in the family (a state known as cuntaka).',
          'Anyone with an open or bleeding wound.',
          'New mothers within a certain period after childbirth.',
        ],
      },
      { type: 'heading', text: 'Behaviour Inside the Temple' },
      {
        type: 'list',
        items: [
          'Never stand or sit higher than a priest or the shrines.',
          'Do not point your feet toward shrines or worshippers.',
          'Avoid climbing on gates or statues, even for photographs.',
          'Do not use flash or block worshippers when taking pictures.',
        ],
      },
      { type: 'heading', text: 'Why These Rules Exist' },
      { type: 'paragraph', text: 'These customs stem from the concepts of sebel and cuntaka, states of temporary ritual impurity. They are not meant to exclude anyone unkindly but to preserve the spiritual cleanliness of the temple. Following them is one of the kindest gestures a visitor can make.' },
    ],
  },
  {
    id: 8,
    category: 'Local Wisdom',
    title: 'Subak: A UNESCO World Heritage Rice Field Irrigation System',
    excerpt:
      'Subak is a community-based rice field irrigation system in Bali that is over 1,000 years old. This system incorporates the Tri Hita Karana philosophy and has been recognized by UNESCO as a World Heritage Site since 2012.',
    readTime: 5,
    image: local1,
    content: [
      { type: 'paragraph', text: 'The emerald rice terraces that define the Balinese landscape are not just beautiful, they are the product of a thousand-year-old cooperative irrigation system called subak. In 2012, UNESCO inscribed the subak landscape as a World Heritage Site, recognising it as a living example of sustainable cultural farming.' },
      { type: 'heading', text: 'Tri Hita Karana in Practice' },
      { type: 'paragraph', text: 'Subak is the agricultural embodiment of Tri Hita Karana, the philosophy of harmony between people, nature, and the divine. Water temples sit at key points in the system, where farmers gather to pray, plan, and share the most precious resource of all: water.' },
      { type: 'heading', text: 'How It Works' },
      { type: 'paragraph', text: 'Rather than a top-down authority, subak is a democratic association of farmers who share water from a common source. Decisions about planting schedules and fair water distribution are made collectively and coordinated through the rituals of the water temples, ensuring that even farmers furthest downstream receive their share.' },
      { type: 'heading', text: 'Why It Matters' },
      { type: 'paragraph', text: 'Beyond producing rice, subak sustains community bonds, biodiversity, and a cultural landscape admired around the world. Today it faces pressure from land conversion and tourism, making the preservation of this ancient wisdom more important than ever.' },
    ],
  },
];

// Quick-question yang muncul di chatbot "Bli Darma"
export const CHAT_SUGGESTIONS = [
  'What should not be done in the temple?',
  'When is Galungan 2026?',
  'What is canang sari?',
  'Where is the Kecak dance performed?',
];