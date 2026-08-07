---
name: C_SUPLREVALUSRDFNDCRITRASCORES
description: Supplier Evaluation User-Defined Criteria
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALUSRDFNDCRITRASCORES')/$value
semantic_en: Supplier Evaluation User-Defined Criteria
semantic_vi: Supplier Evaluation User-Defined Criteria — CDS view tiêu dùng dựa trên P_UserDefinedCriteriaScore.
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
  - purg
  - name
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
# C_SUPLREVALUSRDFNDCRITRASCORES

**Supplier Evaluation User-Defined Criteria**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALUSRDFNDCRITRASCORES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  |  | `CHAR(10)` | Account Number of Supplier |
| `PurchasingCategory` | ✓ | |  |  | `CHAR(20)` | Purchasing Category ID |
| `SuplrEvalUserDefinedCriteria` | ✓ | |  |  | `CHAR(10)` | Criterion Identifier |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `PurgCatName` |  | |  | `''` | `CHAR(1)` |  |
| `Region` |  | | `_Supplier` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SupplierCountry` |  | |  | `cast( _Supplier.Country as mm_a_supplier_country )` | `CHAR(3)` | Supplier Country/Region |
| `CalendarYear` |  | | `_Calendar` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | | `_Calendar` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | | `_Calendar` | `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CalendarQuarter` |  | | `_Calendar` | `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `NmbrOfSuplrEvalUsrDfndCritra1` |  | |  |  | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra2` |  | |  |  | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra3` |  | |  |  | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra4` |  | |  |  | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra5` |  | |  |  | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra6` |  | |  |  | `INT1(3)` |  |
| `SuplrEvalUsrDfndCriteria1Score` |  | |  | `cast( SuplrEvalUsrDfndCriteria1Score as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria2Score` |  | |  | `cast( SuplrEvalUsrDfndCriteria2Score as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria3Score` |  | |  | `cast( SuplrEvalUsrDfndCriteria3Score as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria4Score` |  | |  | `cast( SuplrEvalUsrDfndCriteria4Score as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria5Score` |  | |  | `cast( SuplrEvalUsrDfndCriteria5Score as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SupplierEvalUsrCriteria6Value` |  | |  | `cast( SupplierEvalUsrCriteria6Value as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `TotNmbrOfSuplrUsrDfndCritra` |  | |  | `cast( 1 as abap.int4 )` | `INT4(10)` |  |
| `SuplrEvalUsrDfndCritraTotScore` |  | |  | `cast( ( SuplrEvalUsrDfndCriteria1Scr1 * SupplierEvalUsrCriteria1Wgtg + SuplrEvalUsrDfndCriteria2Scr1 * SupplierEvalUsrCriteria2Wgtg + SuplrEvalUsrDfndCriteria3Scr1 * SupplierEvalUsrCriteria3Wgtg + SuplrEvalUsrDfndCriteria4Scr1 * SupplierEvalUsrCriteria4Wgtg + SuplrEvalUsrDfndCriteria5Scr1 * SupplierEvalUsrCriteria5Wgtg + SuplrEvalUsrDfndCriteria6Scr1 * SuplrEvalUsrCriteria6WgtgValue ) * division( 1, (SupplierEvalUsrCriteria1Wgtg + SupplierEvalUsrCriteria2Wgtg + SupplierEvalUsrCriteria3Wgtg + SupplierEvalUsrCriteria4Wgtg + SupplierEvalUsrCriteria5Wgtg + SuplrEvalUsrCriteria6WgtgValue ) , 8 ) as mmpur_ana_supleval_usrdefscore )` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCritraTotVal` |  | |  | `cast (SupplierEvalUsrCriteria1Wgtg + SupplierEvalUsrCriteria2Wgtg + SupplierEvalUsrCriteria3Wgtg + SupplierEvalUsrCriteria4Wgtg + SupplierEvalUsrCriteria5Wgtg as suplr_eval_usrcrt_weight )` | `DEC(5)` | Weight % for Supplier Evaluation |
| `_Supplier` | | ✓ | | | | |
| `_PurchasingCategory` | | ✓ | | | | |
| `_UserDefCriteria` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Calendar` | `I_CalendarDate` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_PurchasingCategory` | `I_PurchasingCategoryValueHelp` | [1..1] |
| `_UserDefCriteria` | `I_SuplrEvalUserDefinedCriteria` | [1..1] |
| `_MaterialGroup` | `I_ProductGroup_2` | [1..1] |
| `_Region` | `I_Region` | [1..1] |
| `_Country` | `I_Country` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALUSRDFNDCRITRASCORES')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALUSRDFNDCRITRASCORES')/$value)*

```abap
@EndUserText.label:'Supplier Evaluation User-Defined Criteria'
@AbapCatalog.sqlViewName: 'CMMPURUSRCRSRS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L
//@OData.publish: true
@VDM.viewType : #CONSUMPTION
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
/* The CDS will display the calculated score for Supplier and Purchasing category based on count and weightage given to each User Defined Criteria*/
define view C_SuplrEvalUsrDfndCritraScores
  with parameters 
    P_StartDate : bedat,
    P_EndDate   : bedat
  as select from P_UserDefinedCriteriaScore( P_StartDate: $parameters.P_StartDate , P_EndDate:  $parameters.P_EndDate ) as _userCriteriaScore // P_UserDefinedCritWeightedScore //  P_UserDefinedCriteriaScoreAvg
  association [1..1] to I_CalendarDate                as _Calendar                    on _userCriteriaScore.SuplrEvalUsrDfndCritraRptdDte = _Calendar.CalendarDate
  association [0..1] to I_Supplier        as _Supplier                    on $projection.Supplier = _Supplier.Supplier
  association[1..1] to I_PurchasingCategoryValueHelp as _PurchasingCategory on $projection.PurchasingCategory = _PurchasingCategory.PurchasingCategory
  association[1..1] to I_SuplrEvalUserDefinedCriteria as _UserDefCriteria on $projection.SuplrEvalUserDefinedCriteria = _UserDefCriteria.SuplrEvalUserDefinedCriteria
  association [1..1] to I_ProductGroup_2 as _MaterialGroup on $projection.MaterialGroup = _MaterialGroup.ProductGroup
  association[1..1] to I_Region  as _Region  on $projection.Region = _Region.Region and _Region.Country = $projection.SupplierCountry
  association[1..1] to I_Country as _Country on   $projection.SupplierCountry = _Country.Country
  { 
    
      @ObjectModel.foreignKey.association: '_Supplier'
      @Analytics.internalName:#LOCAL
  key Supplier                                                                                                                                                                                                                      as Supplier,
 
       @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      @Analytics.internalName:#LOCAL
   key  PurchasingCategory,                      
   
       @ObjectModel.foreignKey.association: '_UserDefCriteria'
 @Analytics.internalName:#LOCAL  
  key SuplrEvalUserDefinedCriteria,
       @ObjectModel.foreignKey.association: '_MaterialGroup'
 @Analytics.internalName:#LOCAL
      MaterialGroup                                                                                                                                                                                                                 as MaterialGroup,
      //@Semantics.text: true
      //_Supplier.SupplierName                                                                                                                                                                                                        as SupplierName,
      //_PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName    as PurgCatName,
        @Semantics.text: true
      '' as PurgCatName ,
     @ObjectModel.foreignKey.association: '_Region'
      @Analytics.internalName:#LOCAL
     _Supplier.Region as Region,
     
      @ObjectModel.foreignKey.association: '_Country'
      @Analytics.internalName:#LOCAL
      cast( _Supplier.Country as mm_a_supplier_country ) as SupplierCountry,      
                                                                                                                                                                     
      @Semantics.calendar.year: true
      @Analytics.internalName:#LOCAL
      _Calendar.CalendarYear,
      @Analytics.internalName:#LOCAL
      _Calendar.CalendarMonth,
      @Analytics.internalName:#LOCAL
      _Calendar.CalendarWeek,
      @Analytics.internalName:#LOCAL
      _Calendar.CalendarQuarter,

      // Number of Each User Defined Criteria

      @DefaultAggregation: #SUM
      //@EndUserText.label: 'User Criteria1 Count'
      NmbrOfSuplrEvalUsrDfndCritra1,
      @DefaultAggregation: #SUM
      //@EndUserText.label: 'User Criteria2 Count'
      NmbrOfSuplrEvalUsrDfndCritra2,
      @DefaultAggregation: #SUM
      //@EndUserText.label: 'User Criteria3 Count'
      NmbrOfSuplrEvalUsrDfndCritra3,
      @DefaultAggregation: #SUM
      //@EndUserText.label: 'User Criteria4 Count'
      NmbrOfSuplrEvalUsrDfndCritra4,
      @DefaultAggregation: #SUM
      //@EndUserText.label: 'User Criteria5 Count'
      NmbrOfSuplrEvalUsrDfndCritra5,
      @DefaultAggregation: #SUM 
      NmbrOfSuplrEvalUsrDfndCritra6,      

      // Score of each User Defined Criteria

      @DefaultAggregation: #SUM 
      cast( SuplrEvalUsrDfndCriteria1Score as mmpur_ana_supleval_usrdefscore )                                                                                                                                                      as SuplrEvalUsrDfndCriteria1Score,
      @DefaultAggregation: #SUM 
      cast( SuplrEvalUsrDfndCriteria2Score as mmpur_ana_supleval_usrdefscore )                                                                                                                                                      as SuplrEvalUsrDfndCriteria2Score,
      @DefaultAggregation: #SUM 
      cast( SuplrEvalUsrDfndCriteria3Score as mmpur_ana_supleval_usrdefscore )                                                                                                                                                      as SuplrEvalUsrDfndCriteria3Score,
      @DefaultAggregation: #SUM 
      cast( SuplrEvalUsrDfndCriteria4Score as mmpur_ana_supleval_usrdefscore )                                                                                                                                                      as SuplrEvalUsrDfndCriteria4Score,
      @DefaultAggregation: #SUM 
      cast( SuplrEvalUsrDfndCriteria5Score as mmpur_ana_supleval_usrdefscore )                                                                                                                                                      as SuplrEvalUsrDfndCriteria5Score,
      @DefaultAggregation: #SUM 
      cast( SupplierEvalUsrCriteria6Value as mmpur_ana_supleval_usrdefscore )                                                                                                                                                      as SupplierEvalUsrCriteria6Value,
      @DefaultAggregation: #SUM 
      cast( 1 as abap.int4 )                                                                                                                                                                                                        as TotNmbrOfSuplrUsrDfndCritra,

      // Total score of all user defined criteria based on Weightage and Count

      @DefaultAggregation: #SUM
      //@EndUserText.label: 'SUM. Weighted Total Score'
      cast(
             (  SuplrEvalUsrDfndCriteria1Scr1     * SupplierEvalUsrCriteria1Wgtg    +
                SuplrEvalUsrDfndCriteria2Scr1     * SupplierEvalUsrCriteria2Wgtg    +
                SuplrEvalUsrDfndCriteria3Scr1     * SupplierEvalUsrCriteria3Wgtg    +
                SuplrEvalUsrDfndCriteria4Scr1     * SupplierEvalUsrCriteria4Wgtg    +
                SuplrEvalUsrDfndCriteria5Scr1     * SupplierEvalUsrCriteria5Wgtg   +
                SuplrEvalUsrDfndCriteria6Scr1     * SuplrEvalUsrCriteria6WgtgValue ) *
                division( 1, (SupplierEvalUsrCriteria1Wgtg + SupplierEvalUsrCriteria2Wgtg + SupplierEvalUsrCriteria3Wgtg + SupplierEvalUsrCriteria4Wgtg + SupplierEvalUsrCriteria5Wgtg + SuplrEvalUsrCriteria6WgtgValue ) , 8 ) as mmpur_ana_supleval_usrdefscore  ) as SuplrEvalUsrDfndCritraTotScore,

      // Total Weighatage given to all user defined criteria

      @DefaultAggregation: #SUM
      //@EndUserText.label: 'Total Weight'
      cast (SupplierEvalUsrCriteria1Wgtg + SupplierEvalUsrCriteria2Wgtg + SupplierEvalUsrCriteria3Wgtg + SupplierEvalUsrCriteria4Wgtg + SupplierEvalUsrCriteria5Wgtg as suplr_eval_usrcrt_weight )                                  as SuplrEvalUsrDfndCritraTotVal,
        _Supplier,
        _PurchasingCategory,
        _UserDefCriteria   ,
        _MaterialGroup,
        _Region,
        _Country
}
where
  (
       SupplierEvalUsrCriteria1Wgtg != 0
    or SupplierEvalUsrCriteria2Wgtg != 0
    or SupplierEvalUsrCriteria3Wgtg != 0
    or SupplierEvalUsrCriteria4Wgtg != 0
    or SupplierEvalUsrCriteria5Wgtg != 0
     or SuplrEvalUsrCriteria6WgtgValue != 0
  )
```
