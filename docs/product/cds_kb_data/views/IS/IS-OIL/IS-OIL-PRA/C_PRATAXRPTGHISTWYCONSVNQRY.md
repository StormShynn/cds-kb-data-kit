---
name: C_PRATAXRPTGHISTWYCONSVNQRY
description: "PRA Tax Rptg Hist Wyoming Consvn Qry"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTWYCONSVNQRY')/$value
semantic_en: "PRA Tax Rptg Hist Wyoming Consvn Qry"
tags:
  - IS
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# C_PRATAXRPTGHISTWYCONSVNQRY

**PRA Tax Rptg Hist Wyoming Consvn Qry**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTWYCONSVNQRY')/$value) |

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
| `TaxRptgRvslOrBkgOrAdjmt` |  | |  |  | `CHAR(1)` | Tax 2.0 - Reversal/Booking/Reversal Adjustment/Adjustment |
| `ProducerOrPurchaserCode` |  | |  |  | `CHAR(1)` | Producer or Purchaser |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  |  | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  |  | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ReturnedProductRatio` |  | |  |  | `DEC(6)` | Percent Returned to Lease |
| `County` |  | |  |  | `CHAR(3)` | Tax 2.0 - Wyoming County Identifier |
| `APIWellNumber` |  | |  |  | `CHAR(5)` | Tax 2.0 - Wyoming API Well Number |
| `WyomingTaxRptgSideTrackNmbr` |  | |  |  | `CHAR(2)` | Tax 2.0 - Wyoming Side Track Number |
| `Reservoir` |  | |  |  | `CHAR(3)` | Tax 2.0 - Wyoming Reservoir |
| `TaxRptgGroupNumber` |  | |  |  | `CHAR(5)` | Tax 2.0 - Wyoming Report Group Number |
| `GeologicFieldName` |  | |  |  | `CHAR(35)` | Tax 2.0 - Wyoming Field Name |
| `AgencyLeaseOrUnitName` |  | |  |  | `CHAR(35)` | Tax 2.0 - Wyoming Lease Unit Name / API |
| `EntityIsCompanyOperated` |  | |  |  | `CHAR(1)` | Tax 2.0 - Operated Flag |
| `District` |  | |  |  | `NUMC(4)` | Tax 2.0 - Wyoming Tax District |
| `MasterDataRecordingLvl` |  | |  |  | `CHAR(1)` | Texas Master Data Level |
| `OperatorIDByAgency` |  | |  |  | `CHAR(4)` | Tax 2.0 - Wyoming Operator ID |
| `Operator` |  | |  |  | `CHAR(10)` | Master Record |
| `OperatorName` |  | |  |  | `CHAR(38)` | Tax 2.0 - Operator Name |
| `Purchaser` |  | |  |  | `CHAR(10)` | Master Record |
| `PurchaserName` |  | |  |  | `CHAR(38)` | Tax 2.0 - Purchaser Name |
| `ProductType` |  | |  |  | `CHAR(1)` | Oil and Gas Indicator |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `GrossVolInBaseUnit` |  | |  |  | `DEC(12)` | Gross Volume |
| `TaxableVolInBaseUnit` |  | |  |  | `DEC(12)` | Taxable Volume |
| `TaxableValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Taxable Value |
| `TaxExmptVolInBaseUnit` |  | |  |  | `DEC(12)` | Exempt Volume |
| `GrossTaxAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax Amount |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax Reimbursement |
| `WetGasLessResidueGasVolInMCF` |  | |  |  | `DEC(12)` | Tax 2.0 - Wet Less Residue Volume (MCF) |
| `GrossSalesVolInBaseUnit` |  | |  |  | `DEC(12)` | Tax 2.0 - Wyoming Before Lease Plant Split Gross Volume |
| `PlantProcgVolInBaseUnit` |  | |  |  | `DEC(12)` | Tax 2.0 - Wyoming Plant Processing Volume |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
