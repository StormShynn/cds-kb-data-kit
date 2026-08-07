---
name: I_PRATAXRPTGHISTORYKANSAS
description: "Production Revenue Accounting Tax Reporting History Kansas"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYKANSAS')/$value
semantic_en: "Production Revenue Accounting Tax Reporting History Kansas"
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
# I_PRATAXRPTGHISTORYKANSAS

**Production Revenue Accounting Tax Reporting History Kansas**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYKANSAS')/$value) |

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
| `TaxExmpCertNmbr` |  | |  |  | `CHAR(3)` | Exemption Certificate Number |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `OperatorOrPurchaserCode` |  | |  |  | `CHAR(1)` | Tax Reporting: Kansas Operator and Purchaser Indicators |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Unit Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  |  | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  |  | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Measurement unit |
| `ReportingAgencyLease` |  | |  |  | `CHAR(7)` | Kansas Lease Number |
| `TaxExemptCode` |  | |  |  | `CHAR(1)` | Tax Reporting - Kansas Exemption |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` |  | |  |  | `CHAR(32)` | Source Transaction ID |
| `GrossVolInBaseUnit` |  | |  |  | `DEC(13)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Gross Value |
| `TaxableVolInBaseUnit` |  | |  |  | `DEC(13)` | Taxable Volume |
| `TaxableValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Taxable Value |
| `TaxExmptVolInBaseUnit` |  | |  |  | `DEC(13)` | Exempt Volume |
| `TaxExmptValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Exempt Value |
| `WetGasLessResidueGasVolInMCF` |  | |  |  | `DEC(13)` | Tax 2.0 Kansas Wetgas Less Residue |
| `TaxAssmtValInCoCodeCrcy` |  | |  |  | `CURR(11)` | KCC Assessment Value |
| `SeveranceTaxAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Taxable Liability |
| `MktgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost Reimbursement |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax Reimbursement |
