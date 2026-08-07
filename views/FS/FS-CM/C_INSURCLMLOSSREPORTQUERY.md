---
name: C_INSURCLMLOSSREPORTQUERY
description: Loss Triangle
app_component: FS-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMLOSSREPORTQUERY')/$value
semantic_en: Loss Triangle
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CM
  - consumption-view
  - FS-CM
  - metadata-only
---
# C_INSURCLMLOSSREPORTQUERY

**Loss Triangle**

| Property | Value |
|---|---|
| App Component | `FS-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INSURCLMLOSSREPORTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurClmOccrncYear` |  | |  |  | `NUMC(4)` | Year of Claim Date |
| `InsurClmCoverageType` |  | |  |  | `CHAR(10)` | Coverage Type |
| `InsurLineOfBus` |  | |  |  | `CHAR(3)` | Insurance Line of Business |
| `InsurClmType` |  | |  |  | `CHAR(4)` | Internal Claim Type |
| `InsurClmSubclmType` |  | |  |  | `CHAR(4)` | Subclaim Type |
| `InsurClmAuthznGrp` |  | |  |  | `CHAR(4)` | Authorization Group for Claims (VIP) |
| `InsurClm12MnthPaidLossAmt` |  | |  |  | `CURR(15)` | Total Amount in Claim Date Year |
| `InsurClm24MnthPaidLossAmt` |  | |  |  | `CURR(15)` | Total Amount in Claim Date Year and in Next Year |
| `InsurClm36MnthPaidLossAmt` |  | |  |  | `CURR(15)` | Total Amount in Claim Date Year and in Next Two Years |
| `InsurClm48MnthPaidLossAmt` |  | |  |  | `CURR(15)` | Total Amount in Claim Date Year and in Next Three Years |
| `InsurClm60MnthPaidLossAmt` |  | |  |  | `CURR(15)` | Total Amount in Claim Date Year and in Next Four Years |
