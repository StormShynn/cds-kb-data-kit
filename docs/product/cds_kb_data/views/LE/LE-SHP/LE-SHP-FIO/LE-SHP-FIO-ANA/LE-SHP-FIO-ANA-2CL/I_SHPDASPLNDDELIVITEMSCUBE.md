---
name: I_SHPDASPLNDDELIVITEMSCUBE
description: "Shpdasplnddelivitemscube"
app_component: LE-SHP-FIO-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - interface-view
  - analytical
  - item-level
  - component:LE-SHP-FIO-ANA-2CL
  - lob:Logistics Execution
---
# I_SHPDASPLNDDELIVITEMSCUBE

**Shpdasplnddelivitemscube**

| Property | Value |
|---|---|
| App Component | `LE-SHP-FIO-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutboundDelivery` | ✓ | |  |  |  |  |
| `OutboundDeliveryItem` | ✓ | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `RatioUnit` |  | |  | `cast ('%' as abap.unit( 3 ))` |  |  |
| `HundredInPercent` |  | |  | `100` |  |  |
| `PlannedGoodsIssueDate` |  | |  |  |  |  |
| `AdjustedPlannedGoodsIssueDate` |  | |  |  |  |  |
| `ActualGoodsMovementDate` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `DeliveryDocumentType` |  | |  |  |  |  |
| `GoodsMovementStatus` |  | |  |  |  |  |
| `ReceivingPlant` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ProposedDeliveryRoute` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `TransportationGroup` |  | |  |  |  |  |
| `Warehouse` |  | |  |  |  |  |
| `CalendarYear` |  | |  |  |  |  |
| `CalendarQuarter` |  | |  |  |  |  |
| `CalendarMonth` |  | |  |  |  |  |
| `CalendarWeek` |  | |  |  |  |  |
| `YearMonth` |  | |  |  |  |  |
| `YearQuarter` |  | |  |  |  |  |
| `YearWeek` |  | |  |  |  |  |
| `CustomerClassification` |  | |  |  |  |  |
| `ForwardingAgent` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `NumberOfDeliveryItems` |  | |  | `cast ( 1 as anz_lief_pos )` |  |  |
| `NmbrOfShpdAsPlndDelivItems` |  | |  |  |  |  |
| `GIToPlndGIDelayInDays` |  | |  |  |  |  |
| `MaxGIToPlndGIDelayInDays` |  | |  | `cast ( GIToPlndGIDelayInDays as max_gi_to_plnd_gi_delay )` |  |  |
| `_CustomerClassification` | | ✓ | | | | |
| `_DeliveryDocumentType` | | ✓ | | | | |
| `_DeliveryPriority` | | ✓ | | | | |
| `_ForwardingAgent` | | ✓ | | | | |
| `_GoodsMovementStatus` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ReceivingPlant` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_TransportationGroup` | | ✓ | | | | |
| `_Warehouse` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_DeliveryDocumentItem` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISHPPLNDCUBE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@Analytics.dataCategory: #CUBE
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@VDM.viewType: #COMPOSITE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking:#('TRANSACTIONAL_DATA')
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_CUBE ]

@EndUserText.label: 'Delivery Items Shipped as Planned - Cube'

define view I_ShpdAsPlndDelivItemsCube 
   with parameters P_ShippedAsPlannedOffsetDays : le_shippedasplannedoffsetdays
as select from P_DeliveryItemGIDelayCalc
  (P_ShippedAsPlannedOffsetDays:$parameters.P_ShippedAsPlannedOffsetDays)

left outer to one join I_CalendarDate as PlndGICalendarDate on AdjustedPlannedGoodsIssueDate = PlndGICalendarDate.CalendarDate  
//Extensibility
association [0..1] to E_DeliveryDocumentItem as _Extension on  $projection.OutboundDelivery     = _Extension.DeliveryDocument
                                                           and $projection.OutboundDeliveryItem = _Extension.DeliveryDocumentItem
{
  key OutboundDelivery,
  
  key OutboundDeliveryItem,
  
  @ObjectModel.foreignKey.association: '_Product' 
  Product,
  
  @Semantics.unitOfMeasure: true
  cast ('%' as abap.unit( 3 )) as RatioUnit,
  
//  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  @DefaultAggregation: #MAX
  100 as HundredInPercent,
  
  PlannedGoodsIssueDate,

  AdjustedPlannedGoodsIssueDate, 
  
  ActualGoodsMovementDate, 
  @ObjectModel.foreignKey.association: '_DeliveryPriority'
  DeliveryPriority,
  
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesDocumentStdVH', element: 'SalesDocument' } } ]   
  ReferenceSDDocument,
  
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesDocumentItemStdVH', element: 'SalesDocumentItem' },
                                          additionalBinding: [{localElement: 'ReferenceSDDocument', element: 'SalesDocument' } ] } ] 
  ReferenceSDDocumentItem,
  
  @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
  ReferenceSDDocumentCategory,

  @ObjectModel.foreignKey.association: '_DeliveryDocumentType'
  DeliveryDocumentType,
  
  @ObjectModel.foreignKey.association: '_GoodsMovementStatus'
  GoodsMovementStatus,
  
  @ObjectModel.foreignKey.association: '_ReceivingPlant'
  ReceivingPlant,
  
  @ObjectModel.foreignKey.association: '_ShipToParty'
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ] 
  ShipToParty,
  
  @ObjectModel.foreignKey.association: '_ShippingCondition'
  ShippingCondition,

  @ObjectModel.foreignKey.association: '_ShippingPoint'
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ShippingPointStdVH', element: 'ShippingPoint' } } ] 
  ShippingPoint,
  
  @ObjectModel.foreignKey.association: '_SoldToParty'
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]  
  SoldToParty,
  
  ProposedDeliveryRoute,
  
  @ObjectModel.foreignKey.association: '_ProductGroup' 
  ProductGroup,
  
  @ObjectModel.foreignKey.association: '_Plant' 
  Plant,
  
  @ObjectModel.foreignKey.association: '_TransportationGroup'
  TransportationGroup,
  
  @ObjectModel.foreignKey.association: '_Warehouse'
  Warehouse,
    
  @Semantics: { calendar: { year: true } }
  CalendarYear,
  
  @Semantics.calendar.quarter: true
  CalendarQuarter, 
  
  @Semantics.calendar.month: true
  CalendarMonth, 
  
  @Semantics.calendar.week: true
  CalendarWeek, 
  
  @Semantics.calendar.yearMonth: true
  YearMonth, 
  
  @Semantics.calendar.yearQuarter: true
  YearQuarter, 
  
  @Semantics.calendar.yearWeek: true
  YearWeek, 

  @ObjectModel.foreignKey.association: '_CustomerClassification'
  CustomerClassification,

  @ObjectModel.foreignKey.association: '_ForwardingAgent' 
  ForwardingAgent,
  
  @Semantics.systemDate.createdAt: true
  CreationDate, 
   
  /* KPIs */
  @DefaultAggregation: #SUM
  cast ( 1 as anz_lief_pos ) as NumberOfDeliveryItems,
  
  @DefaultAggregation: #SUM
  NmbrOfShpdAsPlndDelivItems,
  
  @DefaultAggregation: #SUM
  GIToPlndGIDelayInDays,
  
  @DefaultAggregation: #MAX
  cast ( GIToPlndGIDelayInDays as max_gi_to_plnd_gi_delay ) as MaxGIToPlndGIDelayInDays,
  
  /* Associations */
  _CustomerClassification,
  _DeliveryDocumentType,
  _DeliveryPriority,
  _ForwardingAgent, 
  _GoodsMovementStatus,
  _Plant,
  _Product,
  _ProductGroup,
  _ReceivingPlant,
  _ReferenceSDDocumentCategory,
  _ShippingCondition,
  _ShippingPoint,
  _ShipToParty,
  _SoldToParty,
  _TransportationGroup,
  _Warehouse
  
} where not(
            ( AdjustedPlannedGoodsIssueDate  >= $session.system_date )
         or ( AdjustedPlannedGoodsIssueDate   = '00000000' )            
         or ( GoodsMovementStatus = ' '))
```
