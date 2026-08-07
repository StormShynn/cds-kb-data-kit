---
name: C_SUPPLIEREVALOVERALL
description: Supplierevaloverall
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - supplier
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# C_SUPPLIEREVALOVERALL

**Supplierevaloverall**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  |  |  |  |
| `PurchasingCategory` | ✓ | |  |  |  |  |
| `PurgCatName` |  | |  |  |  |  |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  |  |  |
| `SuplrEvalCritraDelivCompleted` |  | |  |  |  |  |
| `SuplrEvalRelevantDocCategory` |  | |  |  |  |  |
| `CalendarYear` |  | |  |  |  |  |
| `CalendarMonth` |  | |  |  |  |  |
| `CalendarQuarter` |  | |  |  |  |  |
| `CalendarWeek` |  | |  |  |  |  |
| `Country` |  | | `_Supplier` | `Country` |  |  |
| `Region` |  | | `_Supplier` | `Region` |  |  |
| `SupplierClassification` |  | |  |  |  |  |
| `IsCriteriaActive` |  | |  |  |  |  |
| `OperationalSupplierEvalTotWgtg` |  | |  |  |  |  |
| `IsSupplierEvalSwitchActive` |  | |  | `max( case when IsSupplierEvalSwitchActive = 'X' then 1 else 0 end )` |  |  |
| `WeightingFactor` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  |  |  |  |
| `TotalSpendAmount` |  | |  | `cast(sum(OverallScore.PurchaseOrderNetPriceAmount) as total_spend_amount)` |  |  |
| `CalculatedOperationalScore` |  | |  | `cast(sum(OverallScore.OperationalScore ) as mm_a_calculatedoplscore)` |  |  |
| `OperationalScoreCount` |  | |  | `sum(OverallScore.OperationalScoreCount)` |  |  |
| `SuplrEvalCalculatedScoreValue` |  | |  | `cast( sum( OverallScore.SuplrEvalCalculatedScoreValue) as questionnairescore )` |  |  |
| `SupplierEvalScoreTargetValue` |  | |  | `sum( OverallScore.SupplierEvalScoreTargetValue )` |  |  |
| `NumberOfResponses` |  | |  | `sum( OverallScore.NumberOfResponses )` |  |  |
| `SuplrEvalUsrDfndCriteria1Score` |  | |  | `sum(OverallScore.SuplrEvalUsrDfndCriteria1Score )` |  |  |
| `SuplrEvalUsrDfndCriteria2Score` |  | |  | `sum(OverallScore.SuplrEvalUsrDfndCriteria2Score)` |  |  |
| `SuplrEvalUsrDfndCriteria3Score` |  | |  | `sum(OverallScore.SuplrEvalUsrDfndCriteria3Score)` |  |  |
| `SuplrEvalUsrDfndCriteria4Score` |  | |  | `sum(OverallScore.SuplrEvalUsrDfndCriteria4Score)` |  |  |
| `SuplrEvalUsrDfndCriteria5Score` |  | |  | `sum(OverallScore.SuplrEvalUsrDfndCriteria5Score)` |  |  |
| `SupplierEvalUsrCriteria6Value` |  | |  | `sum(OverallScore.SupplierEvalUsrCriteria6Value)` |  |  |
| `SuplrEvalUsrDfndCritraTotScore` |  | |  | `sum(OverallScore.SuplrEvalUsrDfndCritraTotScore)` |  |  |
| `SuplrEvalUsrDfndCritraTotVal` |  | |  | `sum(OverallScore.SuplrEvalUsrDfndCritraTotVal)` |  |  |
| `NmbrOfSuplrEvalUsrDfndCritra1` |  | |  | `sum(NmbrOfSuplrEvalUsrDfndCritra1 )` |  |  |
| `NmbrOfSuplrEvalUsrDfndCritra2` |  | |  | `sum(NmbrOfSuplrEvalUsrDfndCritra2 )` |  |  |
| `NmbrOfSuplrEvalUsrDfndCritra3` |  | |  | `sum(NmbrOfSuplrEvalUsrDfndCritra3 )` |  |  |
| `NmbrOfSuplrEvalUsrDfndCritra4` |  | |  | `sum(NmbrOfSuplrEvalUsrDfndCritra4 )` |  |  |
| `NmbrOfSuplrEvalUsrDfndCritra5` |  | |  | `sum(NmbrOfSuplrEvalUsrDfndCritra5 )` |  |  |
| `NmbrOfSuplrEvalUsrDfndCritra6` |  | |  | `sum(NmbrOfSuplrEvalUsrDfndCritra6)` |  |  |
| `TotNmbrOfSuplrUsrDfndCritra` |  | |  | `sum(TotNmbrOfSuplrUsrDfndCritra )` |  |  |
| `SupplierEvalUsrCriteria1Wgtg` |  | |  | `max(SupplierEvalUsrCriteria1Wgtg)` |  |  |
| `SupplierEvalUsrCriteria2Wgtg` |  | |  | `max(SupplierEvalUsrCriteria2Wgtg)` |  |  |
| `SupplierEvalUsrCriteria3Wgtg` |  | |  | `max(SupplierEvalUsrCriteria3Wgtg)` |  |  |
| `SupplierEvalUsrCriteria4Wgtg` |  | |  | `max(SupplierEvalUsrCriteria4Wgtg)` |  |  |
| `SupplierEvalUsrCriteria5Wgtg` |  | |  | `max(SupplierEvalUsrCriteria5Wgtg)` |  |  |
| `SuplrEvalUsrCriteria6WgtgValue` |  | |  | `max(SuplrEvalUsrCriteria6WgtgValue)` |  |  |
| `NmbrOfSuplrEvalQnaire` |  | |  | `sum(NmbrOfSuplrEvalQnaire)` |  |  |
| `OperationalScore` |  | |  | `OperationalScoreCounter` |  |  |
| `_ClassificationText` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_PurchasingCategory` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ClassificationText` | `I_SuplrEvalClassification` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_PurchasingCategory` | `I_PurchasingCategoryValueHelp` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_Region` | `I_Region` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMSUPLREVALOVR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Supplier Evaluation Overall'
@VDM.viewType : #CONSUMPTION
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory:  #XL
//@AbapCatalog.dbHints: [ {dbSystem: #HDB, hint: 'NO_CALC_VIEW_UNFOLDING'} ]

define view C_SupplierEvalOverall

  with parameters
    P_DisplayCurrency : displaycurrency,
    P_StartDate       : vdm_validitystart,
    P_EndDate         : vdm_validityend,
    P_DateFunction    : datefunctionid

  as select from P_SupplierEvalOverallScore1( P_DisplayCurrency: $parameters.P_DisplayCurrency,
                                              P_StartDate: $parameters.P_StartDate,
                                              P_EndDate : $parameters.P_EndDate,
                                              P_DateFunction  : $parameters.P_DateFunction
                                           ) as OverallScore

  association [1..1] to I_SuplrEvalClassification     as _ClassificationText on $projection.SupplierClassification = _ClassificationText.SupplierClassification

  association [1..1] to I_Supplier                    as _Supplier           on $projection.Supplier = _Supplier.Supplier

  association [1..1] to I_PurchasingCategoryValueHelp as _PurchasingCategory on $projection.PurchasingCategory = _PurchasingCategory.PurchasingCategory

   association [1..1] to I_Country  as _Country        on  $projection.Country = _Country.Country
  association [0..1] to I_Region   as _Region on  $projection.Region  = _Region.Region
                                                      and $projection.Country = _Region.Country

{
  @ObjectModel.foreignKey.association: '_Supplier'
  @Analytics.internalName:#LOCAL
  key OverallScore.Supplier,

  @ObjectModel.text.element: ['PurgCatName']
  @Consumption.labelElement: 'PurgCatName'
  key PurchasingCategory,
  @Semantics.text: true
  PurgCatName,
  @Consumption: {
                    filter: {                    -- Usage of derviation.lookupEntity requires a filter definition too!
                              mandatory: false,
                              hidden: true,
                              selectionType: #SINGLE,
                              multipleSelections: false
                            },
  //                     hidden: true,
                    derivation: {
                                  lookupEntity: 'F_ProcmtAnalyticsDataSelMeth',
                                  resultElement: 'PurgDocMigrtnIsCmpltdForAnlyts'
                                }
                  }
  @Environment.sql.passValue: true
  @Semantics.booleanIndicator:true
  PurgDocMigrtnIsCmpltdForAnlyts,

  @Consumption: {
                      filter: {                    -- Usage of derviation.lookupEntity requires a filter definition too!
                                mandatory: false,
                                hidden: true,
                                selectionType: #SINGLE,
                                multipleSelections: false
                              },
  //                     hidden: true,
                      derivation: {
                                    lookupEntity: 'F_SuplrEvalCriteriaGenConfign',
                                    resultElement: 'SuplrEvalCritraDelivCompleted'
                                  }
                    }
  @Environment.sql.passValue: true
  //@Semantics.booleanIndicator:true
  SuplrEvalCritraDelivCompleted,
  SuplrEvalRelevantDocCategory,

  @Semantics.calendar.year: true
  OverallScore.CalendarYear,
  OverallScore.CalendarMonth,
  OverallScore.CalendarQuarter,
  OverallScore.CalendarWeek,
  @ObjectModel.foreignKey.association: '_Country'
  @Analytics.internalName:#LOCAL
  _Supplier.Country as Country,
  @ObjectModel.foreignKey.association: '_Region'
  @Analytics.internalName:#LOCAL
 _Supplier.Region as Region,
  //OverallScore.SuplrEvalType,

  // @Consumption.labelElement: 'SupplierClfnName'
  @Analytics.internalName:#LOCAL
  @ObjectModel.foreignKey.association: '_ClassificationText'
  SupplierClassification,

  IsCriteriaActive,

  @DefaultAggregation: #MAX
  OperationalSupplierEvalTotWgtg,

  @DefaultAggregation:#MAX
  max(   case when IsSupplierEvalSwitchActive = 'X' then 1
            else 0 end )                                                         as IsSupplierEvalSwitchActive,
  @DefaultAggregation:#MAX
  WeightingFactor,
  @Semantics.currencyCode: true
  DisplayCurrency,

  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast(sum(OverallScore.PurchaseOrderNetPriceAmount) as total_spend_amount)      as TotalSpendAmount,
  @DefaultAggregation:#SUM
  cast(sum(OverallScore.OperationalScore ) as mm_a_calculatedoplscore)           as CalculatedOperationalScore,
  @DefaultAggregation:#SUM
  sum(OverallScore.OperationalScoreCount)                                        as OperationalScoreCount,
  @DefaultAggregation:#SUM
  cast( sum( OverallScore.SuplrEvalCalculatedScoreValue) as questionnairescore ) as SuplrEvalCalculatedScoreValue,
  @DefaultAggregation:#SUM
  sum( OverallScore.SupplierEvalScoreTargetValue )                               as SupplierEvalScoreTargetValue,
  @DefaultAggregation:#SUM
  sum( OverallScore.NumberOfResponses )                                          as NumberOfResponses,

  @DefaultAggregation:#SUM
  sum(OverallScore.SuplrEvalUsrDfndCriteria1Score )                              as SuplrEvalUsrDfndCriteria1Score,
  @DefaultAggregation:#SUM
  sum(OverallScore.SuplrEvalUsrDfndCriteria2Score)                               as SuplrEvalUsrDfndCriteria2Score,
  @DefaultAggregation:#SUM
  sum(OverallScore.SuplrEvalUsrDfndCriteria3Score)                               as SuplrEvalUsrDfndCriteria3Score,
  @DefaultAggregation:#SUM
  sum(OverallScore.SuplrEvalUsrDfndCriteria4Score)                               as SuplrEvalUsrDfndCriteria4Score,
  @DefaultAggregation:#SUM
  sum(OverallScore.SuplrEvalUsrDfndCriteria5Score)                               as SuplrEvalUsrDfndCriteria5Score,
  @DefaultAggregation:#SUM
  sum(OverallScore.SupplierEvalUsrCriteria6Value)                                as SupplierEvalUsrCriteria6Value,

  @DefaultAggregation:#SUM
  sum(OverallScore.SuplrEvalUsrDfndCritraTotScore)                               as SuplrEvalUsrDfndCritraTotScore,
  @DefaultAggregation:#SUM
  sum(OverallScore.SuplrEvalUsrDfndCritraTotVal)                                 as SuplrEvalUsrDfndCritraTotVal,
  @DefaultAggregation:#SUM
  sum(NmbrOfSuplrEvalUsrDfndCritra1 )                                            as NmbrOfSuplrEvalUsrDfndCritra1,
  @DefaultAggregation:#SUM
  sum(NmbrOfSuplrEvalUsrDfndCritra2 )                                            as NmbrOfSuplrEvalUsrDfndCritra2,
  @DefaultAggregation:#SUM
  sum(NmbrOfSuplrEvalUsrDfndCritra3 )                                            as NmbrOfSuplrEvalUsrDfndCritra3,
  @DefaultAggregation:#SUM
  sum(NmbrOfSuplrEvalUsrDfndCritra4 )                                            as NmbrOfSuplrEvalUsrDfndCritra4,
  @DefaultAggregation:#SUM
  sum(NmbrOfSuplrEvalUsrDfndCritra5 )                                            as NmbrOfSuplrEvalUsrDfndCritra5,
  @DefaultAggregation:#SUM
  sum(NmbrOfSuplrEvalUsrDfndCritra6)                                             as NmbrOfSuplrEvalUsrDfndCritra6,
  @DefaultAggregation:#SUM
  sum(TotNmbrOfSuplrUsrDfndCritra )                                              as TotNmbrOfSuplrUsrDfndCritra,


  @DefaultAggregation:#MAX
  max(SupplierEvalUsrCriteria1Wgtg)                                              as SupplierEvalUsrCriteria1Wgtg,
  @DefaultAggregation:#MAX
  max(SupplierEvalUsrCriteria2Wgtg)                                              as SupplierEvalUsrCriteria2Wgtg,
  @DefaultAggregation:#MAX
  max(SupplierEvalUsrCriteria3Wgtg)                                              as SupplierEvalUsrCriteria3Wgtg,
  @DefaultAggregation:#MAX
  max(SupplierEvalUsrCriteria4Wgtg)                                              as SupplierEvalUsrCriteria4Wgtg,
  @DefaultAggregation:#MAX
  max(SupplierEvalUsrCriteria5Wgtg)                                              as SupplierEvalUsrCriteria5Wgtg,
  @DefaultAggregation:#MAX
  max(SuplrEvalUsrCriteria6WgtgValue)                                            as SuplrEvalUsrCriteria6WgtgValue,

  @Aggregation.default: #SUM
  @EndUserText.label: 'Number of Questionnaire'
  sum(NmbrOfSuplrEvalQnaire) as NmbrOfSuplrEvalQnaire,      //3210207

  _Supplier,
  _Country,
  _Region,
  _PurchasingCategory,
  _ClassificationText,
  OperationalScoreCounter                                                        as OperationalScore

}
group by
  OverallScore.Supplier,
  OverallScore.PurchasingCategory,
  OverallScore.PurgCatName,
  PurgDocMigrtnIsCmpltdForAnlyts,
  OverallScore.CalendarYear,
  OverallScore.CalendarMonth,
  OverallScore.CalendarQuarter,
  OverallScore.CalendarWeek,
  _Supplier.Country,
  _Supplier.Region,
  SupplierClassification,
  DisplayCurrency,
  // OverallScore.SuplrEvalType,
  //I_SuplrEvalClassification._Classification.SupplierClfnName,
  IsCriteriaActive,
  //IsSupplierEvalSwitchActive,
  OperationalSupplierEvalTotWgtg,
  WeightingFactor,
  OperationalScoreCounter,
  SuplrEvalCritraDelivCompleted,
  SuplrEvalRelevantDocCategory
//SuplrEvalUsrDfndCritraTotWgt,
//_Supplier.SupplierName
```
