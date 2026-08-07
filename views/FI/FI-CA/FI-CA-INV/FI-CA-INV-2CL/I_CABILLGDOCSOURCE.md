---
name: I_CABILLGDOCSOURCE
description: Source Item of Billing Document
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCSOURCE')/$value
semantic_en: Source Item of Billing Document
tags:
  - FI
  - billing
  - bo:billingdocument
  - component:FI-CA-INV-2CL
  - document
  - FI-CA
  - FI-CA-INV
  - FI-CA-INV-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - metadata-only
---
# I_CABILLGDOCSOURCE

**Source Item of Billing Document**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCSOURCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgDocument` |  | |  |  | `CHAR(12)` | Number of Billing Document |
| `CABillgDocSourceItem` |  | |  |  | `NUMC(8)` | Sequence Number of Source Item |
| `CABillgGroupingSourceItems` |  | |  |  | `CHAR(8)` | Grouping of Source Items |
| `CABillgRecordType` |  | |  |  | `CHAR(2)` | Record Type in Billing Document |
| `CABillgIsDocumentSimulated` |  | |  |  | `CHAR(1)` | Billing Document Is Simulated |
| `CABillgDocCreationDate` |  | |  |  | `DATS(8)` | Date on Which Billing Document Was Created |
| `CACnsmpnItmClass` |  | |  |  | `CHAR(4)` | Consumption Item Class |
| `CABllbleItmClass` |  | |  |  | `CHAR(4)` | Billable Item Class |
| `CABllbleItmStatus` |  | |  |  | `CHAR(1)` | Status of Billable Item |
| `CABllbleItmRecordType` |  | |  |  | `CHAR(2)` | Record Type of Billable Item |
| `CABllbleItmDatabaseTable` |  | |  |  | `CHAR(16)` | Billable Item Database Table |
| `CABillgGroupingBillableItem` |  | |  |  | `NUMC(8)` | Grouping of Billable Items in Billing Document |
| `CABillgSubprocess` |  | |  |  | `CHAR(4)` | Subprocess of Billing |
| `CABllbleItmType` |  | |  |  | `CHAR(4)` | Type of Billable Item |
| `CABllbleItmSourceTransType` |  | |  |  | `CHAR(5)` | Source Transaction Type |
| `CABillgSourceTransRefType` |  | |  |  | `CHAR(1)` | Type of Reference to Source Transaction in Billing Document |
| `CABillgSourceTransRef` |  | |  |  | `CHAR(22)` | Reference to Source Transaction in Billing Document |
| `CABllbleItmPrimary` |  | |  |  | `CHAR(1)` | Primary Billable Item |
| `CABllbleItmPrimaryType` |  | |  |  | `CHAR(2)` | Type of Relationship to Primary Item |
| `CABllbleItmOriginMonth` |  | |  |  | `NUMC(6)` | Month of Origin of Billable Item |
| `CABllbleItmCreationMonth` |  | |  |  | `NUMC(6)` | Month in Which Billable Item Was Created |
| `CABllbleItmAmount` |  | |  |  | `CURR(13)` | Amount of Billable Item |
| `CABllbleItmCurrency` |  | |  |  | `CUKY(5)` | Currency of Billable Item |
| `CABllbleItmNumber` |  | |  |  | `INT4(10)` | Number of Billable Items |
