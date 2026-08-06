---
name: I_ACTPLNCOSTCENTERRPTGCUBE
description: ACTPLNCost CenterRPTGCUBE
app_component: CO-OM-CCA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - CO-OM-CCA
  - interface-view
  - analytical
  - cost-center
  - component:CO-OM-CCA-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_ACTPLNCOSTCENTERRPTGCUBE

**ACTPLNCost CenterRPTGCUBE**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SourceLedger` | `APJEI.SourceLedger` |
| key `Ledger` | `APJEI.Ledger` |
| key `CompanyCode` | `APJEI.CompanyCode` |
| key `FiscalYear` | `APJEI.FiscalYear` |
| key `AccountingDocument` | `APJEI.AccountingDocument` |
| key `FinancialPlanningReqTransSqnc` | `APJEI.FinancialPlanningReqTransSqnc` |
| key `FinancialPlanningDataPacket` | `APJEI.FinancialPlanningDataPacket` |
| key `ActualPlanJournalEntryItem` | `APJEI.ActualPlanJournalEntryItem` |
| `LedgerGLLineItem` | `APJEI.LedgerGLLineItem` |
| `FinancialPlanningEntryItem` | `APJEI.FinancialPlanningEntryItem` |
| `ControllingArea` | `APJEI.ControllingArea` |
| `LedgerFiscalYear` | `APJEI.LedgerFiscalYear` |
| `GLAccount` | `APJEI.GLAccount` |
| `ChartOfAccounts` | `APJEI.ChartOfAccounts` |
| `ActualPlanCode` | `APJEI.ActualPlanCode` |
| `DebitCreditCode` | `APJEI.DebitCreditCode` |
| `ProfitCenter` | `APJEI.ProfitCenter` |
| `CostCenter` | `APJEI.CostCenter` |
| `ProjectExternalID` | `APJEI.ProjectExternalID` |
| `PartnerProjectInternalID` | `APJEI.PartnerProjectInternalID` |
| `PartnerProjectExternalID` | `APJEI.PartnerProjectExternalID` |
| `WBSElementExternalID` | `APJEI.WBSElementExternalID` |
| `PartnerWBSElementExternalID` | `APJEI.PartnerWBSElementExternalID` |
| `FunctionalArea` | `APJEI.FunctionalArea` |
| `Segment` | `APJEI.Segment` |
| `CostCtrActivityType` | `APJEI.CostCtrActivityType` |
| `CostAnalysisResource` | `APJEI.CostAnalysisResource` |
| `OrderID` | `APJEI.OrderID` |
| `WorkPackage` | `APJEI.WorkPackage` |
| `PartnerAccountAssignmentType` | `APJEI.PartnerAccountAssignmentType` |
| `PartnerCompanyCode` | `APJEI.PartnerCompanyCode` |
| `PartnerProfitCenter` | `APJEI.PartnerProfitCenter` |
| `PartnerCostCenter` | `APJEI.PartnerCostCenter` |
| `PartnerFunctionalArea` | `APJEI.PartnerFunctionalArea` |
| `PartnerSegment` | `APJEI.PartnerSegment` |
| `PartnerCostCtrActivityType` | `APJEI.PartnerCostCtrActivityType` |
| `PartnerOrder` | `APJEI.PartnerOrder_2` |
| `PostingDate` | `APJEI.PostingDate` |
| `DocumentDate` | `APJEI.DocumentDate` |
| `FiscalPeriod` | `APJEI.FiscalPeriod` |
| `FiscalYearPeriod` | `APJEI.FiscalYearPeriod` |
| `FiscalYearVariant` | `APJEI.FiscalYearVariant` |
| `PlanningCategory` | `APJEI.PlanningCategory` |
| `ServicesRenderedDate` | `APJEI.ServicesRenderedDate` |
| `AccountAssignmentType` | `APJEI.AccountAssignmentType` |
| `BusinessTransactionCategory` | `APJEI.BusinessTransactionCategory` |
| `BusinessTransactionType` | `APJEI.BusinessTransactionType` |
| `FinancialTransactionType` | `APJEI.FinancialTransactionType` |
| `Customer` | `APJEI.Customer` |
| `Supplier` | `APJEI.Supplier` |
| `IsStatisticalCostCenter` | `APJEI.IsStatisticalCostCenter` |
| `IsCommitment` | `APJEI.IsCommitment` |
| `TransactionCurrency` | `APJEI.TransactionCurrency` |
| `CompanyCodeCurrency` | `APJEI.CompanyCodeCurrency` |
| `GlobalCurrency` | `APJEI.GlobalCurrency` |
| `FunctionalCurrency` | `APJEI.FunctionalCurrency` |
| `FreeDefinedCurrency1` | `APJEI.FreeDefinedCurrency1` |
| `CostSourceUnit` | `APJEI.CostSourceUnit` |
| `AmountInTransactionCurrency` | `} APJEI.AmountInTransactionCurrency` |
| `AmountInCompanyCodeCurrency` | `} APJEI.AmountInCompanyCodeCurrency` |
| `AmountInGlobalCurrency` | `} APJEI.AmountInGlobalCurrency` |
| `AmountInFunctionalCurrency` | `} APJEI.AmountInFunctionalCurrency` |
| `AmountInFreeDefinedCurrency1` | `} APJEI.AmountInFreeDefinedCurrency1` |
| `FixedAmountInGlobalCrcy` | `} APJEI.FixedAmountInGlobalCrcy` |
| `FixedAmountInCoCodeCrcy` | `} APJEI.FixedAmountInCoCodeCrcy` |
| `FixedAmountInTransCrcy` | `} APJEI.FixedAmountInTransCrcy` |
| `ValuationQuantity` | `} APJEI.ValuationQuantity` |
| `ValuationFixedQuantity` | `} APJEI.ValuationFixedQuantity` |
| `BaseUnit` | `APJEI.BaseUnit` |
| `Quantity` | `} APJEI.Quantity` |
| `FixedQuantity` | `} APJEI.FixedQuantity` |
| `ActualAmountInTransactionCrcy` | `} APJEI.ActualAmountInTransactionCrcy` |
| `ActualAmountInCompanyCodeCrcy` | `} APJEI.ActualAmountInCompanyCodeCrcy` |
| `ActualAmountInGlobalCurrency` | `} APJEI.ActualAmountInGlobalCurrency` |
| `ActualAmountInFreeDfndCrcy1` | `} APJEI.ActualAmountInFreeDfndCrcy1` |
| `ActualValuationQuantity` | `} APJEI.ActualValuationQuantity` |
| `ActualQuantityInBaseUnit` | `} APJEI.ActualQuantityInBaseUnit` |
| `PlanAmountInTransactionCrcy` | `} APJEI.PlanAmountInTransactionCrcy` |
| `PlanAmountInCompanyCodeCrcy` | `} APJEI.PlanAmountInCompanyCodeCrcy` |
| `PlanAmountInGlobalCurrency` | `} APJEI.PlanAmountInGlobalCurrency` |
| `PlanAmountInFreeDefinedCrcy1` | `} APJEI.PlanAmountInFreeDefinedCrcy1` |
| `PlanValuationQuantity` | `} APJEI.PlanValuationQuantity` |
| `PlanPriceInGlobalCurrency` | `} APJEI.PlanPriceInGlobalCurrency` |
| `PlanPriceInCompanyCodeCurrency` | `} APJEI.PlanPriceInCompanyCodeCurrency` |
| `PlanPriceInTransactionCurrency` | `} APJEI.PlanPriceInTransactionCurrency` |
| `ActlPlnDiffAmtInTransCrcy` | `} APJEI.ActlPlnDiffAmtInTransCrcy` |
| `ActlPlnDiffAmtInCoCodeCrcy` | `} APJEI.ActlPlnDiffAmtInCoCodeCrcy` |
| `ActlPlnDiffAmtInGlobalCrcy` | `} APJEI.ActlPlnDiffAmtInGlobalCrcy` |
| `ActlPlnDiffAmtInFreeDfndCrcy1` | `} APJEI.ActlPlnDiffAmtInFreeDfndCrcy1` |
| `ActlPanDiffValuationQuantity` | `} APJEI.ActlPanDiffValuationQuantity` |
| `CalendarYear` | `APJEI._CalendarDate.CalendarYear` |
| `CalendarQuarter` | `APJEI._CalendarDate.CalendarQuarter` |
| `YearQuarter` | `APJEI._CalendarDate.YearQuarter` |
| `CalendarMonth` | `APJEI._CalendarDate.CalendarMonth` |
| `YearMonth` | `APJEI._CalendarDate.YearMonth` |
| `CalendarWeek` | `APJEI._CalendarDate.CalendarWeek` |
| `YearWeek` | `APJEI._CalendarDate.YearWeek` |
| `FiscalQuarter` | `APJEI._FiscalCalendarDate.FiscalQuarter` |
| `FiscalWeek` | `APJEI._FiscalCalendarDate.FiscalWeek` |
| `FiscalYearQuarter` | `APJEI._FiscalCalendarDate.FiscalYearQuarter` |
| `FiscalYearWeek` | `APJEI._FiscalCalendarDate.FiscalYearWeek` |
| `_CalendarMonth` | *Association* |
| `_CalendarQuarter` | *Association* |
| `_CalendarYearMonth` | *Association* |
| `_CurrentCostCenter` | *Association* |
| `_CurrentProfitCenter` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |
| `_CalendarYearMonth` | `I_YearMonth` | [1..1] |
| `_Extension_acdocp` | `E_FinancialPlanningEntryItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@EndUserText.label: 'Cost Center Review Booklet - Cube'
@Analytics.internalName:#LOCAL
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFIACTPLNCOCREPOC'
@VDM.viewType: #COMPOSITE

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Consumption.dbHints: [ 'USE_HEX_PLAN','NO_HEX_INDEX_JOIN' ]
@ObjectModel: { usageType.sizeCategory: #XXL,
                usageType.dataClass:  #MIXED,
                usageType.serviceQuality: #D,
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@AccessControl.auditFilter: #ENABLED
@Environment.sql.passValueForClient: true
@Analytics.intentBasedNavigation.filterMapper: 'CL_FCO_RB_CUBE_EXIT'
define view entity I_ActPlnCostCenterRptgCube

  as select from I_ActualPlanJournalEntryItem as APJEI

  association [1..1]       to I_CalendarMonth              as _CalendarMonth            on  $projection.CalendarMonth = _CalendarMonth.CalendarMonth
  association [1..1]       to I_CalendarQuarter            as _CalendarQuarter          on  $projection.CalendarQuarter = _CalendarQuarter.CalendarQuarter
  association [1..1]       to I_YearMonth                  as _CalendarYearMonth        on  $projection.YearMonth = _CalendarYearMonth.YearMonth
  association of exact one to exact one E_JournalEntryItem as _Extension_acdoca         on  APJEI.SourceLedger       = _Extension_acdoca.SourceLedger
                                                                                        and APJEI.CompanyCode        = _Extension_acdoca.CompanyCode
                                                                                        and APJEI.FiscalYear         = _Extension_acdoca.FiscalYear
                                                                                        and APJEI.AccountingDocument = _Extension_acdoca.AccountingDocument
                                                                                        and APJEI.LedgerGLLineItem   = _Extension_acdoca.LedgerGLLineItem
  association [1..1]       to E_FinancialPlanningEntryItem as _Extension_acdocp         on  APJEI.FinancialPlanningReqTransSqnc = _Extension_acdocp.FinancialPlanningReqTransSqnc
                                                                                        and APJEI.FinancialPlanningDataPacket   = _Extension_acdocp.FinancialPlanningDataPacket
                                                                                        and APJEI.FinancialPlanningEntryItem    = _Extension_acdocp.FinancialPlanningEntryItem

//  association [0..1]       to I_ActPlnCostCenterRptgDSt    as _DocumentStore            on  $projection.SourceLedger                  = _DocumentStore.tra_sourceledger
//                                                                                        and $projection.Ledger                        = _DocumentStore.tra_ledger
//                                                                                        and $projection.CompanyCode                   = _DocumentStore.tra_companycode
//                                                                                        and $projection.FiscalYear                    = _DocumentStore.tra_fiscalyear
//                                                                                        and $projection.AccountingDocument            = _DocumentStore.tra_00010
//                                                                                        and $projection.FinancialPlanningReqTransSqnc = _DocumentStore.tra_00039
//                                                                                        and $projection.FinancialPlanningDataPacket   = _DocumentStore.tra_00019
//                                                                                        and $projection.ActualPlanJournalEntryItem    = _DocumentStore.tra_00031


{
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key APJEI.SourceLedger,                  //key
      @ObjectModel.foreignKey.association: '_Ledger'
  key APJEI.Ledger,                        //key
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key APJEI.CompanyCode,                   //key
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key APJEI.FiscalYear,                    //key
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key APJEI.AccountingDocument,            //key
  key APJEI.FinancialPlanningReqTransSqnc, //key
  key APJEI.FinancialPlanningDataPacket,   //key
      // field ActualPlanJournalEntryItem required for representative key definition LedgerGLLineItem|FinancialPlanningEntryItem
  key APJEI.ActualPlanJournalEntryItem, //key

      APJEI.LedgerGLLineItem, //key
      APJEI.FinancialPlanningEntryItem, //key
      @ObjectModel.foreignKey.association: '_ControllingArea'
      APJEI.ControllingArea,
      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      @Semantics.fiscal.year: true
      APJEI.LedgerFiscalYear,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      APJEI.GLAccount,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      APJEI.ChartOfAccounts,
      @Environment.sql.passValue: true
      APJEI.ActualPlanCode,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      APJEI.DebitCreditCode,

      ////////////////////////////////////////////////////////////////////////////////////
      // G/L additional account assignments
      ////////////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      APJEI.ProfitCenter,
      @ObjectModel.foreignKey.association: '_CostCenter'
      APJEI.CostCenter,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      APJEI.ProjectExternalID,
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      APJEI.PartnerProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      APJEI.PartnerProjectExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      APJEI.WBSElementExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      APJEI.PartnerWBSElementExternalID,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      APJEI.FunctionalArea,
      @ObjectModel.foreignKey.association: '_Segment'
      APJEI.Segment,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      APJEI.CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      APJEI.CostAnalysisResource,
      @ObjectModel.foreignKey.association: '_Order'
      APJEI.OrderID,
      @ObjectModel.foreignKey.association: '_WorkPackage'
      APJEI.WorkPackage,
      APJEI.PartnerAccountAssignmentType,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      APJEI.PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      APJEI.PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      APJEI.PartnerCostCenter,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      APJEI.PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerSegment'
      APJEI.PartnerSegment,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      APJEI.PartnerCostCtrActivityType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      APJEI.PartnerOrder_2                        as PartnerOrder,

      /////////////////////////////////////////////////////////////////////////////
      // Mandatory fields for G/L
      ////////////////////////////////////////////////////////////////////////////
      APJEI.PostingDate,
      APJEI.DocumentDate,
      @Semantics.fiscal.period: true
      APJEI.FiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      APJEI.FiscalYearPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      APJEI.FiscalYearVariant,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
      ///////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_PlanningCategory'
      APJEI.PlanningCategory,
      APJEI.ServicesRenderedDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'
      APJEI.AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
      APJEI.BusinessTransactionCategory,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      APJEI.BusinessTransactionType,
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      APJEI.FinancialTransactionType,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_GEN  Fields for several subledgers
      ///////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_Customer'
      APJEI.Customer,
      @ObjectModel.foreignKey.association: '_Supplier'
      APJEI.Supplier,

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
      //////////////////////////////////////////////////////////////////////
      APJEI.IsStatisticalCostCenter,
      APJEI.IsCommitment,

      /////////////////////////////////////////////////////////////////////////////////////
      // Value Fields
      /////////////////////////////////////////////////////////////////////////////////////
      APJEI.TransactionCurrency,
      APJEI.CompanyCodeCurrency,
      APJEI.GlobalCurrency,
      APJEI.FunctionalCurrency,
      APJEI.FreeDefinedCurrency1,
      APJEI.CostSourceUnit,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.AmountInTransactionCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.AmountInCompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.AmountInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      APJEI.AmountInFunctionalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      APJEI.AmountInFreeDefinedCurrency1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.FixedAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.FixedAmountInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.FixedAmountInTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ValuationQuantity,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ValuationFixedQuantity,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BaseUnit'
      APJEI.BaseUnit,
      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      APJEI.Quantity,

      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      APJEI.FixedQuantity,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.ActualAmountInTransactionCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.ActualAmountInCompanyCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.ActualAmountInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      APJEI.ActualAmountInFreeDfndCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ActualValuationQuantity,

      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      APJEI.ActualQuantityInBaseUnit,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.PlanAmountInTransactionCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.PlanAmountInCompanyCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.PlanAmountInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      APJEI.PlanAmountInFreeDefinedCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.PlanValuationQuantity,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.PlanPriceInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.PlanPriceInCompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.PlanPriceInTransactionCurrency,

      /////////////////////////////////////////////////////////////////////////////////////
      // Actual Plan Difference Fields
      /////////////////////////////////////////////////////////////////////////////////////

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.ActlPlnDiffAmtInTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.ActlPlnDiffAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.ActlPlnDiffAmtInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      APJEI.ActlPlnDiffAmtInFreeDfndCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ActlPanDiffValuationQuantity,

      APJEI._CalendarDate.CalendarYear            as CalendarYear,
      @ObjectModel.foreignKey.association: '_CalendarQuarter'
      APJEI._CalendarDate.CalendarQuarter         as CalendarQuarter,
      APJEI._CalendarDate.YearQuarter             as YearQuarter,
      @ObjectModel.foreignKey.association: '_CalendarMonth'
      APJEI._CalendarDate.CalendarMonth           as CalendarMonth,
      @ObjectModel.foreignKey.association: '_CalendarYearMonth'
      APJEI._CalendarDate.YearMonth               as YearMonth,
      APJEI._CalendarDate.CalendarWeek            as CalendarWeek,
      APJEI._CalendarDate.YearWeek                as YearWeek,
      APJEI._FiscalCalendarDate.FiscalQuarter     as FiscalQuarter,
      APJEI._FiscalCalendarDate.FiscalWeek        as FiscalWeek,
      APJEI._FiscalCalendarDate.FiscalYearQuarter as FiscalYearQuarter,
      APJEI._FiscalCalendarDate.FiscalYearWeek    as FiscalYearWeek,

      APJEI._JournalEntry,
      APJEI._SourceLedger,
      APJEI._ControllingArea,
      APJEI._Ledger,
      APJEI._CompanyCode,
      APJEI._GLAccountInChartOfAccounts,
      APJEI._ChartOfAccounts,
      APJEI._LedgerFiscalYearForVariant,
      APJEI._FiscalYear,
      APJEI._FiscalPeriodForVariant,
      APJEI._FiscalYearPeriodForVariant,
      APJEI._DebitCreditCode,
      APJEI._CalendarDate,
      APJEI._FiscalCalendarDate,
      APJEI._ProfitCenter,
      APJEI._CostCenter,
      APJEI._AccountAssignmentType,
      APJEI._ProjectExternalID,
      APJEI._PartnerProjectBasicData,
      APJEI._PartnerProjectExternalID,
      APJEI._WBSElementExternalID,
      APJEI._PartnerWBSElementExternalID,
      APJEI._FunctionalArea,
      APJEI._Segment,
      APJEI._CostCtrActivityType,
      APJEI._CostAnalysisResource,
      APJEI._Order,
      APJEI._WorkPackage,
      APJEI._PartnerCompanyCode,
      APJEI._PartnerProfitCenter,
      APJEI._PartnerCostCenter,
      APJEI._PartnerFunctionalArea,
      APJEI._PartnerSegment,
      APJEI._PartnerCostCtrActivityType,
      APJEI._PartnerOrder_2,
      APJEI._FiscalYearVariant,
      APJEI._BusinessTransactionCategory,
      APJEI._BusinessTransactionType,
      APJEI._FinancialTransactionType,
      APJEI._Customer,
      APJEI._Supplier,
      APJEI._TransactionCurrency,
      APJEI._CompanyCodeCurrency,
      APJEI._GlobalCurrency,
      APJEI._FunctionalCurrency,
      APJEI._FreeDefinedCurrency1,
      APJEI._BaseUnit,
      APJEI._CostSourceUnit,
      APJEI._PlanningCategory,
      _CalendarMonth,
      _CalendarQuarter,
      _CalendarYearMonth,
      _CurrentCostCenter,
      _CurrentProfitCenter
//      @Analytics.association.toDocumentStorage: true
//      _DocumentStore

}
where
  (
    APJEI.FiscalPeriod > '000'
  )
```
