---
name: C_INSURCLMSUBCLAIMCOUNTQ
description: "Number of Subclaims"
app_component: FS-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMSUBCLAIMCOUNTQ')/$value
semantic_en: "Number of Subclaims"
tags:
  - FS
  - claim
  - component:FS-CM
  - consumption-view
  - FS-CM
  - metadata-only
---
# C_INSURCLMSUBCLAIMCOUNTQ

**Number of Subclaims**

| Property | Value |
|---|---|
| App Component | `FS-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMSUBCLAIMCOUNTQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsuranceClaim` |  | |  |  | `CHAR(17)` | Number of Claim |
| `InsurClmAuthznGrp` |  | |  |  | `CHAR(4)` | Authorization Group for Claims (VIP) |
| `InsurClmType` |  | |  |  | `CHAR(4)` | Internal Claim Type |
| `InsurLineOfBus` |  | |  |  | `CHAR(3)` | Insurance Line of Business |
| `InsurClmLifeCycSts` |  | |  |  | `CHAR(2)` | Status of Claim |
| `InsurClmCoverageType` |  | |  |  | `CHAR(10)` | Coverage Type |
| `InsurClmSubclmType` |  | |  |  | `CHAR(4)` | Subclaim Type |
| `InsurClmSubclaimPerformerObjID` |  | |  |  | `CHAR(12)` | Claim Handler |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit |
| `ParentOrganizationalUnit` |  | |  |  | `NUMC(8)` | Higher-Level Organizational Unit |
| `NmbrOfOpenInsurClmSubclms` |  | |  |  | `INT4(10)` | Number of Open Subclaims at Start of Period |
| `NmbrOfPndgInsurClmSubclms` |  | |  |  | `INT4(10)` | Number of Open Subclaims at End of Period |
| `NmbrOfReopenedInsurClmSubclms` |  | |  |  | `INT4(10)` | Number of Reopened Subclaims |
| `NmbrOfClsdInsurClmSubclms` |  | |  |  | `INT4(10)` | Number of Closed Subclaims |
| `NmbrOfNewOpenInsurClmSubclms` |  | |  |  | `INT4(10)` | Number of Opened Subclaims |
