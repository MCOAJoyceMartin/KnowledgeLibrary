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
  {
    cardId: "cms-teams",
    title: "TEAM Participant List — Q2 2026",
    filename: "2026q2-team-participant-list-06-23-2026.xlsx",
    description:
      "Mandatory/voluntary hospital participants in the TEAM bundled-payment model, as of 4/15/2026. Albuquerque, NM rows highlighted blue; no Dallas-Fort Worth hospitals currently appear on the list.",
    dateAdded: "2026-08-26",
  },
];

/*
 * Facility eligibility summary — shown at the top of a card's detail view.
 * Checked by hand against the current quarter's approved list each time a
 * new one is uploaded (see DOCUMENTS above). "activeInTeam" reflects which
 * of these facilities are in a state where TEAM is currently mandatory
 * (per Joyce: the NM facilities) — it is NOT the same as being on the SNF
 * 3-day waiver list, which any qualifying facility nationwide can be on.
 *
 * TO UPDATE EACH QUARTER:
 *   1. Open the new quarter's approved-list spreadsheet.
 *   2. For each CCN below, look up whether it's on the list; update
 *      waiverEligible, name/city/state (facility names or locations can
 *      change), and the quarter/effectivePeriod/lastChecked fields.
 */
const FACILITY_SUMMARY = {
  cardId: "cms-teams",
  quarter: "Q3 2026",
  effectivePeriod: "Jul 1 - Sept 30, 2026",
  sourceDocument: "SNF 3-Day Waiver Approved List — Q3 2026",
  lastChecked: "2026-08-25",
  facilities: [
    { ccn: "676407", name: "Pure Health Transitional Care at THR Arlington", city: "Arlington", state: "TX", activeInTeam: false, waiverEligible: false },
    { ccn: "455627", name: "Denton Village by PureHealth", city: "Denton", state: "TX", activeInTeam: false, waiverEligible: true },
    { ccn: "676420", name: "The Brightpointe", city: "Conroe", state: "TX", activeInTeam: false, waiverEligible: true },
    { ccn: "676410", name: "Pure Health Transitional Care at Texas Health Pres", city: "Dallas", state: "TX", activeInTeam: false, waiverEligible: true },
    { ccn: "676360", name: "The Shoal", city: "Texas City", state: "TX", activeInTeam: false, waiverEligible: true },
    { ccn: "325126", name: "Las Estancias by Pure Health", city: "Albuquerque", state: "NM", activeInTeam: true, waiverEligible: true },
    { ccn: "325045", name: "Princeton Health & Rehabilitation", city: "Albuquerque", state: "NM", activeInTeam: true, waiverEligible: false },
    { ccn: "325074", name: "Manzano Del Sol by PureHealth", city: "Albuquerque", state: "NM", activeInTeam: true, waiverEligible: true },
    { ccn: "455685", name: "Lake Forest Village by PureHealth", city: "Denton", state: "TX", activeInTeam: false, waiverEligible: true },
  ],
};
