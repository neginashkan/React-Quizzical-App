import { nanoid } from "nanoid";
const Data = [
  {
    id: nanoid(),
    title: "Category",
    options: [
      { id: nanoid(), name: "Any Category", ariaPressed: true },
      { id: nanoid(), name: "General Knowledge", ariaPressed: false },
      { id: nanoid(), name: "Entertainment: Books", ariaPressed: false },
      { id: nanoid(), name: "Entertainment: Film", ariaPressed: false },
      { id: nanoid(), name: "Entertainment: Music", ariaPressed: false },
      {
        id: nanoid(),
        name: "Entertainment: Musicals & Theatres",
        ariaPressed: false,
      },
      { id: nanoid(), name: "Entertainment: Television", ariaPressed: false },
      { id: nanoid(), name: "Entertainment: Video Games", ariaPressed: false },
      { id: nanoid(), name: "Entertainment: Board Games", ariaPressed: false },
      { id: nanoid(), name: "Science & Nature", ariaPressed: false },
      { id: nanoid(), name: "Science: Computers", ariaPressed: false },
      { id: nanoid(), name: "Science: Mathematics", ariaPressed: false },
      { id: nanoid(), name: "Mythology", ariaPressed: false },
      { id: nanoid(), name: "Sports", ariaPressed: false },
      { id: nanoid(), name: "Geography", ariaPressed: false },
      { id: nanoid(), name: "History", ariaPressed: false },
      { id: nanoid(), name: "Politics", ariaPressed: false },
      { id: nanoid(), name: "Art", ariaPressed: false },
      { id: nanoid(), name: "Celebrities", ariaPressed: false },
      { id: nanoid(), name: "Animals", ariaPressed: false },
      { id: nanoid(), name: "Vehicles", ariaPressed: false },
      { id: nanoid(), name: "Entertainment: Comics", ariaPressed: false },
      { id: nanoid(), name: "Science: Gadgets", ariaPressed: false },
      {
        id: nanoid(),
        name: "Entertainment: Japanese Anime & Manga",
        ariaPressed: false,
      },
      {
        id: nanoid(),
        name: "Entertainment: Cartoon & Animations",
        ariaPressed: false,
      },
    ],
  },
  {
    id: nanoid(),
    title: "Number of Questions",
    options: [
      { id: nanoid(), name: 10, ariaPressed: true },
      { id: nanoid(), name: 20, ariaPressed: false },
      { id: nanoid(), name: 30, ariaPressed: false },
      { id: nanoid(), name: 40, ariaPressed: false },
      { id: nanoid(), name: 50, ariaPressed: false },
    ],
  },
  {
    id: nanoid(),
    title: "Difficulty",
    options: [
      { id: nanoid(), name: "Any Difficulty", ariaPressed: true },
      { id: nanoid(), name: "Easy", ariaPressed: false },
      { id: nanoid(), name: "Medium", ariaPressed: false },
      { id: nanoid(), name: "Hard", ariaPressed: false },
    ],
  },
  {
    id: nanoid(),
    title: "Question Type",
    options: [
      { id: nanoid(), name: "Any Type", ariaPressed: true },
      { id: nanoid(), name: "Multiple", ariaPressed: false },
      { id: nanoid(), name: "Boolean", ariaPressed: false },
    ],
  },
];
export default Data;
