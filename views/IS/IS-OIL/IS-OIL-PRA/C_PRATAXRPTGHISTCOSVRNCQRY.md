---
name: C_PRATAXRPTGHISTCOSVRNCQRY
description: "PRA Tax Rptg Hist Colorado Severance Qry"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTCOSVRNCQRY')/$value
semantic_en: "PRA Tax Rptg Hist Colorado Severance Qry"
tags:
  - IS
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# C_PRATAXRPTGHISTCOSVRNCQRY

**PRA Tax Rptg Hist Colorado Severance Qry**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTCOSVRNCQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `Product` |  | |  |  | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `Well` |  | |  |  | `CHAR(15)` | Well ID number |
| `WellCompletion` |  | |  |  | `CHAR(5)` | Well Completion Number |
| `MeasurementPoint` |  | |  |  | `CHAR(20)` | Measurement point number |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` |  | |  |  | `CHAR(5)` | Division of Interest (DOI) |
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `PRAContract` |  | |  |  | `CHAR(10)` | Contract Number |
| `VolumeType` |  | |  |  | `CHAR(2)` | Volume type code |
| `PRAOwner` |  | |  |  | `CHAR(14)` | Tax 2.0 CO - Owner Identifier |
| `TaxRptgRvslOrBkgOrAdjmt` |  | |  |  | `CHAR(1)` | Reversal/Booking/Adjustment |
| `FiscalPeriod` |  | |  |  | `ACCP(6)` | Tax 2.0 CO - Accounting Period |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `EntityIsTaxExempt` |  | |  |  | `CHAR(1)` | Tax 2.0 CO - Exempt Flag |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `NetRevenueInterestRatio` |  | |  |  | `CHAR(10)` | Tax 2.0 CO - Net Revenue Interest percent |
| `RevenueProcessCode` |  | |  |  | `CHAR(2)` | Revenue Process Code |
| `RejectedOrSuspendedType` |  | |  |  | `CHAR(1)` | Rejection-Suspension Status |
| `RejectionReason` |  | |  |  | `CHAR(2)` | Tax 2.0 CO - Reject Code |
| `ColoradoAccountNumber` |  | |  |  | `CHAR(10)` | Tax 2.0 CO Sev - Colorado Account Number |
| `ProductType` |  | |  |  | `CHAR(1)` | Tax 2.0 CO - Oil/Gas Indicator |
| `SourceOfIncome` |  | |  |  | `CHAR(35)` | Tax 2.0 CO - Source of Income |
| `APIWellNumber` |  | |  |  | `CHAR(12)` | Tax 2.0 CO - API Number |
| `OwnerInterestCategory` |  | |  |  | `CHAR(1)` | Interest Category |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `ChangedDateTime` |  | |  |  | `DEC(15)` | Changed On Timestamp |
| `TransacAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 CO - Transaction Amount |
| `TransacQtyInBaseUnit` |  | |  |  | `DEC(13)` | Tax 2.0 CO - Transaction Quantity |
| `OwnerVolReducnInMCF` |  | |  |  | `QUAN(13)` | Tax 2.0 CO - PVR Amount |
| `MktgCost01InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost02InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 2 |
| `MktgCost03InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 3 |
| `MktgCost04InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 4 |
| `MktgCost05InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 5 |
| `MktgCost06InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 6 |
| `MktgCost07InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 7 |
| `MktgCost08InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 8 |
| `MktgCost09InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 9 |
| `MktgCost10InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost 10 |
| `AdValoremTaxAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 CO - Ad Valorem Tax amount |
| `GrossVolInBaseUnit` |  | |  |  | `QUAN(13)` | Total Gross Volume |
| `TranspCostInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 CO - Transportation Cost |
| `ProcgAndMfgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 CO - Ad Valorem Tax amount |
