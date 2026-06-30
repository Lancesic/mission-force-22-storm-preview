import {
  BookOpen,
  Church,
  ClipboardList,
  HeartHandshake,
  Home,
  Mail,
  MessageCircle,
  Sparkles,
  Users,
  Video,
  Waves,
} from "lucide-react";

export const contactLinks = {
  schedule: "https://us05web.zoom.us/j/2593213742?pwd=85Itbz4zxe44pfedwT3HCUaVBlLGvw.1",
  phone: "904-439-3559",
  phoneHref: "19044393559",
  email: "lancebradleyadcock@gmail.com",
};

export const resourceLinks = {
  slideShow: "https://bit.ly/JesusCalmsTheStormSlideShow",
  bookSample: "https://bit.ly/MissionForce22BookSample",
  stormKitPdf: "resources/jesus-calms-the-storm-ministry-kit.pdf",
};

export const hero = {
  title: "Saints, I made this to serve kids ministry.",
  subtitle:
    "A quick interactive look at Mission Force 22 and the Jesus Calms the Storm ministry kit.",
};

export const overviewCards = [
  {
    icon: BookOpen,
    title: "Teach",
    text: "Leader guide, lesson flow, Bible story script, and clear truth statements.",
  },
  {
    icon: Sparkles,
    title: "Engage",
    text: "Games, crafts, object lessons, movement moments, and visual story cues.",
  },
  {
    icon: Home,
    title: "Echo Home",
    text: "Parent take-home tools, bedtime rhythm, memory verse practice, and prayer prompts.",
  },
];

export const missionGallery = [
  {
    src: "images/reference/mf22-book-cover.webp",
    title: "Book 1 cover",
    caption: "The Mission Force 22 world opens with story, characters, and a clear ministry theme.",
  },
  {
    src: "images/reference/mf22-character-sheet.webp",
    title: "Character system",
    caption: "Kids meet a team with distinct gifts, values, expressions, poses, and ministry tools.",
  },
  {
    src: "images/reference/mf22-comic-page-1.webp",
    title: "Comic book storytelling",
    caption: "The same mission idea can become visual story pages children want to explore.",
  },
  {
    src: "images/reference/mf22-launch-room.webp",
    title: "Mission environment",
    caption: "A warm, kid-friendly ministry world built around maps, prayer, Scripture, and action.",
  },
  {
    src: "images/reference/mf22-briefcase-explainer.webp",
    title: "Resource kit language",
    caption: "The system turns Bible truth into tangible tools: cards, journals, maps, badges, and prompts.",
  },
];

export const kitCards = [
  {
    title: "Leader Guide",
    text: "A ready-to-use teaching path that keeps the lesson focused and simple.",
    image: "images/reference/leader-guide-preview.webp",
  },
  {
    title: "Interactive Story Cards",
    text: "Visual cues that help kids hear, say, and act out the Bible story.",
    image: "images/reference/story-cards-preview.webp",
  },
  {
    title: "Memory Verse Game",
    text: "A playful way to repeat Mark 4:41 until the truth sticks.",
    image: "images/reference/activity-preview.webp",
  },
  {
    title: "Peace Be Still Movement Game",
    text: "Kids move through the storm and then practice stillness and trust.",
    image: "images/reference/peace-be-still-movement-game.webp",
  },
  {
    title: "Boat Bowl Object Lesson",
    text: "A concrete picture of fear, waves, and Jesus' authority.",
    image: "images/reference/boat-bowl-object-lesson.webp",
  },
  {
    title: "Storm Meter Emotion Check-In",
    text: "A gentle way for kids to name fear and bring it to Jesus.",
    image: "images/reference/storm-meter-graphic.webp",
  },
  {
    title: "Craft",
    text: "A hands-on reminder that Jesus is with them in the storm.",
    image: "images/reference/jesus-coloring-page.webp",
  },
  {
    title: "Worksheets",
    text: "Simple printed activities that reinforce the same truth.",
    image: "images/reference/activity-page-preview.webp",
  },
  {
    title: "Mini Storybook",
    text: "A take-home retelling that helps the lesson travel with the child.",
    image: "images/reference/mini-storybook-preview.webp",
  },
  {
    title: "Parent Take-Home Plan",
    text: "A short home rhythm with verse, prayer, and bedtime conversation.",
    image: "images/reference/today-we-learned.webp",
  },
  {
    title: "Volunteer Guide",
    text: "Quick preparation notes so helpers know the purpose of each moment.",
    image: "images/reference/volunteer-quick-guide.webp",
  },
  {
    title: "Slide Deck Outline",
    text: "A simple visual path for large group or classroom teaching.",
    image: "images/reference/slide-deck-outline.webp",
  },
];

export const kitGallery = [
  {
    src: "images/reference/jesus-calms-the-storm-cover.webp",
    title: "Kit cover",
    caption: "A warm first impression for the ministry kit.",
  },
  {
    src: "images/reference/leader-guide-preview.webp",
    title: "Leader guide",
    caption: "A complete teaching path for leaders.",
  },
  {
    src: "images/reference/story-cards-preview.webp",
    title: "Story cards",
    caption: "Story cues kids can hear, say, and act out.",
  },
  {
    src: "images/reference/parent-take-home-preview.webp",
    title: "Parent take-home",
    caption: "A rhythm that helps parents continue the truth at home.",
  },
  {
    src: "images/reference/activity-preview.webp",
    title: "Memory verse activity",
    caption: "Activities that echo the same Bible story instead of feeling random.",
  },
  {
    src: "images/reference/peace-be-still-movement-game.webp",
    title: "Movement game",
    caption: "Kids act through wind, waves, fear, and calm with the same truth repeated.",
  },
  {
    src: "images/reference/boat-bowl-object-lesson.webp",
    title: "Object lesson",
    caption: "A hands-on boat and water moment helps kids feel the storm becoming still.",
  },
  {
    src: "images/reference/mini-storybook-preview.webp",
    title: "Mini storybook",
    caption: "A small storybook that helps the lesson travel home.",
  },
];

export const echoSteps = [
  ["Hear", "Kids hear Jesus calm the storm from Mark 4:35-41."],
  ["Say", "They repeat the verse: Even the wind and the waves obey him."],
  ["Act", "They move through wind, waves, fear, and calm."],
  ["Make", "They create a reminder tied to the same Bible truth."],
  ["Pray", "They name fear and practice trusting Jesus."],
  ["Take Home", "The truth continues through parent tools and a mini storybook."],
].map(([title, text]) => ({ title, text }));

export const helpCards = [
  {
    icon: Users,
    title: "For kids",
    text: "Helps children remember the Bible story through repeated cues, motions, visuals, and activities.",
  },
  {
    icon: ClipboardList,
    title: "For volunteers",
    text: "Gives leaders a clear, ready-to-use path instead of asking them to invent everything from scratch.",
  },
  {
    icon: HeartHandshake,
    title: "For parents",
    text: "Extends the lesson beyond Sunday with simple take-home tools.",
  },
  {
    icon: Church,
    title: "For the church",
    text: "Turns teaching themes into consistent, beautiful, usable ministry resources.",
  },
];

export const contactActions = [
  {
    icon: Video,
    label: "Join Zoom",
    detail: "Open the Zoom meeting link",
    href: contactLinks.schedule,
    primary: true,
    external: true,
  },
  {
    icon: MessageCircle,
    label: "Text Lance",
    detail: contactLinks.phone,
    href: `sms:${contactLinks.phoneHref}`,
    primary: false,
    external: false,
  },
  {
    icon: Mail,
    label: "Email Lance",
    detail: contactLinks.email,
    href: `mailto:${contactLinks.email}`,
    primary: false,
    external: false,
  },
  {
    icon: Waves,
    label: "Set up a Zoom with Lance",
    detail: "Open the Zoom meeting link",
    href: contactLinks.schedule,
    primary: true,
    external: true,
  },
];
