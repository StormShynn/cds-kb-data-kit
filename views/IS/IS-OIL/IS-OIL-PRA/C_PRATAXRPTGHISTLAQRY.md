---
name: C_PRATAXRPTGHISTLAQRY
description: "Louisiana Tax Reporting History Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTLAQRY')/$value
semantic_en: "Louisiana Tax Reporting History Query"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# C_PRATAXRPTGHISTLAQRY

**Louisiana Tax Reporting History Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRATAXRPTGHISTLAQRY')/$value) |

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
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Unit venture |
| `ProducerOrPurchaserCode` |  | |  |  | `CHAR(1)` | Producer or Purchaser |
| `ProducerOrPurchaserNmbr` |  | |  |  | `CHAR(10)` | Producer/Purchaser Number |
| `HasSeveranceTaxPaytOblgn` |  | |  |  | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  |  | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `ReportingCompany` |  | |  |  | `CHAR(6)` | Tax 2.0 LA - Reporting Company Number |
| `TaxPayerIDByAgency` |  | |  |  | `NUMC(10)` | Tax 2.0 LA - Tax ID |
| `MasterDataRecordingLvl` |  | |  |  | `CHAR(1)` | Texas Master Data Level |
| `ReportingAgencyLease` |  | |  |  | `NUMC(6)` | Tax 2.0 LA - Lease Number |
| `LouisianaCounty` |  | |  |  | `NUMC(2)` | Tax 2.0 LA - Parish |
| `Plant` |  | |  |  | `CHAR(5)` | Tax 2.0 LA - Plant ID |
| `ReportingName` |  | |  |  | `CHAR(38)` | Tax 2.0 LA - Reporting Name |
| `GeologicField` |  | |  |  | `CHAR(4)` | Tax 2.0 LA - Field ID |
| `LouisianaTaxRptgProducerCode` |  | |  |  | `CHAR(6)` | Tax 2.0 LA - Producer Code |
| `EntityIsCompanyOperated` |  | |  |  | `CHAR(1)` | Operated flag |
| `LouisianaTaxRptgPurchaserCode` |  | |  |  | `CHAR(6)` | Tax 2.0 LA - Producer/Transporter Code |
| `LouisianaTaxRptgKind` |  | |  |  | `NUMC(1)` | Tax 2.0 LA - Kind Code |
| `TaxRate` |  | |  |  | `CHAR(2)` | Tax 2.0 LA - Tax Rate Code |
| `IsWellDeepOrHorizontal` |  | |  |  | `CHAR(1)` | Tax 2.0 LA - Deep or Horizontal Well |
| `RejectedOrSuspendedType` |  | |  |  | `CHAR(1)` | Rejection-Suspension Status |
| `RejectionReason` |  | |  |  | `CHAR(2)` | Tax 2.0 LA - Reject Code |
| `PayerCodeByAgency` |  | |  |  | `CHAR(6)` | Tax 2.0 LA - Taxpayer Code |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `ChangedDateTime` |  | |  |  | `DEC(15)` | Changed On Timestamp |
| `GrossVolInBaseUnit` |  | |  |  | `QUAN(13)` | Total Gross Volume |
| `WetGasLessResidueGasVolInMCF` |  | |  |  | `QUAN(13)` | Wet-less-residue volume |
| `TaxExmptVolInBaseUnit` |  | |  |  | `QUAN(13)` | Exempt Volume |
| `TaxableVolInBaseUnit` |  | |  |  | `QUAN(13)` | Taxable Volume |
| `GrossValInCoCodeCrcy` |  | |  |  | `CURR(13)` | Gross value |
| `TaxExmpValInCoCodeCrcy` |  | |  |  | `CURR(13)` | Exempt Value |
| `MktgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `FixedMktgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 LA - Fixed Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost Reimbursement |
| `TaxableValInCoCodeCrcy` |  | |  |  | `CURR(13)` | Taxable Value |
| `SeveranceTaxAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 LA - Severance Tax amount |
| `OilFldRestoreTxAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 LA - Oil Field Restoration Fee |
| `DelinquentTxAmtDueInCoCdCrcy` |  | |  |  | `CURR(11)` | Tax 2.0 LA - Interest |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
