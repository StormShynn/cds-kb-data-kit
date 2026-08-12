---
name: C_PUBSECGRANTBUDGETALRTQRY
description: "Grant Budget Alert Query"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBUDGETALRTQRY')/$value
semantic_en: "Grant Budget Alert Query"
semantic_vi: "Grant Budget Alert Query — CDS view tiêu dùng dựa trên Grant Budget Alert Query."
keywords:
  - "grant"
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
  - "period"
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE-IS
  - consumption-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
---
# C_PUBSECGRANTBUDGETALRTQRY

**Grant Budget Alert Query**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBUDGETALRTQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CtrlObjForFund` |  | |  |  | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjForBudgetPeriod` |  | |  |  | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjForWBSElement` |  | |  |  | `CHAR(50)` | Control Object for a WBS Element |
| `CtrlObjForGrant` |  | |  |  | `CHAR(50)` | Control Object for a Grant |
| `CtrlObjForSponsoredClass` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Class |
| `CtrlObjForSponsoredProgram` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Program |
| `CtrlObjForBdgtValidityNmbr` |  | |  |  | `CHAR(23)` | Control Object for a Budget Validity Number |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `BdgtConsumableExpnAmtInGCrcy` |  | |  |  | `CURR(25)` | Consumable Expense Amount in Global Currency |
| `BdgtConsumedExpnAmtInGCrcy` |  | |  |  | `CURR(25)` | Consumed Expense Amount in Global Currency |
| `BdgtAvailableExpnAmtInGCrcy` |  | |  |  | `CURR(25)` | Available Expense Amount in Global Currency |
| `NumberOfControlObjects` |  | |  |  | `INT4(10)` | Number of Document Items |
| `PubSecConsumedAmountInPercent` |  | |  | `cast( ratio_of( portion => cast( $projection.bdgtconsumedexpnamtingcrcy as abap.dec(23,2) ) , total => cast( $projection.bdgtconsumableexpnamtingcrcy as abap.dec(23,2) ) ) * 100 as psm_perc_of_cnsmd_amt )` | `DEC(5)` | Percentage of consumed amout of what is consumable. |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBUDGETALRTQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBUDGETALRTQRY')/$value)*

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
@EndUserText.label: 'Grant Budget Alert Query'

@OData.publish: true

define transient view entity C_PubSecGrantBudgetAlrtQry
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
  as projection on I_PubSecGrantBudgetAlertCube( P_PubSecBdgtAcctRevnExpnCode: $parameters.P_PubSecBdgtAcctRevnExpnCode,
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
//  @ObjectModel.text.element: [ 'CtrlObjNameForBudgetPeriod' ]
  @UI.textArrangement: #TEXT_LAST
  Main.CtrlObjForBudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
//  @ObjectModel.text.element: [ 'CtrlObjNameForWBSElement' ]
  @UI.textArrangement: #TEXT_LAST
  Main.CtrlObjForWBSElement,
  @AnalyticsDetails.query.axis: #FREE
//  @ObjectModel.text.element: [ 'CtrlObjForGrantName' ]
  @UI.textArrangement: #TEXT_ONLY
  Main.CtrlObjForGrant,
  @AnalyticsDetails.query.axis: #FREE
//  @ObjectModel.text.element: [ 'CtrlObjForSponsoredClassName' ]
  @UI.textArrangement: #TEXT_LAST
  Main.CtrlObjForSponsoredClass,
  @AnalyticsDetails.query.axis: #FREE
//  @ObjectModel.text.element: [ 'CtrlObjForSponsoredProgramName' ]
  @UI.textArrangement: #TEXT_LAST
  Main.CtrlObjForSponsoredProgram,
  @AnalyticsDetails.query.axis: #FREE
  Main.CtrlObjForBdgtValidityNmbr,

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
  as psm_perc_of_cnsmd_amt )                                            as PubSecConsumedAmountInPercent,

//  // Texts
//  Main._CtrlObjFund.CtrlObjNameForFund                                  as CtrlObjNameForFund,
//  Main._CtrlObjBdgtPeriod.CtrlObjNameForBudgetPeriod                    as CtrlObjNameForBudgetPeriod,
//  Main._CtrlObjWBSElement.CtrlObjNameForWBSElement                      as CtrlObjNameForWBSElement,
//  Main._CtrlObjGrant.CtrlObjForGrantName                                as CtrlObjForGrantName,
//  Main._CtrlObjSpnsrdClass.CtrlObjForSponsoredClassName                 as CtrlObjForSponsoredClassName,
//  Main._CtrlObjSpnsrdProg.CtrlObjForSponsoredProgramName                as CtrlObjForSponsoredProgramName,
//  Main._PubSecBdgtAcctRevnExpnCode._Text.PubSecBdgtAcctRevnExpnCodeText as PubSecBdgtAcctRevnExpnCodeText : localized,
//  Main._CompanyCode.CompanyCodeName                                     as CompanyCodeName,
////  Main._GlobalCurrency._Text.CurrencyShortName                          as CurrencyShortName              : localized,

  // Associations
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
