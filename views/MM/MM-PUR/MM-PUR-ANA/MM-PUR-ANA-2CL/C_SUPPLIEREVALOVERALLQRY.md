---
name: C_SUPPLIEREVALOVERALLQRY
description: "Supplier Evaluation Overall"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPPLIEREVALOVERALLQRY')/$value
semantic_en: "Supplier Evaluation Overall"
semantic_vi: "Supplier Evaluation Overall — CDS view tiêu dùng dựa trên C_SupplierEvalOverall."
keywords:
  - "supplier"
  - "evaluation"
  - "overall"
  - "purchasing"
  - "category"
  - "purg"
  - "name"
  - "migrtn"
  - "cmpltd"
  - "anlyts"
  - "suplr"
  - "eval"
  - "critra"
  - "deliv"
  - "completed"
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - supplier
---
# C_SUPPLIEREVALOVERALLQRY

**Supplier Evaluation Overall**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPPLIEREVALOVERALLQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  |  | `CHAR(10)` | Account Number of Supplier |
| `PurchasingCategory` | ✓ | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  | `CHAR(1)` | Single-Character Flag |
| `SuplrEvalCritraDelivCompleted` |  | |  |  | `CHAR(10)` | Delivery Completed |
| `SuplrEvalRelevantDocCategory` |  | |  |  | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `SupplierClassification` |  | |  |  | `CHAR(1)` | Supplier Evaluation Weighting and Scoring Classification |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CalculatedOperationalScore` |  | |  |  | `FLTP(16)` | Calculated Operational Score |
| `IsSupplierEvalSwitchActive` |  | |  |  | `INT1(3)` |  |
| `SuplrEvalCalculatedScoreValue` |  | |  |  | `FLTP(16)` | Questionnaire Score |
| `SupplierEvalScoreTargetValue` |  | |  |  | `INT4(10)` |  |
| `NumberOfResponses` |  | |  |  | `INT4(10)` |  |
| `OperationalSupplierEvalTotWgtg` |  | |  |  | `DEC(5)` | Weighting (In Percentage) |
| `WeightingFactor` |  | |  |  | `DEC(5)` | Weighting (In Percentage) |
| `IsCriteriaActive` |  | |  |  | `CHAR(1)` | Indicator for Active Critera |
| `SuplrEvalUsrDfndCritra1ScrVal` |  | |  | `SuplrEvalUsrDfndCriteria1Score` | `DEC(10)` |  |
| `SuplrEvalUsrDfndCritra2ScrVal` |  | |  | `SuplrEvalUsrDfndCriteria2Score` | `DEC(10)` |  |
| `SuplrEvalUsrDfndCritra3ScrVal` |  | |  | `SuplrEvalUsrDfndCriteria3Score` | `DEC(10)` |  |
| `SuplrEvalUsrDfndCritra4ScrVal` |  | |  | `SuplrEvalUsrDfndCriteria4Score` | `DEC(10)` |  |
| `SuplrEvalUsrDfndCritra5ScrVal` |  | |  | `SuplrEvalUsrDfndCriteria5Score` | `DEC(10)` |  |
| `SuplrEvalUsrDfndCritra6ScrVal` |  | |  | `SupplierEvalUsrCriteria6Value` | `DEC(10)` |  |
| `SuplrEvalUsrCritraTotScrVal` |  | |  | `SuplrEvalUsrDfndCritraTotScore` | `DEC(10)` |  |
| `SupplierEvalUsrCriteria1Wgtg` |  | |  |  | `DEC(5)` |  |
| `SupplierEvalUsrCriteria2Wgtg` |  | |  |  | `DEC(5)` |  |
| `SupplierEvalUsrCriteria3Wgtg` |  | |  |  | `DEC(5)` |  |
| `SupplierEvalUsrCriteria4Wgtg` |  | |  |  | `DEC(5)` |  |
| `SupplierEvalUsrCriteria5Wgtg` |  | |  |  | `DEC(5)` |  |
| `SuplrEvalUsrCriteria6WgtgValue` |  | |  |  | `DEC(5)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra` |  | |  | `SuplrEvalUsrDfndCritraTotScore` | `DEC(10)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra1` |  | |  |  | `INT4(10)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra2` |  | |  |  | `INT4(10)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra3` |  | |  |  | `INT4(10)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra4` |  | |  |  | `INT4(10)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra5` |  | |  |  | `INT4(10)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra6` |  | |  |  | `INT4(10)` |  |
| `TotNmbrOfSuplrUsrDfndCritra` |  | |  |  | `INT4(10)` |  |
| `SuplrEvalUsrDfndCriteria1Score` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria2Score` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria3Score` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria4Score` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria5Score` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SupplierEvalUsrCriteria6Value` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCritraTotScore` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCritraTotVal` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `OperationalScoreCount` |  | |  | `cast( C_SupplierEvalOverall.OperationalScoreCount as mm_a_supplier_opl_score_cnt )` | `INT4(10)` | Supplier Operational Score Count |
| `TotalSpendAmount` |  | |  |  | `CURR(21)` | Total Spend Amount in Display Currency |
| `SupplierOperationalScore` |  | |  | `cast( 1 as mm_a_supplier_opl_score )` | `DEC(4)` | Supplier Operational Score |
| `SupplierFeedbackScore` |  | |  | `cast( 1 as mm_a_supplier_eval_score )` | `FLTP(16)` | Supplier Evaluation Score |
| `SupplierEvaluationScore` |  | |  | `cast( 1 as mm_a_supplier_eval_score )` | `FLTP(16)` | Supplier Evaluation Score |
| `NmbrOfSuplrEvalQnaire` |  | |  |  | `INT4(10)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPPLIEREVALOVERALLQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPPLIEREVALOVERALLQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMMSUPLREVALOVRQ'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Supplier Evaluation Overall'
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY  ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory:  #XL
@AccessControl.personalData.blocking: #NOT_REQUIRED
define view C_SupplierEvalOverallQry

  with parameters
    @Consumption.defaultValue: 'EUR'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_Currency',
        element:'Currency'
      }
    }]
    P_DisplayCurrency : displaycurrency,
    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' }  ]
    }
    @Consumption.hidden: true
    P_StartDate       : bedat,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_EndDate         : bedat,

    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction    : datefunctionid

  as select from C_SupplierEvalOverall(   P_DisplayCurrency: $parameters.P_DisplayCurrency,
                                          P_StartDate: $parameters.P_StartDate,
                                          P_EndDate : $parameters.P_EndDate,
                                          P_DateFunction  : $parameters.P_DateFunction
                                      )
{
      //@Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false}   commented to fix the multiple filters for supplier in UI,
      // this annotation was actually added to enable filter push down but since it is not supported in AE query, this annotation is no longer required.
      @Environment.sql.passValue: true
      @AnalyticsDetails.query.display: #KEY_TEXT
  key C_SupplierEvalOverall.Supplier,

  key C_SupplierEvalOverall.PurchasingCategory,
      @Semantics.text: true
      C_SupplierEvalOverall.PurgCatName,
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
      @UI.hidden: true
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
      @UI.hidden: true
      @Consumption.hidden: true
      SuplrEvalCritraDelivCompleted,

      @Consumption: {
         filter: {
                   mandatory: false,
                   hidden: true,
                   selectionType: #SINGLE,
                   multipleSelections: false
                 },
         derivation: {
                       lookupEntity: 'F_SuplrEvalDocCatConfign',
                       resultElement: 'SuplrEvalRelevantDocCategory'
                     }
       }
      @Environment.sql.passValue: true
      @UI.hidden: true
      @Consumption.hidden: true
      SuplrEvalRelevantDocCategory,


      C_SupplierEvalOverall.CalendarYear,
      C_SupplierEvalOverall.CalendarMonth,
      C_SupplierEvalOverall.CalendarQuarter,
      C_SupplierEvalOverall.CalendarWeek,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SupplierClassification,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Country,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Region,

      //  @Semantics.text: true
      //  _ClassificationText[1: Language = $session.system_language].SupplierClfnName,


      @Consumption.hidden: true
      C_SupplierEvalOverall.CalculatedOperationalScore,

      @Consumption.hidden: true
      C_SupplierEvalOverall.IsSupplierEvalSwitchActive,

      @Consumption.hidden: true
      C_SupplierEvalOverall.SuplrEvalCalculatedScoreValue,

      @Consumption.hidden: true
      C_SupplierEvalOverall.SupplierEvalScoreTargetValue,

      @Consumption.hidden: true
      C_SupplierEvalOverall.NumberOfResponses,

      @Consumption.hidden: true
      OperationalSupplierEvalTotWgtg,

      @Consumption.hidden: true
      WeightingFactor,

      @Consumption.hidden: true
      IsCriteriaActive,

      @Consumption.hidden: true
      SuplrEvalUsrDfndCriteria1Score                                                     as SuplrEvalUsrDfndCritra1ScrVal,
      @Consumption.hidden: true
      SuplrEvalUsrDfndCriteria2Score                                                     as SuplrEvalUsrDfndCritra2ScrVal,
      @Consumption.hidden: true
      SuplrEvalUsrDfndCriteria3Score                                                     as SuplrEvalUsrDfndCritra3ScrVal,
      @Consumption.hidden: true
      SuplrEvalUsrDfndCriteria4Score                                                     as SuplrEvalUsrDfndCritra4ScrVal,
      @Consumption.hidden: true
      SuplrEvalUsrDfndCriteria5Score                                                     as SuplrEvalUsrDfndCritra5ScrVal,
      @Consumption.hidden: true
      SupplierEvalUsrCriteria6Value                                                      as SuplrEvalUsrDfndCritra6ScrVal,
      @Consumption.hidden: true
      SuplrEvalUsrDfndCritraTotScore                                                     as SuplrEvalUsrCritraTotScrVal,

      @Consumption.hidden: true
      SupplierEvalUsrCriteria1Wgtg,
      @Consumption.hidden: true
      SupplierEvalUsrCriteria2Wgtg,
      @Consumption.hidden: true
      SupplierEvalUsrCriteria3Wgtg,
      @Consumption.hidden: true
      SupplierEvalUsrCriteria4Wgtg,
      @Consumption.hidden: true
      SupplierEvalUsrCriteria5Wgtg,
      @Consumption.hidden: true
      SuplrEvalUsrCriteria6WgtgValue,
      @Consumption.hidden: true
      SuplrEvalUsrDfndCritraTotScore                                                     as NmbrOfSuplrEvalUsrDfndCritra,


      @Consumption.hidden: true
      NmbrOfSuplrEvalUsrDfndCritra1,
      @Consumption.hidden: true
      NmbrOfSuplrEvalUsrDfndCritra2,
      @Consumption.hidden: true
      NmbrOfSuplrEvalUsrDfndCritra3,
      @Consumption.hidden: true
      NmbrOfSuplrEvalUsrDfndCritra4,
      @Consumption.hidden: true
      NmbrOfSuplrEvalUsrDfndCritra5,
      @Consumption.hidden: true
      NmbrOfSuplrEvalUsrDfndCritra6,
      @Consumption.hidden: true
      TotNmbrOfSuplrUsrDfndCritra,

      //@Consumption.hidden: true
      //SuplrEvalUsrDfndCritraTotVal,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'User-Defined Criteria 1 Score'
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NmbrOfSuplrEvalUsrDfndCritra1 > 0 THEN $projection.SuplrEvalUsrDfndCritra1ScrVal / $projection.NmbrOfSuplrEvalUsrDfndCritra1 ELSE 0 END'
      cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SuplrEvalUsrDfndCriteria1Score,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'User-Defined Criteria 2 Score'
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NmbrOfSuplrEvalUsrDfndCritra2 > 0 THEN $projection.SuplrEvalUsrDfndCritra2ScrVal / $projection.NmbrOfSuplrEvalUsrDfndCritra2 ELSE 0 END'
      cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SuplrEvalUsrDfndCriteria2Score,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'User-Defined Criteria 3 Score'
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NmbrOfSuplrEvalUsrDfndCritra3 > 0 THEN $projection.SuplrEvalUsrDfndCritra3ScrVal / $projection.NmbrOfSuplrEvalUsrDfndCritra3 ELSE 0 END'
      cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SuplrEvalUsrDfndCriteria3Score,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'User-Defined Criteria 4 Score'
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NmbrOfSuplrEvalUsrDfndCritra4 > 0 THEN $projection.SuplrEvalUsrDfndCritra4ScrVal / $projection.NmbrOfSuplrEvalUsrDfndCritra4 ELSE 0 END'
      cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SuplrEvalUsrDfndCriteria4Score,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'User-Defined Criteria 5 Score'
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NmbrOfSuplrEvalUsrDfndCritra5 > 0 THEN $projection.SuplrEvalUsrDfndCritra5ScrVal / $projection.NmbrOfSuplrEvalUsrDfndCritra5 ELSE 0 END'
      cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SuplrEvalUsrDfndCriteria5Score,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'User-Defined Criteria 6 Score'
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NmbrOfSuplrEvalUsrDfndCritra6 > 0 THEN $projection.SuplrEvalUsrDfndCritra6ScrVal / $projection.NmbrOfSuplrEvalUsrDfndCritra6 ELSE 0 END'
      cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SupplierEvalUsrCriteria6Value,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'User-Defined Criteria Total Score'
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.TotNmbrOfSuplrUsrDfndCritra > 0 THEN $projection.SuplrEvalUsrCritraTotScrVal / $projection.TotNmbrOfSuplrUsrDfndCritra ELSE 0 END'
      cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SuplrEvalUsrDfndCritraTotScore,

      @Consumption.hidden: true
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'User-Defined Criteria Total Weight'
      @AnalyticsDetails.query.formula: 'SupplierEvalUsrCriteria1Wgtg + SupplierEvalUsrCriteria2Wgtg + SupplierEvalUsrCriteria3Wgtg + SupplierEvalUsrCriteria4Wgtg + SupplierEvalUsrCriteria5Wgtg + SuplrEvalUsrCriteria6WgtgValue'
      cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SuplrEvalUsrDfndCritraTotVal,

      @DefaultAggregation: #NONE
      cast( C_SupplierEvalOverall.OperationalScoreCount as mm_a_supplier_opl_score_cnt ) as OperationalScoreCount,

      @DefaultAggregation: #SUM
      C_SupplierEvalOverall.TotalSpendAmount,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Operational Score'
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.OperationalScoreCount > 0 THEN $projection.CalculatedOperationalScore / $projection.OperationalScoreCount ELSE 0 END'
      cast( 1 as mm_a_supplier_opl_score )                                               as SupplierOperationalScore,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Questionnaire Score'
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NumberOfResponses < 1 THEN 0 ELSE $projection.SuplrEvalCalculatedScoreValue / $projection.NmbrOfSuplrEvalQnaire END'
      cast( 1 as mm_a_supplier_eval_score )                                              as SupplierFeedbackScore,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Overall Score'
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.IsSupplierEvalSwitchActive = 1  THEN
      ($projection.SupplierFeedbackScore * $projection.WeightingFactor) / 100 + ($projection.SuplrEvalUsrDfndCritraTotScore * $projection.SuplrEvalUsrDfndCritraTotVal) / 100
      + ($projection.SupplierOperationalScore * ( 100 - ( $projection.WeightingFactor + $projection.SuplrEvalUsrDfndCritraTotVal ) ) ) / 100
      else  $projection.SupplierFeedbackScore   +   $projection.SuplrEvalUsrDfndCritraTotScore   +   $projection.SupplierOperationalScore
      end'
      cast( 1 as mm_a_supplier_eval_score )                                              as SupplierEvaluationScore,
      
      @Consumption.hidden: true
      NmbrOfSuplrEvalQnaire                                    //3062663

}
```
