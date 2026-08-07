---
name: C_POSUPPLIERCONFIRMATIONDEX
description: Posupplierconfirmationdex
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
  - supplier
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# C_POSUPPLIERCONFIRMATIONDEX

**Posupplierconfirmationdex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchaseOrderItem` | ✓ | |  |  |  |  |
| `SequentialNmbrOfSuplrConf` | ✓ | |  |  |  |  |
| `SupplierConfirmationCategory` |  | |  |  |  |  |
| `DeliveryDate` |  | |  |  |  |  |
| `DelivDateCategory` |  | |  |  |  |  |
| `DeliveryTime` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `ConfirmedQuantity` |  | |  |  |  |  |
| `MRPRelevantQuantity` |  | |  |  |  |  |
| `SuplrConfCreationCategory` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `ConfIsRelevantToMRP` |  | |  |  |  |  |
| `SupplierConfirmationExtNumber` |  | |  |  |  |  |
| `DeliveryDocument` |  | |  |  |  |  |
| `DeliveryDocumentItem` |  | |  |  |  |  |
| `ManufacturerPartProfile` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `NumberOfReminders` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `DeliveryIsInPlant` |  | |  |  |  |  |
| `HandoverDate` |  | |  |  |  |  |
| `HandoverTime` |  | |  |  |  |  |
| `PerformancePeriodStartDate` |  | |  |  |  |  |
| `PerformancePeriodEndDate` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `SupplierConfirmation` |  | |  |  |  |  |
| `SupplierConfirmationItem` |  | |  |  |  |  |
| `PurchaseOrderType` |  | | `_PurchaseOrder` | `PurchaseOrderType` |  |  |
| `PurchasingOrganization` |  | | `_PurchaseOrder` | `PurchasingOrganization` |  |  |
| `PurchasingGroup` |  | | `_PurchaseOrder` | `PurchasingGroup` |  |  |
| `Plant` |  | | `_PurchaseOrderItem` | `Plant` |  |  |
| `_PurchaseOrderDEX` | | ✓ | | | | |
| `_PurchaseOrderItemDEX` | | ✓ | | | | |
| `_SupplierConfirmationCategory` | | ✓ | | | | |
| `_DeliveryDocument` | | ✓ | | | | |
| `_DeliveryDocumentItem` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_PurchaseOrderType` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrderDEX` | `C_PurchaseOrderDEX` | [1..1] |
| `_PurchaseOrderItemDEX` | `C_PurchaseOrderItemDEX` | [1..1] |
| `_SupplierConfirmationCategory` | `I_SupplierConfirmationCategory` | [1..1] |
| `_DeliveryDocument` | `I_DeliveryDocument` | [0..1] |
| `_DeliveryDocumentItem` | `I_DeliveryDocumentItem` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_PurchaseOrderType` | `I_PurchaseOrderType` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName              : 'CMMPOSUPCONDEX'
@EndUserText.label                    : 'Purchase Order Supplier Confirmation DEX'
@AbapCatalog.compiler.compareFilter   : true

@AccessControl:{ authorizationCheck     : #CHECK,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #L,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ],
                modelingPattern        : #ANALYTICAL_FACT
              }

@VDM.viewType                           : #CONSUMPTION

@Metadata.ignorePropagatedAnnotations   : true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'ekes', role: #MAIN,
                        viewElement     : ['PurchaseOrder' , 'PurchaseOrderItem' , 'SequentialNmbrOfSuplrConf' ],
                        tableElement    : ['ebeln' ,'ebelp' ,'etens' ]
                      },
                      {
                      table           : 'ekko', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement     : ['PurchaseOrder'],
                        tableElement    : ['ebeln']
                       },
                        {
                      table           : 'ekpo', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement     : ['PurchaseOrder','PurchaseOrderItem'],
                        tableElement    : ['ebeln' ,'ebelp']
                       }
                    ]
        }
    }
}






//@AbapCatalog.preserveKey: true
//@AccessControl.authorizationCheck: #CHECK

@ObjectModel.sapObjectNodeType.name: 'PurOrdSupplierConfirmation'
define view C_POSupplierConfirmationDEX as select from I_POSupplierConfirmationAPI01

  association [1..1] to C_PurchaseOrderDEX             as _PurchaseOrderDEX             on  $projection.PurchaseOrder     = _PurchaseOrderDEX.PurchaseOrder
  
  association [1..1] to C_PurchaseOrderItemDEX         as _PurchaseOrderItemDEX         on  $projection.PurchaseOrder     = _PurchaseOrderItemDEX.PurchaseOrder
                                                                                        and $projection.PurchaseOrderItem = _PurchaseOrderItemDEX.PurchaseOrderItem

  association [1..1] to I_SupplierConfirmationCategory as _SupplierConfirmationCategory on  $projection.SupplierConfirmationCategory = _SupplierConfirmationCategory.SupplierConfirmationCategory

  association [0..1] to I_DeliveryDocument             as _DeliveryDocument             on  $projection.DeliveryDocument = _DeliveryDocument.DeliveryDocument

  association [0..1] to I_DeliveryDocumentItem         as _DeliveryDocumentItem         on  $projection.DeliveryDocument     = _DeliveryDocumentItem.DeliveryDocument
                                                                                        and $projection.DeliveryDocumentItem = _DeliveryDocumentItem.DeliveryDocumentItem
  
  association [0..1] to I_Product                      as _Product                      on  $projection.ManufacturerMaterial = _Product.Product

  association [0..1] to I_BusinessPartner              as _BusinessPartner              on  $projection.ServicePerformer = _BusinessPartner.BusinessPartner

  association [1..1] to I_UnitOfMeasure                as _UnitOfMeasure                on  $projection.OrderQuantityUnit = _UnitOfMeasure.UnitOfMeasure

  association [1..1] to I_PurchaseOrderType            as _PurchaseOrderType            on  $projection.PurchaseOrderType = _PurchaseOrderType.PurchaseOrderType

  association [1..1] to I_PurchasingOrganization       as _PurchasingOrganization       on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [1..1] to I_PurchasingGroup              as _PurchasingGroup              on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  
  association [1..1] to I_Plant                        as _Plant                        on  $projection.Plant = _Plant.Plant

{
    key PurchaseOrder,
    key PurchaseOrderItem,
    key SequentialNmbrOfSuplrConf,
    
    @ObjectModel.foreignKey.association: '_SupplierConfirmationCategory'
    SupplierConfirmationCategory,
    
    @Semantics.businessDate.at: true
    DeliveryDate,
    
    DelivDateCategory,
    DeliveryTime,
    
    @Semantics.systemDate.createdAt: true
    CreationDate,
    
    @Semantics.systemTime.createdAt: true
    CreationTime,
    
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
    ConfirmedQuantity as ConfirmedQuantity,
    
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
    MRPRelevantQuantity as MRPRelevantQuantity,
    
    SuplrConfCreationCategory,
   
    @Semantics.booleanIndicator:true 
    IsDeleted,
    
    ConfIsRelevantToMRP,
    SupplierConfirmationExtNumber,
    
    @ObjectModel.foreignKey.association: '_DeliveryDocument'
    DeliveryDocument,
    
    @ObjectModel.foreignKey.association: '_DeliveryDocumentItem'
    DeliveryDocumentItem,
    
    @ObjectModel.sapObjectNodeTypeReference: 'ManufacturerPartProfile'
    ManufacturerPartProfile,
    
    @ObjectModel.foreignKey.association: '_Product'
    ManufacturerMaterial,
    
    NumberOfReminders,
    Batch,
    DeliveryIsInPlant,
   
    @Semantics.businessDate.at: true
    HandoverDate,
    
    HandoverTime,
    PerformancePeriodStartDate,
    PerformancePeriodEndDate,
   
    @ObjectModel.foreignKey.association: '_BusinessPartner'
    ServicePerformer,
    
    @ObjectModel.foreignKey.association: '_UnitOfMeasure'
    @Semantics.unitOfMeasure: true 
    OrderQuantityUnit,
    
    SupplierConfirmation,
    SupplierConfirmationItem,
    
    @ObjectModel.foreignKey.association: '_PurchaseOrderType'
    _PurchaseOrder.PurchaseOrderType as PurchaseOrderType ,
    
    @ObjectModel.foreignKey.association: '_PurchasingOrganization'
    _PurchaseOrder.PurchasingOrganization as PurchasingOrganization,
    
    @ObjectModel.foreignKey.association: '_PurchasingGroup'
    _PurchaseOrder.PurchasingGroup as PurchasingGroup ,
    
    @ObjectModel.foreignKey.association: '_Plant'
    _PurchaseOrderItem.Plant as Plant,
    
    @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
    _PurchaseOrderDEX,
    
    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
    _PurchaseOrderItemDEX,
    
    _SupplierConfirmationCategory,
    _DeliveryDocument,
    _DeliveryDocumentItem,
    _Product,
    _BusinessPartner,
    _UnitOfMeasure,
    _PurchaseOrderType,
    _PurchasingOrganization,
    _PurchasingGroup,
    _Plant
 
}
```
