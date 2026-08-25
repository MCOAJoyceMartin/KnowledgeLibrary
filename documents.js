/*
 * Knowledge Library manifest
 * =========================================================================
 * This file is the ONLY place you need to edit to add a new card or
 * register a new document. The page (index.html) reads this file and
 * builds itself from it — there's no server and no database.
 *
 * TO ADD A NEW DOCUMENT TO AN EXISTING CARD:
 *   1. Upload the file into that card's folder (see CARDS below for the
 *      folder path, e.g. documents/cms-teams/).
 *   2. Add one object to DOCUMENTS with the matching cardId and the exact
 *      filename you uploaded.
 *
 * TO ADD A NEW CARD (a new topic, e.g. "HR Policies"):
 *   1. Create a new folder under documents/ for it, e.g. documents/hr-policies/
 *   2. Add one object to CARDS below.
 *   3. Add DOCUMENTS entries pointing at files in that new folder.
 * =========================================================================
 */

const CARDS = [
  {
    id: "cms-teams",
    title: "CMS TEAMs",
    description:
      "CMS TEAM (Transforming Episode Accountability Model) reference material — episode tables, qualified SNF lists, and related guidance.",
    folder: "documents/cms-teams/",
  },
  // Add the next card here, e.g.:
  // {
  //   id: "hr-policies",
  //   title: "HR Policies",
  //   description: "Employee handbook and HR policy documents.",
  //   folder: "documents/hr-policies/",
  // },
];

const DOCUMENTS = [
  {
    cardId: "cms-teams",
    title: "SNF 3-Day Waiver Approved List — Q1 2026",
    filename: "2026Q1_SNF3DayWaiverApprovedList.xlsx",
    description:
      "Facilities qualifying for the SNF 3-day rule waiver under TEAM, Q1 2026.",
    dateAdded: "2026-08-25",
  },
  {
    cardId: "cms-teams",
    title: "SNF 3-Day Waiver Approved List — Q2 2026",
    filename: "2026Q2_SNF3DayWaiverApprovedList.xlsx",
    description:
      "Facilities qualifying for the SNF 3-day rule waiver under TEAM, Q2 2026.",
    dateAdded: "2026-08-25",
  },
  {
    cardId: "cms-teams",
    title: "SNF 3-Day Waiver Approved List — Q3 2026",
    filename: "2026Q3_SNF3DayWaiverApprovedList.xlsx",
    description:
      "Facilities qualifying for the SNF 3-day rule waiver under TEAM, Q3 2026 (effective Jul 1 - Sept 30, 2026).",
    dateAdded: "2026-08-25",
  },
  // Participant list not currently in documents/cms-teams/ — add back in
  // once uploaded, e.g.:
  // {
  //   cardId: "cms-teams",
  //   title: "TEAM Participant List — Q2 2026",
  //   filename: "2026q2-team-participant-list-06-23-2026.xlsx",
  //   description: "Hospitals participating in the TEAM bundled-payment model, Q2 2026.",
  //   dateAdded: "2026-08-25",
  // },
];
