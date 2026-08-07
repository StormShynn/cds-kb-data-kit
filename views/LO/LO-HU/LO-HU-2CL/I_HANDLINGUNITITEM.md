---
name: I_HANDLINGUNITITEM
description: Handlingunititem
app_component: LO-HU-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-HU
  - interface-view
  - item-level
  - component:LO-HU-2CL
  - lob:Logistics General
---
# I_HANDLINGUNITITEM

**Handlingunititem**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `HandlingUnitInternalID` | ✓ | |  | `venum` |
| `HandlingUnitItem` | ✓ | |  | `vepos` |
| `HandlingUnitExternalID` |  | | `_HandlingUnitHeader` | `HandlingUnitExternalID` |
| `HandlingUnitTypeOfContent` |  | |  | `velin` |
| `HandlingUnitReferenceDocument` |  | |  | `vbeln` |
| `HandlingUnitRefDocumentItem` |  | |  | `posnr` |
| `SDDocumentCategory` |  | |  | `vbtyp` |
| `HandlingUnitNestedInternalID` |  | |  | `unvel` |
| `HandlingUnitQuantity` |  | |  | `vemng` |
| `HandlingUnitQuantityUnit` |  | |  | `vemeh` |
| `HandlingUnitAltUnitOfMeasure` |  | |  | `altme` |
| `HandlingUnitNrOfAuxPackgMat` |  | |  | `veanz` |
| `HandlingUnitItemIsSupplement` |  | |  | `kzbei` |
| `Material` |  | |  | `matnr` |
| `Batch` |  | |  | `charg` |
| `Plant` |  | |  | `werks` |
| `StorageLocation` |  | |  | `lgort` |
| `ConfigurationObject` |  | |  | `cuobj` |
| `InventorySpecialStockType` |  | |  | `sobkz` |
| `SpecialStockNumber` |  | |  | `sonum` |
| `HandlingUnitInspectLotNumber` |  | |  | `qplos` |
| `HandlingUnitNumberOfSerialNumb` |  | |  | `anzsn` |
| `SerialNumberProfile` |  | |  | `serail` |
| `SalesDocumentItemCategory` |  | |  | `pstyv` |
| `HandlingUnitGenDeliveryItem` |  | |  | `posnr_gen` |
| `MaterialByCustomer` |  | |  | `p_material` |
| `HandlingUnitGoodsReceiptDate` |  | |  | `wdatu` |
| `ShelfLifeExpirationDate` |  | |  | `vfdat` |
| `StockSegment` |  | |  | `sgt_scat` |
| `HandlingUnitItemUUID` |  | |  | `handle_vepo` |
| `_HandlingUnitHeader` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_BaseUnitOfMeasure` | | ✓ | | |
| `_AlternativeUnitOfMeasure` | | ✓ | | |
| `_Material` | | ✓ | | |
| `_StorageLocation` | | ✓ | | |
| `_HandlingUnitSerialNumber` | | ✓ | | |
| `_SalesDocumentItemCategory` | | ✓ | | |
| `_Batch` | | ✓ | | |
| `_JITCallCompMaterialBasic` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HandlingUnitHeader` | `I_HandlingUnitHeader` | [1..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_BaseUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_AlternativeUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_HandlingUnitSerialNumber` | `I_SerialNumberHandlingUnit` | [0..*] |
| `_SalesDocumentItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |
| `_Batch` | `I_BatchCrossPlant` | [0..1] |
| `_JITCallCompMaterialBasic` | `I_JITCallCompMaterialBasic` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Handling Unit Item'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@AbapCatalog: {
    sqlViewName: 'IHANDLINGUNITIT',
    compiler.compareFilter: true,
    preserveKey:true
}

@ObjectModel: {
//   semanticKey:       [ 'ExternalId' ],
//  representativeKey: 'HandlingUnitInternalId',
    representativeKey: 'HandlingUnitItem',
    usageType: {
     serviceQuality:  #B,
     dataClass:       #MIXED,
     sizeCategory:    #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   modelingPattern: #NONE
}

@Metadata.ignorePropagatedAnnotations: true

define view I_HandlingUnitItem
  as select from vepo as HandlingUnitItem
  association [1..1] to I_HandlingUnitHeader        as _HandlingUnitHeader        on  $projection.HandlingUnitInternalID = _HandlingUnitHeader.HandlingUnitInternalID
  association [0..1] to I_Plant                     as _Plant                     on  $projection.Plant = _Plant.Plant
  association [0..1] to I_UnitOfMeasure             as _BaseUnitOfMeasure         on  _BaseUnitOfMeasure.UnitOfMeasure = $projection.HandlingUnitQuantityUnit
  association [0..1] to I_UnitOfMeasure             as _AlternativeUnitOfMeasure  on  _AlternativeUnitOfMeasure.UnitOfMeasure = $projection.HandlingUnitAltUnitOfMeasure
  association [0..1] to I_Material                  as _Material                  on  $projection.Material = _Material.Material
  association [0..1] to I_StorageLocation           as _StorageLocation           on  $projection.Plant           = _StorageLocation.Plant
                                                                                  and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..*] to I_SerialNumberHandlingUnit  as _HandlingUnitSerialNumber  on  _HandlingUnitSerialNumber.HandlingUnitInternalID = $projection.HandlingUnitInternalID
                                                                                  and $projection.HandlingUnitItem                     = _HandlingUnitSerialNumber.HandlingUnitItem
  //  association [0..1]  to C_SrlNmbrAsGprfTemp          as _SerialNumberProfile        on _SerialNumberProfile.SerialNumberProfile = $projection.SerialNumberProfile
  association [0..1] to I_SalesDocumentItemCategory as _SalesDocumentItemCategory on  $projection.SalesDocumentItemCategory = _SalesDocumentItemCategory.SalesDocumentItemCategory
  association [0..1] to I_BatchCrossPlant           as _Batch                     on  $projection.Batch    = _Batch.Batch
                                                                                  and $projection.Material = _Batch.Material
  association [0..*] to I_JITCallCompMaterialBasic  as _JITCallCompMaterialBasic  on  $projection.HandlingUnitReferenceDocument = _JITCallCompMaterialBasic.SalesOrder
                                                                                  and $projection.HandlingUnitRefDocumentItem   = _JITCallCompMaterialBasic.SalesOrderItem
{
  @ObjectModel.foreignKey.association: '_HandlingUnitHeader'
  key        venum                                      as HandlingUnitInternalID,
  key        vepos                                      as HandlingUnitItem,

             _HandlingUnitHeader.HandlingUnitExternalID as HandlingUnitExternalID,

             velin                                      as HandlingUnitTypeOfContent,
             vbeln                                      as HandlingUnitReferenceDocument,
             posnr                                      as HandlingUnitRefDocumentItem,
             vbtyp                                      as SDDocumentCategory,
             unvel                                      as HandlingUnitNestedInternalID,
             @Semantics.quantity.unitOfMeasure: 'HandlingUnitQuantityUnit'
             vemng                                      as HandlingUnitQuantity,
             vemeh                                      as HandlingUnitQuantityUnit,
             altme                                      as HandlingUnitAltUnitOfMeasure,
             veanz                                      as HandlingUnitNrOfAuxPackgMat,
             kzbei                                      as HandlingUnitItemIsSupplement,
             matnr                                      as Material,
             charg                                      as Batch,
             werks                                      as Plant,
             lgort                                      as StorageLocation,
             cuobj                                      as ConfigurationObject,
             sobkz                                      as InventorySpecialStockType,
             sonum                                      as SpecialStockNumber,
             qplos                                      as HandlingUnitInspectLotNumber,
             anzsn                                      as HandlingUnitNumberOfSerialNumb,
             serail                                     as SerialNumberProfile,
             pstyv                                      as SalesDocumentItemCategory,
             posnr_gen                                  as HandlingUnitGenDeliveryItem,
             p_material                                 as MaterialByCustomer,
             wdatu                                      as HandlingUnitGoodsReceiptDate,
             vfdat                                      as ShelfLifeExpirationDate,
             sgt_scat                                   as StockSegment,
             handle_vepo                                as HandlingUnitItemUUID,


             // Associations
             _HandlingUnitHeader,
             _BaseUnitOfMeasure,
             _AlternativeUnitOfMeasure,
             _Material,
             _Plant,
             _StorageLocation,
             _SalesDocumentItemCategory,
             _Batch,
             _JITCallCompMaterialBasic,
             _HandlingUnitSerialNumber
             //_SerialNumberProfile,
}
```
