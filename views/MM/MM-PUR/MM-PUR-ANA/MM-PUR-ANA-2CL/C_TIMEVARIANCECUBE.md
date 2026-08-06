---
name: C_TIMEVARIANCECUBE
description: Timevariancecube
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
  - analytical
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_TIMEVARIANCECUBE

**Timevariancecube**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseOrder` | `cast( SupplierEvalByTime.PurchaseOrder as vdm_purchaseorder )` |
| key `PurchaseOrderItem` | `cast(SupplierEvalByTime.PurchaseOrderItem as vdm_purchaseorderitem)` |
| key `ScheduleLine` | `ScheduleLine` |
| `DeliveryDate` | `cast( ScheduleLineDeliveryDate as fieu_deliverydate)` |
| `SchedLineStscDeliveryDate` | `cast( SchedLineStscDeliveryDate as slfdt)` |
| `OriglPOSchdLnDelivDte` | `OriglPOSchdLnDelivDte` |
| `OriglPOSchedLineStstclDelivDte` | `OriglPOSchedLineStstclDelivDte` |
| `PurOrdItmFinalGRPostingDate` | `PurOrdItmFinalGRPostingDate` |
| `PurOrdItmFirstGRPostingDate` | `PurOrdItmFirstGRPostingDate` |
| `OriglPurOrdItm1stGRPostgDte` | `OriglPurOrdItm1stGRPostgDte` |
| `OriglPurOrdItmFnlGRPostgDte` | `OriglPurOrdItmFnlGRPostgDte` |
| `PurchaseOrderDate` | `PurchaseOrderDate` |
| `CalendarYear` | `_Calendar.CalendarYear` |
| `CalendarQuarter` | `_Calendar.CalendarQuarter` |
| `CalendarMonth` | `_Calendar.CalendarMonth` |
| `CalendarWeek` | `_Calendar.CalendarWeek` |
| `PurgDocMigrtnIsCmpltdForAnlyts` | `PurgDocMigrtnIsCmpltdForAnlyts` |
| `SuplrEvalRelevantDocCategory` | `SuplrEvalRelevantDocCategory` |
| `PurchasingOrganization` | `SupplierEvalByTime.PurchasingOrganization` |
| `PurchasingGroup` | `PurchasingGroup` |
| `CompanyCode` | `CompanyCode` |
| `Supplier` | `Supplier` |
| `Region` | `_Supplier.Region` |
| `SupplierCountry` | `cast( _Supplier.Country as mm_a_supplier_country )` |
| `Material` | `Material` |
| `MaterialGroup` | `SupplierEvalByTime.MaterialGroup` |
| `Plant` | `SupplierEvalByTime.Plant` |
| `PurchasingCategory` | `_PurchasingCategoryMatlGroup._PurchasingCategory.PurchasingCategory` |
| `PurgCatName` | `_PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName` |
| `PurchasingDocumentCategory` | `PurchasingDocumentCategory` |
| `TimeVarianceInDays` | `cast ( TimeVarianceInDays as mm_a_overdue_days )` |
| `TimeVarianceInPct` | `cast ( TimeVarianceInPct as mmpur_ana_timevar_statdelivpct )` |
| `TimeVarianceInPctByDelivDate` | `cast( TimeVarianceInPctByDelivDate as mm_a_variance_delivery_pct )` |
| `TimeVarianceScore` | `cast( case when UpdatedScore.IsScoreChanged = 'X' then UpdatedScore.TimeVarianceScore else SupplierEvalByTime.TimeVarianceScore end as abap.dec(3,0) )` |
| `TimeVarianceScoreByDelivDate` | `cast ( TimeVarianceScoreByDelivDate as abap.dec(3,0))` |
| `TimeVarianceScoreValue` | `cast( case when UpdatedScore.IsScoreChanged = 'X' then UpdatedScore.TimeVarianceScore else SupplierEvalByTime.TimeVarianceScore end as mm_pur_ana_time_variance_score )` |
| `TmeVarcScrByDelivDateValue` | `cast ( TimeVarianceScoreByDelivDate as mm_pur_ana_stat_timevar_score)` |
| `PurchaseOrderItemUniqueID` | `cast( PurchaseOrderItemUniqueID as purchasingdocumentitemuniqueid )` |
| `NumberOfPurchaseOrders` | `cast( 1 as mm_pur_ana_numbrofpurords )` |
| `NumberOfPurchaseOrderItems` | `cast( 1 as mm_pur_ana_numbrofpurorditms )` |
| `NumberOfScheduleLines` | `cast( 1 as mm_pur_ana_numbrofpurorditms )` |
| `_Calendar` | *Association* |
| `_MaterialGroup` | *Association* |
| `_Supplier` | *Association* |
| `_Material` | *Association* |
| `_PurchasingGroup` | *Association* |
| `_PurchasingOrganization` | *Association* |
| `_Plant` | *Association* |
| `_PurchasingDocumentCategory` | *Association* |
| `_CompanyCode` | *Association* |
| `_Country` | *Association* |
| `_PurchasingCategory` | *Association* |
| `_Region` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Calendar` | `I_CalendarDate` | [1..1] |
| `_MaterialGroup` | `I_ProductGroup_2` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Material` | `I_Product` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_PurchasingCategoryMatlGroup` | `I_PurgCatMaterialGroupAPI01` | [1..1] |
| `_PurchasingDocumentCategory` | `I_PurchasingDocumentCategory` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_PurchasingCategory` | `I_PurchasingCategoryValueHelp` | [1..1] |
| `_Region` | `I_Region` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMTIMEVARCUBE'
//@ClientDependent: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Time Variance'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@OData.publish: true
@Analytics.dataCategory: #CUBE
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #XL
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@AbapCatalog.preserveKey:true
define view C_TimeVarianceCube

  with parameters
    P_StartDate : budat,
    P_EndDate   : budat

  as select from           P_TimeVariance1( P_StartDate: $parameters.P_StartDate , P_EndDate: $parameters.P_EndDate ) as SupplierEvalByTime


    left outer to one join P_TimeVarianceUpdatedScore                                                                 as UpdatedScore on  SupplierEvalByTime.PurchaseOrder     = UpdatedScore.PurchaseOrder
                                                                                                                                      and SupplierEvalByTime.PurchaseOrderItem = UpdatedScore.PurchaseOrderItem
  association [1..1] to I_CalendarDate                as _Calendar                    on  $projection.PurchaseOrderDate = _Calendar.CalendarDate

  association [1..1] to I_ProductGroup_2              as _MaterialGroup               on  $projection.MaterialGroup = _MaterialGroup.ProductGroup

  association [0..1] to I_Supplier                    as _Supplier                    on  $projection.Supplier = _Supplier.Supplier
  //  and $projection.CompanyCode  = _Supplier.CompanyCode

  association [1..1] to I_Product                     as _Material                    on  $projection.Material = _Material.Product
  //      and $projection.Plant    = _Material.Plant
  association [0..1] to I_PurchasingGroup             as _PurchasingGroup             on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [0..1] to I_PurchasingOrganization      as _PurchasingOrganization      on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization //and
  association [1..1] to I_Plant                       as _Plant                       on  $projection.Plant = _Plant.Plant
  association [1..1] to I_PurgCatMaterialGroupAPI01   as _PurchasingCategoryMatlGroup on  $projection.MaterialGroup = _PurchasingCategoryMatlGroup.MaterialGroup
  association [1..1] to I_PurchasingDocumentCategory  as _PurchasingDocumentCategory  on  $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory
  association [1..1] to I_CompanyCode                 as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Country                     as _Country                     on  $projection.SupplierCountry = _Country.Country
  association [1..1] to I_PurchasingCategoryValueHelp as _PurchasingCategory          on  $projection.PurchasingCategory = _PurchasingCategory.PurchasingCategory
  association [1..1] to I_Region                      as _Region                      on  $projection.Region = _Region.Region
                                                                                      and _Region.Country    = $projection.SupplierCountry
{
      /* Keys */
  key cast( SupplierEvalByTime.PurchaseOrder as vdm_purchaseorder )          as PurchaseOrder,

  key cast(SupplierEvalByTime.PurchaseOrderItem as vdm_purchaseorderitem)    as PurchaseOrderItem,
  key ScheduleLine,

      /* Order Date */
      cast( ScheduleLineDeliveryDate as fieu_deliverydate)                   as DeliveryDate,
      cast( SchedLineStscDeliveryDate as slfdt)                              as SchedLineStscDeliveryDate,

      OriglPOSchdLnDelivDte,
      OriglPOSchedLineStstclDelivDte,

      //      cast ( PostingDate as mm_a_goods_receipt_date )                                   as  PostingDate,
      PurOrdItmFinalGRPostingDate,
      PurOrdItmFirstGRPostingDate,

      OriglPurOrdItm1stGRPostgDte,
      OriglPurOrdItmFnlGRPostgDte,

      PurchaseOrderDate,
      @Analytics.internalName:#LOCAL
      @Semantics.calendar.year: true
      _Calendar.CalendarYear,
      @Analytics.internalName:#LOCAL
      _Calendar.CalendarQuarter,
      @Analytics.internalName:#LOCAL
      _Calendar.CalendarMonth,
      @Analytics.internalName:#LOCAL
      _Calendar.CalendarWeek,
      @Semantics.booleanIndicator: true
      PurgDocMigrtnIsCmpltdForAnlyts,
      @Environment.sql.passValue: true
      SuplrEvalRelevantDocCategory,
      /* Org Data*/
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      @Analytics.internalName:#LOCAL
      SupplierEvalByTime.PurchasingOrganization,
      //@Semantics.text: true
      //cast ( _PurchasingOrganization.PurchasingOrganizationName as mm_a_purg_org_name ) as  PurchasingOrganizationName,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      @Analytics.internalName:#LOCAL
      PurchasingGroup,
      //@Semantics.text: true
      // cast ( _PurchasingGroup.PurchasingGroupName as mm_a_purg_grp_name )               as  PurchasingGroupName,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Analytics.internalName:#LOCAL
      CompanyCode,

      /* Supplier */
      @ObjectModel.foreignKey.association: '_Supplier'
      @Analytics.internalName:#LOCAL
      Supplier,
      //@Semantics.text: true
      //cast ( _Supplier.SupplierName as suppliername )                                   as  SupplierName,

      @ObjectModel.foreignKey.association: '_Region'
      @Analytics.internalName:#LOCAL
      _Supplier.Region                                                       as Region,

      @ObjectModel.foreignKey.association: '_Country'
      @Analytics.internalName:#LOCAL
      cast( _Supplier.Country as mm_a_supplier_country )                     as SupplierCountry,
      //@Semantics.text: true
      //_Supplier._CountryText[1: Language = $session.system_language].CountryName,

      /* Item Data */
      @ObjectModel.foreignKey.association: '_Material'
      @Analytics.internalName:#LOCAL
      Material,
      //@Semantics.text: true
      //_Material.MaterialName,

      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @Analytics.internalName:#LOCAL
      SupplierEvalByTime.MaterialGroup,
      //@Semantics.text: true
      //_MaterialGroup.MaterialGroupName,
      @ObjectModel.foreignKey.association: '_Plant'
      @Analytics.internalName:#LOCAL
      SupplierEvalByTime.Plant,
      //@Semantics.text: true
      //_Plant.PlantName,


      // @ObjectModel.foreignKey.association: '_PurchasingCategory'
      @Analytics.internalName:#LOCAL
      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      _PurchasingCategoryMatlGroup._PurchasingCategory.PurchasingCategory    as PurchasingCategory,
      //@Semantics.text: true
      //_PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName                                        as PurgCatName,
      @Semantics.text: true
      _PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName,

      @EndUserText.label: 'Purchasing Document Category'
      @ObjectModel.foreignKey.association: '_PurchasingDocumentCategory'
      @Analytics.internalName:#LOCAL
      PurchasingDocumentCategory,

      //@Semantics.text: true
      //_PurchasingDocumentCategory._Text[1: Language = $session.system_language].PurchasingDocumentCategoryName as PurchasingDocumentCategoryName,


      /* Measures */
      @DefaultAggregation: #SUM
      cast (  TimeVarianceInDays as mm_a_overdue_days )                      as TimeVarianceInDays,

      @DefaultAggregation: #SUM
      cast ( TimeVarianceInPct as mmpur_ana_timevar_statdelivpct )           as TimeVarianceInPct, // changed the DE to avoid numeric overflow error , as this filed holds the variance and not percentage mm_a_timevar_statdeliv_pct
      @DefaultAggregation: #SUM
      cast( TimeVarianceInPctByDelivDate as mm_a_variance_delivery_pct )     as TimeVarianceInPctByDelivDate,

      @DefaultAggregation: #SUM
      //       0 as TimeVarianceScore,
      cast( case when UpdatedScore.IsScoreChanged = 'X'
        then UpdatedScore.TimeVarianceScore
       else SupplierEvalByTime.TimeVarianceScore
      end as abap.dec(3,0)  )                                                as TimeVarianceScore,
      //
      @DefaultAggregation: #SUM
      //      0 as TimeVarianceScoreByDelivDate
      cast (  TimeVarianceScoreByDelivDate as abap.dec(3,0))                 as TimeVarianceScoreByDelivDate,

      @Aggregation.default: #SUM
      cast( case when UpdatedScore.IsScoreChanged = 'X'
        then UpdatedScore.TimeVarianceScore
       else SupplierEvalByTime.TimeVarianceScore
      end as mm_pur_ana_time_variance_score  )                               as TimeVarianceScoreValue,
      
      @Aggregation.default: #SUM
      cast (  TimeVarianceScoreByDelivDate as mm_pur_ana_stat_timevar_score) as TmeVarcScrByDelivDateValue,

      cast( PurchaseOrderItemUniqueID as purchasingdocumentitemuniqueid )    as PurchaseOrderItemUniqueID,

      // @EndUserText.label: 'Purchase Order Count'
      @Aggregation.referenceElement: ['PurchaseOrder']
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as mm_pur_ana_numbrofpurords )                                 as NumberOfPurchaseOrders,

      @Aggregation.referenceElement: ['PurchaseOrderItemUniqueID']
      //  @DefaultAggregation: #SUM
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as mm_pur_ana_numbrofpurorditms )                              as NumberOfPurchaseOrderItems,

      @DefaultAggregation: #SUM
      cast( 1 as mm_pur_ana_numbrofpurorditms )                              as NumberOfScheduleLines,

      _Calendar,
      _MaterialGroup,
      _Supplier,
      _Material,
      _PurchasingGroup,
      _PurchasingOrganization,
      _Plant,
      _PurchasingDocumentCategory,
      _CompanyCode,
      _Country,
      _Region,
      _PurchasingCategory


}
```
