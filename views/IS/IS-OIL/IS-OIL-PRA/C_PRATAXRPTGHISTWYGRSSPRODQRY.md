---
name: C_PRATAXRPTGHISTWYGRSSPRODQRY
description: PRA Tax Reporting History WY Gross Product Query
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTWYGRSSPRODQRY')/$value
semantic_en: PRA Tax Reporting History WY Gross Product Query
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - product
  - metadata-only
---
# C_PRATAXRPTGHISTWYGRSSPRODQRY

**PRA Tax Reporting History WY Gross Product Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTWYGRSSPRODQRY')/$value) |

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
| `TaxTransacFormType` |  | |  |  | `CHAR(1)` | Tax 2.0 - Original / Amended / Unknown Indicator |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  |  | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  |  | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ReturnedProductRatio` |  | |  |  | `DEC(6)` | Percent Returned to Lease |
| `County` |  | |  |  | `CHAR(3)` | Tax 2.0 - Wyoming County Identifier |
| `APIWellNumber` |  | |  |  | `CHAR(5)` | Tax 2.0 - Wyoming API Well Number |
| `WyomingTaxRptgSideTrackNmbr` |  | |  |  | `CHAR(2)` | Tax 2.0 - Wyoming Side Track Number |
| `Reservoir` |  | |  |  | `CHAR(3)` | Tax 2.0 - Wyoming Reservoir |
| `TaxRptgGroupNumber` |  | |  |  | `CHAR(5)` | Tax 2.0 - Wyoming Report Group Number |
| `GeologicField` |  | |  |  | `CHAR(35)` | Tax 2.0 - Wyoming Field Name |
| `AgencyLeaseOrUnitName` |  | |  |  | `CHAR(35)` | Tax 2.0 - Wyoming Lease Unit Name / API |
| `EntityIsCompanyOperated` |  | |  |  | `CHAR(1)` | Tax 2.0 - Operated Flag |
| `District` |  | |  |  | `NUMC(4)` | Tax 2.0 - Wyoming Tax District |
| `MasterDataRecordingLvl` |  | |  |  | `CHAR(1)` | Texas Master Data Level |
| `OperatorIDByAgency` |  | |  |  | `CHAR(4)` | Tax 2.0 - Wyoming Operator ID |
| `TaxCode` |  | |  |  | `CHAR(3)` | Tax 2.0 - Wyoming Rate Code |
| `ProductType` |  | |  |  | `CHAR(1)` | Oil and Gas Indicator |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `Plant` |  | |  |  | `CHAR(3)` | Tax 2.0 - Wyoming Plant Code |
| `GrossVolInBaseUnit` |  | |  |  | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Gross Value |
| `TaxableValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Taxable Value |
| `TaxExmptVal1InCoCdCrcy` |  | |  |  | `CURR(11)` | Exempt Value |
| `TaxExmptVal2InCoCdCrcy` |  | |  |  | `CURR(11)` | Exempt Value |
| `TaxExmptVal3InCoCdCrcy` |  | |  |  | `CURR(11)` | Exempt Value |
| `TaxExmptVal4InCoCdCrcy` |  | |  |  | `CURR(11)` | Exempt Value |
| `TaxExmptVal5InCoCdCrcy` |  | |  |  | `CURR(11)` | Exempt Value |
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
| `SeveranceTaxAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Severance Tax Amount |
| `ArapahoTribeTaxAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Wyoming Shoshone Arapaho Tax Amount |
| `AdValoremTaxAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Wyoming Ad Valorem Tax Amount |
| `TaxPrevPaidAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Previous Tax Paid |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax Reimbursement |
| `WetGasLessResidueGasVolInMCF` |  | |  |  | `DEC(12)` | Tax 2.0 - Wet Less Residue Volume (MCF) |
| `GrossSalesVolInBaseUnit` |  | |  |  | `DEC(12)` | Tax 2.0 - Wyoming Before Lease Plant Split Gross Volume |
| `GrossSalesValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Wyoming Before Lease Plant Split Gross Value |
| `TaxProcgAllwncAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 - Wyoming Plant Processing Allowance |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
