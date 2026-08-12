---
name: I_VALNDOCACCTGITEMALL
description: "Valuation Doc Accounting Item All"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCACCTGITEMALL')/$value
semantic_en: "Valuation Doc Accounting Item All"
semantic_vi: "Valuation Doc Accounting Item All — CDS view giao diện dựa trên I_ValnDocAcctgItem."
keywords:
  - "valuation"
  - "doc"
  - "accounting"
  - "item"
  - "all"
  - "document"
  - "year"
  - "number"
  - "booking"
  - "reversal"
  - "type"
  - "valn"
  - "acctg"
  - "major"
  - "product"
tags:
  - IS
  - account
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_VALNDOCACCTGITEMALL

**Valuation Doc Accounting Item All**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCACCTGITEMALL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationDocumentYear` | ✓ | |  |  | `NUMC(4)` | Document year |
| `ValuationDocumentNumber` | ✓ | |  |  | `CHAR(20)` | Val. document number |
| `BookingReversalType` | ✓ | |  |  | `CHAR(1)` | Booking/Reversal Indicator |
| `ValnDocAcctgItem` | ✓ | |  |  | `NUMC(8)` | VL Document Accounting Line Number |
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
| `NetTaxAmount` |  | | `_ValnDocAcctgItemTaxSmmry` | `NetTaxAmount` | `CURR(15)` | Net Tax Amount |
| `NetTaxReimbmtAmt` |  | | `_ValnDocAcctgItemTaxSmmry` | `NetTaxReimbmtAmt` | `CURR(15)` | Net Tax Reimbursement Amount |
| `GrossTaxAmount` |  | | `_ValnDocAcctgItemTaxSmmry` | `GrossTaxAmount` | `CURR(15)` | Gross Tax Amount |
| `GrossTaxReimbmtAmt` |  | | `_ValnDocAcctgItemTaxSmmry` | `GrossTaxReimbmtAmt` | `CURR(15)` | Gross Tax Reimbursement Amount |
| `OtherDeductionAmount` |  | | `_ValnDocAcctgItemDeductSmmry` | `OtherDeductionAmount` | `CURR(15)` | Other deducts amount |
| `NetInternalMarketingAmt` |  | | `_ValnDocAcctgItemMktgSmmry` | `NetInternalMarketingAmt` | `CURR(15)` | Net Marketing Cost - Internal |
| `NetExternalMarketingAmt` |  | | `_ValnDocAcctgItemMktgSmmry` | `NetExternalMarketingAmt` | `CURR(15)` | Net Marketing Cost - External |
| `NetReimbmtMarketingAmt` |  | | `_ValnDocAcctgItemMktgSmmry` | `NetReimbmtMarketingAmt` | `CURR(15)` | Net Marketing Cost Reimbursement |
| `GrossInternalMarketingAmt` |  | | `_ValnDocAcctgItemMktgSmmry` | `GrossInternalMarketingAmt` | `CURR(15)` | Gross Marketing Cost - Internal |
| `GrossExternalMarketingAmt` |  | | `_ValnDocAcctgItemMktgSmmry` | `GrossExternalMarketingAmt` | `CURR(15)` | Gross Marketing Cost - External |
| `GrossReimbmtMarketingAmt` |  | | `_ValnDocAcctgItemMktgSmmry` | `GrossReimbmtMarketingAmt` | `CURR(15)` | Gross Marketing Cost Reimbursement |
| `ValuationDocumentStatus` |  | | `_ValuationDocumentHdr` | `ValuationDocumentStatus` | `CHAR(2)` | Valuation Document Status |
| `NumberOfItems` |  | |  | `cast( 1 as oiu_vdm_no_of_items )` | `INT4(10)` | Number of Items |
| `_ValnDocAcctgItemTaxSmmry` | | ✓ | | | | |
| `_ValnDocAcctgItemMktgSmmry` | | ✓ | | | | |
| `_ValnDocAcctgItemDeductSmmry` | | ✓ | | | | |
| `_MajorProduct` | | ✓ | | | | |
| `_MinorProduct` | | ✓ | | | | |
| `_AccountsRblJointVenture` | | ✓ | | | | |
| `_AcctDeterminationCategory` | | ✓ | | | | |
| `_AcctsRblDivisionOfInterest` | | ✓ | | | | |
| `_AcctsRblMeasurementPt` | | ✓ | | | | |
| `_AffiliatedCompanyCode` | | ✓ | | | | |
| `_BookingReversalType` | | ✓ | | | | |
| `_CalculationBasis` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_County` | | ✓ | | | | |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_DivisionOfInterest` | | ✓ | | | | |
| `_EnergyUnit` | | ✓ | | | | |
| `_ExpenseDivisionOfInterest` | | ✓ | | | | |
| `_ExpenseJointVenture` | | ✓ | | | | |
| `_GasPlantDivisionOfInterest` | | ✓ | | | | |
| `_GasPlantJointVenture` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_ItemIsNetZero` | | ✓ | | | | |
| `_ItemIsReallocated` | | ✓ | | | | |
| `_ItemIsRejected` | | ✓ | | | | |
| `_ItemIsSummarizedByProduct` | | ✓ | | | | |
| `_ItemIsWriteOff` | | ✓ | | | | |
| `_ItemIsCleared` | | ✓ | | | | |
| `_JntIntrstBilgPartner` | | ✓ | | | | |
| `_MarketingType` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_MeasurementPoint` | | ✓ | | | | |
| `_OriginatingMeasurementPt` | | ✓ | | | | |
| `_OwnerInterestType` | | ✓ | | | | |
| `_OwnerIsJntIntrstBilgEnabled` | | ✓ | | | | |
| `_OwnerPaymentStatus` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_PRAContract` | | ✓ | | | | |
| `_PRAContractType` | | ✓ | | | | |
| `_PRAGLAccount` | | ✓ | | | | |
| `_PRAJointVenture` | | ✓ | | | | |
| `_PRALegalForm` | | ✓ | | | | |
| `_PRAOwner` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_PriorPeriodAdjustmentReason` | | ✓ | | | | |
| `_ProcessingCompanyCode` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductBalancingAgreement` | | ✓ | | | | |
| `_Purchaser` | | ✓ | | | | |
| `_RefValnDocHdr` | | ✓ | | | | |
| `_RefValnDocYear` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_RelatedPRAContract` | | ✓ | | | | |
| `_Remitter` | | ✓ | | | | |
| `_SeveranceTaxType` | | ✓ | | | | |
| `_SuspenseReason` | | ✓ | | | | |
| `_TaxBasis` | | ✓ | | | | |
| `_TaxClassification` | | ✓ | | | | |
| `_Transporter` | | ✓ | | | | |
| `_UnitJointVenture` | | ✓ | | | | |
| `_ValnDocAcctgItemDeduct` | | ✓ | | | | |
| `_ValnDocAcctgItemMktg` | | ✓ | | | | |
| `_ValnDocAcctgItemTax` | | ✓ | | | | |
| `_ValuationDocumentHdr` | | ✓ | | | | |
| `_ValuationDocumentYear` | | ✓ | | | | |
| `_VolumeType` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_Well` | | ✓ | | | | |
| `_WellCompletion` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ValnDocAcctgItemTaxSmmry` | `I_ValnDocAcctgItemTaxSmmry` | [0..1] |
| `_ValnDocAcctgItemMktgSmmry` | `I_ValnDocAcctgItemMktgSmmry` | [0..1] |
| `_ValnDocAcctgItemDeductSmmry` | `I_ValnDocAcctgItemDeductSmmry` | [0..1] |
| `_MajorProduct` | `I_MajorProduct` | [0..1] |
| `_MinorProduct` | `I_MinorProduct` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCACCTGITEMALL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCACCTGITEMALL')/$value)*

```abap
@EndUserText.label: 'Valuation Doc Accounting Item All'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'IPVVLDOCACCTALL'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAValDocAcctgItemAll'

// include explicit summarization of tax/mktg/ded to emulate posted acctg doc

define view I_ValnDocAcctgItemAll
  as select from I_ValnDocAcctgItem
  association [0..1] to I_ValnDocAcctgItemTaxSmmry    as _ValnDocAcctgItemTaxSmmry    on  $projection.ValuationDocumentYear   = _ValnDocAcctgItemTaxSmmry.ValuationDocumentYear
                                                                                      and $projection.ValuationDocumentNumber = _ValnDocAcctgItemTaxSmmry.ValuationDocumentNumber
                                                                                      and $projection.BookingReversalType     = _ValnDocAcctgItemTaxSmmry.BookingReversalType
                                                                                      and $projection.ValnDocAcctgItem        = _ValnDocAcctgItemTaxSmmry.ValnDocAcctgItem
  association [0..1] to I_ValnDocAcctgItemMktgSmmry   as _ValnDocAcctgItemMktgSmmry   on  $projection.ValuationDocumentYear   = _ValnDocAcctgItemMktgSmmry.ValuationDocumentYear
                                                                                      and $projection.ValuationDocumentNumber = _ValnDocAcctgItemMktgSmmry.ValuationDocumentNumber
                                                                                      and $projection.BookingReversalType     = _ValnDocAcctgItemMktgSmmry.BookingReversalType
                                                                                      and $projection.ValnDocAcctgItem        = _ValnDocAcctgItemMktgSmmry.ValnDocAcctgItem
  association [0..1] to I_ValnDocAcctgItemDeductSmmry as _ValnDocAcctgItemDeductSmmry on  $projection.ValuationDocumentYear   = _ValnDocAcctgItemDeductSmmry.ValuationDocumentYear
                                                                                      and $projection.ValuationDocumentNumber = _ValnDocAcctgItemDeductSmmry.ValuationDocumentNumber
                                                                                      and $projection.BookingReversalType     = _ValnDocAcctgItemDeductSmmry.BookingReversalType
                                                                                      and $projection.ValnDocAcctgItem        = _ValnDocAcctgItemDeductSmmry.ValnDocAcctgItem
  association [0..1] to I_MajorProduct                as _MajorProduct                on  $projection.MajorProduct = _MajorProduct.MajorProduct
  association [0..1] to I_MinorProduct                as _MinorProduct                on  $projection.MajorProduct = _MinorProduct.MajorProduct
                                                                                      and $projection.MinorProduct = _MinorProduct.MinorProduct
{
      @ObjectModel.foreignKey.association: '_ValuationDocumentYear'
  key ValuationDocumentYear,
  key ValuationDocumentNumber,
      @ObjectModel.foreignKey.association: '_BookingReversalType'
  key BookingReversalType,
  key ValnDocAcctgItem,

      @ObjectModel.foreignKey.association: '_MajorProduct'
      MajorProduct, // needed for association to marketing type
      @ObjectModel.foreignKey.association: '_MinorProduct'
      MinorProduct,

      @ObjectModel.foreignKey.association: '_ItemIsRejected'
      ItemIsRejected,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      //      @ObjectModel.foreignKey.association: '_FiscalPeriod'
      FiscalPeriod,
      @ObjectModel.foreignKey.association: '_ItemIsNetZero'
      ItemIsNetZero,

      @ObjectModel.foreignKey.association: '_PRAGLAccount'
      GLAccount,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      GLAccountType,
      @ObjectModel.foreignKey.association: '_AcctDeterminationCategory'
      AcctDeterminationCategory,
      @ObjectModel.foreignKey.association: '_PRAJointVenture'
      JointVenture,
      @ObjectModel.foreignKey.association: '_DivisionOfInterest'
      DivisionOfInterest,
      @ObjectModel.foreignKey.association: '_UnitJointVenture'
      UnitJointVenture,
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      @ObjectModel.foreignKey.association: '_Material'
      Material,
      @Semantics.text: true
      DocumentItemText,
      @ObjectModel.foreignKey.association: '_Well'
      Well,
      @ObjectModel.foreignKey.association: '_WellCompletion'
      WellCompletion,
      @ObjectModel.foreignKey.association: '_MeasurementPoint'
      MeasurementPoint,
      @ObjectModel.foreignKey.association: '_PRAContract'
      PRAContract,
      @ObjectModel.foreignKey.association: '_VolumeType'
      VolumeType,
      @Semantics.businessDate.at: true
      SalesDate,
      @ObjectModel.foreignKey.association: '_DeliveryNetwork'
      DeliveryNetwork,
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      @ObjectModel.foreignKey.association: '_Country'
      Country,
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
      PrimaryGeogrlLocation,
      @ObjectModel.foreignKey.association: '_ProcessingCompanyCode'
      ProcessingCompanyCode,
      @ObjectModel.foreignKey.association: '_Purchaser'
      Purchaser,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      PressureBaseQty,
      @ObjectModel.foreignKey.association: '_ItemIsSummarizedByProduct'
      ItemIsSummarizedByProduct,
      @ObjectModel.foreignKey.association: '_ItemIsWriteOff'
      ItemIsWriteOff,
      @ObjectModel.foreignKey.association: '_ItemIsCleared'
      ItemIsCleared,
      @ObjectModel.foreignKey.association: '_OriginatingMeasurementPt'
      OriginatingMeasurementPt,
      @ObjectModel.foreignKey.association: '_AffiliatedCompanyCode'
      AffiliatedCompanyCode,
      @ObjectModel.foreignKey.association: '_TaxClassification'
      TaxClassification,
      @ObjectModel.foreignKey.association: '_PriorPeriodAdjustmentReason'
      PriorPeriodAdjustmentReason,
      @ObjectModel.foreignKey.association: '_County'
      County,
      @ObjectModel.foreignKey.association: '_Region'
      Region,
      @ObjectModel.foreignKey.association: '_RelatedPRAContract'
      RelatedPRAContract,
      @ObjectModel.foreignKey.association: '_ProductBalancingAgreement'
      ProductBalancingAgreement,
      @ObjectModel.foreignKey.association: '_GasPlantJointVenture'
      GasPlantJointVenture,
      @ObjectModel.foreignKey.association: '_GasPlantDivisionOfInterest'
      GasPlantDivisionOfInterest,
      @ObjectModel.foreignKey.association: '_PRAContractType'
      PRAContractType,
      @ObjectModel.foreignKey.association: '_Transporter'
      Transporter,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      PartnerCompany,
      @ObjectModel.foreignKey.association: '_Remitter'
      Remitter,
      @ObjectModel.foreignKey.association: '_AcctsRblMeasurementPt'
      AcctsRblMeasurementPt,
      @ObjectModel.foreignKey.association: '_AccountsRblJointVenture'
      AccountsReceivableJointVenture,
      @ObjectModel.foreignKey.association: '_AcctsRblDivisionOfInterest'
      AcctsRblDivisionOfInterest,
      // no association, third party identifier
      AlternateProperty,
      // no association, third party identifier
      AlternateProduct,
      PaymentReference,
      PaymentDate,
      CashReceiptDate,
      @ObjectModel.foreignKey.association: '_SeveranceTaxType'
      SeveranceTaxType,
      @ObjectModel.foreignKey.association: '_MarketingType'
      MarketingType,
      @ObjectModel.foreignKey.association: '_ExpenseJointVenture'
      ExpenseJointVenture,
      @ObjectModel.foreignKey.association: '_ExpenseDivisionOfInterest'
      ExpenseDivisionOfInterest,

      // units and currencies
      @Semantics.unitOfMeasure: true
      VolumeUnit,
      @Semantics.unitOfMeasure: true
      EnergyUnit,
      @Semantics.unitOfMeasure: true
      HeatingValUnit,
      @Semantics.currencyCode: true
      CompanyCodeCurrency,

      // individual characteristics where no default aggregation should occur
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeatingValUnit'
      HeatingValue,
      @DefaultAggregation: #SUM
      // no uom (ratio)
      APIGravityRatio,
      @DefaultAggregation: #SUM
      // no uom (ratio)
      DisbursementDecimalRatio,
      @DefaultAggregation: #SUM
      // no uom (ratio)
      NetRevenueInterestRatio,

      // measurement amounts
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      GrossVolInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      OwnerNetVolInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      GrossEnergyInEnergyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      OwnerEnergyInEnergyUnit,
      @DefaultAggregation: #SUM
      // vol unit is undefined (typically MCF, where VolumeUnit will be Std Gallons)
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      GrossVolReducnInVolUnit,
      @DefaultAggregation: #SUM
      // vol unit is undefined (typically MCF, where VolumeUnit will be Std Gallons)
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      OwnrVolReducnInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      GrossEngyReductionInEngyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      OwnerEnergyReducnInEnergyUnit,

      //    currency amounts
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      GrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      OwnerGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      OwnerNetAmount,

      @ObjectModel.foreignKey.association: '_PRAOwner'
      PRAOwner,
      @ObjectModel.foreignKey.association: '_OwnerInterestType'
      OwnerInterestType,
      OwnerInterestSequence,
      @ObjectModel.foreignKey.association: '_SuspenseReason'
      SuspenseReason,
      @ObjectModel.foreignKey.association: '_CalculationBasis'
      CalculationBasis,
      @ObjectModel.foreignKey.association: '_OwnerPaymentStatus'
      OwnerPaymentStatus,
      @ObjectModel.foreignKey.association: '_OwnerIsJntIntrstBilgEnabled'
      OwnerIsJntIntrstBilgEnabled,
      @ObjectModel.foreignKey.association: '_JntIntrstBilgPartner'
      JntIntrstBilgPartner,
      @ObjectModel.foreignKey.association: '_PRALegalForm'
      PRALegalForm,
      @ObjectModel.foreignKey.association: '_TaxBasis'
      TaxBasis,
      @ObjectModel.foreignKey.association: '_ItemIsReallocated'
      ItemIsReallocated,
      @ObjectModel.foreignKey.association: '_RefValnDocYear'
      RefValnDocYear,
      //      @ObjectModel.foreignKey.association: '_RefValnDocHdr'
      RefValnDoc,
      RefValnDocItem,

      //adminstrative
      @Semantics.user.createdBy: true
      CreatedByUser,
      CreationDateTime,


      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      _ValnDocAcctgItemTaxSmmry.NetTaxAmount                 as NetTaxAmount,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      _ValnDocAcctgItemTaxSmmry.NetTaxReimbmtAmt             as NetTaxReimbmtAmt,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      _ValnDocAcctgItemTaxSmmry.GrossTaxAmount               as GrossTaxAmount,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      _ValnDocAcctgItemTaxSmmry.GrossTaxReimbmtAmt           as GrossTaxReimbmtAmt,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      _ValnDocAcctgItemDeductSmmry.OtherDeductionAmount      as OtherDeductionAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      _ValnDocAcctgItemMktgSmmry.NetInternalMarketingAmt     as NetInternalMarketingAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      _ValnDocAcctgItemMktgSmmry.NetExternalMarketingAmt     as NetExternalMarketingAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      _ValnDocAcctgItemMktgSmmry.NetReimbmtMarketingAmt      as NetReimbmtMarketingAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      _ValnDocAcctgItemMktgSmmry.GrossInternalMarketingAmt   as GrossInternalMarketingAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      _ValnDocAcctgItemMktgSmmry.GrossExternalMarketingAmt   as GrossExternalMarketingAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      _ValnDocAcctgItemMktgSmmry.GrossReimbmtMarketingAmt    as GrossReimbmtMarketingAmt,

      _ValuationDocumentHdr.ValuationDocumentStatus          as ValuationDocumentStatus, //required for analytical view where clause

      @DefaultAggregation: #SUM
      cast( 1 as oiu_vdm_no_of_items )                       as NumberOfItems,

      /* Associations */
      _AccountsRblJointVenture,
      _AcctDeterminationCategory,
      _AcctsRblDivisionOfInterest,
      _AcctsRblMeasurementPt,
      _AffiliatedCompanyCode,
      _BookingReversalType,
      _CalculationBasis,
      _CompanyCode,
      _CompanyCodeCurrency,
      _CostCenter,
      _Country,
      _County,
      _DeliveryNetwork,
      _DivisionOfInterest,
      _EnergyUnit,
      _ExpenseDivisionOfInterest,
      _ExpenseJointVenture,
      _GasPlantDivisionOfInterest,
      _GasPlantJointVenture,
      _GLAccountType,
      _ItemIsNetZero,
      _ItemIsReallocated,
      _ItemIsRejected,
      _ItemIsSummarizedByProduct,
      _ItemIsWriteOff,
      _ItemIsCleared,
      _JntIntrstBilgPartner,
      _MarketingType,
      _Material,
      _MeasurementPoint,
      _OriginatingMeasurementPt,
      _OwnerInterestType,
      _OwnerIsJntIntrstBilgEnabled,
      _OwnerPaymentStatus,
      _PartnerCompany,
      _PRAContract,
      _PRAContractType,
      _PRAGLAccount,
      _PRAJointVenture,
      _PRALegalForm,
      _PRAOwner,
      _PrimaryGeogrlLocation,
      _PriorPeriodAdjustmentReason,
      _ProcessingCompanyCode,
      _Product,
      _MajorProduct,
      _MinorProduct,
      _ProductBalancingAgreement,
      _Purchaser,
      _RefValnDocHdr,
      _RefValnDocYear,
      _Region,
      _RelatedPRAContract,
      _Remitter,
      _SeveranceTaxType,
      _SuspenseReason,
      _TaxBasis,
      _TaxClassification,
      _Transporter,
      _UnitJointVenture,
      _ValnDocAcctgItemDeduct,
      _ValnDocAcctgItemMktg,
      _ValnDocAcctgItemTax,
      _ValuationDocumentHdr,
      _ValuationDocumentYear,
      _VolumeType,
      _VolumeUnit,
      _Well,
      _WellCompletion,
      _ValnDocAcctgItemTaxSmmry,
      _ValnDocAcctgItemMktgSmmry,
      _ValnDocAcctgItemDeductSmmry
}
```
