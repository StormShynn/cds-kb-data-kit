---
name: C_SUPLREVALBYQUANTITYCUBE
description: Suplrevalbyquantitycube
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
# C_SUPLREVALBYQUANTITYCUBE

**Suplrevalbyquantitycube**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  | `cast( QuantityVariance.PurchaseOrder as vdm_purchaseorder )` |  |  |
| `PurchaseOrderItem` | ✓ | |  | `cast( QuantityVariance.PurchaseOrderItem as vdm_purchaseorderitem)` |  |  |
| `SuplrEvalCritraDelivCompleted` |  | |  |  |  |  |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  |  |  |
| `SuplrEvalRelevantDocCategory` |  | |  |  |  |  |
| `PurOrdItmFirstGRPostingDate` |  | |  |  |  |  |
| `PurOrdItmFinalGRPostingDate` |  | |  |  |  |  |
| `CalendarYear` |  | | `_Calendar` | `CalendarYear` |  |  |
| `CalendarQuarter` |  | | `_Calendar` | `CalendarQuarter` |  |  |
| `CalendarMonth` |  | | `_Calendar` | `CalendarMonth` |  |  |
| `CalendarWeek` |  | | `_Calendar` | `CalendarWeek` |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Country` |  | | `_Supplier` | `Country` |  |  |
| `Region` |  | | `_Supplier` | `Region` |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `PurchasingCategory` |  | |  |  |  |  |
| `PurgCatName` |  | |  |  |  |  |
| `PurchaseOrderQuantityUnit` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `cast( DisplayCurrency as displaycurrency )` |  |  |
| `OrderedQuantity` |  | |  | `cast( OrderedQuantity as mm_a_ordered_quantity )` |  |  |
| `GoodsReceiptQty` |  | |  | `DeliveredQuantity` |  |  |
| `QuantityVarianceInOrdUnit` |  | |  | `cast ( QuantityVarianceInOrdUnit as mm_a_quantity_variance )` |  |  |
| `QuantityVarianceInDspCrcy` |  | |  | `cast( QuantityVarianceInDspCrcy as mm_a_quantity_var_amount )` |  |  |
| `QuantityVarianceScore` |  | |  | `cast( case when _UpdatedScore.IsScoreChanged = 'X' then _UpdatedScore.QuantityVarianceScore else SupplierEvaluationScore end as mm_a_variance_score )` |  |  |
| `QuantityVarianceInPctValue` |  | |  | `cast ( QuantityVarianceInPct as mmpur_ana_de_quantityvar_pct )` |  |  |
| `NumberOfPurchaseOrders` |  | |  | `cast( 1 as mm_pur_ana_numbrofpurords )` |  |  |
| `NumberOfPurchaseOrderItems` |  | |  | `cast( 1 as mm_pur_ana_numbrofpurorditms )` |  |  |
| `_Supplier` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PurchasingCategory` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_SupplierRegion` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PurchasingDocumentCategory` | | ✓ | | | | |
| `_DocConfigCategory` | | ✓ | | | | |
| `_DelivCmpltdConfign` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UpdatedScore` | `P_QuantityVarianceUpdatedScore` | [1..1] |
| `_Calendar` | `I_CalendarDate` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_MaterialGroup` | `I_ProductGroup` | [1..1] |
| `_Material` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_PurchasingCategory` | `I_PurchasingCategoryValueHelp` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_SupplierRegion` | `I_Region` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_PurchasingDocumentCategory` | `I_PurchasingDocumentCategory` | [1..1] |
| `_DocConfigCategory` | `I_SuplrEvalDocCatConfign` | [1..1] |
| `_DelivCmpltdConfign` | `I_SuplrEvalDelivCmpltdConfign` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMQUANTVARCUBE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Supplier Evaluation by Quantity Cube'
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey:true
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations:true
define view C_SuplrEvalByQuantityCube 

  with parameters
    P_DisplayCurrency : displaycurrency,
    P_StartDate       : vdm_validitystart,
    P_EndDate         : vdm_validityend
  as select from P_SupplierEvalByQuantity( P_DisplayCurrency : $parameters.P_DisplayCurrency,
                                           P_StartDate : $parameters.P_StartDate,
                                           P_EndDate : $parameters.P_EndDate) as QuantityVariance

  association [1..1] to P_QuantityVarianceUpdatedScore as _UpdatedScore               on  QuantityVariance.PurchaseOrder     = _UpdatedScore.PurchaseOrder
                                                                                      and QuantityVariance.PurchaseOrderItem = _UpdatedScore.PurchaseOrderItem
  association [1..1] to I_CalendarDate                 as _Calendar                   on  PurchaseOrderDate = _Calendar.CalendarDate

  association [1..1] to I_Supplier                     as _Supplier                   on  $projection.Supplier = _Supplier.Supplier

  association [1..1] to I_PurchasingOrganization       as _PurchasingOrganization     on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [1..1] to I_PurchasingGroup              as _PurchasingGroup            on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup

  association [1..1] to I_ProductGroup                 as _MaterialGroup              on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup

  association [1..1] to I_Product                      as _Material                   on  $projection.Material = _Material.Product

  association [1..1] to I_Plant                        as _Plant                      on  $projection.Plant = _Plant.Plant

  association [1..1] to I_PurchasingCategoryValueHelp  as _PurchasingCategory         on  $projection.PurchasingCategory = _PurchasingCategory.PurchasingCategory

  association [1..1] to I_Country                      as _Country                    on  $projection.country = _Country.Country

  association [0..1] to I_Region                       as _SupplierRegion             on  $projection.region  = _SupplierRegion.Region
                                                                                      and $projection.country = _SupplierRegion.Country
  
   association [1..1] to I_CompanyCode                as _CompanyCode                 on $projection.CompanyCode = _CompanyCode.CompanyCode
 
  association [1..1] to I_PurchasingDocumentCategory   as _PurchasingDocumentCategory on  $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory

  association [1..1] to I_SuplrEvalDocCatConfign       as _DocConfigCategory          on  $projection.SuplrEvalRelevantDocCategory = _DocConfigCategory.SuplrEvalRelevantDocCategory
  
  association [1..1] to I_SuplrEvalDelivCmpltdConfign  as _DelivCmpltdConfign         on  $projection.SuplrEvalCritraDelivCompleted = _DelivCmpltdConfign.SuplrEvalCritraDelivCompleted
  

{
      /* Keys */
  key cast( QuantityVariance.PurchaseOrder as vdm_purchaseorder )        as PurchaseOrder,
  key cast( QuantityVariance.PurchaseOrderItem as vdm_purchaseorderitem) as PurchaseOrderItem,


      @Consumption: {
                      filter: {                    -- Usage of derviation.lookupEntity requires a filter definition too!
                                mandatory: false,
                                hidden: true,
                                selectionType: #SINGLE,
                                multipleSelections: false
                              },
                      derivation: {
                                    lookupEntity: 'F_SuplrEvalCriteriaGenConfign',
                                    resultElement: 'SuplrEvalCritraDelivCompleted'
                                  }
                    }
      @Environment.sql.passValue: true
      @ObjectModel.foreignKey.association: '_DelivCmpltdConfign'
      @Analytics.internalName:#LOCAL
      SuplrEvalCritraDelivCompleted,

      @Consumption: {
                      filter: {                    -- Usage of derviation.lookupEntity requires a filter definition too!
                                mandatory: false,
                                hidden: true,
                                selectionType: #SINGLE,
                                multipleSelections: false
                              },
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
                      derivation: {
                                    lookupEntity: 'F_SuplrEvalDocCatConfign',
                                    resultElement: 'SuplrEvalRelevantDocCategory'
                                  }
                    }
      @Environment.sql.passValue: true
      @ObjectModel.foreignKey.association: '_DocConfigCategory'
      @Analytics.internalName:#LOCAL
      SuplrEvalRelevantDocCategory,

      /* Order Date */
      PurOrdItmFirstGRPostingDate,
      PurOrdItmFinalGRPostingDate,
      @Analytics.internalName:#LOCAL
      @Semantics.calendar.year: true
      _Calendar.CalendarYear,

      @Analytics.internalName:#LOCAL
      _Calendar.CalendarQuarter,

      @Analytics.internalName:#LOCAL
      _Calendar.CalendarMonth,

      @Analytics.internalName:#LOCAL
      _Calendar.CalendarWeek,

      /* Org Data */
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      @Analytics.internalName:#LOCAL
      QuantityVariance.PurchasingOrganization,

      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      @Analytics.internalName:#LOCAL
      PurchasingGroup,

      /* Supplier Data */
      @ObjectModel.foreignKey.association: '_Supplier'
      @Analytics.internalName:#LOCAL
      Supplier,

      @ObjectModel.foreignKey.association: '_Country'
      @Analytics.internalName:#LOCAL
      _Supplier.Country,

      @ObjectModel.foreignKey.association: '_SupplierRegion'
      @Analytics.internalName:#LOCAL
      _Supplier.Region,
      
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Analytics.internalName:#LOCAL
      CompanyCode,

      @ObjectModel.foreignKey.association: '_PurchasingDocumentCategory'
      @Analytics.internalName:#LOCAL
      PurchasingDocumentCategory,

      /* Item Data */
      @ObjectModel.foreignKey.association: '_Material'
      @Analytics.internalName:#LOCAL
      Material,

      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @Analytics.internalName:#LOCAL
      QuantityVariance.MaterialGroup,

      @ObjectModel.foreignKey.association: '_Plant'
      @Analytics.internalName:#LOCAL
      Plant,

      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      @Analytics.internalName:#LOCAL
      PurchasingCategory,

      @Analytics.internalName:#LOCAL
      @Semantics.text: true
      PurgCatName,

      @Semantics.unitOfMeasure: true
      PurchaseOrderQuantityUnit,

      @Semantics.currencyCode: true
      cast( DisplayCurrency as displaycurrency )                         as DisplayCurrency,

      /* Measures */
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      cast( OrderedQuantity as mm_a_ordered_quantity )                   as OrderedQuantity,
      @EndUserText.label: 'Goods Receipt Quantity'
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      DeliveredQuantity                                                  as GoodsReceiptQty,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      cast ( QuantityVarianceInOrdUnit as mm_a_quantity_variance )       as QuantityVarianceInOrdUnit,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( QuantityVarianceInDspCrcy as mm_a_quantity_var_amount )      as QuantityVarianceInDspCrcy,

      @DefaultAggregation: #SUM
      cast( case when _UpdatedScore.IsScoreChanged = 'X'
        then _UpdatedScore.QuantityVarianceScore
       else SupplierEvaluationScore
      end as mm_a_variance_score )                                       as QuantityVarianceScore,

      @DefaultAggregation: #SUM
      cast ( QuantityVarianceInPct as mmpur_ana_de_quantityvar_pct )                as QuantityVarianceInPctValue, // changed the DE to avoid numeric overflow error , as this filed holds the variance and not percentage mm_a_timevar_statdeliv_pct 

      @Aggregation.referenceElement: ['PurchaseOrder']
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as mm_pur_ana_numbrofpurords )                             as NumberOfPurchaseOrders,

      @DefaultAggregation: #SUM
      cast( 1 as mm_pur_ana_numbrofpurorditms )                          as NumberOfPurchaseOrderItems,

      _Supplier,
      _PurchasingOrganization,
      _PurchasingGroup,
      _MaterialGroup,
      _Material,
      _Plant,
      _PurchasingCategory,
      _Country,
      _SupplierRegion,
      _CompanyCode,
      _PurchasingDocumentCategory,
      _DocConfigCategory,
      _DelivCmpltdConfign

}
```
