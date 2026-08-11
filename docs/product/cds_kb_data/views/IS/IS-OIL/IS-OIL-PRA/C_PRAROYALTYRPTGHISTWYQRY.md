---
name: C_PRAROYALTYRPTGHISTWYQRY
description: "PRA Royalty Reporting History Wyoming Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAROYALTYRPTGHISTWYQRY')/$value
semantic_en: "PRA Royalty Reporting History Wyoming Query"
semantic_vi: "PRA Royalty Reporting History Wyoming Query — CDS view tiêu dùng dựa trên I_PRARoyaltyRptgHistWY."
keywords:
  - "pra"
  - "royalty"
  - "reporting"
  - "history"
  - "wyoming"
  - "query"
  - "company"
  - "code"
  - "sales"
  - "date"
  - "product"
  - "well"
  - "completion"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
---
# C_PRAROYALTYRPTGHISTWYQRY

**PRA Royalty Reporting History Wyoming Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAROYALTYRPTGHISTWYQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `SalesDate` | ✓ | |  |  | `DATS(8)` | Sales Date / Month |
| `Product` | ✓ | |  |  | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `Well` | ✓ | |  |  | `CHAR(15)` | Well ID number |
| `WellCompletion` | ✓ | |  |  | `CHAR(5)` | Well Completion Number |
| `MeasurementPoint` | ✓ | |  |  | `CHAR(20)` | Measurement point number |
| `JointVenture` | ✓ | |  |  | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | ✓ | |  |  | `CHAR(5)` | Division of Interest (DOI) |
| `DeliveryNetwork` | ✓ | |  |  | `CHAR(20)` | Delivery network number |
| `PRAContract` | ✓ | |  |  | `CHAR(10)` | Contract Number |
| `VolumeType` | ✓ | |  |  | `CHAR(2)` | Volume type code |
| `UniqueOwnerReference` | ✓ | |  |  | `CHAR(24)` | Royalty 2.0 - Owner Identifier |
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  |  | `CHAR(1)` | Royalty 2.0 - WY - Reversal/Booking/Reversal Adjustment/Adjs |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `OwnerPaymentStatus` |  | |  |  | `CHAR(2)` | Pay Code |
| `EntityIsCompanyOperated` |  | |  |  | `CHAR(1)` | Royalty 2.0 - WY - Operated Flag |
| `OperatorName` |  | |  |  | `CHAR(38)` | Royalty 2.0 - WY - Operator Name |
| `ReportingAgencyLease` |  | |  |  | `CHAR(15)` | Royalty 2.0 - Wyoming - State Lease Number |
| `ProductionSharingAgreement` |  | |  |  | `CHAR(20)` | Royalty 2.0 - Wyoming - PSA |
| `EntityIsOnlyReported` |  | |  |  | `CHAR(1)` | Royalty 2.0 - WY - Report Only Flag |
| `OverrideOwnerOperatedType` |  | |  |  | `CHAR(1)` | Royalty 2.0 - WY - Override Operated Flag |
| `ReferenceFieldText` |  | |  |  | `CHAR(35)` | Royalty 2.0 - WY - Reference Field |
| `AlternateProdnSharingAgrmt` |  | |  |  | `CHAR(20)` | Royalty 2.0 - Wyoming - Alternate PSA |
| `MasterDataRecordingLvl` |  | |  |  | `CHAR(1)` | Royalty 2.0 - WY - Master Level |
| `AgencyProduct` |  | |  |  | `NUMC(3)` | Royalty 2.0 - Wyoming - Product Code |
| `Company` |  | |  |  | `NUMC(4)` | Royalty 2.0 - Wyoming - Payer Code |
| `AgencyReportType` |  | |  |  | `CHAR(1)` | Royalty 2.0 - WY - Original Report |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `TractAllocToLeaseRatio` |  | |  |  | `DEC(9)` | Royalty 2.0 - Wyoming - Tract Allocation to Lease |
| `RoyaltyRate` |  | |  |  | `DEC(9)` | Royalty 2.0 - Wyoming - Royalty Rate |
| `AllocationPercent` |  | |  |  | `DEC(9)` | Royalty 2.0 - Wyoming - Allocation Percent |
| `CalcTractAllocToLeaseRatio` |  | |  |  | `DEC(9)` | Royalty 2.0 - Wyoming - Calculated Tract Allocation to Lease |
| `GrossVolInBaseUnit` |  | |  |  | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Gross Value |
| `DdctnOrReimbmtAmtInCoCdCrcy` |  | |  |  | `CURR(11)` | Deduction/Reimbursement Amount |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  |  | `CURR(11)` | Tax Reimbursement Amount |
| `TranspMktgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
| `OtherMktgCostInCoCodeCrcy` |  | |  |  | `CURR(11)` | Marketing Cost |
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
| `OwnerGrossValInCoCodeCrcy` |  | |  |  | `CURR(11)` | Royalty 2.0 - WY - Owner Gross Value |
| `NetRevenueInterestRatio` |  | |  |  | `DEC(9)` | Royalty 2.0 - Wyoming - Owner NRI |
| `JournalEntryTransacAmtVal` |  | |  |  | `CURR(11)` | JE Transaction Amount |
| `HeatingValue` |  | |  |  | `DEC(7)` | BTU Quantity |
| `PressureBaseQty` |  | |  |  | `QUAN(13)` | Pressure Base |
| `APIGravityRatio` |  | |  |  | `DEC(6)` | Oil/gas density at standard/base conditions |
| `DisbursementDecimalRatio` |  | |  |  | `DEC(9)` | Owner Disbursement (Balance) Decimal |
| `OwnerEnergyInMMBTU` |  | |  |  | `DEC(12)` | Owner MMBTU |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAROYALTYRPTGHISTWYQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAROYALTYRPTGHISTWYQRY')/$value)*

```abap
@EndUserText.label: 'PRA Royalty Reporting History Wyoming Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVROYRPTGHWY'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRARoyaltyRptgHistWYQry 
  as select from I_PRARoyaltyRptgHistWY
{
      @AnalyticsDetails.query.display: #KEY_TEXT
  key CompanyCode,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.variableSequence: 1
  key SalesDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key Product,
      @AnalyticsDetails.query.display: #KEY
  key Well,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key WellCompletion,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key MeasurementPoint,
  key JointVenture,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key DivisionOfInterest,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key DeliveryNetwork,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key PRAContract,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key VolumeType,
  key UniqueOwnerReference,
      @AnalyticsDetails.query.display: #TEXT
  key TaxRptgRvslOrBkgOrAdjmt,
      UnitJointVenture,
      GLAccount,
      CompanyCodeCurrency,
      OwnerPaymentStatus,
      @AnalyticsDetails.query.display: #TEXT
      EntityIsCompanyOperated,
      OperatorName,
      ReportingAgencyLease,
      ProductionSharingAgreement,
      @AnalyticsDetails.query.display: #TEXT
      EntityIsOnlyReported,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverrideOwnerOperatedType,
      ReferenceFieldText,
      AlternateProdnSharingAgrmt,
      MasterDataRecordingLvl,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AgencyProduct,
      Company,
      AgencyReportType,
      ValuationDocumentNumber,
      ValuationDocumentYear,

      CreatedByUser,
      CreationDateTime,

      @AnalyticsDetails.query.hidden
      TractAllocToLeaseRatio,
      @AnalyticsDetails.query.hidden
      RoyaltyRate,
      @AnalyticsDetails.query.hidden
      AllocationPercent,
      @AnalyticsDetails.query.hidden
      CalcTractAllocToLeaseRatio,
      @AnalyticsDetails.query.hidden
      GrossVolInBaseUnit,
      @AnalyticsDetails.query.axis: #COLUMNS
      GrossValInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      DdctnOrReimbmtAmtInCoCdCrcy,
      @AnalyticsDetails.query.hidden
      TaxReimbmtAmtInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      TranspMktgCostInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      OtherMktgCostInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost01InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost02InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost03InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost04InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost05InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost06InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost07InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost08InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost09InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      MktgCost10InCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      OwnerGrossValInCoCodeCrcy,
      @AnalyticsDetails.query.hidden
      NetRevenueInterestRatio,
      @AnalyticsDetails.query.hidden
      JournalEntryTransacAmtVal,
      @AnalyticsDetails.query.hidden
      HeatingValue,
      @AnalyticsDetails.query.hidden
      PressureBaseQty,
      @AnalyticsDetails.query.hidden
      APIGravityRatio,
      @AnalyticsDetails.query.hidden
      DisbursementDecimalRatio,
      @AnalyticsDetails.query.hidden
      OwnerEnergyInMMBTU
      }
```
