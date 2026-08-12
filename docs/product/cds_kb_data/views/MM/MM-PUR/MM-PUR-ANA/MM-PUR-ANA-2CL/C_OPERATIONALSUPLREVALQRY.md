---
name: C_OPERATIONALSUPLREVALQRY
description: "Operational Supplier Evaluation Score"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPERATIONALSUPLREVALQRY')/$value
semantic_en: "Operational Supplier Evaluation Score"
semantic_vi: "Operational Supplier Evaluation Score — CDS view tiêu dùng dựa trên C_OperationalSuplrEvalCube."
keywords:
  - "operational"
  - "supplier"
  - "evaluation"
  - "score"
  - "purchasing"
  - "document"
  - "item"
  - "purg"
  - "migrtn"
  - "cmpltd"
  - "anlyts"
  - "suplr"
  - "eval"
  - "critra"
  - "deliv"
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
# C_OPERATIONALSUPLREVALQRY

**Operational Supplier Evaluation Score**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPERATIONALSUPLREVALQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocument` | ✓ | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` | ✓ | |  |  | `NUMC(5)` | Purchasing Document Item |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  | `CHAR(1)` | Single-Character Flag |
| `SuplrEvalCritraDelivCompleted` |  | |  |  | `CHAR(10)` | Delivery Completed |
| `SuplrEvalRelevantDocCategory` |  | |  |  | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `PurchaseOrderDate` |  | |  |  | `DATS(8)` | Purchasing Document Date |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Supplier Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `PurchasingDocumentCategory` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TimeVarianceScore` |  | |  |  | `FLTP(16)` | Time Variance Score |
| `PriceVarianceScore` |  | |  |  | `FLTP(16)` | Price Variance Score |
| `QuantityVarianceScore` |  | |  |  | `FLTP(16)` | Quantity Variance Score |
| `InspectionLotQualityScore` |  | |  |  | `FLTP(16)` | Inspection Lot Score |
| `QualityNotificationScore` |  | |  |  | `FLTP(16)` | Quality Notification Score |
| `NumberOfPurchaseOrders` |  | |  |  | `INT4(10)` | Number of Purchase Orders |
| `NumberOfPurchaseOrderItems` |  | |  |  | `INT4(10)` | Number of Purchase Order Items |
| `PurchaseOrderNetPriceAmount` |  | |  |  | `CURR(21)` | Purchase Order Net Amount |
| `NmbrOfPOWithPriceVariance` |  | |  |  | `INT4(10)` |  |
| `NmbrOfPOWithQuantityVariance` |  | |  |  | `INT4(10)` |  |
| `NmbrOfPOWithTimeVariance` |  | |  |  | `INT4(10)` |  |
| `NmbrOfPOWithQualityVariance` |  | |  |  | `INT4(10)` |  |
| `QualityNotificationCount` |  | |  |  | `INT4(10)` |  |
| `SuplrEvalTimeVarianceScoreVal` |  | |  | `cast( 1 as abap.dec(15,3) )` | `DEC(15)` |  |
| `PriceVarianceScoreValue` |  | |  | `cast( 1 as abap.dec(15,3) )` | `DEC(15)` |  |
| `TotalQuantityVarianceScore` |  | |  | `cast( 1 as abap.dec(15,3) )` | `DEC(15)` |  |
| `InspectionLotQltyScoreValue` |  | |  | `cast( 1 as abap.dec(15,3) )` | `DEC(15)` |  |
| `QualityNotifVarianceScoreValue` |  | |  | `cast( 1 as abap.dec(15,3) )` | `DEC(15)` |  |
| `NmbrOfScoredSuppliers` |  | |  |  | `INT4(10)` | Count of Scored Suppliers |
| `SupplierOperationalScore` |  | |  |  | `DEC(4)` | Supplier Operational Score |
| `SuplrEvalOplScoreValue` |  | |  |  | `DEC(6)` | Supplier Operational Score |
| `PurchasingSpendRatioInPercent` |  | |  | `cast( 1 as abap.dec(15,3) )` | `DEC(15)` |  |
| `CalculatedOperationalScore` |  | |  | `cast( 1 as mm_a_variance_score )` | `DEC(5)` | Variance Score |
| `CalcdSuplrEvalOplScoreValue` |  | |  | `cast( 1 as mm_pur_ana_suplreval_opl_score )` | `DEC(6)` | Supplier Operational Score |
| `SupplierClassification` |  | |  |  | `CHAR(1)` | Supplier Evaluation Weighting and Scoring Classification |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPERATIONALSUPLREVALQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPERATIONALSUPLREVALQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMMOP1SUPEVALQRY'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
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
@EndUserText.label: 'Operational Supplier Evaluation Score'
define view C_OperationalSuplrEvalQry
  with parameters
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency : displaycurrency,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
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

  as select from C_OperationalSuplrEvalCube(  P_DisplayCurrency: $parameters.P_DisplayCurrency,
                                               P_StartDate: $parameters.P_StartDate,
                                               P_EndDate : $parameters.P_EndDate,
                                               P_DateFunction : $parameters.P_DateFunction
                                            ) as VendorEval
{
      //Z_SEBYOPERATIONALCUBE
  key PurchasingDocument,
  key PurchasingDocumentItem,
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
      @AnalyticsDetails.query.display: #KEY_TEXT
      @UI.hidden: true
      SuplrEvalCritraDelivCompleted,
      
      @Consumption: {
                      filter: {                    -- Usage of derviation.lookupEntity requires a filter definition too!
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
      @AnalyticsDetails.query.display: #KEY_TEXT
      @UI.hidden: true
      SuplrEvalRelevantDocCategory,

      CalendarYear,
      CalendarQuarter,
      CalendarMonth,
      CalendarWeek,
  //  @Consumption.hidden: true     
      @EndUserText.label: 'Purchasing Document Date'
      @EndUserText.quickInfo: 'Purchasing Document Date'
      PurchaseOrderDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingOrganization,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      CompanyCode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      //@Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false }commented to fix the multiple filters for supplier in UI, 
      // this annotation was actually added to enable filter push down but since it is not supported in AE query, this annotation is no longer required. 
      @Environment.sql.passValue: true
      Supplier,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      SupplierCountry,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      Region,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      Plant,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      Material,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      MaterialGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingDocumentCategory,
      PurchasingCategory,
      PurgCatName,
      @EndUserText: { label: 'Currency' , quickInfo: 'Currency' }
      DisplayCurrency,

      // PurchasingSourceType,
      @UI.hidden: true
      @EndUserText.label: 'Dummy Time'
      TimeVarianceScore,
      @EndUserText.label: 'Dummy Price'
      @UI.hidden: true
      PriceVarianceScore,
      @EndUserText.label: 'Dummy Quantity'
      @UI.hidden: true
      QuantityVarianceScore,
      @EndUserText.label: 'Dummy Inspection'
      @UI.hidden: true
      InspectionLotQualityScore,
      @EndUserText.label: 'Dummy Notif'
      @UI.hidden: true
      QualityNotificationScore,
      @Aggregation.referenceElement: ['PurchasingDocument']
      @Aggregation.default: #COUNT_DISTINCT
      @EndUserText.label: 'Number Of Purchasing Documents'
      @EndUserText.quickInfo: 'Number Of Purchasing Documents'
      NumberOfPurchaseOrders,
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Number Of Purchasing Document Items'
      @EndUserText.quickInfo: 'Number Of Purchasing Document Items'
      NumberOfPurchaseOrderItems,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      PurchaseOrderNetPriceAmount,
      @UI.hidden: true
      @EndUserText.label: 'No. of Purchasing Docs with Price Var.'
      NmbrOfPOWithPriceVariance,
      @UI.hidden: true      
      @EndUserText.label: 'No. of Purch Docs with Quantity Var.'
      NmbrOfPOWithQuantityVariance,
      @UI.hidden: true      
      @EndUserText.label: 'No. of Purchasing Docs with Time Var.'
      NmbrOfPOWithTimeVariance,
      @UI.hidden: true      
      @EndUserText.label: 'No. of Purchasing Docs with Quality Var.'
      NmbrOfPOWithQualityVariance,
      @UI.hidden: true
      QualityNotificationCount,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Time Variance Score'
      @AnalyticsDetails.query.formula :'case when $projection.NmbrOfPOWithTimeVariance > 0 then $projection.TimeVarianceScore /  $projection.NmbrOfPOWithTimeVariance else 0 end'
      cast( 1 as abap.dec(15,3) )                 as SuplrEvalTimeVarianceScoreVal,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Price Variance Score'
      @AnalyticsDetails.query.formula :'case when $projection.NmbrOfPOWithPriceVariance > 0 then $projection.PriceVarianceScore /  $projection.NmbrOfPOWithPriceVariance else 0 end'
      cast( 1 as abap.dec(15,3) )                 as PriceVarianceScoreValue,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Quantity Variance Score'
      @AnalyticsDetails.query.formula :'case when  $projection.NmbrOfPOWithQuantityVariance > 0 then $projection.QuantityVarianceScore /  $projection.NmbrOfPOWithQuantityVariance else 0 end'
      cast( 1 as abap.dec(15,3) )                 as TotalQuantityVarianceScore,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Inspection Lot Score'
      @AnalyticsDetails.query.formula :'case when $projection.NmbrOfPOWithQualityVariance > 0 then $projection.InspectionLotQualityScore /  $projection.NmbrOfPOWithQualityVariance else 0 end'
      cast( 1 as abap.dec(15,3) )                 as InspectionLotQltyScoreValue,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Notification Score'
      @AnalyticsDetails.query.formula :'case when $projection.NumberOfPurchaseOrderItems > 0 then $projection.QualityNotificationScore /  $projection.NumberOfPurchaseOrderItems else 0 end' // as every po item will have quality score irrespective of quality notif $projection.QualityNotificationCount'
      cast( 1 as abap.dec(15,3) )                 as QualityNotifVarianceScoreValue,

      //      @EndUserText.label: 'No.Of Docs-By Price'
      //      NmbrOfPOWithPriceVariance,
      //      @EndUserText.label: 'No.Of Docs-By Quantity'
      //      NmbrOfPOWithQuantityVariance,
      //      @EndUserText.label: 'No.Of Docs-By Time'
      //      NmbrOfPOWithTimeVariance,
      //      @EndUserText.label: 'No.Of Docs-By Lot'
      //      NmbrOfPOWithQualityVariance,
      //      @EndUserText.label: 'No.Of Docs-By QN'
      //      QualityNotificationCount,
      @EndUserText.label: 'No. of Scored Suppliers'
      NmbrOfScoredSuppliers,
      @UI.hidden: true
      @EndUserText.label: 'Dummy Operational'
      SupplierOperationalScore,
      @UI.hidden: true
      @EndUserText.label: 'Dummy Operational'
      SuplrEvalOplScoreValue,

      @UI.hidden: true
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Spend Percentage'
      @AnalyticsDetails.query.formula :'case when $projection.NmbrOfScoredSuppliers > 0 then $projection.PurchaseOrderNetPriceAmount /  $projection.NmbrOfScoredSuppliers else 0 end'
      cast( 1 as abap.dec(15,3) )                 as PurchasingSpendRatioInPercent,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Operational Score (Deprecated)'
      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: 'CalcdSuplrEvalOplScoreValue'
      @AnalyticsDetails.query.formula :'case when $projection.NumberOfPurchaseOrderItems > 0 then $projection.SupplierOperationalScore /  $projection.NumberOfPurchaseOrderItems else 0 end'
      cast( 1 as mm_a_variance_score )            as CalculatedOperationalScore,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Operational Score'
      @AnalyticsDetails.query.formula :'case when $projection.NumberOfPurchaseOrderItems > 0 then $projection.SuplrEvalOplScoreValue /  $projection.NumberOfPurchaseOrderItems else 0 end'
      cast( 1 as mm_pur_ana_suplreval_opl_score ) as CalcdSuplrEvalOplScoreValue,
      @UI.hidden: true
      SupplierClassification
}
```
