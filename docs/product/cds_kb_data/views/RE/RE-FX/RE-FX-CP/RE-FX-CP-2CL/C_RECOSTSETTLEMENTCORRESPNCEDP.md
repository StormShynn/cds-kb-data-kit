---
name: C_RECOSTSETTLEMENTCORRESPNCEDP
description: "RE Cost Settlement Email Data Provider"
app_component: RE-FX-CP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECOSTSETTLEMENTCORRESPNCEDP')/$value
semantic_en: "RE Cost Settlement Email Data Provider"
tags:
  - RE
  - component:RE-FX-CP-2CL
  - consumption-view
  - RE-FX
  - RE-FX-CP
  - RE-FX-CP-2CL
  - metadata-only
---
# C_RECOSTSETTLEMENTCORRESPNCEDP

**RE Cost Settlement Email Data Provider**

| Property | Value |
|---|---|
| App Component | `RE-FX-CP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECOSTSETTLEMENTCORRESPNCEDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateProcess` |  | |  |  | `CHAR(16)` | Process ID |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `RealEstateSettlementNumber` |  | |  |  | `CHAR(20)` | Real Estate Settlement Number |
| `RESettlementName` |  | |  |  | `CHAR(60)` | Real Estate Cost Settlement Name |
| `RESettlementPeriodStartDate` |  | |  |  | `DATS(8)` | Start of Cost Settlement |
| `RESettlementPeriodEndDate` |  | |  |  | `DATS(8)` | End of Cost Settlement |
| `RESettlementType` |  | |  |  | `CHAR(1)` | Real Estate Cost Settlement Type |
| `RESettlementTypeText` |  | |  |  | `CHAR(60)` | Real Estate Settlement Type |
| `RESettlementProcedure` |  | |  |  | `CHAR(10)` | Real Estate Settlement Procedure |
| `RESettlementProcedureText` |  | |  |  | `CHAR(30)` | Real Estate Settlement Procedure |
| `REArchitectureObjectName` |  | |  |  | `CHAR(60)` | Real Estate Architecture Object Name |
| `REContractName` |  | |  |  | `CHAR(80)` | Contract Name |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `REContractIntRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
