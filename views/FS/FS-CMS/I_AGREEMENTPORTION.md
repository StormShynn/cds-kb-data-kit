---
name: I_AGREEMENTPORTION
description: Agreement Portion Details
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTION')/$value
semantic_en: Agreement Portion Details
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_AGREEMENTPORTION

**Agreement Portion Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementPortionUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CAG_POR |
| `CollateralAgreementUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CAG |
| `AgreementPortionID` |  | |  |  | `NUMC(4)` | Identification of the Collateral Agreement Portion |
| `AgreementPortionAmount` |  | |  |  | `CURR(17)` | Value of the Collateral Agreement Portion |
| `AgreementPortionAgreementPct` |  | |  |  | `DEC(10)` | Size of Collateral Agreement Portion in Collateral Agreement |
| `AgreementPortionBlockingType` |  | |  |  | `CHAR(2)` | Blocking Category for Collateral Agreement Portion |
| `AgreementPortionBlockingReason` |  | |  |  | `CHAR(6)` | Portion Restriction |
| `AgreementPortionRefAgreementID` |  | |  |  | `CHAR(40)` | Collateral Agreement ID based on another Colateral Agreement |
| `AgreementPortionRankingFactor` |  | |  |  | `NUMC(4)` | Specifies Ranking Ratio for Portion of Collateral Agreement |
| `AgreementPortionRblType` |  | |  |  | `CHAR(2)` | Indicator for Receivable Type |
| `AgreementPortionFileNumber` |  | |  |  | `CHAR(30)` | Serial Number of the Record in a Physical Location |
| `AgreementPortionAssgmtRole` |  | |  |  | `CHAR(2)` | Role in which Collateral Agreement Portion is Assigned |
| `AgreementPortionAssgmtDate` |  | |  |  | `DATS(8)` | Date on which Collateral Agreement Portion is Assignment |
| `AgrmtPortnLndChrIntStrtDte` |  | |  |  | `DATS(8)` | Start Date for Land Charge Interest Calculation |
| `AgreementPortionValidFromDate` |  | |  |  | `DATS(8)` | Date from which Collateral Agreement Portion Stands Valid |
| `AgreementPortionValidToDate` |  | |  |  | `DATS(8)` | Date until which Collateral Agreement Portion Stands Valid |
| `ColltrlAgrmtAssessmentCrcy` |  | |  |  | `CUKY(5)` | Currency of Assessment Value |
