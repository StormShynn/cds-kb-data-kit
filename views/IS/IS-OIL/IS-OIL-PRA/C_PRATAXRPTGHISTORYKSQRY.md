---
name: C_PRATAXRPTGHISTORYKSQRY
description: PRA Tax Reporting History Kansas Query
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYKSQRY')/$value
semantic_en: PRA Tax Reporting History Kansas Query
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# C_PRATAXRPTGHISTORYKSQRY

**PRA Tax Reporting History Kansas Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTORYKSQRY')/$value) |

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
| `TaxRptgRvslOrBkgOrAdjmt` | `CHAR(1)` | Reversal/Booking/Adjustment |
| `TaxExmpCertNmbr` | `CHAR(3)` | Exemption Certificate Number |
| `ValuationDocumentNumber` | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` | `NUMC(4)` | Document year |
| `OperatorOrPurchaserCode` | `CHAR(1)` | Tax Reporting: Kansas Operator and Purchaser Indicators |
| `UnitJointVenture` | `CHAR(6)` | Unit Venture |
| `HasSeveranceTaxPaytOblgn` | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `CompanyCodeCurrency` | `CUKY(5)` | Currency Key |
| `BaseUnit` | `UNIT(3)` | Measurement unit |
| `ReportingAgencyLease` | `CHAR(7)` | Kansas Lease Number |
| `TaxExemptCode` | `CHAR(1)` | Tax Reporting - Kansas Exemption |
| `CreatedByUser` | `CHAR(12)` | Created By |
| `CreationDateTime` | `DEC(15)` | Created On Timestamp |
| `GrossVolInBaseUnit` | `DEC(13)` | Gross Volume |
| `GrossValInCoCodeCrcy` | `CURR(11)` | Gross Value |
| `TaxableVolInBaseUnit` | `DEC(13)` | Taxable Volume |
| `TaxableValInCoCodeCrcy` | `CURR(11)` | Taxable Value |
| `WetGasLessResidueGasVolInMCF` | `DEC(13)` | Tax 2.0 Kansas Wetgas Less Residue |
| `TaxExmptValInCoCodeCrcy` | `CURR(11)` | Exempt Value |
| `TaxExmptVolInBaseUnit` | `DEC(13)` | Exempt Volume |
| `TaxAssmtValInCoCodeCrcy` | `CURR(11)` | KCC Assessment Value |
| `SeveranceTaxAmtInCoCodeCrcy` | `CURR(11)` | Taxable Liability |
| `MktgCostInCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` | `CURR(11)` | Marketing Cost Reimbursement |
| `TaxReimbmtAmtInCoCodeCrcy` | `CURR(11)` | Tax Reimbursement |
| `Country` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` | `CHAR(2)` | Primary Geographical Location |
