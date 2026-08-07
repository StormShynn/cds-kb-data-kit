---
name: I_VALNDOCACCTGITEMALL
description: Valuation Document Accounting Item All
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCACCTGITEMALL')/$value
semantic_en: Valuation Document Accounting Item All
tags:
  - IS
  - account
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_VALNDOCACCTGITEMALL

**Valuation Document Accounting Item All**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCACCTGITEMALL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `BookingReversalType` |  | |  |  | `CHAR(1)` | Booking/Reversal Indicator |
| `ValnDocAcctgItem` |  | |  |  | `NUMC(8)` | VL Document Accounting Line Number |
| `MajorProduct` |  | |  |  | `CHAR(1)` | Major product code |
| `MinorProduct` |  | |  |  | `CHAR(2)` | Minor Product Code |
| `ItemIsRejected` |  | |  |  | `CHAR(1)` | Accounting Document rejection flag |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalPeriod` |  | |  |  | `ACCP(6)` | Fiscal Period |
| `ItemIsNetZero` |  | |  |  | `CHAR(1)` | Net Impact Indicator |
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
| `NetTaxAmount` |  | |  |  | `CURR(15)` | Net Tax Amount |
| `NetTaxReimbmtAmt` |  | |  |  | `CURR(15)` | Net Tax Reimbursement Amount |
| `GrossTaxAmount` |  | |  |  | `CURR(15)` | Gross Tax Amount |
| `GrossTaxReimbmtAmt` |  | |  |  | `CURR(15)` | Gross Tax Reimbursement Amount |
| `OtherDeductionAmount` |  | |  |  | `CURR(15)` | Other deducts amount |
| `NetInternalMarketingAmt` |  | |  |  | `CURR(15)` | Net Marketing Cost - Internal |
| `NetExternalMarketingAmt` |  | |  |  | `CURR(15)` | Net Marketing Cost - External |
| `NetReimbmtMarketingAmt` |  | |  |  | `CURR(15)` | Net Marketing Cost Reimbursement |
| `GrossInternalMarketingAmt` |  | |  |  | `CURR(15)` | Gross Marketing Cost - Internal |
| `GrossExternalMarketingAmt` |  | |  |  | `CURR(15)` | Gross Marketing Cost - External |
| `GrossReimbmtMarketingAmt` |  | |  |  | `CURR(15)` | Gross Marketing Cost Reimbursement |
| `ValuationDocumentStatus` |  | |  |  | `CHAR(2)` | Valuation Document Status |
| `NumberOfItems` |  | |  |  | `INT4(10)` | Number of Items |
