---
name: I_PRATAXRPTGHISTORYND
description: "Production Revenue Accounting Tax Reporting History North Dakota"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYND')/$value
semantic_en: "Production Revenue Accounting Tax Reporting History North Dakota"
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
# I_PRATAXRPTGHISTORYND

**Production Revenue Accounting Tax Reporting History North Dakota**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYND')/$value) |

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
| `ProducerOrPurchaserCode` |  | |  |  | `CHAR(1)` | Producer or Purchaser |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  |  | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  |  | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `NorthDakotaTaxExmpWellType` |  | |  |  | `CHAR(2)` | Tax 2.0: ND Well Code |
| `NorthDakotaPostalAreaCode` |  | |  |  | `CHAR(4)` | Tax 2.0: ND Posting Code |
| `APIWellNumber` |  | |  |  | `CHAR(8)` | Tax 2.0 ND API Number |
| `APIWellName` |  | |  |  | `CHAR(35)` | Tax 2.0 North Dakota API Name |
| `APIGravityRatio` |  | |  |  | `DEC(3)` | Tax 2.0 : ND Oil Gravity |
| `ProducerOrPurchaserNmbr` |  | |  |  | `CHAR(10)` | Customer / Vendor Number |
| `FederalIDByAgency` |  | |  |  | `NUMC(9)` | Tax 2.0: Federal ID Number |
| `TaxPayerIDByAgency` |  | |  |  | `CHAR(9)` | Tax 2.0 ND Taxpayer Number |
| `Reservoir` |  | |  |  | `CHAR(3)` | Tax 2.0: ND Pool Code |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` |  | |  |  | `CHAR(32)` | Source Transaction ID |
| `OilVolumeInBarrels` |  | |  |  | `DEC(13)` | Tax 2.0 - ND Barrels Of Oil Purchased or Sold |
| `OilValueInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Oil Value Purchased Or Sold |
| `TaxExmpValInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 ND Ex Val Pur/Sold |
| `TaxableOilValInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Oil Taxable Value |
| `ProdnTaxDueAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Production Tax Due |
| `ProdnTxPrevPaidAmtInCoCdCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Tax Previously Paid |
| `ProdnTaxOthPaidAmtInCoCdCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 ND Production Tax Paid By Others |
| `ProdnTaxPaidAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Production Tax Paid By Report |
| `ExtractnTxDueAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Extraction Tax Due |
| `ExtractnTxPrevAmtInCoCdCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Extraction Tax Previously Paid |
| `ExtractnTaxOthAmtInCoCdCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Extraction Tax Paid By Others |
| `ExtractnTaxPaidAmtInCoCdCrcy` |  | |  |  | `CURR(13)` | Tax 2.0 - ND Extraction Tax Paid By Report |
| `AddlValInCoCodeCrcy` |  | |  |  | `CURR(6)` | Tax 2.0 : ND Additional Value |
| `MktgCost01InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost02InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost03InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost04InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost05InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost06InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost07InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost08InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost09InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgCost10InCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost Reimbursement |
