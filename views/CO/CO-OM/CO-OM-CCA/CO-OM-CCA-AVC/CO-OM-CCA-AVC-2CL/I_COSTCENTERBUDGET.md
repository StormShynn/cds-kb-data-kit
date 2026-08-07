---
name: I_COSTCENTERBUDGET
description: Cost CenterBUDGET
app_component: CO-OM-CCA-AVC-2CL
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
  - cost-center
  - component:CO-OM-CCA-AVC-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTERBUDGET

**Cost CenterBUDGET**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-AVC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `KeyDate` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `FiscalYear` |  | |  |  |
| `FiscalPeriod` |  | |  |  |
| `BudgetCarryingCostCenter` |  | |  |  |
| `GLAccountHierarchy` |  | |  |  |
| `HierarchyNode` |  | |  |  |
| `GLAccountHierNodeSemanticKey` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `ChartOfAccounts` |  | |  |  |
| `OrderID` |  | |  |  |
| `AccountingDocumentType` |  | |  |  |
| `Customer` |  | |  |  |
| `Segment` |  | |  |  |
| `BusinessArea` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `Supplier` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `Plant` |  | |  |  |
| `ServiceDocumentType` |  | |  |  |
| `ValuationArea` |  | |  |  |
| `SalesDocument` |  | |  |  |
| `CostCenter` |  | |  |  |
| `GLAccount` |  | |  |  |
| `Ledger` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `PlanningCategory` |  | |  |  |
| `OrganizationDivision` |  | |  |  |
| `ServiceDocument` |  | |  |  |
| `FinancialAccountType` |  | |  |  |
| `AssetClass` |  | |  |  |
| `GlobalCurrency` |  | |  |  |
| `CompanyCodeCurrency` |  | |  |  |
| `LedgerFiscalYear` |  | |  |  |
| `FiscalYearVariant` |  | |  |  |
| `PredictionLedger` |  | |  |  |
| `PostingDate` |  | |  |  |
| `FunctionalArea` |  | |  |  |
| `BudgetCarryingCostCenterName` |  | |  |  |
| `CostCenterName` |  | |  |  |
| `GLAccountName` |  | |  |  |
| `HierarchyNodeText` |  | |  |  |
| `GLAccountHierarchyName` |  | |  |  |
| `PlanningCategoryName` |  | |  |  |
| `JointVenture` |  | |  |  |
| `JointVentureName` |  | |  |  |
| `JointVentureEquityGroup` |  | |  |  |
| `JointVentureEquityGroupName` |  | |  |  |
| `JointVentureRecoveryCode` |  | |  |  |
| `JointVentureRecoveryCodeName` |  | |  |  |
| `PlanAmountInCompanyCodeCrcy` |  | |  |  |
| `BudgetAmountInCompanyCodeCrcy` |  | |  |  |
| `ActualCostAmtInCCCrcy` |  | |  |  |
| `CmtmtCostInCCCrcy` |  | |  |  |
| `TotAssgdAmtInCoCodeCurrency` |  | |  |  |
| `AvailableBdgtAmtInCoCodeCrcy` |  | |  |  |
| `PlanAmountInGlobalCurrency` |  | |  |  |
| `BudgetInGlobalCrcy` |  | |  |  |
| `ActualCostInGlobalCrcy` |  | |  |  |
| `CmtmtCostInGlobalCurrency` |  | |  |  |
| `TotAssgdAmtInGlobalCurrency` |  | |  |  |
| `AvailableBudgetInGlobalCrcy` |  | |  |  |
| `_GlobalCurrency` | | ✓ | | |
| `_ControllingArea` | | ✓ | | |
| `_FiscalYear` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_FiscalPeriodForVariant` | | ✓ | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | |
| `_FiscalYearVariant` | | ✓ | | |
| `_GLAccountHierarchyNode` | | ✓ | | |
| `_Ledger` | | ✓ | | |
| `_Order` | | ✓ | | |
| `_AccountingDocumentType` | | ✓ | | |
| `_Customer` | | ✓ | | |
| `_CurrentProfitCenter` | | ✓ | | |
| `_CurrentCostCenter` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_GLAccountInCompanyCode` | | ✓ | | |
| `_SalesDocument` | | ✓ | | |
| `_ServiceDocument` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GlobalCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cost Center Budget Report'
@AbapCatalog.sqlViewName: 'ICSTCNTRBDGT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:#MIXED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: 
   [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations: true
   
define view I_CostCenterBudget
  with parameters
    P_KeyDate                : vdm_v_key_date,
    P_BudgetPlanningCategory : fcom_category,
    P_InputPlanningCategory  : fcom_category,
    P_LeadingLedger          : fins_ledger,
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language               : spras

  as select from P_CostCenterBudget ( P_KeyDate                : :P_KeyDate,
                                      P_BudgetPlanningCategory : :P_BudgetPlanningCategory,
                                      P_InputPlanningCategory  : :P_InputPlanningCategory,
                                      P_Language               : :P_Language,
                                      P_LeadingLedger          : :P_LeadingLedger )

  association [0..1] to I_Currency as _GlobalCurrency on $projection.GlobalCurrency = _GlobalCurrency.Currency

{
  KeyDate,
  ControllingArea,
  FiscalYear,
  FiscalPeriod,
  BudgetCarryingCostCenter,
  GLAccountHierarchy,
  HierarchyNode,

  GLAccountHierNodeSemanticKey,
  CompanyCode,
  ChartOfAccounts,

  // for DCL (authority check):
  @ObjectModel.foreignKey.association: null
  OrderID,
  @ObjectModel.foreignKey.association: null
  AccountingDocumentType,
  @ObjectModel.foreignKey.association: null
  Customer,
  @ObjectModel.foreignKey.association: null
  Segment,
  @ObjectModel.foreignKey.association: null
  BusinessArea,
  @ObjectModel.foreignKey.association: null
  ProfitCenter,
  @ObjectModel.foreignKey.association: null
  Supplier,
  @ObjectModel.foreignKey.association: null
  SalesOrganization,
  @ObjectModel.foreignKey.association: null
  Plant,
  @ObjectModel.foreignKey.association: null
  ServiceDocumentType,
  @ObjectModel.foreignKey.association: null
  ValuationArea,
  @ObjectModel.foreignKey.association: null
  SalesDocument,
  @ObjectModel.foreignKey.association: null
  CostCenter,
  @ObjectModel.foreignKey.association: null
  GLAccount,
  @ObjectModel.foreignKey.association: null
  Ledger,
  @ObjectModel.foreignKey.association: null
  DistributionChannel,
  @ObjectModel.foreignKey.association: null
  PlanningCategory,
  @ObjectModel.foreignKey.association: null
  OrganizationDivision,
  @ObjectModel.foreignKey.association: null
  ServiceDocument,
  @ObjectModel.foreignKey.association: null
  FinancialAccountType,
  @ObjectModel.foreignKey.association: null
  AssetClass,
  @Semantics.currencyCode: true
  GlobalCurrency,
  @Semantics.currencyCode: true
  CompanyCodeCurrency,
  LedgerFiscalYear,
  FiscalYearVariant,
  PredictionLedger,
  PostingDate,
  FunctionalArea,
  BudgetCarryingCostCenterName,
  CostCenterName,
  GLAccountName,
  HierarchyNodeText,
  GLAccountHierarchyName,          //added 
  PlanningCategoryName,            //added 
  
  
  JointVenture,                    //added  JVA
  JointVentureName,                //added  JVA
  JointVentureEquityGroup,         //added  JVA
  JointVentureEquityGroupName,     //added  JVA
  JointVentureRecoveryCode,        //added  JVA
  JointVentureRecoveryCodeName,    //added  JVA
   
  
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  PlanAmountInCompanyCodeCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  BudgetAmountInCompanyCodeCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  ActualCostAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  CmtmtCostInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  TotAssgdAmtInCoCodeCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  AvailableBdgtAmtInCoCodeCrcy,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  PlanAmountInGlobalCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  BudgetInGlobalCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  ActualCostInGlobalCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  CmtmtCostInGlobalCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  TotAssgdAmtInGlobalCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  AvailableBudgetInGlobalCrcy,

  _ControllingArea,
  _GlobalCurrency,
  _FiscalYear,
  _CompanyCode,
  _FiscalPeriodForVariant,
  _LedgerFiscalYearForVariant,
  _FiscalYearVariant,
  _GLAccountHierarchyNode,

  // associations for DCL (authority check)
  _Ledger,
  _Order,
  _AccountingDocumentType,
  _Customer,
  _CurrentProfitCenter,
  _CurrentCostCenter,
  _Supplier,
  _GLAccountInCompanyCode,
  _SalesDocument,
  _ServiceDocument

}

where
  BudgetCarryingCostCenter <> ''
```
