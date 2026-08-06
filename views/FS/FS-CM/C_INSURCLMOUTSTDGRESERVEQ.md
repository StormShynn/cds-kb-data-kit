---
name: C_INSURCLMOUTSTDGRESERVEQ
description: Outstanding Reserves
app_component: FS-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMOUTSTDGRESERVEQ')/$value
semantic_en: Outstanding Reserves
tags:
  - FS
  - component:FS-CM
  - consumption-view
  - FS-CM
  - metadata-only
---
# C_INSURCLMOUTSTDGRESERVEQ

**Outstanding Reserves**

| Property | Value |
|---|---|
| App Component | `FS-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMOUTSTDGRESERVEQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `InsuranceClaim` | `CHAR(17)` | Number of Claim |
| `InsurClmLossExpnType` | `CHAR(1)` | Losses or Expenses |
| `InsurClmType` | `CHAR(4)` | Internal Claim Type |
| `InsurClmAuthznGrp` | `CHAR(4)` | Authorization Group for Claims (VIP) |
| `InsuranceContract` | `CHAR(17)` | Contract Number |
| `InsurClmLifeCycSts` | `CHAR(2)` | Status of Claim |
| `InsurClmSubclmType` | `CHAR(4)` | Subclaim Type |
| `InsurLineOfBus` | `CHAR(3)` | Insurance Line of Business |
| `InsurClmCoverageType` | `CHAR(10)` | Coverage Type |
| `OrganizationalUnit` | `NUMC(8)` | Organizational Unit |
| `ParentOrganizationalUnit` | `NUMC(8)` | Higher-Level Organizational Unit |
| `InsurClmOutsdngRsrvAmt` | `CURR(15)` | Outstanding Reserve |
| `DisplayCurrency` | `CUKY(5)` |  |
