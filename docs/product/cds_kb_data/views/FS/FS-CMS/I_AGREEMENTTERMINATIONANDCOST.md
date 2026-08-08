---
name: I_AGREEMENTTERMINATIONANDCOST
description: "Agreement Termination and Cost Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMINATIONANDCOST')/$value
semantic_en: "Agreement Termination and Cost Details"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_AGREEMENTTERMINATIONANDCOST

**Agreement Termination and Cost Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMINATIONANDCOST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgrmtTerminationAndCostUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CAG_TRMCST |
| `AgreementTermnAndCostLinkUUID` |  | |  |  | `RAW(16)` | Link Guid for table CMS_CAG_TRMCST |
| `AgreementCostType` |  | |  |  | `CHAR(6)` | Cost Type of the Pool Agreement |
| `AgreementCostDueDate` |  | |  |  | `DATS(8)` | Date by which the Compensation Amount must be Paid |
| `AgreementTermnRightType` |  | |  |  | `CHAR(6)` | Termination Right Type |
| `AgreementTerminationReason` |  | |  |  | `CHAR(6)` | Termination Type |
| `AgrmtTerminationPossibleDate` |  | |  |  | `DATS(8)` | First possible date of Termination by business partner |
| `AgreementTerminationNoticeDate` |  | |  |  | `DATS(8)` | Date on which Termination Notice is sent by Business Partner |
| `AgrmtTermnAndCostAmt` |  | |  |  | `CURR(17)` | Amount |
| `AgrmtTermnAndCostCrcy` |  | |  |  | `CUKY(5)` | Currency |
| `AgrmtTermnAndCostFrqcyUnit` |  | |  |  | `CHAR(2)` | The unit for period of  frequency |
| `AgrmtTermnAndCostFrqcyPeriod` |  | |  |  | `NUMC(4)` | Period of  frequency |
