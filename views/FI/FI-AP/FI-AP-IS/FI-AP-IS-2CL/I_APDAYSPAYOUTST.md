---
name: I_APDAYSPAYOUTST
description: This CDS view provides you with an insight into the average collection period of your company. It shows the number of days it takes, on average, for your company to collect payables. The result aggregates the payables amount per account (that is, per company code or supplier) and per month. This CDS view provides the prerequisites for answering the following business questions: How long does it take to collect payables?
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APDAYSPAYOUTST')/$value
semantic_en: This CDS view provides you with an insight into the average collection period of your company. It shows the number of days it takes, on average, for your company to collect payables. The result aggregates the payables amount per account (that is, per company code or supplier) and per month. This CDS view provides the prerequisites for answering the following business questions: How long does it take to collect payables?
tags:
  - FI
  - account
  - bo:plant
  - component:FI-AP-IS-2CL
  - FI-AP
  - FI-AP-IS
  - FI-AP-IS-2CL
  - interface-view
  - lob:finance
  - supplier
  - metadata-only
---
# I_APDAYSPAYOUTST

**This CDS view provides you with an insight into the average collection period of your company. It shows the number of days it takes, on average, for your company to collect payables. The result aggregates the payables amount per account (that is, per company code or supplier) and per month. This CDS view provides the prerequisites for answering the following business questions: How long does it take to collect payables?**

| Property | Value |
|---|---|
| App Component | `FI-AP-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APDAYSPAYOUTST')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Supplier` | `CHAR(10)` | Supplier |
| `YearMonth` | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `SupplierCountry` | `CHAR(3)` | Country/Region Key |
| `SupplierRegion` | `CHAR(3)` | Supplier Region |
| `AccountingClerk` | `CHAR(2)` | Accounting Clerk |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `SupplierBasicAuthorizationGrp` | `CHAR(4)` | Supplier Basic Authorization Group |
| `SupplierFinsAuthorizationGrp` | `CHAR(4)` | Authorization Group |
| `WeightedNetAmountInDisplayCrcy` | `CURR(23)` | Weighted Net Amount in Display Currency |
| `AmountInDisplayCurrency` | `CURR(23)` | Amount in Display Currency |
