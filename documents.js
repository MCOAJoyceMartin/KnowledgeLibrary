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
  // Example entry — delete this once real files are uploaded, or edit it
  // in place to describe the first real document you add.
  // {
  //   cardId: "cms-teams",
  //   title: "TEAM Qualified SNF List — Q3 2026",
  //   filename: "TEAM_Qualified_SNF_List_Q3_2026.pdf",
  //   description:
  //     "CMS's list of facilities qualifying for the SNF 3-day rule waiver, effective Jul 1 - Sept 30 2026.",
  //   dateAdded: "2026-08-25",
  // },
];
