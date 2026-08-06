---
name: I_FUND
description: This CDS view provides the master data for a fund, which can be used to answer the following business questions: What is the fund type? What is the frequency of fund?
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUND')/$value
semantic_en: This CDS view provides the master data for a fund, which can be used to answer the following business questions: What is the fund type? What is the frequency of fund?
keywords:
  - Fund
tags:
  - PSM
  - bo:businesspartner
  - component:PSM
  - interface-view
  - master-data
  - metadata-only
---
# I_FUND

**This CDS view provides the master data for a fund, which can be used to answer the following business questions: What is the fund type? What is the frequency of fund?**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUND')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `Fund` | `CHAR(10)` | Fund |
| `Customer` | `CHAR(10)` | Customer Account Number for Fund |
| `ApplicationOfFunds` | `CHAR(16)` | Application of Funds |
| `FundCreatedBy` | `CHAR(12)` | Fund Created by User |
| `FundCreatedAt` | `DATS(8)` | Fund Created on Date |
| `LastChangeUser` | `CHAR(12)` | Fund Last Changed by User |
| `LastChangeDate` | `DATS(8)` | Fund Last Changed on Date |
| `FundAuthznGrp` | `CHAR(10)` | Fund Authorization Group |
| `FundFinMgmtAreaForAuthzn` | `CHAR(4)` | FM Area for Auth Grp for Fund |
| `ValidityStartDate` | `DATS(8)` | Fund Valid From |
| `ValidityEndDate` | `DATS(8)` | Fund Valid To |
| `FundReversalDate` | `DATS(8)` | Fund Reversal Date |
| `FundExpirationDate` | `DATS(8)` | Fund Expiration Date |
| `FundType` | `CHAR(6)` | Fund Type |
| `FundPeriodicity` | `CHAR(10)` | Fund Frequency |
| `FundResponsibleUser` | `CHAR(12)` | Responsible User for Fund |
