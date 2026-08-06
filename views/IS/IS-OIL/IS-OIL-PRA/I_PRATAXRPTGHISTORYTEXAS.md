---
name: I_PRATAXRPTGHISTORYTEXAS
description: Production Revenue Accounting Tax Reporting History Texas
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYTEXAS')/$value
semantic_en: Production Revenue Accounting Tax Reporting History Texas
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
# I_PRATAXRPTGHISTORYTEXAS

**Production Revenue Accounting Tax Reporting History Texas**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYTEXAS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `SalesDate` | `DATS(8)` | Sales Date / Month |
| `Product` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `Well` | `CHAR(15)` | Well ID number |
| `WellCompletion` | `CHAR(5)` | Well Completion Number |
| `MeasurementPoint` | `CHAR(20)` | Measurement point number |
| `JointVenture` | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | `CHAR(5)` | Division of Interest (DOI) |
| `DeliveryNetwork` | `CHAR(20)` | Delivery network number |
| `PRAContract` | `CHAR(10)` | Contract Number |
| `VolumeType` | `CHAR(2)` | Volume type code |
| `TaxClassification` | `CHAR(4)` | Tax Class |
| `SeveranceTaxType` | `CHAR(2)` | Severance Tax Type |
| `TierTaxType` | `CHAR(1)` | Tier Tax |
| `TaxRptgRvslOrBkgOrAdjmt` | `CHAR(1)` | Reversal/Booking/Adjustment |
| `ProducerOrPurchaserCode` | `CHAR(1)` | Producer or Purchaser |
| `UnitJointVenture` | `CHAR(6)` | Unit Venture |
| `HasSeveranceTaxPaytOblgn` | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `APIWellNumber` | `CHAR(8)` | API Well Number |
| `TexasCounty` | `NUMC(3)` | Texas County Identifier |
| `ReportingAgencyLease` | `CHAR(7)` | Texas Lease Number |
| `OnOrOffLeaseSale` | `CHAR(1)` | Texas On-/Off-Lease Sale Code |
| `MasterDataRecordingLvl` | `CHAR(1)` | Texas Master Data Level |
| `OtherPartyTaxPayerIDByAgency` | `CHAR(11)` | Texas Taxpayer Number of Other Party |
| `ProducerOrPurchaserNmbr` | `CHAR(10)` | Producer/Purchaser |
| `CommodityType` | `CHAR(3)` | Texas Commodity Type |
| `TaxExmpType` | `NUMC(2)` | Texas Exemption Type |
| `TaxPayerIDByAgency` | `NUMC(11)` | Texas Taxpayer Number |
| `TaxPayerName` | `CHAR(100)` | Taxpayer Name |
| `CreatedByUser` | `CHAR(12)` | Created By |
| `CreationDateTime` | `DEC(15)` | Created On Timestamp |
| `NumberOfItems` | `INT4(10)` | Number of Items |
| `Country` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` | `CHAR(32)` | Source Transaction ID |
| `BaseUnit` | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` | `CUKY(5)` | Currency Key |
| `APIGravityRatio` | `DEC(3)` | Gravity |
| `TransacVolInBaseUnit` | `DEC(12)` | Lease Gross Volume |
| `GrossVolInBaseUnit` | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` | `CURR(11)` | Gross Value |
| `TaxableVolInBaseUnit` | `DEC(12)` | Taxable Volume |
| `TaxableValInCoCodeCrcy` | `CURR(11)` | Taxable Value |
| `TaxExmptVolInBaseUnit` | `DEC(12)` | Exempt Volume |
| `TaxExmptValInCoCodeCrcy` | `CURR(11)` | Exempt Value |
| `MktgCostInCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` | `CURR(11)` | Marketing Cost Reimbursement |
| `GrossTaxAmtInCoCodeCrcy` | `CURR(11)` | Tax Amount |
| `TaxReimbmtAmtInCoCodeCrcy` | `CURR(11)` | Tax Reimbursement |
