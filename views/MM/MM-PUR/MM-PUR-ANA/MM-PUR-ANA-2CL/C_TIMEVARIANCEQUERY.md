---
name: C_TIMEVARIANCEQUERY
description: Time Variance
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TIMEVARIANCEQUERY')/$value
semantic_en: Time Variance
semantic_vi: Time Variance — CDS view tiêu dùng dựa trên C_TimeVarianceCube.
keywords:
  - time
  - variance
  - purchase
  - order
  - item
  - schedule
  - line
  - delivery
  - date
  - sched
  - stsc
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
---
# C_TIMEVARIANCEQUERY

**Time Variance**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TIMEVARIANCEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | ✓ | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `ScheduleLine` | ✓ | |  |  | `NUMC(4)` | Schedule Line Number |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date |
| `SchedLineStscDeliveryDate` |  | |  |  | `DATS(8)` | Statistics-Relevant Delivery Date |
| `OriglPOSchdLnDelivDte` |  | |  |  | `DATS(8)` | Original Delivery Date |
| `OriglPOSchedLineStstclDelivDte` |  | |  |  | `DATS(8)` | Original Statistical Delivery Date |
| `PurOrdItmFinalGRPostingDate` |  | |  |  | `DATS(8)` | Final Goods Receipt Date |
| `PurOrdItmFirstGRPostingDate` |  | |  |  | `DATS(8)` | First Goods Receipt Date |
| `OriglPurOrdItm1stGRPostgDte` |  | |  |  | `DATS(8)` | Original First Good Receipt Posting Date |
| `OriglPurOrdItmFnlGRPostgDte` |  | |  |  | `DATS(8)` | Original Final Goods Receipt Posting Date |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  | `CHAR(1)` | Single-Character Flag |
| `SuplrEvalRelevantDocCategory` |  | |  |  | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Supplier Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurchasingDocumentCategory` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `TimeVarianceInDays` |  | |  |  | `INT4(10)` | Overdue days |
| `TimeVarianceInPct` |  | |  |  | `DEC(14)` | Variance % for Statistical Delivery Date |
| `TimeVarianceInPctByDelivDate` |  | |  |  | `DEC(15)` | Variance for Delivery Date |
| `TimeVarianceScore` |  | |  |  | `DEC(3)` |  |
| `TimeVarianceScoreByDelivDate` |  | |  |  | `DEC(3)` |  |
| `NumberOfScheduleLines` |  | |  |  | `INT4(10)` | Number of Purchase Order Items |
| `SuplrEvalTimeVarianceInDays` |  | |  | `cast( 1 as mm_a_overdue_days )` | `INT4(10)` | Overdue days |
| `SuplrEvalTimeVarianceInPct` |  | |  | `cast( 1 as mmpur_ana_timevar_statdelivpct )` | `DEC(14)` | Variance % for Statistical Delivery Date |
| `SuplrEvalTmeVarcByDelivDtePct` |  | |  | `cast( 1 as mm_a_variance_delivery_pct )` | `DEC(15)` | Variance for Delivery Date |
| `SuplrEvalTimeVarianceScoreVal` |  | |  | `cast( 1 as abap.dec(3,0) )` | `DEC(3)` |  |
| `SuplrEvalTmeVarcDelivDteScrVal` |  | |  | `cast( 1 as abap.dec(3,0) )` | `DEC(3)` |  |
| `NumberOfPurchaseOrders` |  | |  |  | `INT4(10)` | Number of Purchase Orders |
| `NumberOfPurchaseOrderItems` |  | |  |  | `INT4(10)` | Number of Purchase Order Items |
| `TimeVarianceScoreValue` |  | |  |  | `DEC(6)` | Time Variance Score |
| `TmeVarcScrByDelivDateValue` |  | |  |  | `DEC(6)` | Time variance by statistical delivery date |
| `SuplrEvalTmeVarcScoreValue` |  | |  | `cast( 1 as mm_pur_ana_time_variance_score )` | `DEC(6)` | Time Variance Score |
| `SuplrEvalTmeVarcScrDelivDteVal` |  | |  | `cast( 1 as mm_pur_ana_stat_timevar_score )` | `DEC(6)` | Time variance by statistical delivery date |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TIMEVARIANCEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TIMEVARIANCEQUERY')/$value)*

```abap
@EndUserText.label: 'Time Variance'
@AbapCatalog.sqlViewName: 'CMMTIMEVARQUERY'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #XL
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY  ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Metadata.allowExtensions:true
define view C_TimeVarianceQuery
  with parameters

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_StartDate    : badat,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' }  ]
    }
    @Consumption.hidden: true
    P_EndDate      : badat,

    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
     entity: {
       name:'C_GregorianCalDateFuncVH',
       element:'DateFunction'
     }
   }]
    P_DateFunction : datefunctionid

  as select from C_TimeVarianceCube( P_StartDate: $parameters.P_StartDate , P_EndDate:  $parameters.P_EndDate )
{

      /* Keys */
      @EndUserText.label: 'Purchasing Document'          -- Label added as key field cannot be deprecated in a released CDS
      @EndUserText.quickInfo: 'Purchasing Document'
  key PurchaseOrder,
      @EndUserText.label: 'Purchasing Document Item'     -- Label added as key field cannot be deprecated in a released CDS
      @EndUserText.quickInfo: 'Purchasing Document Item'
  key PurchaseOrderItem,
  key ScheduleLine,
      /*  @UI.hidden: true
        @Consumption.hidden: true
     PurchaseOrderItemUniqueID, */
      /* Order Date */
      DeliveryDate,
      SchedLineStscDeliveryDate,
      OriglPOSchdLnDelivDte,
      OriglPOSchedLineStstclDelivDte,
      PurOrdItmFinalGRPostingDate,
      PurOrdItmFirstGRPostingDate,
      OriglPurOrdItm1stGRPostgDte,
      OriglPurOrdItmFnlGRPostgDte,
      /*@Consumption.hidden: true
      @UI.hidden: true
       PurchaseOrderDate, */
      //      _Calendar.CalendarYear,
      //      _Calendar.CalendarQuarter,
      //      _Calendar.CalendarMonth,
      //      _Calendar.CalendarWeek,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      CalendarYear,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      CalendarQuarter,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      CalendarMonth,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      CalendarWeek,

      /* Org Data*/
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
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      SuplrEvalRelevantDocCategory,

      /* Supplier */
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
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
      /* Item Data */
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
      Plant,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingCategory,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingDocumentCategory,
      PurgCatName,

      @Consumption.hidden: true
      TimeVarianceInDays,
      @Consumption.hidden: true
      TimeVarianceInPct,
      @Consumption.hidden: true
      TimeVarianceInPctByDelivDate,
      @Consumption.hidden: true
      TimeVarianceScore,
      @Consumption.hidden: true
      TimeVarianceScoreByDelivDate,
      @Consumption.hidden: true
      NumberOfScheduleLines,
      
      /* Measures */
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NumberOfScheduleLines > 0 THEN $projection.TimeVarianceInDays / $projection.NumberOfScheduleLines ELSE 0 END'
      cast( 1 as mm_a_overdue_days )              as SuplrEvalTimeVarianceInDays,

      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NumberOfScheduleLines > 0 THEN $projection.TimeVarianceInPct / $projection.NumberOfScheduleLines ELSE 0 END'
      cast( 1 as mmpur_ana_timevar_statdelivpct )     as SuplrEvalTimeVarianceInPct,  // changed the DE to avoid numeric overflow error , as this filed holds the variance and not percentage mm_a_timevar_statdeliv_pct 

      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NumberOfScheduleLines > 0 THEN $projection.TimeVarianceInPctByDelivDate / $projection.NumberOfScheduleLines ELSE 0 END'
      cast( 1 as mm_a_variance_delivery_pct )     as SuplrEvalTmeVarcByDelivDtePct,

      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: 'SuplrEvalTmeVarcScoreValue'
      @DefaultAggregation: #FORMULA
      @EndUserText: {label: 'Time Variance Score(Deprecated)' , quickInfo: 'Time Variance Score(Deprecated)'}
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NumberOfScheduleLines > 0 THEN $projection.TimeVarianceScore / $projection.NumberOfScheduleLines ELSE 0 END'
      cast( 1 as abap.dec(3,0) )   as SuplrEvalTimeVarianceScoreVal,

      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: 'SuplrEvalTmeVarcScrDelivDteVal'
      @DefaultAggregation: #FORMULA
      @EndUserText: {label: 'Delivery Date Score(Deprecated)' , quickInfo: 'Delivery Date Score(Deprecated)'}
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NumberOfScheduleLines > 0 THEN $projection.TimeVarianceScoreByDelivDate / $projection.NumberOfScheduleLines ELSE 0 END'
      cast( 1 as abap.dec(3,0) ) as SuplrEvalTmeVarcDelivDteScrVal,
      
      NumberOfPurchaseOrders,
      NumberOfPurchaseOrderItems,
      
      @Consumption.hidden: true
      TimeVarianceScoreValue,
      @Consumption.hidden: true
      TmeVarcScrByDelivDateValue,
      
      @Aggregation.default: #FORMULA
      @EndUserText: {label: 'Time Variance Score' , quickInfo: 'Time Variance Score'}
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NumberOfScheduleLines > 0 THEN $projection.TimeVarianceScoreValue / $projection.NumberOfScheduleLines ELSE 0 END'
      cast( 1 as mm_pur_ana_time_variance_score )   as SuplrEvalTmeVarcScoreValue,

      @Aggregation.default: #FORMULA
      @EndUserText: {label: 'Delivery Date Score' , quickInfo: 'Delivery Date Score'}
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NumberOfScheduleLines > 0 THEN $projection.TmeVarcScrByDelivDateValue / $projection.NumberOfScheduleLines ELSE 0 END'
      cast( 1 as mm_pur_ana_stat_timevar_score ) as SuplrEvalTmeVarcScrDelivDteVal

}
```
