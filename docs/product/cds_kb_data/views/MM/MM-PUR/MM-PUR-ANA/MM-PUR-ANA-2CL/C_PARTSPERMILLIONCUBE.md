---
name: C_PARTSPERMILLIONCUBE
description: "Partspermillioncube"
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
# C_PARTSPERMILLIONCUBE

**Partspermillioncube**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocument` | ✓ | |  |  |  |  |
| `MaterialDocumentItem` | ✓ | |  |  |  |  |
| `MaterialDocumentYear` | ✓ | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Region` |  | | `_Supplier` | `Region` |  |  |
| `Country` |  | | `_Supplier` | `Country` |  |  |
| `PurchasingCategory` |  | |  |  |  |  |
| `PurgCatName` |  | |  |  |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `CalendarMonth` |  | | `_CalendarDate` | `CalendarMonth` |  |  |
| `CalendarYear` |  | | `_CalendarDate` | `CalendarYear` |  |  |
| `CalendarWeek` |  | | `_CalendarDate` | `CalendarWeek` |  |  |
| `CalendarQuarter` |  | | `_CalendarDate` | `CalendarQuarter` |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `NmbrOfReturnedPartsMainMeasure` |  | |  |  |  |  |
| `NmbrOfReceivedPartsMainMeasure` |  | |  |  |  |  |
| `NmbrOfReturnedPartsSecondMsr` |  | |  |  |  |  |
| `NotificationComplaintQuantity` |  | |  |  |  |  |
| `GoodsReceiptQtyInOrderUnit` |  | |  |  |  |  |
| `PurgCatUUID` |  | |  |  |  |  |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_PurchasingCategory` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_SupplierRegion` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_CalendarDate` | `I_CalendarDate` | [1..1] |
| `_MaterialGroup` | `I_ProductGroup` | [1..1] |
| `_Material` | `I_Product` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_PurchasingCategory` | `I_PurchasingCategoryValueHelp` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_SupplierRegion` | `I_Region` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CPPMCUBE'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:#CHECK
@VDM.viewType : #CONSUMPTION
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality:  #D
@ObjectModel.usageType.sizeCategory: #XL
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@EndUserText.label: 'Parts Per Million Cube View'
define view C_PartsPerMillionCube
  with parameters
    P_StartDate       : vdm_validitystart ,
    P_EndDate         :  vdm_validityend 
  as select from P_PPMSourceSelection(P_StartDate: $parameters.P_StartDate,  P_EndDate : $parameters.P_EndDate)

  association [1..1] to I_PurchasingOrganization      as _PurchasingOrganization on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [1..1] to I_PurchasingGroup             as _PurchasingGroup        on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [1..1] to I_Plant                       as _Plant                  on $projection.Plant = _Plant.Plant
  association [1..1] to I_CalendarDate                as _CalendarDate           on $projection.PostingDate = _CalendarDate.CalendarDate
  association [1..1] to I_ProductGroup                as _MaterialGroup          on $projection.MaterialGroup = _MaterialGroup.MaterialGroup
  association [1..1] to I_Product                     as _Material               on $projection.Material = _Material.Product
  association [1..1] to I_Supplier                    as _Supplier               on $projection.Supplier = _Supplier.Supplier
  association [1..1] to I_PurchasingCategoryValueHelp as _PurchasingCategory     on $projection.PurchasingCategory = _PurchasingCategory.PurchasingCategory
  association [1..1] to I_Country                     as _Country                on  $projection.Country = _Country.Country
  association [0..1] to I_Region                      as _SupplierRegion         on  $projection.Region  = _SupplierRegion.Region
                                                                                 and $projection.Country = _SupplierRegion.Country

{

  key MaterialDocument as MaterialDocument,
  key MaterialDocumentItem,
  key MaterialDocumentYear,

      @ObjectModel.foreignKey.association: '_Supplier'
      @Analytics.internalName:#LOCAL
      Supplier,

      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      @Analytics.internalName:#LOCAL
      PurchasingGroup,

      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      @Analytics.internalName:#LOCAL
      PurchasingOrganization,

      @ObjectModel.foreignKey.association: '_Material'
      @Analytics.internalName:#LOCAL
      Material,

      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @Analytics.internalName:#LOCAL
      MaterialGroup,


      @ObjectModel.foreignKey.association: '_Plant'
      @Analytics.internalName:#LOCAL
      Plant,
      
      @ObjectModel.foreignKey.association: '_SupplierRegion'
      @Analytics.internalName:#LOCAL
      _Supplier.Region as Region,
      
       @ObjectModel.foreignKey.association: '_Country'
      @Analytics.internalName:#LOCAL
       _Supplier.Country as Country,

      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      PurchasingCategory,
      @Semantics.text: true
      PurgCatName,

      PurchaseOrder,
      PurchaseOrderItem,
      _CalendarDate.CalendarMonth,
      @Semantics.calendar.year: true
      _CalendarDate.CalendarYear,
      _CalendarDate.CalendarWeek,
      _CalendarDate.CalendarQuarter,
      OrderQuantityUnit,
      GoodsMovementType,
      PostingDate,

      @DefaultAggregation: #SUM
      NmbrOfReturnedPartsMainMeasure,
      @DefaultAggregation: #SUM
      NmbrOfReceivedPartsMainMeasure,
      @DefaultAggregation: #SUM
      NmbrOfReturnedPartsSecondMsr,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      NotificationComplaintQuantity,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      GoodsReceiptQtyInOrderUnit,
      
      //Added for ATC
      PurgCatUUID,

      //associations

      _Supplier,
      _MaterialGroup,
      _PurchasingOrganization,
      _PurchasingGroup,
      _Plant,
      _CalendarDate,
      _Material,
      _PurchasingCategory,
      _SupplierRegion,
      _Country

}
```
