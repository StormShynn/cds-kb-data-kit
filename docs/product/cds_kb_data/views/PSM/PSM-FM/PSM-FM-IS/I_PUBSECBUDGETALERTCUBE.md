---
name: I_PUBSECBUDGETALERTCUBE
description: "Public Sector Budget Alert - Cube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBUDGETALERTCUBE')/$value
semantic_en: "Public Sector Budget Alert - Cube"
semantic_vi: "Public Sector Budget Alert - Cube — CDS view tổng hợp dựa trên P_PubSecCtrlObjCalcAggEnh."
keywords:
  - "public"
  - "sector"
  - "budget"
  - "alert"
  - "cube"
  - "company"
  - "code"
  - "financial"
  - "management"
  - "area"
  - "controlling"
  - "ctrl"
  - "fund"
  - "functional"
tags:
  - PSM
  - budget
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
---
# I_PUBSECBUDGETALERTCUBE

**Public Sector Budget Alert - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBUDGETALERTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialManagementArea` | ✓ | |  |  | `CHAR(4)` | Financial Management Area |
| `ControllingArea` | ✓ | |  |  | `CHAR(4)` | Controlling Area |
| `CtrlObjForFund` | ✓ | |  |  | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjForFunctionalArea` | ✓ | |  |  | `CHAR(50)` | Control Object for a Functional Area |
| `CtrlObjForBudgetPeriod` | ✓ | |  |  | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjForCostCenter` | ✓ | |  |  | `CHAR(50)` | Control Object for a Cost Center |
| `CtrlObjForWBSElement` | ✓ | |  |  | `CHAR(50)` | Control Object for a WBS Element |
| `CtrlObjForBudgetAccount` | ✓ | |  |  | `CHAR(50)` | Control Object for a Budget Account |
| `CtrlObjForGrant` | ✓ | |  |  | `CHAR(50)` | Control Object for a Grant |
| `CtrlObjForSponsoredClass` | ✓ | |  |  | `CHAR(50)` | Control Object for a Sponsored Class |
| `CtrlObjForSponsoredProgram` | ✓ | |  |  | `CHAR(50)` | Control Object for a Sponsored Program |
| `CtrlObjForBdgtValidityNmbr` | ✓ | |  |  | `CHAR(23)` | Control Object for a Budget Validity Number |
| `GlobalCurrency` | ✓ | |  |  | `CUKY(5)` | Global Currency |
| `PubSecBdgtAcctRevnExpnCode` | ✓ | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `AvailabilityControlProfile` | ✓ | |  |  | `CHAR(6)` | Budget Availability Control Profile for Public Sector Mgmt |
| `BdgtConsumableExpnAmtInGCrcy` |  | |  | `cast( Main.BdgtConsumableAmtInGlobalCrcy as psm_amt_expn_cbdgt_grp_curr preserving type )` | `CURR(25)` | Consumable Expense Amount in Global Currency |
| `BdgtConsumedExpnAmtInGCrcy` |  | |  | `cast( Main.BdgtConsumedAmtInGlobalCrcy as psm_amt_expn_cpost_grp_curr preserving type )` | `CURR(25)` | Consumed Expense Amount in Global Currency |
| `BdgtAvailableExpnAmtInGCrcy` |  | |  | `cast( Main.BdgtAvailableAmtInGlobalCrcy as psm_amt_expn_avail_grp_curr preserving type )` | `CURR(25)` | Available Expense Amount in Global Currency |
| `NumberOfControlObjects` |  | |  |  | `INT4(10)` | Number of Document Items |
| `HierarchyIDForFund` |  | |  |  | `CHAR(42)` | Hierarchy ID for Fund |
| `HierarchyIDForFunctionalArea` |  | |  |  | `CHAR(42)` | Hierarchy ID for Functional Area |
| `HierarchyIDForBudgetPeriod` |  | |  |  | `CHAR(42)` | Hierarchy ID for Budget Period |
| `HierarchyIDForCostCenter` |  | |  |  | `CHAR(42)` | Hierarchy ID for Cost Center |
| `HierarchyIDForWBSElement` |  | |  |  | `CHAR(42)` | Hierarchy ID for WBS Element |
| `HierarchyIDForBudgetAccount` |  | |  |  | `CHAR(42)` | Hierarchy ID for Budget Account Element |
| `GrantHierarchy` |  | |  |  | `CHAR(42)` | Grant Hierarchy |
| `SponsoredClassHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Class Hierarchy |
| `SponsoredProgramHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Program Hierarchy |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_CtrlObjFund` | | ✓ | | | | |
| `_CtrlObjFuncArea` | | ✓ | | | | |
| `_CtrlObjBdgtPeriod` | | ✓ | | | | |
| `_CtrlObjCostCenter` | | ✓ | | | | |
| `_CtrlObjWBSElement` | | ✓ | | | | |
| `_CtrlObjBdgtAccount` | | ✓ | | | | |
| `_CtrlObjGrant` | | ✓ | | | | |
| `_CtrlObjSpnsrdClass` | | ✓ | | | | |
| `_CtrlObjSpnsrdProg` | | ✓ | | | | |
| `_PubSecFundHier` | | ✓ | | | | |
| `_PubSecFunctionalAreaHier` | | ✓ | | | | |
| `_PubSecBudgetPeriodHier` | | ✓ | | | | |
| `_PubSecCostCenterHier` | | ✓ | | | | |
| `_PubSecWBSElementHier` | | ✓ | | | | |
| `_PubSecBudgetAccountHier` | | ✓ | | | | |
| `_PubSecGrantHier` | | ✓ | | | | |
| `_PubSecSpnsrdClassHier` | | ✓ | | | | |
| `_PubSecSpnsrdProgHier` | | ✓ | | | | |
| `_PubSecBdgtAcctRevnExpnCode` | | ✓ | | | | |
| `_PubSecAvailyCtrlProfile` | | ✓ | | | | |
| `_BdgtCnsmpnAnalysis` | | ✓ | | | | |
| `_PlanningCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_FinancialManagementArea` | `I_FinancialManagementArea` | [0..1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_CtrlObjFund` | `I_PubSecCtrlObjFund` | [0..1] |
| `_CtrlObjFuncArea` | `I_PubSecCtrlObjFuncArea` | [0..1] |
| `_CtrlObjBdgtPeriod` | `I_PubSecCtrlObjBdgtPeriod` | [0..1] |
| `_CtrlObjCostCenter` | `I_PubSecCtrlObjCostCenter` | [0..1] |
| `_CtrlObjWBSElement` | `I_PubSecCtrlObjWBSElement` | [0..1] |
| `_CtrlObjBdgtAccount` | `I_PubSecCtrlObjBdgtAccount` | [0..1] |
| `_CtrlObjGrant` | `I_PubSecCtrlObjGrant` | [0..1] |
| `_CtrlObjSpnsrdClass` | `I_PubSecCtrlObjSpnsrdClass` | [0..1] |
| `_CtrlObjSpnsrdProg` | `I_PubSecCtrlObjSpnsrdProg` | [0..1] |
| `_PubSecFundHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecFunctionalAreaHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecBudgetPeriodHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecCostCenterHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecWBSElementHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecBudgetAccountHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecGrantHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecSpnsrdClassHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecSpnsrdProgHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecBdgtAcctRevnExpnCode` | `I_PubSecBdgtAcctRevnExpnCode` | [0..1] |
| `_PubSecAvailyCtrlProfile` | `I_PubSecAvailyCtrlProfile` | [0..1] |
| `_BdgtCnsmpnAnalysis` | `I_PubSecBdgtCnsmpnAnalysis` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBUDGETALERTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBUDGETALERTCUBE')/$value)*

```abap
@AbapCatalog: {
    viewEnhancementCategory: [ #NONE ]
}
@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData: {
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@Analytics: {
    dataCategory: #CUBE,
    internalName: #LOCAL,
    dataExtraction: {
      enabled: false
    }
}
@Metadata: {
    allowExtensions: true,
    ignorePropagatedAnnotations: true
}
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XL
     },
     modelingPattern: #ANALYTICAL_CUBE,
     supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
}
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Public Sector Budget Alert - Cube'

define view entity I_PubSecBudgetAlertCube
  with parameters
    // This parameter defaults the constant to select Expense Only via this CDS view!
    // The include measures also reflect to only include the Expense side
    @Consumption.hidden: true
    @Consumption.defaultValue: 'E'
    P_PubSecBdgtAcctRevnExpnCode : psm_bdgt_acct_rev_or_exp,
    P_BudgetUsageThldInPercent   : psm_ctrl_obj_budget_usage // consumption level as threshold for comparisons -> 100 = full consumption
  as select from P_PubSecCtrlObjCalcAggEnh( P_PubSecBdgtAcctRevnExpnCode: $parameters.P_PubSecBdgtAcctRevnExpnCode,
                                            P_BudgetUsageThldInPercent: $parameters.P_BudgetUsageThldInPercent) as Main
  association [1..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ControllingArea            as _ControllingArea            on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_FinancialManagementArea    as _FinancialManagementArea    on  $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea
  association [0..1] to I_Currency                   as _GlobalCurrency             on  $projection.GlobalCurrency = _GlobalCurrency.Currency
  association [0..1] to I_PubSecCtrlObjFund          as _CtrlObjFund                on  $projection.CtrlObjForFund     = _CtrlObjFund.CtrlObjForFund
                                                                                    and $projection.HierarchyIDForFund = _CtrlObjFund.HierarchyIDForFund
  association [0..1] to I_PubSecCtrlObjFuncArea      as _CtrlObjFuncArea            on  $projection.CtrlObjForFunctionalArea     = _CtrlObjFuncArea.CtrlObjForFunctionalArea
                                                                                    and $projection.HierarchyIDForFunctionalArea = _CtrlObjFuncArea.HierarchyIDForFunctionalArea
  association [0..1] to I_PubSecCtrlObjBdgtPeriod    as _CtrlObjBdgtPeriod          on  $projection.CtrlObjForBudgetPeriod     = _CtrlObjBdgtPeriod.CtrlObjForBudgetPeriod
                                                                                    and $projection.HierarchyIDForBudgetPeriod = _CtrlObjBdgtPeriod.HierarchyIDForBudgetPeriod
  association [0..1] to I_PubSecCtrlObjCostCenter    as _CtrlObjCostCenter          on  $projection.CtrlObjForCostCenter     = _CtrlObjCostCenter.CtrlObjForCostCenter
                                                                                    and $projection.HierarchyIDForCostCenter = _CtrlObjCostCenter.HierarchyIDForCostCenter
  association [0..1] to I_PubSecCtrlObjWBSElement    as _CtrlObjWBSElement          on  $projection.CtrlObjForWBSElement     = _CtrlObjWBSElement.CtrlObjForWBSElement
                                                                                    and $projection.HierarchyIDForWBSElement = _CtrlObjWBSElement.HierarchyIDForWBSElement
  association [0..1] to I_PubSecCtrlObjBdgtAccount   as _CtrlObjBdgtAccount         on  $projection.CtrlObjForBudgetAccount     = _CtrlObjBdgtAccount.CtrlObjForBudgetAccount
                                                                                    and $projection.HierarchyIDForBudgetAccount = _CtrlObjBdgtAccount.HierarchyIDForBudgetAccount
  association [0..1] to I_PubSecCtrlObjGrant         as _CtrlObjGrant               on  $projection.CtrlObjForGrant = _CtrlObjGrant.CtrlObjForGrant
                                                                                    and $projection.GrantHierarchy  = _CtrlObjGrant.GrantHierarchy
  association [0..1] to I_PubSecCtrlObjSpnsrdClass   as _CtrlObjSpnsrdClass         on  $projection.CtrlObjForSponsoredClass = _CtrlObjSpnsrdClass.CtrlObjForSponsoredClass
                                                                                    and $projection.SponsoredClassHierarchy  = _CtrlObjSpnsrdClass.SponsoredClassHierarchy
  association [0..1] to I_PubSecCtrlObjSpnsrdProg    as _CtrlObjSpnsrdProg          on  $projection.CtrlObjForSponsoredProgram = _CtrlObjSpnsrdProg.CtrlObjForSponsoredProgram
                                                                                    and $projection.SponsoredProgramHierarchy  = _CtrlObjSpnsrdProg.SponsoredProgramHierarchy
  association [0..1] to I_PubSecHierarchy            as _PubSecFundHier             on  $projection.HierarchyIDForFund = _PubSecFundHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecFunctionalAreaHier   on  $projection.HierarchyIDForFunctionalArea = _PubSecFunctionalAreaHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecBudgetPeriodHier     on  $projection.HierarchyIDForBudgetPeriod = _PubSecBudgetPeriodHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecCostCenterHier       on  $projection.HierarchyIDForCostCenter = _PubSecCostCenterHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecWBSElementHier       on  $projection.HierarchyIDForWBSElement = _PubSecWBSElementHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecBudgetAccountHier    on  $projection.HierarchyIDForBudgetAccount = _PubSecBudgetAccountHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecGrantHier            on  $projection.GrantHierarchy = _PubSecGrantHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecSpnsrdClassHier      on  $projection.SponsoredClassHierarchy = _PubSecSpnsrdClassHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecSpnsrdProgHier       on  $projection.SponsoredProgramHierarchy = _PubSecSpnsrdProgHier.HierarchyID
  association [0..1] to I_PubSecBdgtAcctRevnExpnCode as _PubSecBdgtAcctRevnExpnCode on  $projection.PubSecBdgtAcctRevnExpnCode = _PubSecBdgtAcctRevnExpnCode.PubSecBdgtAcctRevnExpnCode
  association [0..1] to I_PubSecAvailyCtrlProfile    as _PubSecAvailyCtrlProfile    on  $projection.AvailabilityControlProfile = _PubSecAvailyCtrlProfile.AvailabilityControlProfile
  // For Authorization
  association [1..*] to I_PubSecBdgtCnsmpnAnalysis   as _BdgtCnsmpnAnalysis         on  Main.CompanyCode                = _BdgtCnsmpnAnalysis.CompanyCode
                                                                                    and Main.FinancialManagementArea    = _BdgtCnsmpnAnalysis.FinancialManagementArea
                                                                                    and Main.ControllingArea            = _BdgtCnsmpnAnalysis.ControllingArea
                                                                                    and Main.CtrlObjForFund             = _BdgtCnsmpnAnalysis.CtrlObjForFund
                                                                                    and Main.CtrlObjForFunctionalArea   = _BdgtCnsmpnAnalysis.CtrlObjForFunctionalArea
                                                                                    and Main.CtrlObjForBudgetPeriod     = _BdgtCnsmpnAnalysis.CtrlObjForBudgetPeriod
                                                                                    and Main.CtrlObjForCostCenter       = _BdgtCnsmpnAnalysis.CtrlObjForCostCenter
                                                                                    and Main.CtrlObjForWBSElement       = _BdgtCnsmpnAnalysis.CtrlObjForWBSElement
                                                                                    and Main.CtrlObjForGrant            = _BdgtCnsmpnAnalysis.CtrlObjForGrant
                                                                                    and Main.CtrlObjForSponsoredClass   = _BdgtCnsmpnAnalysis.CtrlObjForSponsoredClass
                                                                                    and Main.CtrlObjForSponsoredProgram = _BdgtCnsmpnAnalysis.CtrlObjForSponsoredProgram
                                                                                    and Main.CtrlObjForBudgetAccount    = _BdgtCnsmpnAnalysis.CtrlObjForBudgetAccount
                                                                                    and Main.GlobalCurrency             = _BdgtCnsmpnAnalysis.GlobalCurrency
                                                                                    and Main.PubSecBdgtAcctRevnExpnCode = _BdgtCnsmpnAnalysis.PubSecBdgtAcctRevnExpnCode

{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key Main.CompanyCode,
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
  key Main.FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key Main.ControllingArea,
      @ObjectModel.foreignKey.association: '_CtrlObjFund'
  key Main.CtrlObjForFund,
      @ObjectModel.foreignKey.association: '_CtrlObjFuncArea'
  key Main.CtrlObjForFunctionalArea,
      @ObjectModel.foreignKey.association: '_CtrlObjBdgtPeriod'
  key Main.CtrlObjForBudgetPeriod,
      @ObjectModel.foreignKey.association: '_CtrlObjCostCenter'
  key Main.CtrlObjForCostCenter,
      @ObjectModel.foreignKey.association: '_CtrlObjWBSElement'
  key Main.CtrlObjForWBSElement,
      @ObjectModel.foreignKey.association: '_CtrlObjBdgtAccount'
  key Main.CtrlObjForBudgetAccount,
      @ObjectModel.foreignKey.association: '_CtrlObjGrant'
  key Main.CtrlObjForGrant,
      @ObjectModel.foreignKey.association: '_CtrlObjSpnsrdClass'
  key Main.CtrlObjForSponsoredClass,
      @ObjectModel.foreignKey.association: '_CtrlObjSpnsrdProg'
  key Main.CtrlObjForSponsoredProgram,
  key Main.CtrlObjForBdgtValidityNmbr,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      //      @Semantics.currencyCode: true
  key Main.GlobalCurrency,
      @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_PubSecBdgtAcctRevnExpnCode',
                      element: 'PubSecBdgtAcctRevnExpnCode' }
         }]
      @ObjectModel.foreignKey.association: '_PubSecBdgtAcctRevnExpnCode'
  key Main.PubSecBdgtAcctRevnExpnCode,
      @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_PubSecAvailyCtrlProfile',
                      element: 'AvailabilityControlProfile' }
         }]
      @ObjectModel.foreignKey.association: '_PubSecAvailyCtrlProfile'
  key Main.AvailabilityControlProfile,

      // Amounts and Values
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      cast( Main.BdgtConsumableAmtInGlobalCrcy as psm_amt_expn_cbdgt_grp_curr preserving type ) as BdgtConsumableExpnAmtInGCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      cast( Main.BdgtConsumedAmtInGlobalCrcy as psm_amt_expn_cpost_grp_curr preserving type )   as BdgtConsumedExpnAmtInGCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      cast( Main.BdgtAvailableAmtInGlobalCrcy as psm_amt_expn_avail_grp_curr preserving type )  as BdgtAvailableExpnAmtInGCrcy,

      @EndUserText.label: 'Number of Control Objects'
      @Aggregation.default: #SUM
      Main.NumberOfControlObjects,

      // Hierarchy ID's
      @ObjectModel.foreignKey.association: '_PubSecFundHier'
      Main.HierarchyIDForFund,
      @ObjectModel.foreignKey.association: '_PubSecFunctionalAreaHier'
      Main.HierarchyIDForFunctionalArea,
      @ObjectModel.foreignKey.association: '_PubSecBudgetPeriodHier'
      Main.HierarchyIDForBudgetPeriod,
      @ObjectModel.foreignKey.association: '_PubSecCostCenterHier'
      Main.HierarchyIDForCostCenter,
      @ObjectModel.foreignKey.association: '_PubSecWBSElementHier'
      Main.HierarchyIDForWBSElement,
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountHier'
      Main.HierarchyIDForBudgetAccount,
      @ObjectModel.foreignKey.association: '_PubSecGrantHier'
      Main.GrantHierarchy,
      @ObjectModel.foreignKey.association: '_PubSecSpnsrdClassHier'
      Main.SponsoredClassHierarchy,
      @ObjectModel.foreignKey.association: '_PubSecSpnsrdProgHier'
      Main.SponsoredProgramHierarchy,
      @ObjectModel.foreignKey.association: '_PlanningCategory'
      Main.PlanningCategory,




      // Associations
      _CtrlObjFund,
      _CtrlObjFuncArea,
      _CtrlObjBdgtPeriod,
      _CtrlObjCostCenter,
      _CtrlObjWBSElement,
      _CtrlObjBdgtAccount,
      _CtrlObjGrant,
      _CtrlObjSpnsrdClass,
      _CtrlObjSpnsrdProg,
      _PubSecFundHier,
      _PubSecFunctionalAreaHier,
      _PubSecBudgetPeriodHier,
      _PubSecCostCenterHier,
      _PubSecWBSElementHier,
      _PubSecBudgetAccountHier,
      _PubSecGrantHier,
      _PubSecSpnsrdClassHier,
      _PubSecSpnsrdProgHier,
      _PubSecBdgtAcctRevnExpnCode,
      _PubSecAvailyCtrlProfile,
      _CompanyCode,
      _ControllingArea,
      _FinancialManagementArea,
      _GlobalCurrency,
      _BdgtCnsmpnAnalysis,
      _PlanningCategory


}
group by
  CompanyCode,
  FinancialManagementArea,
  ControllingArea,
  CtrlObjForFund,
  CtrlObjForFunctionalArea,
  CtrlObjForBudgetPeriod,
  CtrlObjForCostCenter,
  CtrlObjForWBSElement,
  CtrlObjForBudgetAccount,
  CtrlObjForGrant,
  CtrlObjForSponsoredClass,
  CtrlObjForSponsoredProgram,
  CtrlObjForBdgtValidityNmbr,
  GlobalCurrency,
  PubSecBdgtAcctRevnExpnCode,
  AvailabilityControlProfile,
  NumberOfControlObjects,
  BdgtConsumedAmtInGlobalCrcy,
  BdgtConsumableAmtInGlobalCrcy,
  BdgtAvailableAmtInGlobalCrcy,
  HierarchyIDForFund,
  HierarchyIDForFunctionalArea,
  HierarchyIDForBudgetPeriod,
  HierarchyIDForCostCenter,
  HierarchyIDForWBSElement,
  HierarchyIDForBudgetAccount,
  GrantHierarchy,
  SponsoredClassHierarchy,
  SponsoredProgramHierarchy,
  PlanningCategory
```
