import { defineCollection, z } from "astro:content";

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    participants: z.union([z.number(), z.array(z.string())]).optional(),
    winner: z.string().optional(),
    type: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const members = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    name: z.string(),
    join_date: z.date(),
    handicap: z.number().optional(),
    status: z.string(),
    type: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const courses = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    name: z.string().optional(),
    course_name: z.string().optional(),
    location: z.string().optional(),
    holes: z.number(),
    par: z.number(),
    length: z.union([z.number(), z.string()]).optional(),
    length_yards: z.number().optional(),
    course_type: z.string().optional(),
    designer: z.string().optional(),
    established: z.number(),
    type: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const pricing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number().optional(),
    effective_date: z.date().optional(),
    type: z.string(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const membership = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string(),
    categories: z.array(z.string()).optional(),
    year: z.number().optional(),
    bar_card_credit: z.number().optional(),
    casc_fee: z.number().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const history = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    founded: z.number().optional(),
    type: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const facilities = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string(),
    capacity: z.number().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const societies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    min_players: z.number().optional(),
    pricing_from: z.number().optional(),
    pricing_to: z.number().optional(),
    contact_phone: z.string().optional(),
    type: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const staff = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    name: z.string().optional(),
    position: z.string().optional(),
    phone: z.string().optional(),
    services: z.array(z.string()).optional(),
    type: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const visitors = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    booking_phone: z.string().optional(),
    green_fees_summer: z.string().optional(),
    green_fees_winter: z.string().optional(),
    buggy_hire: z.number().optional(),
    type: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const playCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.string(),
    tags: z.array(z.string()).optional(),
    equipment: z.object({
      simulator_model: z.string(),
      quantity: z.number(),
      software: z.string(),
      location: z.string(),
    }),
    features: z.array(z.string()),
    pricing: z.object({
      duration_guide: z.string(),
      max_players: z.number(),
      booking_info: z.string(),
    }),
    facilities: z.object({
      parking: z.boolean(),
      changing_rooms: z.boolean(),
      toilets: z.boolean(),
      bar_distance: z.string(),
      food_available: z.boolean(),
    }),
    booking: z.object({
      payment_method: z.string(),
      contact_email: z.string(),
      contact_phone: z.string(),
      operating_hours: z.string(),
    }),
    rules: z.array(z.string()),
  }),
});

export const collections = {
  events,
  members,
  courses,
  pricing,
  membership,
  history,
  facilities,
  societies,
  staff,
  visitors,
  docs,
  play: playCollection,
};
