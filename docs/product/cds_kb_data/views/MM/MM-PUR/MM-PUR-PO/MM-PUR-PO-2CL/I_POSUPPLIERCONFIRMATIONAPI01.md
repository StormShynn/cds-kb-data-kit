---
name: I_POSUPPLIERCONFIRMATIONAPI01
description: "Posupplierconfirmationapi 01"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - supplier
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_POSUPPLIERCONFIRMATIONAPI01

**Posupplierconfirmationapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
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
| `SupplierConfirmationExtNumber` |  | |  | `ExternalReferenceDocumentID` |  |  |
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
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrder` | `I_PurchaseOrderAPI01` | [1..1] |
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPOCONFAPI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@ObjectModel.representativeKey: 'SequentialNmbrOfSuplrConf'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType : #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Supplier Confirmation Data in PurOrd'
define view I_POSupplierConfirmationAPI01 


  as select from R_PurOrdSupplierConfirmation as SupplierConfirmation inner join R_PurchaseOrder as PurchaseOrder
                                              on SupplierConfirmation.PurchaseOrder = PurchaseOrder.PurchaseOrder 

    association [1..1] to I_PurchaseOrderAPI01     as _PurchaseOrder     on  $projection.PurchaseOrder     = _PurchaseOrder.PurchaseOrder
    association [1..1] to I_PurchaseOrderItemAPI01 as _PurchaseOrderItem on  $projection.PurchaseOrder     = _PurchaseOrderItem.PurchaseOrder
                                                                    and $projection.PurchaseOrderItem = _PurchaseOrderItem.PurchaseOrderItem
  
{

      @ObjectModel.foreignKey.association: '_PurchaseOrder'
  key SupplierConfirmation.PurchaseOrder,
      @ObjectModel.foreignKey.association: '_PurchaseOrderItem'
  key PurchaseOrderItem,
  key SequentialNmbrOfSuplrConf,
      SupplierConfirmationCategory,
      DeliveryDate,
      DelivDateCategory,
      DeliveryTime,
      SupplierConfirmation.CreationDate,
      CreationTime,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'      
      ConfirmedQuantity,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'      
      MRPRelevantQuantity,
      SuplrConfCreationCategory,
      @Semantics.booleanIndicator: true
      IsDeleted,
      ConfIsRelevantToMRP,
      ExternalReferenceDocumentID  as SupplierConfirmationExtNumber,
      DeliveryDocument,
      DeliveryDocumentItem,
      ManufacturerPartProfile,
      ManufacturerMaterial,
      NumberOfReminders,
      Batch,
      DeliveryIsInPlant,
      HandoverDate,
      HandoverTime,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,
      ServicePerformer,
      @Semantics.unitOfMeasure: true 
      OrderQuantityUnit,
      SupplierConfirmation,
      SupplierConfirmationItem,
      
    

      _PurchaseOrder,
      _PurchaseOrderItem
  
}
```
