---
name: C_PUBSECBUDGETALERTQUERY
description: "Public Sector Budget Alert Query"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBUDGETALERTQUERY')/$value
semantic_en: "Public Sector Budget Alert Query"
semantic_vi: "Public Sector Budget Alert Query — CDS view tiêu dùng dựa trên Public Sector Budget Alert Query."
keywords:
  - "public"
  - "sector"
  - "budget"
  - "alert"
  - "query"
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
  - consumption-view
  - PSM-FM
  - PSM-FM-IS
---
# C_PUBSECBUDGETALERTQUERY

**Public Sector Budget Alert Query**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBUDGETALERTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CtrlObjForFund` |  | |  |  | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjForFunctionalArea` |  | |  |  | `CHAR(50)` | Control Object for a Functional Area |
| `CtrlObjForBudgetPeriod` |  | |  |  | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjForCostCenter` |  | |  |  | `CHAR(50)` | Control Object for a Cost Center |
| `CtrlObjForWBSElement` |  | |  |  | `CHAR(50)` | Control Object for a WBS Element |
| `CtrlObjForBudgetAccount` |  | |  |  | `CHAR(50)` | Control Object for a Budget Account |
| `CtrlObjForGrant` |  | |  |  | `CHAR(50)` | Control Object for a Grant |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `AvailabilityControlProfile` |  | |  |  | `CHAR(6)` | Budget Availability Control Profile for Public Sector Mgmt |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `BdgtConsumableExpnAmtInGCrcy` |  | |  |  | `CURR(25)` | Consumable Expense Amount in Global Currency |
| `BdgtConsumedExpnAmtInGCrcy` |  | |  |  | `CURR(25)` | Consumed Expense Amount in Global Currency |
| `BdgtAvailableExpnAmtInGCrcy` |  | |  |  | `CURR(25)` | Available Expense Amount in Global Currency |
| `NumberOfControlObjects` |  | |  |  | `INT4(10)` | Number of Document Items |
| `PubSecConsumedAmountInPercent` |  | |  | `cast( ratio_of( portion => cast( $projection.bdgtconsumedexpnamtingcrcy as abap.dec(23,2) ) , total => cast( $projection.bdgtconsumableexpnamtingcrcy as abap.dec(23,2) ) ) * 100 as psm_perc_of_cnsmd_amt )` | `DEC(5)` | Percentage of consumed amout of what is consumable. |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBUDGETALERTQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBUDGETALERTQUERY')/$value)*

```abap
@AccessControl: {
    authorizationCheck: #NOT_ALLOWED,
    personalData: {
        blocking: #REQUIRED
    }
}
@Metadata: {
    ignorePropagatedAnnotations: true
}
@ObjectModel: {
    usageType: {
        dataClass: #MIXED,
        sizeCategory: #XL,
        serviceQuality: #D
    },
    supportedCapabilities:[#ANALYTICAL_QUERY],
    modelingPattern: #ANALYTICAL_QUERY
}
@VDM: {
    viewType: #CONSUMPTION
}
@EndUserText.label: 'Public Sector Budget Alert Query'

@OData.publish: true

define transient view entity C_PubSecBudgetAlertQuery
  provider contract analytical_query
  with parameters
    // The business user name is used to default the company code from the users default values
    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser               : syuname,
    // This parameter defaults the constant to select Expense Only via this CDS view!
    // The include measures also reflect to only include the Expense side
    @Consumption.hidden: true
    @Consumption.defaultValue: 'E'
    P_PubSecBdgtAcctRevnExpnCode : psm_bdgt_acct_rev_or_exp,
    P_BudgetUsageThldInPercent   : psm_ctrl_obj_budget_usage // consumption level as threshold for comparisons -> 100 = full consumption
  as projection on I_PubSecBudgetAlertCube( P_PubSecBdgtAcctRevnExpnCode: $parameters.P_PubSecBdgtAcctRevnExpnCode,
                                            P_BudgetUsageThldInPercent: $parameters.P_BudgetUsageThldInPercent ) as Main
{
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false}
  @Consumption.derivation: {
     lookupEntity: 'I_UserSettingsForCompanyCode',
       resultElement: 'CompanyCode',
       binding:  [ {
         targetElement : 'BusinessUser' ,
         type : #PARAMETER,
         value : 'P_BusinessUser'
       } ]
  }
  @AnalyticsDetails.query.axis: #FREE
  //  @ObjectModel.text.element: [ 'CompanyCodeName' ]
  @UI.textArrangement: #TEXT_LAST
  Main.CompanyCode,
  @AnalyticsDetails.query.hidden : true
  Main.FinancialManagementArea,
  @AnalyticsDetails.query.hidden : true
  Main.ControllingArea,
  @AnalyticsDetails.query.axis: #FREE
  //  @ObjectModel.text.element: [ 'CtrlObjNameForFund' ]
  @UI.textArrangement: #TEXT_LAST
  Main.CtrlObjForFund,
  @AnalyticsDetails.query.axis: #FREE
  //  @ObjectModel.text.element: [ 'CtrlObjNameForFunctionalArea' ]
  @UI.textArrangement: #TEXT_LAST
  Main.CtrlObjForFunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  //  @ObjectModel.text.element: [ 'CtrlObjNameForBudgetPeriod' ]
  @UI.textArrangement: #TEXT_LAST
  Main.CtrlObjForBudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  //  @ObjectModel.text.element: [ 'CtrlObjNameForCostCenter' ]
  @UI.textArrangement: #TEXT_LAST
  Main.CtrlObjForCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  //  @ObjectModel.text.element: [ 'CtrlObjNameForWBSElement' ]
  @UI.textArrangement: #TEXT_LAST
  Main.CtrlObjForWBSElement,
  @AnalyticsDetails.query.axis: #FREE
  //  @ObjectModel.text.element: [ 'CtrlObjNameForBudgetAccount' ]
  @UI.textArrangement: #TEXT_LAST
  Main.CtrlObjForBudgetAccount,
  @AnalyticsDetails.query.axis: #FREE
  //  @ObjectModel.text.element: [ 'CtrlObjForGrantName' ]
  @UI.textArrangement: #TEXT_LAST
  Main.CtrlObjForGrant,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.valueHelpDefinition: [
    { entity:  { name:    'I_CurrencyStdVH',
                 element: 'Currency' }
    }]
  //  @ObjectModel.text.element: [ 'CurrencyShortName' ]
  Main.GlobalCurrency,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.valueHelpDefinition: [
     { entity:  { name:    'I_PubSecBdgtAcctRevnExpnCode',
                  element: 'PubSecBdgtAcctRevnExpnCode' }
     }]
  //  @ObjectModel.text.element: [ 'PubSecBdgtAcctRevnExpnCodeText' ]
  @UI.textArrangement: #TEXT_LAST
  Main.PubSecBdgtAcctRevnExpnCode,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.valueHelpDefinition: [
     { entity:  { name:    'I_PubSecAvailyCtrlProfile',
                  element: 'AvailabilityControlProfile' }
     }]
  //  @ObjectModel.text.element: [ 'AvailabilityControlProfileName' ]
  @UI.textArrangement: #TEXT_LAST
  Main.AvailabilityControlProfile,
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_PubSecPlanningCategory',
                  element: 'PlanningCategory' }
      }]
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true}
  Main.PlanningCategory,


  // Amounts and Values
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  Main.BdgtConsumableExpnAmtInGCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  Main.BdgtConsumedExpnAmtInGCrcy,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  Main.BdgtAvailableExpnAmtInGCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  Main.NumberOfControlObjects,

  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Consumed ratio (%)'
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.decimals: 2
  cast(
    ratio_of( portion => cast( $projection.bdgtconsumedexpnamtingcrcy as abap.dec(23,2) ) , total => cast( $projection.bdgtconsumableexpnamtingcrcy as abap.dec(23,2) ) ) * 100
  as psm_perc_of_cnsmd_amt ) as PubSecConsumedAmountInPercent,

  //  // Hierarchy ID's
  //  @Consumption.hidden: true
  //  Main.HierarchyIDForFund,
  //  @Consumption.hidden: true
  //  Main.HierarchyIDForFunctionalArea,
  //  @Consumption.hidden: true
  //  Main.HierarchyIDForBudgetPeriod,
  //  @Consumption.hidden: true
  //  Main.HierarchyIDForCostCenter,
  //  @Consumption.hidden: true
  //  Main.HierarchyIDForWBSElement,
  //  @Consumption.hidden: true
  //  Main.HierarchyIDForBudgetAccount,
  //  @Consumption.hidden: true
  //  Main.GrantHierarchy,

  //  // Texts
  //  Main._CtrlObjFund.CtrlObjNameForFund                                                                                                                                        as CtrlObjNameForFund,
  //  Main._CtrlObjFuncArea.CtrlObjNameForFunctionalArea                                                                                                                          as CtrlObjNameForFunctionalArea,
  //  Main._CtrlObjBdgtPeriod.CtrlObjNameForBudgetPeriod                                                                                                                          as CtrlObjNameForBudgetPeriod,
  //  Main._CtrlObjCostCenter.CtrlObjNameForCostCenter                                                                                                                            as CtrlObjNameForCostCenter,
  //  Main._CtrlObjWBSElement.CtrlObjNameForWBSElement                                                                                                                            as CtrlObjNameForWBSElement,
  //  Main._CtrlObjBdgtAccount.CtrlObjNameForBudgetAccount as CtrlObjNameForBudgetAccount,
  //  Main._CtrlObjGrant.CtrlObjForGrantName                                                                                                                                      as CtrlObjForGrantName,
  //  Main._PubSecBdgtAcctRevnExpnCode._Text.PubSecBdgtAcctRevnExpnCodeText                                                                                                            as PubSecBdgtAcctRevnExpnCodeText : localized,
  //  Main._PubSecAvailyCtrlProfile._Text.AvailabilityControlProfileName as AvailabilityControlProfileName : localized,
  //  Main._CompanyCode.CompanyCodeName                                                                           as CompanyCodeName,
  //  Main._GlobalCurrency._Text.CurrencyShortName                               as CurrencyShortName : localized,


  // Associations
  //  @Consumption.hidden: true
  //  Main._CtrlObjFund,
  //  @Consumption.hidden: true
  //  Main._CtrlObjFuncArea,
  //  @Consumption.hidden: true
  //  @UI.hidden: true
  //  Main._CtrlObjBdgtPeriod,
  //  @Consumption.hidden: true
  //  Main._CtrlObjCostCenter,
  //  @Consumption.hidden: true
  //  Main._CtrlObjWBSElement,
  //  @Consumption.hidden: true
  //  Main._CtrlObjBdgtAccount,
  //  @Consumption.hidden: true
  //  Main._CtrlObjGrant,
  @Consumption.hidden: true
  Main._GlobalCurrency,
  @Consumption.hidden: true
  Main._PubSecBdgtAcctRevnExpnCode,

  @Consumption.hidden: true
  Main._CompanyCode,
  @Consumption.hidden: true
  Main._ControllingArea,
  @Consumption.hidden: true
  Main._FinancialManagementArea

}
```
