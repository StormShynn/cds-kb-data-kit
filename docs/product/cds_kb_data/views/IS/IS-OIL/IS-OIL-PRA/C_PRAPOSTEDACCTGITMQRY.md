---
name: C_PRAPOSTEDACCTGITMQRY
description: "PRA Posted Accounting Item Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPOSTEDACCTGITMQRY')/$value
semantic_en: "PRA Posted Accounting Item Query"
semantic_vi: "PRA Posted Accounting Item Query — CDS view tiêu dùng dựa trên I_PRAAcctgDocDetail."
keywords:
  - "pra"
  - "posted"
  - "accounting"
  - "item"
  - "query"
  - "company"
  - "code"
  - "fiscal"
  - "period"
  - "document"
  - "booking"
  - "reversal"
  - "type"
tags:
  - IS
  - account
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
---
# C_PRAPOSTEDACCTGITMQRY

**PRA Posted Accounting Item Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPOSTEDACCTGITMQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalPeriod` | ✓ | |  |  | `ACCP(6)` | Fiscal Period |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Revenue Accounting Document Number |
| `AccountingDocumentItem` | ✓ | |  |  | `NUMC(8)` | Accounting Document Line Number |
| `BookingReversalType` |  | |  |  | `CHAR(1)` | Booking/Reversal Indicator |
| `MajorProduct` |  | |  |  | `CHAR(1)` | Major product code |
| `MinorProduct` |  | |  |  | `CHAR(2)` | Minor Product Code |
| `ItemIsRejected` |  | |  |  | `CHAR(1)` | Accounting Document rejection flag |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `GLAccountType` |  | |  |  | `CHAR(2)` | Account Type |
| `AcctDeterminationCategory` |  | |  |  | `CHAR(4)` | Account category code |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` |  | |  |  | `CHAR(5)` | Division of Interest (DOI) |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Unit Venture |
| `Product` |  | |  |  | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `DocumentItemText` |  | |  |  | `CHAR(60)` | PRA Account Documnet Line Item's Description |
| `Well` |  | |  |  | `CHAR(15)` | Well ID number |
| `WellCompletion` |  | |  |  | `CHAR(5)` | Well Completion Number |
| `MeasurementPoint` |  | |  |  | `CHAR(20)` | Measurement point number |
| `PRAContract` |  | |  |  | `CHAR(10)` | Contract Number |
| `VolumeType` |  | |  |  | `CHAR(2)` | Volume Type Code |
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `ProcessingCompanyCode` |  | |  |  | `CHAR(4)` | Processing Company Code |
| `Purchaser` |  | |  |  | `CHAR(10)` | Purchaser Number |
| `PressureBaseQty` |  | |  |  | `QUAN(13)` | Pressure Base |
| `ItemIsSummarizedByProduct` |  | |  |  | `CHAR(1)` | PRA Product Code Summarize Indicator |
| `ItemIsWriteOff` |  | |  |  | `CHAR(1)` | Accounting Document Writeoff flag |
| `ItemIsCleared` |  | |  |  | `CHAR(1)` | Accounting Document Clearing |
| `OriginatingMeasurementPt` |  | |  |  | `CHAR(20)` | Originating Measurement Point Number |
| `AffiliatedCompanyCode` |  | |  |  | `CHAR(4)` | Affiliated Company |
| `TaxClassification` |  | |  |  | `CHAR(4)` | Tax Class |
| `PriorPeriodAdjustmentReason` |  | |  |  | `CHAR(2)` | Adjustment Reason Code |
| `County` |  | |  |  | `CHAR(3)` | County Code |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `RelatedPRAContract` |  | |  |  | `CHAR(10)` | Related contract number |
| `ProductBalancingAgreement` |  | |  |  | `CHAR(10)` | PBA Number |
| `GasPlantJointVenture` |  | |  |  | `CHAR(6)` | Gas Plant Venture |
| `GasPlantDivisionOfInterest` |  | |  |  | `CHAR(5)` | Gasplant DOI No |
| `PRAContractType` |  | |  |  | `CHAR(2)` | Contract Type |
| `Transporter` |  | |  |  | `CHAR(10)` | Transporter number |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Trading Partner |
| `Remitter` |  | |  |  | `CHAR(10)` | Remitter (Customer) |
| `AcctsRblMeasurementPt` |  | |  |  | `CHAR(20)` | AR MP |
| `AccountsReceivableJointVenture` |  | |  |  | `CHAR(6)` | AR Venture |
| `AcctsRblDivisionOfInterest` |  | |  |  | `CHAR(5)` | AR DOI |
| `AlternateProperty` |  | |  |  | `CHAR(18)` | Remitter Property |
| `AlternateProduct` |  | |  |  | `CHAR(3)` | Remitter Product |
| `PaymentReference` |  | |  |  | `CHAR(13)` | Check Number |
| `PaymentDate` |  | |  |  | `DATS(8)` | Check Date |
| `CashReceiptDate` |  | |  |  | `DATS(8)` | Cash Receipt Date |
| `SeveranceTaxType` |  | |  |  | `CHAR(2)` | Severance Tax Type |
| `MarketingType` |  | |  |  | `CHAR(2)` | Marketing type code |
| `ExpenseJointVenture` |  | |  |  | `CHAR(6)` | Expense Property number |
| `ExpenseDivisionOfInterest` |  | |  |  | `CHAR(5)` | Expense DOI Number |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Base Unit of Measure |
| `EnergyUnit` |  | |  |  | `UNIT(3)` | Energy Base Unit Of Measure |
| `HeatingValUnit` |  | |  |  | `UNIT(3)` | Heating Unit Of Measure |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `HeatingValue` |  | |  |  | `QUAN(13)` | Heating value |
| `APIGravityRatio` |  | |  |  | `FLTP(16)` | Oil/gas density at standard/base conditions |
| `DisbursementDecimalRatio` |  | |  |  | `DEC(9)` | Disbursement Decimal |
| `NetRevenueInterestRatio` |  | |  |  | `DEC(9)` | Net Revenue Interest Percent |
| `GrossVolInVolUnit` |  | |  |  | `QUAN(13)` | Total Gross Volume |
| `OwnerNetVolInVolUnit` |  | |  |  | `QUAN(13)` | Owner Net Volume |
| `GrossEnergyInEnergyUnit` |  | |  |  | `QUAN(13)` | Gross Energy |
| `OwnerEnergyInEnergyUnit` |  | |  |  | `QUAN(13)` | Owner Energy |
| `GrossVolReducnInVolUnit` |  | |  |  | `QUAN(13)` | Gross PVR |
| `OwnrVolReducnInVolUnit` |  | |  |  | `QUAN(13)` | Owner PVR |
| `GrossEngyReductionInEngyUnit` |  | |  |  | `QUAN(13)` | Gross PTR |
| `OwnerEnergyReducnInEnergyUnit` |  | |  |  | `QUAN(13)` | Owner PTR |
| `GrossAmount` |  | |  |  | `CURR(13)` | Gross value |
| `OwnerGrossAmount` |  | |  |  | `CURR(13)` | Owner Gross Value |
| `OwnerNetAmount` |  | |  |  | `CURR(13)` | Owner Net Value |
| `PRAOwner` |  | |  |  | `CHAR(10)` | PRA owner |
| `OwnerInterestType` |  | |  |  | `CHAR(2)` | Participant Interest Type |
| `OwnerInterestSequence` |  | |  |  | `CHAR(2)` | Owner Interest Sequence Number |
| `SuspenseReason` |  | |  |  | `CHAR(3)` | Suspense Reason Code |
| `CalculationBasis` |  | |  |  | `CHAR(1)` | Actual / Entitled / Settlement Code |
| `OwnerPaymentStatus` |  | |  |  | `CHAR(2)` | Pay Code |
| `OwnerIsJntIntrstBilgEnabled` |  | |  |  | `CHAR(1)` | Joint Interest Billing Offset Flag |
| `JntIntrstBilgPartner` |  | |  |  | `CHAR(10)` | JIB Partner |
| `PRALegalForm` |  | |  |  | `CHAR(2)` | Entity Code |
| `TaxBasis` |  | |  |  | `CHAR(2)` | Tax Free Code |
| `ItemIsReallocated` |  | |  |  | `CHAR(1)` | Reallocated flag -  results reallocated thru chain-of-title |
| `RefValnDocYear` |  | |  |  | `NUMC(4)` | Reference VL Document Year |
| `RefValnDoc` |  | |  |  | `CHAR(20)` | Reference VL Document Number |
| `RefValnDocItem` |  | |  |  | `NUMC(5)` | Reference VL Document Accounting Line Item |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `NetTaxAmount` |  | |  |  | `CURR(15)` | Line Item Net Tax Amount |
| `NetTaxReimbmtAmt` |  | |  |  | `CURR(15)` | Line Item Net Tax Reimbursement Amount |
| `OtherDeductionAmount` |  | |  |  | `CURR(15)` | Line Other deducts amount |
| `NetInternalMarketingAmt` |  | |  |  | `CURR(15)` | Line Net Marketing Cost - Internal |
| `NetExternalMarketingAmt` |  | |  |  | `CURR(15)` | Line Net Marketing Cost - External |
| `NetReimbmtMarketingAmt` |  | |  |  | `CURR(15)` | Line Net Marketing Cost Reimbursement |
| `NumberOfItems` |  | |  |  | `INT4(10)` | Number of Items |
| `JntIntrstBilgVenture` |  | |  |  | `CHAR(6)` | JIB  Venture |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Equity Type |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Equity Group |
| `RefFiscalPeriod` |  | |  |  | `ACCP(6)` | Fiscal Period |
| `RefAccountingDocument` |  | |  |  | `CHAR(10)` | Revenue Accounting Trace Document Number |
| `RefAccountingDocumentItem` |  | |  |  | `NUMC(8)` | Accounting document trace line number |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `ChangedDateTime` |  | |  |  | `DEC(15)` | Changed On Timestamp |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPOSTEDACCTGITMQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPOSTEDACCTGITMQRY')/$value)*

```abap
@EndUserText.label: 'PRA Posted Accounting Item Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVPOSTEDAIQ'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRAPostedAcctgItmQry
  //  with parameters
  //    @Consumption.hidden: true
  //    @Environment.systemField: #SYSTEM_LANGUAGE
  //    P_Language : sylangu
  as select from I_PRAAcctgDocDetail
{
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 1
      @AnalyticsDetails.query.axis: #ROWS
  key CompanyCode,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 2
      @AnalyticsDetails.query.axis: #COLUMNS
  key FiscalPeriod,
  key AccountingDocument,
  key AccountingDocumentItem,

      @AnalyticsDetails.query.display: #TEXT
      BookingReversalType,
      MajorProduct,
      MinorProduct,
      @AnalyticsDetails.query.display: #TEXT
      ItemIsRejected,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 3
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #KEY_TEXT
      GLAccount,
      @AnalyticsDetails.query.display: #TEXT
      GLAccountType,
      @AnalyticsDetails.query.display: #TEXT
      AcctDeterminationCategory,
      JointVenture,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DivisionOfInterest,
      UnitJointVenture,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Product,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Material,
      DocumentItemText,
      Well,
      @AnalyticsDetails.query.display: #KEY_TEXT
      WellCompletion,
      @AnalyticsDetails.query.display: #KEY_TEXT
      MeasurementPoint,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PRAContract,
      @AnalyticsDetails.query.display: #KEY_TEXT
      VolumeType,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 4
      SalesDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DeliveryNetwork,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CostCenter,
      @AnalyticsDetails.query.display: #TEXT
      Country,
      @AnalyticsDetails.query.display: #TEXT
      PrimaryGeogrlLocation,
      ProcessingCompanyCode,
      @AnalyticsDetails.query.display: #TEXT
      Purchaser,
      @AnalyticsDetails.query.hidden     
      PressureBaseQty,
      @AnalyticsDetails.query.display: #TEXT
      ItemIsSummarizedByProduct,
      @AnalyticsDetails.query.display: #TEXT
      ItemIsWriteOff,
      @AnalyticsDetails.query.display: #TEXT
      ItemIsCleared,
      OriginatingMeasurementPt,
      AffiliatedCompanyCode,
      @AnalyticsDetails.query.display: #TEXT
      TaxClassification,
      @AnalyticsDetails.query.display: #TEXT
      PriorPeriodAdjustmentReason,
      @AnalyticsDetails.query.display: #TEXT
      County,
      @AnalyticsDetails.query.display: #TEXT
      Region,
      RelatedPRAContract,
      ProductBalancingAgreement,
      GasPlantJointVenture,
      GasPlantDivisionOfInterest,
      @AnalyticsDetails.query.display: #TEXT
      PRAContractType,
      @AnalyticsDetails.query.display: #TEXT
      Transporter,
      @AnalyticsDetails.query.display: #TEXT
      PartnerCompany,
      @AnalyticsDetails.query.display: #TEXT
      Remitter,
      AcctsRblMeasurementPt,
      AccountsReceivableJointVenture,
      AcctsRblDivisionOfInterest,
      AlternateProperty,
      AlternateProduct,
      PaymentReference,
      PaymentDate,
      CashReceiptDate,
      @AnalyticsDetails.query.display: #TEXT
      SeveranceTaxType,
      @AnalyticsDetails.query.display: #TEXT
      MarketingType,
      ExpenseJointVenture,
      ExpenseDivisionOfInterest,
      VolumeUnit,
      EnergyUnit,
      HeatingValUnit,
      CompanyCodeCurrency,
      @AnalyticsDetails.query.hidden     
      HeatingValue,
      @AnalyticsDetails.query.hidden     
      APIGravityRatio,
      @AnalyticsDetails.query.hidden     
      DisbursementDecimalRatio,
      @AnalyticsDetails.query.hidden     
      NetRevenueInterestRatio,
      @AnalyticsDetails.query.hidden     
      GrossVolInVolUnit,
      @AnalyticsDetails.query.hidden     
      OwnerNetVolInVolUnit,
      @AnalyticsDetails.query.hidden     
      GrossEnergyInEnergyUnit,
      @AnalyticsDetails.query.hidden     
      OwnerEnergyInEnergyUnit,
      @AnalyticsDetails.query.hidden     
      GrossVolReducnInVolUnit,
      @AnalyticsDetails.query.hidden     
      OwnrVolReducnInVolUnit,
      @AnalyticsDetails.query.hidden     
      GrossEngyReductionInEngyUnit,
      @AnalyticsDetails.query.hidden     
      OwnerEnergyReducnInEnergyUnit,
      @AnalyticsDetails.query.hidden     
      GrossAmount,
      @AnalyticsDetails.query.hidden     
      OwnerGrossAmount,
      @AnalyticsDetails.query.axis: #COLUMNS
      OwnerNetAmount,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PRAOwner,
      @AnalyticsDetails.query.display: #TEXT
      OwnerInterestType,
      OwnerInterestSequence,
      @AnalyticsDetails.query.display: #TEXT
      SuspenseReason,
      @AnalyticsDetails.query.display: #TEXT
      CalculationBasis,
      @AnalyticsDetails.query.display: #TEXT
      OwnerPaymentStatus,
      @AnalyticsDetails.query.display: #TEXT
      OwnerIsJntIntrstBilgEnabled,
      JntIntrstBilgPartner,
      @AnalyticsDetails.query.display: #TEXT
      PRALegalForm,
      @AnalyticsDetails.query.display: #TEXT
      TaxBasis,
      @AnalyticsDetails.query.display: #TEXT
      ItemIsReallocated,
      RefValnDocYear,
      RefValnDoc,
      RefValnDocItem,
      CreatedByUser,
      CreationDateTime,
      @AnalyticsDetails.query.hidden     
      NetTaxAmount,
      @AnalyticsDetails.query.hidden     
      NetTaxReimbmtAmt,
      @AnalyticsDetails.query.hidden     
      OtherDeductionAmount,
      @AnalyticsDetails.query.hidden     
      NetInternalMarketingAmt,
      @AnalyticsDetails.query.hidden     
      NetExternalMarketingAmt,
      @AnalyticsDetails.query.hidden     
      NetReimbmtMarketingAmt,
      @AnalyticsDetails.query.hidden     
      NumberOfItems,

      JntIntrstBilgVenture, 
      JointVentureEquityType, 
      JointVentureEquityGroup, 
      RefFiscalPeriod, 
      RefAccountingDocument, 
      RefAccountingDocumentItem, 
      LastChangedByUser, 
      ChangedDateTime  
}
where
  not ItemIsRejected = 'X';
```
