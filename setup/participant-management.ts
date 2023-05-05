/**
 * TODO: I hope to add some scripts in this project that will build pairings and
 *   update tables on the session doc parining tables. For now, this is just an
 *   "idea" and for this first round using this project, I'll likely just pair
 *   folks up manually or whip up a script over here:
 *   https://codesandbox.io/s/boring-sutherland-h6ro2?file=/src/index.js
 *
 *   A script should randomize the mentor and Collabie lists before pairing
 *   so that Collabies don't get paired with the same mentor for everything.
 */

const LINKEDIN_REVIEWER = "linkedin reviewer";
const TECHNICAL_INTERVIEWER = "technical mock interviewer";
const JOB_FIT_INTERVIEWER = "job fit interviewer";

const volunteers = [
  { name: "Stacie Taylor", sessions: [LINKEDIN_REVIEWER] },
  {
    name: "Andrew Hedges",
    sessions: [JOB_FIT_INTERVIEWER, TECHNICAL_INTERVIEWER],
  },
];

const participants = ["Jennifer Toops", "Arvin Fernandez"]
