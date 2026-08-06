---
name: C_PRAPAYMENTHEADERQRY
description: PRA Payment Header Query
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPAYMENTHEADERQRY')/$value
semantic_en: PRA Payment Header Query
tags:
  - IS
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
  - metadata-only
---
# C_PRAPAYMENTHEADERQRY

**PRA Payment Header Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPAYMENTHEADERQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ProcessRun` | `NUMC(10)` | Proc 2.0 - Run ID |
| `PaymentReference` | `CHAR(13)` | Check Number |
| `PRAOwner` | `CHAR(10)` | PRA owner |
| `PaymentDate` | `DATS(8)` | Check Date |
| `PaymentType` | `CHAR(1)` | Payment Type |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CheckStatus` | `CHAR(2)` | Payment Processing - Check Status |
| `PaymentStatusDate` | `DATS(8)` | Status Date |
| `PaymentHeaderRejectionRsn` | `CHAR(3)` | Payment Processing - High Level Reject Code |
| `CheckIsOutOfTolerance` | `CHAR(1)` | Payment Processing - Out-Of-Tolerance Flag |
| `CheckIsSentToBank` | `CHAR(1)` | Flag Indicating Sent to Bank |
| `CreatedByUser` | `CHAR(12)` | Created By |
| `CreationDateTime` | `DEC(15)` | Created On Timestamp |
| `CompanyCodeCurrency` | `CUKY(5)` | Currency Key |
| `OwnerNetAmount` | `CURR(13)` | Owner Net Value |
| `VarianceAmount` | `CURR(13)` | Payment Processing - Variance Amount |
| `VarianceRatio` | `DEC(8)` | Payment Processing - Variance Percent |
| `MinimumPaymentAmt` | `CURR(13)` | Payment Processing - Owner Minimum Pay |
| `NumberOfDocuments` | `INT4(10)` | Number of Documents |
