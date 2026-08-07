---
name: C_INSURCLMTOTEXPNDTRQUERY
description: "Total Claim Expenditure"
app_component: FS-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMTOTEXPNDTRQUERY')/$value
semantic_en: "Total Claim Expenditure"
tags:
  - FS
  - claim
  - component:FS-CM
  - consumption-view
  - FS-CM
  - metadata-only
---
# C_INSURCLMTOTEXPNDTRQUERY

**Total Claim Expenditure**

| Property | Value |
|---|---|
| App Component | `FS-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMTOTEXPNDTRQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsuranceClaim` |  | |  |  | `CHAR(17)` | Number of Claim |
| `InsurClmLossExpnType` |  | |  |  | `CHAR(1)` | Losses or Expenses |
| `InsurClmRsrvType` |  | |  |  | `CHAR(2)` | Reserve Type |
| `InsurClmReserveCurrency` |  | |  |  | `CUKY(5)` | Currency of Reserve (Transactn Crcy) |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit |
| `ParentOrganizationalUnit` |  | |  |  | `NUMC(8)` | Higher-Level Organizational Unit |
| `InsurClmType` |  | |  |  | `CHAR(4)` | Internal Claim Type |
| `InsurClmSubclmType` |  | |  |  | `CHAR(4)` | Subclaim Type |
| `InsurClmAuthznGrp` |  | |  |  | `CHAR(4)` | Authorization Group for Claims (VIP) |
| `InsurClmCoverageType` |  | |  |  | `CHAR(10)` | Coverage Type |
| `InsurClmLifeCycSts` |  | |  |  | `CHAR(2)` | Status of Claim |
| `InsuranceContract` |  | |  |  | `CHAR(17)` | Contract Number |
| `InsurLineOfBus` |  | |  |  | `CHAR(3)` | Insurance Line of Business |
| `InsurClmPerformerObjID` |  | |  |  | `CHAR(12)` | Claim Handler |
| `InsurClmDisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `YearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `InsurClmTotExpndtrAmt` |  | |  |  | `CURR(15)` | Total Expenditure in Reserve Currency |
| `GrossReserveAmount` |  | |  |  | `CURR(15)` | Total Expenditure in Display Currency |
