---
name: I_DELIVERYPICKVIEWHEADER
description: "Deliverypickviewheader"
app_component: LE-SHP-GF-2CL
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
  - LE-SHP-GF
  - interface-view
  - delivery
  - header-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_DELIVERYPICKVIEWHEADER

**Deliverypickviewheader**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
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
| `DeliveryDocument` | ✓ | |  |  |  |  |
| `PickedItemsLocation` |  | |  |  |  |  |
| `HeaderGrossWeight` |  | |  |  |  |  |
| `HeaderWeightUnit` |  | |  |  |  |  |
| `PickingDate` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `LoadingDate` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `ProposedDeliveryRoute` |  | |  |  |  |  |
| `HeaderVolumeUnit` |  | |  |  |  |  |
| `HeaderVolume` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `WarehouseGate` |  | |  |  |  |  |
| `WarehouseStagingArea` |  | |  |  |  |  |
| `DeliveryDocumentBySupplier` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `DeliveryDate` |  | |  |  |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `OverallGoodsMovementStatus` |  | |  |  |  |  |
| `OverallWarehouseActivityStatus` |  | |  |  |  |  |
| `TotalCreditCheckStatus` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `OverallPickingStatus` |  | |  |  |  |  |
| `PlantName` |  | |  |  |  |  |
| `PlannedGoodsIssueDate` |  | |  |  |  |  |
| `_DeliveryDocument` | | ✓ | | | | |
| `_DeliveryDocumentFlow` | | ✓ | | | | |
| `_DeliveryDocumentItem` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryDocument` | `I_DeliveryDocument` | [1..1] |
| `_DeliveryDocumentFlow` | `I_DeliveryPickViewDocFlow` | [0..*] |
| `_DeliveryDocumentItem` | `I_DeliveryPickViewItem` | [0..*] |
| `_ShippingPoint` | `I_DeliveryPickViewShpPoint` | [0..1] |
| `_PickViewHeaderExtension` | `E_DeliveryDocument` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IDELIVERYPICKH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Delivery Pick List Header'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #NONE ]

define view I_DeliveryPickViewHeader as select from I_DeliveryDocument
association [1..1] to I_DeliveryDocument as _DeliveryDocument on $projection.DeliveryDocument = _DeliveryDocument.DeliveryDocument
association [0..*] to I_DeliveryPickViewDocFlow as _DeliveryDocumentFlow on _DeliveryDocumentFlow.PrecedingDocument = $projection.DeliveryDocument
association [0..*] to I_DeliveryPickViewItem as _DeliveryDocumentItem on _DeliveryDocumentItem.DeliveryDocument = $projection.DeliveryDocument
association [0..1] to I_DeliveryPickViewShpPoint as _ShippingPoint on _ShippingPoint.ShippingPoint = $projection.ShippingPoint
association [0..1] to E_DeliveryDocument as _PickViewHeaderExtension on $projection.DeliveryDocument = _PickViewHeaderExtension.DeliveryDocument
{
    key I_DeliveryDocument.DeliveryDocument,
    I_DeliveryDocument.PickedItemsLocation,
    @Semantics.quantity.unitOfMeasure: 'HeaderVolumeUnit'
    I_DeliveryDocument.HeaderGrossWeight,
    
    I_DeliveryDocument.HeaderWeightUnit,
    I_DeliveryDocument.PickingDate,
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]    
    I_DeliveryDocument.ShipToParty,
    I_DeliveryDocument.LoadingDate,
    I_DeliveryDocument.DeliveryPriority,
    I_DeliveryDocument.ProposedDeliveryRoute,
    @Semantics.unitOfMeasure: true
    I_DeliveryDocument.HeaderVolumeUnit,
    @Semantics.quantity.unitOfMeasure: 'HeaderVolumeUnit'
    I_DeliveryDocument.HeaderVolume,
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ShippingPointStdVH', element: 'ShippingPoint' } } ]    
    I_DeliveryDocument.ShippingPoint,
    I_DeliveryDocument.WarehouseGate,
    I_DeliveryDocument.WarehouseStagingArea,
    I_DeliveryDocument.DeliveryDocumentBySupplier,
    I_DeliveryDocument.Supplier,
    I_DeliveryDocument.DeliveryDate,
    I_DeliveryDocument.SDDocumentCategory,
    //I_DeliveryDocument.kzwab, FEHLT in der View!
    I_DeliveryDocument.OverallGoodsMovementStatus,
    I_DeliveryDocument.OverallWarehouseActivityStatus,
    //I_DeliveryDocument.aufer  FEHLT IN LIKP,
    I_DeliveryDocument.TotalCreditCheckStatus,
    I_DeliveryDocument.TransactionCurrency,
    I_DeliveryDocument.OverallPickingStatus,
    I_DeliveryDocument._ReceivingPlant.PlantName,
    I_DeliveryDocument.PlannedGoodsIssueDate,
    
    /* Associations */
    I_DeliveryDocument._Item,
    I_DeliveryDocument._ShipToParty,
    _DeliveryDocument,
    _DeliveryDocumentFlow,
    _DeliveryDocumentItem,
    _ShippingPoint
    
    /*
        How to determine correct language ? No spras column in I_ShippingPoint
        [1: inner where spras = $session.system_language]
    */
    
}
```
