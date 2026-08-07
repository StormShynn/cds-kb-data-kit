---
name: C_SCHEDAGRMTSCHEDLINEDEX
description: Schedagrmtschedlinedex
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
  - data-extraction
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_SCHEDAGRMTSCHEDLINEDEX

**Schedagrmtschedlinedex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SchedulingAgreement` | ✓ | |  |  |
| `SchedulingAgreementItem` | ✓ | |  |  |
| `ScheduleLine` | ✓ | |  |  |
| `DelivDateCategory` |  | |  |  |
| `ScheduleLineDeliveryDate` |  | |  |  |
| `SchedLineStscDeliveryDate` |  | |  |  |
| `ScheduleLineDeliveryTime` |  | |  |  |
| `OrderQuantityUnit` |  | |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |
| `PurchaseRequisition` |  | |  |  |
| `PurchaseRequisitionItem` |  | |  |  |
| `RoughGoodsReceiptQty` |  | |  |  |
| `ScheduleLineIsFixed` |  | |  |  |
| `PurchasingSchdLnNrOfReminders` |  | |  | `NoOfRemindersOfScheduleLine` |
| `PrevDelivQtyOfScheduleLine` |  | |  |  |
| `SourceOfCreation` |  | |  |  |
| `PurchasingDocumentOrderDate` |  | | `_SchedgagrmthdrApi01` | `PurchasingDocumentOrderDate` |
| `PurchasingGroup` |  | | `_SchedgagrmthdrApi01` | `PurchasingGroup` |
| `PurchasingOrganization` |  | | `_SchedgagrmthdrApi01` | `PurchasingOrganization` |
| `StorageLocation` |  | | `_SchedgAgrmtItmApi01` | `StorageLocation` |
| `Supplier` |  | | `_SchedgagrmthdrApi01` | `Supplier` |
| `Material` |  | | `_SchedgAgrmtItmApi01` | `Material` |
| `PurchasingDocumentOrigin` |  | | `_SchedgagrmthdrApi01` | `PurchasingDocumentOrigin` |
| `Plant` |  | | `_SchedgAgrmtItmApi01` | `Plant` |
| `PurchasingDocumentType` |  | | `_SchedgagrmthdrApi01` | `PurchasingDocumentType` |
| `_ScheduleAgreementHdrDEX` | | ✓ | | |
| `_ScheduleAgreementItemDEX` | | ✓ | | |
| `_OrderQuantityUnit` | | ✓ | | |
| `_PurchaseRequisitionItem` | | ✓ | | |
| `_PurchasingGroup` | | ✓ | | |
| `_PurchasingOrganization` | | ✓ | | |
| `_StorageLocation` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_PurchasingDocumentOrigin` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_PurchasingDocumentType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ScheduleAgreementHdrDEX` | `C_ScheduleAgreementHdrDEX` | [1..1] |
| `_ScheduleAgreementItemDEX` | `C_ScheduleAgreementItemDEX` | [1..1] |
| `_OrderQuantityUnit` | `I_UnitOfMeasure` | [1..1] |
| `_PurchaseRequisitionItem` | `C_PurchaseRequisitionItemDEX` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_StorageLocation` | `I_StorageLocation` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_Product` | `I_Product` | [1..1] |
| `_PurchasingDocumentOrigin` | `I_PurchasingDocumentOrigin` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_PurchasingDocumentType` | `I_PurchasingDocumentType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName                        : 'CMMSCHEDGLINEDEX'
@AbapCatalog.compiler.compareFilter             : true
@AccessControl:{ authorizationCheck             : #CHECK,
                 personalData.blocking          : #BLOCKED_DATA_EXCLUDED
               }
@EndUserText.label                              : 'Data Extraction for Scheduling Agreement Releases'
@ClientHandling.algorithm                       : #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass             : #TRANSACTIONAL,
                usageType.sizeCategory          : #L,
                usageType.serviceQuality        : #D,
                supportedCapabilities           : [ #EXTRACTION_DATA_SOURCE]
              }

@VDM.viewType                                   : #CONSUMPTION

@Metadata.ignorePropagatedAnnotations           : true

@Analytics: { dataCategory                      : #FACT,
              dataExtraction: {
                enabled                         : true,
                delta.changeDataCapture         : {
                    mapping:[ { table           : 'eket', role: #MAIN,
                                viewElement     : ['SchedulingAgreement', 'SchedulingAgreementItem', 'ScheduleLine'],
                                tableElement    : ['ebeln', 'ebelp', 'etenr']
                              }
                            ]
                }
              }
}
@ObjectModel.sapObjectNodeType.name: 'PurSchedgAgrmtItmScheduleLine'
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view C_SchedAgrmtSchedLineDEX
  as select from I_SchedglineApi01
  
  association [1..1] to C_ScheduleAgreementHdrDEX    as _ScheduleAgreementHdrDEX  on $projection.SchedulingAgreement = _ScheduleAgreementHdrDEX.SchedulingAgreement
  
  association [1..1] to C_ScheduleAgreementItemDEX   as _ScheduleAgreementItemDEX on  $projection.SchedulingAgreement     = _ScheduleAgreementItemDEX.SchedulingAgreement
                                                                                  and $projection.SchedulingAgreementItem = _ScheduleAgreementItemDEX.SchedulingAgreementItem
                                                                                        
  association [1..1] to I_UnitOfMeasure              as _OrderQuantityUnit        on $projection.OrderQuantityUnit = _OrderQuantityUnit.UnitOfMeasure

  association [0..1] to C_PurchaseRequisitionItemDEX as _PurchaseRequisitionItem  on  $projection.PurchaseRequisition     = _PurchaseRequisitionItem.PurchaseRequisition
                                                                                  and $projection.PurchaseRequisitionItem = _PurchaseRequisitionItem.PurchaseRequisitionItem

  association [1..1] to I_PurchasingGroup            as _PurchasingGroup          on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  
  association [1..1] to I_PurchasingOrganization     as _PurchasingOrganization   on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  
  association [1..1] to I_StorageLocation            as _StorageLocation          on  $projection.Plant           = _StorageLocation.Plant
                                                                                  and $projection.StorageLocation = _StorageLocation.StorageLocation
                                                                                   
  association [1..1] to I_Supplier                   as _Supplier                 on $projection.Supplier = _Supplier.Supplier
  
  association [1..1] to I_Product                    as _Product                  on $projection.Material = _Product.Product
  
  association [0..1] to I_PurchasingDocumentOrigin   as _PurchasingDocumentOrigin on $projection.PurchasingDocumentOrigin = _PurchasingDocumentOrigin.PurchasingDocumentOrigin
  
  association [1..1] to I_Plant                      as _Plant                    on $projection.Plant = _Plant.Plant
  
  association [1..1] to I_PurchasingDocumentType     as _PurchasingDocumentType   on  $projection.PurchasingDocumentType                 = _PurchasingDocumentType.PurchasingDocumentType
                                                                                  and _PurchasingDocumentType.PurchasingDocumentCategory = 'L'
{
  key SchedulingAgreement                              as SchedulingAgreement,
  key SchedulingAgreementItem                          as SchedulingAgreementItem,
  key ScheduleLine                                     as ScheduleLine,
      DelivDateCategory                                as DelivDateCategory,
      ScheduleLineDeliveryDate                         as ScheduleLineDeliveryDate,
      SchedLineStscDeliveryDate                        as SchedLineStscDeliveryDate,
      ScheduleLineDeliveryTime                         as ScheduleLineDeliveryTime,
      
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      @Semantics.unitOfMeasure: true
      OrderQuantityUnit                                as OrderQuantityUnit,
      
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOrderQuantity                        as ScheduleLineOrderQuantity,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseRequisition'
      PurchaseRequisition                              as PurchaseRequisition,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseRequisitionItem'
      PurchaseRequisitionItem                          as PurchaseRequisitionItem,
      
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      RoughGoodsReceiptQty                             as RoughGoodsReceiptQty,
      
      ScheduleLineIsFixed                              as ScheduleLineIsFixed,
      NoOfRemindersOfScheduleLine                      as PurchasingSchdLnNrOfReminders,
      
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      PrevDelivQtyOfScheduleLine                       as PrevDelivQtyOfScheduleLine,
      
      SourceOfCreation                                 as SourceOfCreation,
      
      @Semantics.businessDate.at:true
      _SchedgagrmthdrApi01.PurchasingDocumentOrderDate as PurchasingDocumentOrderDate,
      
      @ObjectModel.foreignKey.association: '_PurchasingGroup'      
      _SchedgagrmthdrApi01.PurchasingGroup             as PurchasingGroup,
      
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      _SchedgagrmthdrApi01.PurchasingOrganization      as PurchasingOrganization,
      
      @ObjectModel.foreignKey.association: '_StorageLocation'
      _SchedgAgrmtItmApi01.StorageLocation             as StorageLocation,
      
      @ObjectModel.foreignKey.association: '_Supplier'
      _SchedgagrmthdrApi01.Supplier                    as Supplier,
      
      @ObjectModel.foreignKey.association: '_Product'
      _SchedgAgrmtItmApi01.Material                    as Material,
      
      @ObjectModel.foreignKey.association: '_PurchasingDocumentOrigin'
      _SchedgagrmthdrApi01.PurchasingDocumentOrigin    as PurchasingDocumentOrigin,
      
      @ObjectModel.foreignKey.association: '_Plant'
      _SchedgAgrmtItmApi01.Plant                       as Plant,
      
      @ObjectModel.foreignKey.association: '_PurchasingDocumentType'
      _SchedgagrmthdrApi01.PurchasingDocumentType      as PurchasingDocumentType,

      @ObjectModel.association.type: [ #TO_COMPOSITION_ROOT ]
      _ScheduleAgreementHdrDEX,
      
      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT ]
      _ScheduleAgreementItemDEX,
      
      _PurchaseRequisitionItem,      
      _OrderQuantityUnit,
      _PurchasingGroup,
      _PurchasingOrganization,
      _StorageLocation,
      _Supplier,
      _Product,
      _PurchasingDocumentOrigin,
      _Plant,
      _PurchasingDocumentType
}
```
