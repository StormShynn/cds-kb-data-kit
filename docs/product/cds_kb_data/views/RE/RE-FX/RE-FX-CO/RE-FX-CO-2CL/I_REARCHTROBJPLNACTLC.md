---
name: I_REARCHTROBJPLNACTLC
description: "RE Architecture CO Obj Plan Act - Cube"
app_component: RE-FX-CO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REARCHTROBJPLNACTLC')/$value
semantic_en: "RE Architecture CO Obj Plan Act - Cube"
semantic_vi: "RE Architecture CO Obj Plan Act - Cube — CDS view giao diện dựa trên I_REArchtrObjCostCtrPlnActlC."
keywords:
  - "architecture"
  - "obj"
  - "plan"
  - "act"
  - "cube"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - RE
  - component:RE-FX-CO-2CL
  - interface-view
  - plan
  - RE-FX
  - RE-FX-CO
  - RE-FX-CO-2CL
---
# I_REARCHTROBJPLNACTLC

**RE Architecture CO Obj Plan Act - Cube**

| Property | Value |
|---|---|
| App Component | `RE-FX-CO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REARCHTROBJPLNACTLC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` | ✓ | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `REArchitectureObjectNumberSite` |  | |  |  | `CHAR(20)` | Architecture Object Number of Site |
| `REArchitectureObjectParentUUID` |  | |  |  | `RAW(16)` | UUID for Real Estate Architecture Object |
| `REArchtrObjectNumberBldngLand` |  | |  |  | `CHAR(20)` | Architecture Object Number of Building/Land |
| `REArchitectureObjectUUID` |  | |  |  | `RAW(16)` | UUID for Real Estate Architecture Object |
| `REGnrcRentalObjPortfolioID` |  | |  |  | `CHAR(10)` | Generic Rental Object Portfolio ID |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `LedgerGLLineItem` |  | | `_REArchtrObjectCostCtrPlnActl` | `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `PostingDate` |  | |  | `cast( PostingDate as budat preserving type )` | `DATS(8)` | Posting Date in the Document |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `ActualAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Actual Amount in Company Code Currency |
| `ActualAmountInTransactionCrcy` |  | |  |  | `CURR(23)` | Actual Amount in Transaction Currency |
| `ActualAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Actual Amount in Global Currency |
| `PlanAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Plan Amount in Company Code Currency |
| `PlanAmountInTransactionCrcy` |  | |  |  | `CURR(23)` | Plan Amount in Transaction Currency |
| `PlanAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Plan Amount in Global Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `ActualValuationQuantity` |  | |  |  | `QUAN(23)` | Actual Valuation Quantity |
| `PlanValuationQuantity` |  | |  |  | `QUAN(23)` | Plan Valuation Quantity |
| `_SourceLedger` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |
| `_FiscalYearPeriod` | | ✓ | | | | |
| `_FiscalPeriodForVariant` | | ✓ | | | | |
| `_FiscalYearPeriodForVariant` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_PlanningCategory` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_REArchitectureObject` | | ✓ | | | | |
| `_REArchitectureObjectSite` | | ✓ | | | | |
| `_REArchtrObjectBuildingLand` | | ✓ | | | | |
| `_REGnrcRentalObjPortfolio` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REARCHTROBJPLNACTLC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REARCHTROBJPLNACTLC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'RE Architecture CO Obj Plan Act - Cube'

@AbapCatalog.entityBuffer.definitionAllowed: false
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }
@ObjectModel: { usageType.sizeCategory: #XXL,
                usageType.dataClass:  #MIXED,
                usageType.serviceQuality: #D,
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata.allowExtensions:true

@Consumption.dbHints: ['USE_HEX_PLAN']

@VDM.viewType: #COMPOSITE

@Analytics.readClassName: 'CL_REGO_ARCH_OBJ_PLANACTUALS'

define view entity I_REArchtrObjPlnActlC
 
  as select from I_REArchtrObjCostCtrPlnActlC as _REArchtrObjectCostCtrPlnActl  
{

       @ObjectModel.foreignKey.association: '_SourceLedger'
  key  SourceLedger,
       @ObjectModel.foreignKey.association: '_Ledger'
  key  Ledger, 
       @ObjectModel.foreignKey.association: '_CompanyCode'
  key  CompanyCode,
       @ObjectModel.foreignKey.association: '_FiscalYear'
  key  FiscalYear,
       @ObjectModel.foreignKey.association: '_JournalEntry'
  key  AccountingDocument,
  key  FinancialPlanningReqTransSqnc,
  key  FinancialPlanningDataPacket,
  key  ActualPlanJournalEntryItem,
       REArchitectureObjectNumberSite,
       @ObjectModel.foreignKey.association: '_REArchitectureObjectSite'
       @EndUserText.label: 'Site'
       REArchitectureObjectParentUUID,
       //@ObjectModel.foreignKey.association: '_REArchitectureObject'
       REArchtrObjectNumberBldngLand,
       @ObjectModel.foreignKey.association: '_REArchtrObjectBuildingLand'
       @EndUserText.label: 'Building/Land'
       REArchitectureObjectUUID,
       
       //REGenericRentalObjParentUUID,
       @ObjectModel.foreignKey.association: '_REGnrcRentalObjPortfolio'
       @Consumption.valueHelpDefinition: [{association: '_REGnrcRentalObjPortfolio'}]      
       REGnrcRentalObjPortfolioID,

       ------------------------------------------------------------------------------------------
       -- ROWS
       ------------------------------------------------------------------------------------------
       @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
       GLAccount,

       AccountingDocumentType,
       ------------------------------------------------------------------------------------------
       -- FREE
       ------------------------------------------------------------------------------------------

       ------------------------------------------------------------------------------------------
       // TIME characteristics
       ------------------------------------------------------------------------------------------
       @ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
       @Semantics.fiscal.period: true
       FiscalPeriod,
       
       @ObjectModel.foreignKey.association: '_FiscalYearPeriodForVariant'
       @Semantics.fiscal.yearPeriod: true
       FiscalYearPeriod,
       
       @ObjectModel.foreignKey.association: '_FiscalYearVariant'
       @Semantics.fiscal.yearVariant: true
       FiscalYearVariant,
       
              
       @Semantics.fiscal.yearQuarter: true
       FiscalYearQuarter,

       @Semantics.fiscal.quarter: true
       FiscalQuarter,

       ------------------------------------------------------------------------------------------
       // ORG characteristics
       ------------------------------------------------------------------------------------------

       @ObjectModel.foreignKey.association: '_ChartOfAccounts'
       ChartOfAccounts,

       CompanyCodeCurrency,

       @ObjectModel.foreignKey.association: '_ProfitCenter'
       ProfitCenter,
    
       @ObjectModel.foreignKey.association: '_ControllingArea' 
       ControllingArea,
       
       AccountAssignmentType,

       ------------------------------------------------------------------------------------------
       // more characteristics
       ------------------------------------------------------------------------------------------

       BusinessTransactionType,
       
       @ObjectModel.foreignKey.association: '_CostCtrActivityType' 
       CostCtrActivityType,

       CostCenter,

       CostSourceUnit,

       Customer,

       CustomerGroup,

       FunctionalArea,

       GlobalCurrency,

       _REArchtrObjectCostCtrPlnActl.LedgerGLLineItem,

       @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
       @Semantics.fiscal.year: true
       LedgerFiscalYear,

       OrderID,

       @ObjectModel.foreignKey.association: '_PlanningCategory'
       PlanningCategory,

       ProjectExternalID,
       
       cast( PostingDate as budat preserving type ) as PostingDate,

       Segment,

       PartnerCompany, // = TradingPartner

       TransactionCurrency,

       WBSElementExternalID,

       BusinessArea,

       IsStatisticalOrder,

       IsStatisticalCostCenter,

       WBSIsStatisticalWBSElement,

       ------------------------------------------------------------------------------------------
       -- Key Figures
       ------------------------------------------------------------------------------------------
       //
       // Transaction Currency: WSL - hidden
       ------------------------------------------------------------------------------------------
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       @Aggregation.default: #SUM
       ActualAmountInCompanyCodeCrcy,
       @Semantics.amount.currencyCode: 'TransactionCurrency'
       @Aggregation.default: #SUM
       ActualAmountInTransactionCrcy,
       @Semantics.amount.currencyCode: 'GlobalCurrency'
       @Aggregation.default: #SUM
       ActualAmountInGlobalCurrency,

       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       @Aggregation.default: #SUM
       PlanAmountInCompanyCodeCrcy,
       @Semantics.amount.currencyCode: 'TransactionCurrency'
       @Aggregation.default: #SUM
       PlanAmountInTransactionCrcy,
       @Semantics.amount.currencyCode: 'GlobalCurrency'
       @Aggregation.default: #SUM
       PlanAmountInGlobalCurrency,
       
       @Semantics.amount.currencyCode: 'TransactionCurrency'
       @Aggregation.default: #SUM             
       AmountInTransactionCurrency,
       
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       @Aggregation.default: #SUM
       AmountInCompanyCodeCurrency,
       
       @Semantics.amount.currencyCode: 'GlobalCurrency'
       @Aggregation.default: #SUM
       AmountInGlobalCurrency,

       // Global Currency: KSL RKCUR -> hidden
       ------------------------------------------------------------------------------------------
       @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
       @Aggregation.default: #SUM
       ValuationQuantity,
       @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
       @Aggregation.default: #SUM
       ActualValuationQuantity,
       @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
       @Aggregation.default: #SUM
       PlanValuationQuantity,

       _SourceLedger,
       _Ledger,
       _CompanyCode,
       _FiscalYear,
       _JournalEntry,
       _GLAccountInChartOfAccounts,
       _GLAccountInCompanyCode,
       _LedgerFiscalYearForVariant,
       _FiscalYearPeriod,
       _FiscalPeriodForVariant,
       _FiscalYearPeriodForVariant,
       _ChartOfAccounts,
       _BusinessTransactionType,
       _CostCtrActivityType,
       _Customer,
       _CustomerGroup,
       _FunctionalArea,
       _PlanningCategory,
       _ProjectExternalID,
       _Segment,
       _PartnerCompany,
       _FiscalYearVariant,
       _CompanyCodeCurrency,
       _ProfitCenter,
       _ControllingArea,
       _CostCenter,
       _WBSElementExternalID,
       _InternalOrder,
       _Order,
       _AccountingDocumentType,
       _REArchitectureObject,
       _REArchitectureObjectSite,
       _REArchtrObjectBuildingLand,

       _REGnrcRentalObjPortfolio

}
```
