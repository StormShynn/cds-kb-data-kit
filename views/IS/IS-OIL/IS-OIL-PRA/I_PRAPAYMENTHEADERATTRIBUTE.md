---
name: I_PRAPAYMENTHEADERATTRIBUTE
description: "Production Revenue Accounting Payment Header Attribute"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTHEADERATTRIBUTE')/$value
semantic_en: "Production Revenue Accounting Payment Header Attribute"
tags:
  - IS
  - account
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
  - product
  - metadata-only
---
# I_PRAPAYMENTHEADERATTRIBUTE

**Production Revenue Accounting Payment Header Attribute**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTHEADERATTRIBUTE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessRun` |  | |  |  | `NUMC(10)` | Proc 2.0 - Run ID |
| `PaymentReference` |  | |  |  | `CHAR(13)` | Check Number |
| `PRAOwner` |  | |  |  | `CHAR(10)` | PRA owner |
| `PaymentDate` |  | |  |  | `DATS(8)` | Check Date |
| `PaymentType` |  | |  |  | `CHAR(1)` | Payment Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CheckStatus` |  | |  |  | `CHAR(2)` | Payment Processing - Check Status |
| `PaymentStatusDate` |  | |  |  | `DATS(8)` | Status Date |
| `PaymentHeaderRejectionRsn` |  | |  |  | `CHAR(3)` | Payment Processing - High Level Reject Code |
| `CheckIsOutOfTolerance` |  | |  |  | `CHAR(1)` | Payment Processing - Out-Of-Tolerance Flag |
| `CheckIsSentToBank` |  | |  |  | `CHAR(1)` | Flag Indicating Sent to Bank |
| `OriginTransaction` |  | |  |  | `CHAR(32)` | Source Transaction ID |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
