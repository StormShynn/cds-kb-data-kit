---
name: C_PRICEVARIANCECUBE
description: Pricevariancecube
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
# C_PRICEVARIANCECUBE

**Pricevariancecube**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  | `cast( PriceVariance.PurchaseOrder as vdm_purchaseorder )` |  |  |
| `PurchaseOrderItem` | ✓ | |  | `cast(PriceVariance.PurchaseOrderItem as vdm_purchaseorderitem)` |  |  |
| `PurgDocMigrtnIsCmpltdForAnlyts` | ✓ | |  |  |  |  |
| `SuplrEvalRelevantDocCategory` | ✓ | |  |  |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `CalendarYear` |  | | `_Calendar` | `CalendarYear` |  |  |
| `CalendarQuarter` |  | | `_Calendar` | `CalendarQuarter` |  |  |
| `CalendarMonth` |  | | `_Calendar` | `CalendarMonth` |  |  |
| `CalendarWeek` |  | | `_Calendar` | `CalendarWeek` |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierCountry` |  | |  | `cast( _Supplier.Country as mm_a_supplier_country )` |  |  |
| `Region` |  | | `_Supplier` | `Region` |  |  |
| `Plant` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurchasingCategory` |  | |  |  |  |  |
| `PurgCatName` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `PurchaseOrderQuantityUnit` |  | |  |  |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  |  |  |  |
| `PriceVarianceInPct` |  | |  | `cast(PriceVarianceInPct as mm_ana_price_var_pct)` |  |  |
| `PriceVarianceAmount` |  | |  | `cast(PriceVarianceAmount as abap.curr(13,3))` |  |  |
| `PurchaseOrderNetPriceAmount` |  | |  | `cast(PurchaseOrderNetPriceAmount as abap.curr(13,3))` |  |  |
| `InvoicePrice` |  | |  | `cast(InvoicePrice as abap.curr(13,3))` |  |  |
| `DeliveredQuantity` |  | |  |  |  |  |
| `OrderedQuantity` |  | |  |  |  |  |
| `PriceVarianceScore` |  | |  |  |  |  |
| `NumberOfPurchaseOrders` |  | |  | `cast( 1 as mm_pur_ana_numbrofpurords )` |  |  |
| `NumberOfPurchaseOrderItems` |  | |  | `cast( 1 as mm_pur_ana_numbrofpurorditms )` |  |  |
| `_Material` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_SupplierRegion` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PurchasingCategory` | | ✓ | | | | |
| `_PurchasingDocumentCatName` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Material` | `I_Product` | [1..1] |
| `_MaterialGroup` | `I_ProductGroup` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_SupplierRegion` | `I_Region` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Calendar` | `I_CalendarDate` | [1..1] |
| `_PurchasingCategory` | `I_PurchasingCategoryValueHelp` | [1..1] |
| `_PurchasingDocumentCatName` | `I_PurchasingDocumentCategory` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMASEQNCUBE'
@EndUserText.label: 'Cube view for Sup Eval by Price'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
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
define view C_PriceVarianceCube
  with parameters
    P_DisplayCurrency : displaycurrency,
    P_StartDate       : budat,
    P_EndDate         : budat
  as select from           P_PRICEVARIANCEWTHADJUSTSCORE( P_DisplayCurrency : $parameters.P_DisplayCurrency,
                                             P_StartDate : $parameters.P_StartDate,
                                             P_EndDate : $parameters.P_EndDate ) as PriceVariance


//    left outer to one join P_PriceVarianceUpdatedScore                           as UpdatedScore on  PriceVariance.PurchaseOrder     = UpdatedScore.PurchaseOrder
//                                                                                                 and PriceVariance.PurchaseOrderItem = UpdatedScore.PurchaseOrderItem
  association [1..1] to I_Product                as _Material               on  $projection.Material = _Material.Product

  association [1..1] to I_ProductGroup           as _MaterialGroup          on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup

  association [1..1] to I_Supplier               as _Supplier               on  $projection.Supplier = _Supplier.Supplier

  association [0..1] to I_Country                as _Country                on  $projection.SupplierCountry = _Country.Country

  association [0..1] to I_Region                 as _SupplierRegion         on  $projection.region          = _SupplierRegion.Region
                                                                            and $projection.SupplierCountry = _SupplierRegion.Country

  association [1..1] to I_CompanyCode                as _CompanyCode        on $projection.CompanyCode = _CompanyCode.CompanyCode
 
  association [1..1] to I_PurchasingGroup        as _PurchasingGroup        on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup

  association [1..1] to I_PurchasingOrganization as _PurchasingOrganization on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [1..1] to I_Plant                  as _Plant                  on  $projection.Plant = _Plant.Plant

  association [1..1] to I_CalendarDate           as _Calendar               on  $projection.PurchaseOrderDate = _Calendar.CalendarDate
  association [1..1] to I_PurchasingCategoryValueHelp as _PurchasingCategory     on  $projection.PurchasingCategory = _PurchasingCategory.PurchasingCategory
  association [1..1] to I_PurchasingDocumentCategory as _PurchasingDocumentCatName on  $projection.PurchasingDocumentCategory = _PurchasingDocumentCatName.PurchasingDocumentCategory
  
{
      /* Keys */
  key cast( PriceVariance.PurchaseOrder as vdm_purchaseorder )       as PurchaseOrder,
  key cast(PriceVariance.PurchaseOrderItem as vdm_purchaseorderitem) as PurchaseOrderItem,  
    
      @Consumption.hidden: true  
      @Environment.sql.passValue: true
  key PurgDocMigrtnIsCmpltdForAnlyts,
      
      @Environment.sql.passValue: true
  key SuplrEvalRelevantDocCategory,
      
      @Consumption.hidden: true
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

      /* Org Data */
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      @Analytics.internalName:#LOCAL
      PriceVariance.PurchasingOrganization,

      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      @Analytics.internalName:#LOCAL
      PurchasingGroup,
      
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Analytics.internalName:#LOCAL
      CompanyCode,

      @ObjectModel.foreignKey.association: '_Supplier'
      @Analytics.internalName:#LOCAL
      Supplier,

      @ObjectModel.foreignKey.association: '_Country'
      @Analytics.internalName:#LOCAL
      cast( _Supplier.Country as mm_a_supplier_country )             as SupplierCountry,

      @ObjectModel.foreignKey.association: '_SupplierRegion'
      @Analytics.internalName:#LOCAL
      _Supplier.Region,

      @ObjectModel.foreignKey.association: '_Plant'
      @Analytics.internalName:#LOCAL
      Plant,

      @ObjectModel.foreignKey.association: '_Material'
      @Analytics.internalName:#LOCAL
      Material,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @Analytics.internalName:#LOCAL
      MaterialGroup,
      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      @Analytics.internalName:#LOCAL
     PriceVariance.PurchasingCategory                               as PurchasingCategory,
     @Semantics.text: true
      PurgCatName ,
      
      @ObjectModel.foreignKey.association: '_PurchasingDocumentCatName'
      @Analytics.internalName:#LOCAL
      @Consumption.labelElement: 'PurchasingDocumentCategory'
      PriceVariance.PurchasingDocumentCategory,
          
      @Semantics.currencyCode: true
      Currency,
      @Semantics.unitOfMeasure: true
      PurchaseOrderQuantityUnit,
      @Semantics.unitOfMeasure: true
      OrderPriceUnit,

      @Semantics.currencyCode: true
      DisplayCurrency,

      /* Measures */
      @DefaultAggregation: #SUM
      //cast(PriceVarianceInPct as mm_a_variance_pct) as PriceVarianceInPct,                  //2809288
      @EndUserText.label: 'Variance %'
      cast(PriceVarianceInPct as mm_ana_price_var_pct)                     as PriceVarianceInPct,

      @DefaultAggregation: #SUM
      //@Semantics.amount.currencyCode: 'Currency'
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @EndUserText.label: 'Price Variance Amount'
      cast(PriceVarianceAmount as abap.curr(13,3))                   as PriceVarianceAmount,         //2809288

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @EndUserText.label: 'PO price per unit'
      cast(PurchaseOrderNetPriceAmount as abap.curr(13,3))           as PurchaseOrderNetPriceAmount, //2809288

      @DefaultAggregation: #SUM
      @EndUserText.label: 'Invc price per unit'
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(InvoicePrice as abap.curr(13,3))                          as InvoicePrice,                //2809288

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderPriceUnit'
      DeliveredQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      OrderedQuantity,

      @DefaultAggregation: #SUM
//      cast( case when UpdatedScore.IsScoreChanged = 'X'
//            then UpdatedScore.PriceVarianceScore
//           else SupplierEvaluationScore
//      end as mm_a_variance_score )                                   as 
       PriceVarianceScore,

      // @EndUserText.label: 'Purchase Order Count'
      @Aggregation.referenceElement: ['PurchaseOrder']
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as mm_pur_ana_numbrofpurords )                         as NumberOfPurchaseOrders,

      //@EndUserText.label: 'Purchase Order Item Count'
      @DefaultAggregation: #SUM
      cast( 1 as mm_pur_ana_numbrofpurorditms )                      as NumberOfPurchaseOrderItems,
      _PurchasingOrganization,
      _PurchasingGroup,
      _Country,
      _Supplier,
      _SupplierRegion,
      _PurchasingCategory,
      _Plant,
      _Material,
      _CompanyCode,
      _MaterialGroup,
      _PurchasingDocumentCatName



}
```
