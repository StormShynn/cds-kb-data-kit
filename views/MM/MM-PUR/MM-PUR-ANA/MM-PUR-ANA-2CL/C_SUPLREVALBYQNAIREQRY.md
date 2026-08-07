---
name: C_SUPLREVALBYQNAIREQRY
description: "Supplier Evaluation by Questionnaire Query"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQNAIREQRY')/$value
semantic_en: "Supplier Evaluation by Questionnaire Query"
semantic_vi: "Supplier Evaluation by Questionnaire Query — CDS view tiêu dùng dựa trên C_SuplrEvalByQnaireCube."
keywords:
  - "supplier"
  - "evaluation"
  - "questionnaire"
  - "query"
  - "suplr"
  - "eval"
  - "scorecard"
  - "name"
  - "start"
  - "date"
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
# C_SUPLREVALBYQNAIREQRY

**Supplier Evaluation by Questionnaire Query**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQNAIREQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalScorecardUUID` | ✓ | |  |  | `RAW(16)` | Evaluation Scorecard UUID |
| `Supplier` | ✓ | |  |  | `CHAR(10)` | Supplier |
| `SupplierEvalScorecard` |  | |  |  | `CHAR(20)` | Evaluation Scorecard |
| `SuplrEvalScorecardName` |  | |  |  | `CHAR(60)` | Name of a Supplier Evaluation Scorecard |
| `SuplrEvalStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `SuplrEvalEndDate` |  | |  |  | `DATS(8)` | End Date |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `NumberOfResponses` |  | |  |  | `INT4(10)` | Number of Responses |
| `SuplrEvalCalculatedScoreValue` |  | |  |  | `FLTP(16)` | Questionnaire Score |
| `NmbrOfSuplrEvalQnaire` |  | |  |  | `INT4(10)` |  |
| `SupplierEvalScoreTargetValue` |  | |  |  | `INT4(10)` | Target Score |
| `AnswerScoreValue` |  | |  |  | `INT1(3)` | Minimum Target Score |
| `SuplrEvalQnaireScoreValue` |  | |  | `cast ( 1 as questionnairescore )` | `FLTP(16)` | Questionnaire Score |
| `TargetScoreValue` |  | |  | `cast ( 1 as /srmsmc/supplr_target_score )` | `INT4(10)` | Target Score |
| `MinimalScoreValue` |  | |  | `cast ( 1 as /srmsmc/minimal_score )` | `INT1(3)` | Minimum Score Accepted |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQNAIREQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQNAIREQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMMSEQNAIREQUERY'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Supplier Evaluation by Questionnaire Query'
@VDM.viewType: #CONSUMPTION
@OData.publish: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L
@Analytics.query: true
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Metadata.ignorePropagatedAnnotations:true
define view C_SuplrEvalByQnaireQry

  with parameters
    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction', 
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ] 
    } 
    @Consumption.hidden: true
    P_StartDate: vdm_validitystart,
    
    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction', 
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ] 
    } 
    @Consumption.hidden: true
    P_EndDate: vdm_validityend,
    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction : datefunctionid

  as select from C_SuplrEvalByQnaireCube( P_StartDate:  $parameters.P_StartDate, P_EndDate : $parameters.P_EndDate )
{
      @UI.hidden: true
  key SuplrEvalScorecardUUID,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key Supplier,
      
      @ObjectModel.text.element: ['SuplrEvalScorecardName']
      @Consumption.labelElement: 'SuplrEvalScorecardName'
      SupplierEvalScorecard,
      @Semantics.text: true
      SuplrEvalScorecardName,
      
      SuplrEvalStartDate,
      SuplrEvalEndDate,
      
      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PurchasingCategoryValueHelp', element : 'PurchasingCategory' } }]
      PurchasingCategory,
      @Semantics.text: true
      PurgCatName,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Country,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Region,
      @DefaultAggregation:#SUM
      NumberOfResponses,
      @UI.hidden: true
      @DefaultAggregation:#SUM
      SuplrEvalCalculatedScoreValue,
      @DefaultAggregation:#SUM
      NmbrOfSuplrEvalQnaire,
      @UI.hidden: true
      @DefaultAggregation:#SUM
      SupplierEvalScoreTargetValue,
      @UI.hidden: true
      @DefaultAggregation:#SUM
      AnswerScoreValue,
      @DefaultAggregation:#FORMULA
      @AnalyticsDetails.query.formula: 'case when $projection.NmbrOfSuplrEvalQnaire = 0 then 0 else $projection.SuplrEvalCalculatedScoreValue / $projection.NmbrOfSuplrEvalQnaire end'
      cast ( 1 as questionnairescore )                               as  SuplrEvalQnaireScoreValue,
      @DefaultAggregation:#FORMULA
      @AnalyticsDetails.query.formula: 'case when $projection.NmbrOfSuplrEvalQnaire = 0 then 0 else $projection.SupplierEvalScoreTargetValue / $projection.NmbrOfSuplrEvalQnaire end'
      cast ( 1 as /srmsmc/supplr_target_score )                               as   TargetScoreValue,
      @DefaultAggregation:#FORMULA
      @AnalyticsDetails.query.formula: 'case when $projection.NmbrOfSuplrEvalQnaire = 0 then 0 else $projection.AnswerScoreValue / $projection.NmbrOfSuplrEvalQnaire end'
      cast ( 1 as /srmsmc/minimal_score )                               as MinimalScoreValue
}
```
