---
name: C_PRAROYALTYRPTGHISTWYQRY
description: PRA Royalty Reporting History Wyoming Query
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAROYALTYRPTGHISTWYQRY')/$value
semantic_en: PRA Royalty Reporting History Wyoming Query
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# C_PRAROYALTYRPTGHISTWYQRY

**PRA Royalty Reporting History Wyoming Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAROYALTYRPTGHISTWYQRY')/$value) |

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
| `UniqueOwnerReference` | `CHAR(24)` | Royalty 2.0 - Owner Identifier |
| `TaxRptgRvslOrBkgOrAdjmt` | `CHAR(1)` | Royalty 2.0 - WY - Reversal/Booking/Reversal Adjustment/Adjs |
| `UnitJointVenture` | `CHAR(6)` | Joint Venture |
| `GLAccount` | `CHAR(10)` | G/L Account Number |
| `CompanyCodeCurrency` | `CUKY(5)` | Currency Key |
| `OwnerPaymentStatus` | `CHAR(2)` | Pay Code |
| `EntityIsCompanyOperated` | `CHAR(1)` | Royalty 2.0 - WY - Operated Flag |
| `OperatorName` | `CHAR(38)` | Royalty 2.0 - WY - Operator Name |
| `ReportingAgencyLease` | `CHAR(15)` | Royalty 2.0 - Wyoming - State Lease Number |
| `ProductionSharingAgreement` | `CHAR(20)` | Royalty 2.0 - Wyoming - PSA |
| `EntityIsOnlyReported` | `CHAR(1)` | Royalty 2.0 - WY - Report Only Flag |
| `OverrideOwnerOperatedType` | `CHAR(1)` | Royalty 2.0 - WY - Override Operated Flag |
| `ReferenceFieldText` | `CHAR(35)` | Royalty 2.0 - WY - Reference Field |
| `AlternateProdnSharingAgrmt` | `CHAR(20)` | Royalty 2.0 - Wyoming - Alternate PSA |
| `MasterDataRecordingLvl` | `CHAR(1)` | Royalty 2.0 - WY - Master Level |
| `AgencyProduct` | `NUMC(3)` | Royalty 2.0 - Wyoming - Product Code |
| `Company` | `NUMC(4)` | Royalty 2.0 - Wyoming - Payer Code |
| `AgencyReportType` | `CHAR(1)` | Royalty 2.0 - WY - Original Report |
| `ValuationDocumentNumber` | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` | `NUMC(4)` | Document year |
| `CreatedByUser` | `CHAR(12)` | Created By |
| `CreationDateTime` | `DEC(15)` | Created On Timestamp |
| `TractAllocToLeaseRatio` | `DEC(9)` | Royalty 2.0 - Wyoming - Tract Allocation to Lease |
| `RoyaltyRate` | `DEC(9)` | Royalty 2.0 - Wyoming - Royalty Rate |
| `AllocationPercent` | `DEC(9)` | Royalty 2.0 - Wyoming - Allocation Percent |
| `CalcTractAllocToLeaseRatio` | `DEC(9)` | Royalty 2.0 - Wyoming - Calculated Tract Allocation to Lease |
| `GrossVolInBaseUnit` | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` | `CURR(11)` | Gross Value |
| `DdctnOrReimbmtAmtInCoCdCrcy` | `CURR(11)` | Deduction/Reimbursement Amount |
| `TaxReimbmtAmtInCoCodeCrcy` | `CURR(11)` | Tax Reimbursement Amount |
| `TranspMktgCostInCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `OtherMktgCostInCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `MktgCost01InCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `MktgCost02InCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `MktgCost03InCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `MktgCost04InCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `MktgCost05InCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `MktgCost06InCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `MktgCost07InCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `MktgCost08InCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `MktgCost09InCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `MktgCost10InCoCodeCrcy` | `CURR(11)` | Marketing Cost |
| `OwnerGrossValInCoCodeCrcy` | `CURR(11)` | Royalty 2.0 - WY - Owner Gross Value |
| `NetRevenueInterestRatio` | `DEC(9)` | Royalty 2.0 - Wyoming - Owner NRI |
| `JournalEntryTransacAmtVal` | `CURR(11)` | JE Transaction Amount |
| `HeatingValue` | `DEC(7)` | BTU Quantity |
| `PressureBaseQty` | `QUAN(13)` | Pressure Base |
| `APIGravityRatio` | `DEC(6)` | Oil/gas density at standard/base conditions |
| `DisbursementDecimalRatio` | `DEC(9)` | Owner Disbursement (Balance) Decimal |
| `OwnerEnergyInMMBTU` | `DEC(12)` | Owner MMBTU |
