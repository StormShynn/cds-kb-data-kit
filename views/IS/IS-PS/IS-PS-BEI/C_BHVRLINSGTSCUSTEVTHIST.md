---
name: C_BHVRLINSGTSCUSTEVTHIST
description: "Customer Event History"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSCUSTEVTHIST')/$value
semantic_en: "Customer Event History"
tags:
  - IS
  - bo:businesspartner
  - component:IS-PS-BEI
  - consumption-view
  - customer
  - IS-PS
  - IS-PS-BEI
  - metadata-only
---
# C_BHVRLINSGTSCUSTEVTHIST

**Customer Event History**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSCUSTEVTHIST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerEventRecordID` |  | |  |  | `CHAR(70)` |  |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(40)` | Name 1 of organization |
| `BhvrlInsgtsEventNumber` |  | |  |  | `INT2(5)` |  |
| `BhvrlInsgtsEventName` |  | |  |  | `CHAR(60)` | Event Name |
| `BhvrlInsgtsEventCategoryTxt` |  | |  |  | `CHAR(60)` | Event Category Name |
| `CustomerEventStartDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CustomerEventEndDate` |  | |  |  | `DATS(8)` |  |
| `CustomerEventStartDateTime` |  | |  |  | `DEC(15)` |  |
| `CustomerEventEndDateTime` |  | |  |  | `DEC(15)` |  |
| `OpenAmountInLocalCurrency` |  | |  |  | `CURR(13)` |  |
| `ClearedAmountInLocalCurrency` |  | |  |  | `CURR(13)` |  |
| `LocalCurrency` |  | |  |  | `CUKY(5)` |  |
| `BhvrlInsgtsPeriodCode` |  | |  |  | `CHAR(4)` | Key for Period Assignment |
| `BhvrlInsgtsPeriodCodeTxt` |  | |  |  | `CHAR(50)` | Text for Period Key |
| `CustomerEventValue` |  | |  |  | `CHAR(100)` |  |
| `CustomerEventValueTxt` |  | |  |  | `CHAR(100)` |  |
| `BhvrlInsgtsAccountNumber` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `BhvrlInsgtsAccountName` |  | |  |  | `CHAR(35)` | Contract Account Name |
| `BhvrlInsgtsAccountCategory` |  | |  |  | `CHAR(2)` | Contract Account Category |
| `BhvrlInsgtsAccountCategoryTxt` |  | |  |  | `CHAR(50)` | Description of Contract Account Category |
| `BhvrlInsgtsSubAccountNumber` |  | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `BhvrlInsgtsSubAccountName` |  | |  |  | `CHAR(1)` |  |
