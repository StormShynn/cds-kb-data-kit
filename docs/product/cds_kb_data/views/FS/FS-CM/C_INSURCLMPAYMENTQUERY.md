---
name: C_INSURCLMPAYMENTQUERY
description: "Claim Payments"
app_component: FS-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMPAYMENTQUERY')/$value
semantic_en: "Claim Payments"
tags:
  - FS
  - claim
  - component:FS-CM
  - consumption-view
  - FS-CM
  - payment
  - metadata-only
---
# C_INSURCLMPAYMENTQUERY

**Claim Payments**

| Property | Value |
|---|---|
| App Component | `FS-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMPAYMENTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsuranceClaim` |  | |  |  | `CHAR(17)` | Number of Claim |
| `InsurBnftType` |  | |  |  | `CHAR(10)` | Benefit Type |
| `InsurClmPaytAmt` |  | |  |  | `CURR(15)` | Payment Amount |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `InsurClmPaymentCurrency` |  | |  |  | `CUKY(5)` | Claim Payment Currency |
| `InsurClmCoverageType` |  | |  |  | `CHAR(10)` | Coverage Type |
| `InsurClmPaytCat` |  | |  |  | `CHAR(1)` | Record Type of Payment |
| `InsurClmPaytPostgDte` |  | |  |  | `DATS(8)` | Posting Date |
| `InsurClmPaytPostgYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `InsurClmPaytPostgQtr` |  | |  |  | `NUMC(5)` | Year Quarter |
| `InsurClmPaytPostgMnth` |  | |  |  | `NUMC(6)` | Year Month |
| `InsurClmLossExpnType` |  | |  |  | `CHAR(1)` | Losses or Expenses |
| `InsurLineOfBus` |  | |  |  | `CHAR(3)` | Insurance Line of Business |
| `InsurClmType` |  | |  |  | `CHAR(4)` | Internal Claim Type |
| `InsurClmAuthznGrp` |  | |  |  | `CHAR(4)` | Authorization Group for Claims (VIP) |
| `InsurClmLifeCycSts` |  | |  |  | `CHAR(2)` | Status of Claim |
| `InsurClmSubclmType` |  | |  |  | `CHAR(4)` | Subclaim Type |
| `InsuranceContract` |  | |  |  | `CHAR(17)` | Contract Number |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit |
| `ParentOrganizationalUnit` |  | |  |  | `NUMC(8)` | Higher-Level Organizational Unit |
