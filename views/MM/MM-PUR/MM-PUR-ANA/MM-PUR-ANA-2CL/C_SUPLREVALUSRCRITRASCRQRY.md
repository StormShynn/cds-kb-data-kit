---
name: C_SUPLREVALUSRCRITRASCRQRY
description: Supplier Evaluation User-Defined Criteria
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALUSRCRITRASCRQRY')/$value
semantic_en: Supplier Evaluation User-Defined Criteria
semantic_vi: Supplier Evaluation User-Defined Criteria — CDS view tiêu dùng dựa trên C_SuplrEvalUsrDfndCritraScores.
keywords:
  - supplier
  - evaluation
  - user
  - defined
  - criteria
  - purchasing
  - category
  - suplr
  - eval
  - material
  - group
  - country
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - supplier
---
# C_SUPLREVALUSRCRITRASCRQRY

**Supplier Evaluation User-Defined Criteria**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALUSRCRITRASCRQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  |  | `CHAR(10)` | Account Number of Supplier |
| `PurchasingCategory` | ✓ | |  |  | `CHAR(20)` | Purchasing Category ID |
| `SuplrEvalUserDefinedCriteria` | ✓ | |  |  | `CHAR(10)` | Criterion Identifier |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Supplier Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `PurgCatName` |  | |  |  | `CHAR(1)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra1` |  | |  |  | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra2` |  | |  |  | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra3` |  | |  |  | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra4` |  | |  |  | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra5` |  | |  |  | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra6` |  | |  |  | `INT1(3)` |  |
| `SuplrEvalUsrDfndCritra1Value` |  | |  | `SuplrEvalUsrDfndCriteria1Score` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCritra2Value` |  | |  | `SuplrEvalUsrDfndCriteria2Score` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCritra3Value` |  | |  | `SuplrEvalUsrDfndCriteria3Score` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCritra4Value` |  | |  | `SuplrEvalUsrDfndCriteria4Score` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCritra5Value` |  | |  | `SuplrEvalUsrDfndCriteria5Score` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrCriteria6WgtgValue` |  | |  | `SupplierEvalUsrCriteria6Value` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `TotNmbrOfSuplrUsrDfndCritra` |  | |  |  | `INT4(10)` |  |
| `SuplrEvalUsrDfndCritraSumValue` |  | |  | `SuplrEvalUsrDfndCritraTotScore` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCritraTotVal` |  | |  |  | `DEC(5)` | Weight % for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria1Score` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria2Score` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria3Score` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria4Score` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria5Score` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SupplierEvalUsrCriteria6Value` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCritraTotScore` |  | |  | `cast( 1 as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALUSRCRITRASCRQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALUSRCRITRASCRQRY')/$value)*

```abap
@EndUserText.label: 'Supplier Evaluation User-Defined Criteria'
@AbapCatalog.sqlViewName: 'CMMSUPLREVALUSRQ'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY 
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin 
@AccessControl.personalData.blocking: #NOT_REQUIRED 
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L 
@AbapCatalog.preserveKey:true 
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY  ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
define view C_SuplrEvalUsrCritraScrQry 
with parameters
    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }] 
    P_DateFunction : datefunctionid,


    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' }  ]
    }
    @Consumption.hidden: true
    P_StartDate    : badat,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_EndDate      : badat
    
    as select from C_SuplrEvalUsrDfndCritraScores( P_StartDate: $parameters.P_StartDate , P_EndDate:  $parameters.P_EndDate ) {
    
    //C_SuplrEvalUsrDfndCritraScores 
 @AnalyticsDetails.query.display: #KEY_TEXT 
 @Analytics.internalName:#LOCAL
   @AnalyticsDetails.query.axis: #FREE
    key Supplier, 
 @AnalyticsDetails.query.display: #KEY_TEXT 
 @Analytics.internalName:#LOCAL 
   @AnalyticsDetails.query.axis: #FREE
    key PurchasingCategory, 
 @AnalyticsDetails.query.display: #KEY_TEXT 
 @Analytics.internalName:#LOCAL     
   @AnalyticsDetails.query.axis: #FREE
    key SuplrEvalUserDefinedCriteria, 
 @AnalyticsDetails.query.display: #KEY_TEXT 
 @Analytics.internalName:#LOCAL     
   @AnalyticsDetails.query.axis: #FREE
    MaterialGroup, 
 @AnalyticsDetails.query.display: #KEY_TEXT 
 @Analytics.internalName:#LOCAL 
   @AnalyticsDetails.query.axis: #FREE
      SupplierCountry,  
        @AnalyticsDetails.query.axis: #FREE
 @AnalyticsDetails.query.display: #KEY_TEXT 
 @Analytics.internalName:#LOCAL
  Region,    
    //SupplierName, 
    //PurgCatName, 
     @AnalyticsDetails.query.display: #KEY_TEXT 
  @AnalyticsDetails.query.axis: #FREE
 @Analytics.internalName:#LOCAL 
    CalendarYear, 
     @AnalyticsDetails.query.display: #KEY_TEXT 
  @AnalyticsDetails.query.axis: #FREE
 @Analytics.internalName:#LOCAL 
    CalendarMonth, 
     @AnalyticsDetails.query.display: #KEY_TEXT 
  @AnalyticsDetails.query.axis: #FREE
 @Analytics.internalName:#LOCAL 
    CalendarWeek, 
     @AnalyticsDetails.query.display: #KEY_TEXT 
  @AnalyticsDetails.query.axis: #FREE
 @Analytics.internalName:#LOCAL 
    CalendarQuarter,
   @EndUserText.label: 'Purchasing Cat. Name'
    PurgCatName,
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
    SuplrEvalUsrDfndCriteria1Score as SuplrEvalUsrDfndCritra1Value,
     @Consumption.hidden: true 
    SuplrEvalUsrDfndCriteria2Score as SuplrEvalUsrDfndCritra2Value,
     @Consumption.hidden: true 
    SuplrEvalUsrDfndCriteria3Score as SuplrEvalUsrDfndCritra3Value,
     @Consumption.hidden: true 
    SuplrEvalUsrDfndCriteria4Score as SuplrEvalUsrDfndCritra4Value,
     @Consumption.hidden: true 
    SuplrEvalUsrDfndCriteria5Score as SuplrEvalUsrDfndCritra5Value,
     @Consumption.hidden: true 
    SupplierEvalUsrCriteria6Value as SuplrEvalUsrCriteria6WgtgValue,    
     @Consumption.hidden: true 
    TotNmbrOfSuplrUsrDfndCritra,
     @Consumption.hidden: true 
    SuplrEvalUsrDfndCritraTotScore as SuplrEvalUsrDfndCritraSumValue,
     @Consumption.hidden: true 
    SuplrEvalUsrDfndCritraTotVal,    
    
  @DefaultAggregation: #FORMULA 
 @EndUserText.label: 'User Criteria1 Score'
  @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NmbrOfSuplrEvalUsrDfndCritra1 > 0 THEN $projection.SuplrEvalUsrDfndCritra1Value / $projection.NmbrOfSuplrEvalUsrDfndCritra1 ELSE 0 END'
  cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SuplrEvalUsrDfndCriteria1Score,    
    
  @DefaultAggregation: #FORMULA 
  @EndUserText.label: 'User Criteria2 Score'
  @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NmbrOfSuplrEvalUsrDfndCritra2 > 0 THEN $projection.SuplrEvalUsrDfndCritra2Value / $projection.NmbrOfSuplrEvalUsrDfndCritra2 ELSE 0 END'
  cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SuplrEvalUsrDfndCriteria2Score,    
  
  @DefaultAggregation: #FORMULA 
  @EndUserText.label: 'User Criteria3 Score'
  @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NmbrOfSuplrEvalUsrDfndCritra3 > 0 THEN $projection.SuplrEvalUsrDfndCritra3Value / $projection.NmbrOfSuplrEvalUsrDfndCritra3 ELSE 0 END'
  cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SuplrEvalUsrDfndCriteria3Score,
  
  @DefaultAggregation: #FORMULA 
  @EndUserText.label: 'User Criteria4 Score'
  @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NmbrOfSuplrEvalUsrDfndCritra4 > 0 THEN $projection.SuplrEvalUsrDfndCritra4Value / $projection.NmbrOfSuplrEvalUsrDfndCritra4 ELSE 0 END'
  cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SuplrEvalUsrDfndCriteria4Score,
  
  @DefaultAggregation: #FORMULA 
  @EndUserText.label: 'User Criteria5 Score'
  @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NmbrOfSuplrEvalUsrDfndCritra5 > 0 THEN $projection.SuplrEvalUsrDfndCritra5Value / $projection.NmbrOfSuplrEvalUsrDfndCritra5 ELSE 0 END'
  cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SuplrEvalUsrDfndCriteria5Score,
  
  @DefaultAggregation: #FORMULA 
  @EndUserText.label: 'User Criteria6 Score'
  @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NmbrOfSuplrEvalUsrDfndCritra6 > 0 THEN $projection.SuplrEvalUsrCriteria6WgtgValue / $projection.NmbrOfSuplrEvalUsrDfndCritra6 ELSE 0 END'
  cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SupplierEvalUsrCriteria6Value,
  
    
  @DefaultAggregation: #FORMULA 
    @EndUserText.label: 'Avg. Weighted Total Score'
  @AnalyticsDetails.query.formula: 'CASE WHEN $projection.TotNmbrOfSuplrUsrDfndCritra > 0 THEN $projection.SuplrEvalUsrDfndCritraSumValue / $projection.TotNmbrOfSuplrUsrDfndCritra ELSE 0 END'
  cast( 1 as mmpur_ana_supleval_usrdefscore )                                        as SuplrEvalUsrDfndCritraTotScore    
    
  
}
```
