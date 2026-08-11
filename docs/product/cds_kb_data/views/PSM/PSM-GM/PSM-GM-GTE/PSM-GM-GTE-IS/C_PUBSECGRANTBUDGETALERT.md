---
name: C_PUBSECGRANTBUDGETALERT
description: "Grant Budget Alert Analysis"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBUDGETALERT')/$value
semantic_en: "Grant Budget Alert Analysis"
semantic_vi: "Grant Budget Alert Analysis — CDS view tiêu dùng dựa trên I_PubSecGrantBudgetAlert."
keywords:
  - "grant"
  - "budget"
  - "alert"
  - "analysis"
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
  - component:PSM-GM-GTE-IS
  - consumption-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
---
# C_PUBSECGRANTBUDGETALERT

**Grant Budget Alert Analysis**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBUDGETALERT')/$value) |

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
| `CtrlObjNameForFund` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Fund |
| `CtrlObjNameForFunctionalArea` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Functional Area |
| `CtrlObjNameForBudgetPeriod` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Budget Period |
| `CtrlObjNameForCostCenter` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Cost Center |
| `CtrlObjNameForWBSElement` |  | |  |  | `CHAR(50)` | Name of a Control Object for a WBS Element |
| `CtrlObjForGrantName` |  | |  |  | `CHAR(50)` | Control Object for a Grant |
| `PubSecBdgtAcctRevnExpnCodeText` |  | |  | `Main._PubSecBdgtAcctRevnExpnCode._Text[1:Language = $session.system_language].PubSecBdgtAcctRevnExpnCodeText` | `CHAR(60)` | Description of Expense or Revenue on Budget Account |
| `CtrlObjNameForBudgetAccount` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Budget Account |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `CurrencyName` |  | |  | `Main._GlobalCurrency._Text[1:Language = $session.system_language].CurrencyName` | `CHAR(40)` | Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBUDGETALERT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBUDGETALERT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSGRBGTALERTC'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.personalData.blockingIndicator: ['#NOT_REQUIRED']
@EndUserText.label: 'Grant Budget Alert Analysis'

@VDM.viewType: #CONSUMPTION
@Search.searchable: false
@Metadata.allowExtensions: true
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #X,
         sizeCategory: #XL
     }
}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@Analytics.internalName: #LOCAL
@Analytics.dataCategory: #CUBE
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations: true

@OData.publish: true

define view C_PubSecGrantBudgetAlert
  with parameters
    // This parameter defaults the constant to select Expense Only via this CDS view!
    // The include measures also reflect to only include the Expense side
    @Consumption.hidden: true
    @Consumption.defaultValue: 'E'
    //@Consumption.valueHelpDefinition: [
    //   { entity:  { name:    'I_PubSecBdgtAcctRevnExpnCode',
    //                element: 'PubSecBdgtAcctRevnExpnCode' }
    //} ]
    P_PubSecBdgtAcctRevnExpnCode : psm_bdgt_acct_rev_or_exp,
    P_BudgetUsageThldInPercent   : psm_ctrl_obj_budget_usage // consumption level as threshold for comparisons -> 100 = full consumption
  as select from I_PubSecGrantBudgetAlert (  P_PubSecBdgtAcctRevnExpnCode: :P_PubSecBdgtAcctRevnExpnCode,
                                     P_BudgetUsageThldInPercent: :P_BudgetUsageThldInPercent ) as Main
{
      @ObjectModel.text.element: 'CompanyCodeName'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key Main.CompanyCode,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
  key Main.FinancialManagementArea,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key Main.ControllingArea,
      @ObjectModel.text.element: 'CtrlObjNameForFund'
  key Main.CtrlObjForFund,
      @ObjectModel.text.element: 'CtrlObjNameForFunctionalArea'
  key Main.CtrlObjForFunctionalArea,
      @ObjectModel.text.element: 'CtrlObjNameForBudgetPeriod'
  key Main.CtrlObjForBudgetPeriod,
      @ObjectModel.text.element: 'CtrlObjNameForCostCenter'
  key Main.CtrlObjForCostCenter,
      @ObjectModel.text.element: 'CtrlObjNameForWBSElement'
  key Main.CtrlObjForWBSElement,
      @ObjectModel.text.element: 'CtrlObjNameForBudgetAccount'
  key Main.CtrlObjForBudgetAccount,
      @ObjectModel.text.element: 'CtrlObjForGrantName'
  key Main.CtrlObjForGrant,
  key Main.CtrlObjForSponsoredClass,
  key Main.CtrlObjForSponsoredProgram,
  key Main.CtrlObjForBdgtValidityNmbr,
//     @ObjectModel.text.element: 'CurrencyName'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
  key Main.GlobalCurrency,
      @ObjectModel.text.element: 'PubSecBdgtAcctRevnExpnCodeText'
      @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_PubSecBdgtAcctRevnExpnCode',
                      element: 'PubSecBdgtAcctRevnExpnCode' }
         }]
  key Main.PubSecBdgtAcctRevnExpnCode,

      // Amounts and Values
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast( Main.BdgtConsumableAmtInGlobalCrcy as psm_amt_expn_cbdgt_grp_curr preserving type )                    as BdgtConsumableExpnAmtInGCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast( Main.BdgtConsumedAmtInGlobalCrcy as psm_amt_expn_cpost_grp_curr preserving type )                      as BdgtConsumedExpnAmtInGCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast( Main.BdgtAvailableAmtInGlobalCrcy as psm_amt_expn_avail_grp_curr preserving type )                     as BdgtAvailableExpnAmtInGCrcy,

      @DefaultAggregation: #SUM
      Main.NumberOfControlObjects,

      // Hierarchy ID's
      @Consumption.hidden: true
      Main.HierarchyIDForFund,
      @Consumption.hidden: true
      Main.HierarchyIDForFunctionalArea,
      @Consumption.hidden: true
      Main.HierarchyIDForBudgetPeriod,
      @Consumption.hidden: true
      Main.HierarchyIDForCostCenter,
      @Consumption.hidden: true
      Main.HierarchyIDForWBSElement,
      @Consumption.hidden: true
      Main.HierarchyIDForBudgetAccount,
      @Consumption.hidden: true
      Main.GrantHierarchy,
      @Consumption.hidden: true
      Main.SponsoredClassHierarchy,
      @Consumption.hidden: true
      Main.SponsoredProgramHierarchy,

      // Texts
      Main._CtrlObjFund.CtrlObjNameForFund                                                                         as CtrlObjNameForFund,
      Main._CtrlObjFuncArea.CtrlObjNameForFunctionalArea                                                           as CtrlObjNameForFunctionalArea,
      Main._CtrlObjBdgtPeriod.CtrlObjNameForBudgetPeriod                                                           as CtrlObjNameForBudgetPeriod,
      Main._CtrlObjCostCenter.CtrlObjNameForCostCenter                                                             as CtrlObjNameForCostCenter,
      Main._CtrlObjWBSElement.CtrlObjNameForWBSElement                                                             as CtrlObjNameForWBSElement,
      Main._CtrlObjGrant.CtrlObjForGrantName                                                                       as CtrlObjForGrantName,
      Main._PubSecBdgtAcctRevnExpnCode._Text[1:Language = $session.system_language].PubSecBdgtAcctRevnExpnCodeText as PubSecBdgtAcctRevnExpnCodeText,
      Main._CtrlObjBdgtAccount.CtrlObjNameForBudgetAccount                                                         as CtrlObjNameForBudgetAccount,
      Main._CompanyCode.CompanyCodeName                                                                            as CompanyCodeName,
      Main._GlobalCurrency._Text[1:Language = $session.system_language].CurrencyName                               as CurrencyName,

      // Associations
      @Consumption.hidden: true
      Main._BdgtCnsmpnAnalysis,
      @Consumption.hidden: true
      Main._CompanyCode,
      @Consumption.hidden: true
      Main._ControllingArea,
      @Consumption.hidden: true
      Main._FinancialManagementArea,
      @Consumption.hidden: true
      Main._PubSecBdgtAcctRevnExpnCode
}
```
