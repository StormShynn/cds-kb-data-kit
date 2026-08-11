---
name: I_PRAACCTGDOCSMMRYFEDPYBL
description: "PRA Acctg Document Summary Federal Pybl"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYFEDPYBL')/$value
semantic_en: "PRA Acctg Document Summary Federal Pybl"
tags:
  - IS
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_PRAACCTGDOCSMMRYFEDPYBL

**PRA Acctg Document Summary Federal Pybl**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYFEDPYBL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` |  | |  |  | `CHAR(5)` | Division of Interest (DOI) |
| `Well` |  | |  |  | `CHAR(15)` | Well ID number |
| `WellCompletion` |  | |  |  | `CHAR(5)` | Well Completion Number |
| `PRAContract` |  | |  |  | `CHAR(10)` | Contract Number |
| `VolumeType` |  | |  |  | `CHAR(2)` | Volume Type Code |
| `Product` |  | |  |  | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `PRAOwner` |  | |  |  | `CHAR(10)` | PRA owner |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `GLAccountType` |  | |  |  | `CHAR(2)` | Account Type |
| `PriorPeriodAdjustmentReason` |  | |  |  | `CHAR(2)` | Prior Period Adjustment Reason Code |
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `ProcessingException` |  | |  |  | `CHAR(1)` | ONRR-2014 - Disposition Code |
| `ExceptionReason` |  | |  |  | `CHAR(4)` | ONRR-2014 - Reason Code |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `EnergyUnit` |  | |  |  | `UNIT(3)` | Energy Unit |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `GrossVolInVolUnit` |  | |  |  | `QUAN(13)` | Total Gross Volume |
| `GrossEnergyInEnergyUnit` |  | |  |  | `QUAN(13)` | Gross Energy |
| `GrossAmount` |  | |  |  | `CURR(13)` | Gross value |
| `OwnerNetVolInVolUnit` |  | |  |  | `QUAN(13)` | Owner Net Volume |
| `OwnerEnergyInEnergyUnit` |  | |  |  | `QUAN(13)` | Owner Energy |
| `OwnerGrossAmount` |  | |  |  | `CURR(13)` | Owner Gross Value |
| `OwnerNetAmount` |  | |  |  | `CURR(13)` | Owner Net Value |
