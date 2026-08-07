---
name: I_PRATAXRPTGHISTCOCONSVN
description: "Production Revenue Accounting Tax Reporting History CO Conservation"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTCOCONSVN')/$value
semantic_en: "Production Revenue Accounting Tax Reporting History CO Conservation"
tags:
  - IS
  - account
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
  - metadata-only
---
# I_PRATAXRPTGHISTCOCONSVN

**Production Revenue Accounting Tax Reporting History CO Conservation**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTCOCONSVN')/$value) |

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
| `TaxClassification` |  | |  |  | `CHAR(4)` | Tax Class |
| `TaxRptgRvslOrBkgOrAdjmt` |  | |  |  | `CHAR(1)` | Reversal/Booking/Adjustment |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Unit Venture |
| `ProducerOrPurchaserCode` |  | |  |  | `CHAR(1)` | Producer or Purchaser |
| `ProducerOrPurchaserNmbr` |  | |  |  | `CHAR(10)` | Customer / Vendor Number |
| `HasSeveranceTaxPaytOblgn` |  | |  |  | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  |  | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `RejectedOrSuspendedType` |  | |  |  | `CHAR(1)` | Rejection-Suspension Status |
| `RejectionReason` |  | |  |  | `CHAR(2)` | Tax 2.0 CO - Reject Code |
| `TaxPayerIDByAgency` |  | |  |  | `NUMC(6)` | OGCC Payor |
| `ProductCodeByAgency` |  | |  |  | `CHAR(1)` | Product Cd |
| `TaxRate` |  | |  |  | `DEC(7)` | Levy Rate |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `ChangedDateTime` |  | |  |  | `DEC(15)` | Changed On Timestamp |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` |  | |  |  | `CHAR(32)` | Source Transaction ID |
| `GrossVolInBaseUnit` |  | |  |  | `QUAN(13)` | Total Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  |  | `CURR(13)` | Gross value |
| `TaxExmptVal1InCoCdCrcy` |  | |  |  | `CURR(11)` | Charitable exempt value |
| `TaxExmptVal2InCoCdCrcy` |  | |  |  | `CURR(11)` | Federal entity exempt value |
| `TaxExmptVal3InCoCdCrcy` |  | |  |  | `CURR(11)` | US Indian exempt value |
| `TaxExmptVal4InCoCdCrcy` |  | |  |  | `CURR(11)` | State entity exempt value |
| `TaxExmptVal5InCoCdCrcy` |  | |  |  | `CURR(11)` | Other entity exempt value |
| `WetGasLessResidueGasVolInMCF` |  | |  |  | `QUAN(13)` | Wet-less-residue volume |
| `TaxExmptVolInBaseUnit` |  | |  |  | `QUAN(13)` | Exempt Volume |
| `TaxableVolInBaseUnit` |  | |  |  | `QUAN(13)` | Taxable Volume |
| `MktgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `FixedMktgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Fixed Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost Reimbursement |
| `TaxableValInCoCodeCrcy` |  | |  |  | `CURR(13)` | Taxable Value |
| `ConservationTaxAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Conservation Tax Amount |
