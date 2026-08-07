---
name: I_JITINBCALLCOMPRAWMATERIAL
description: Jitinbcallcomprawmaterial
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-JIT
  - interface-view
  - material
  - component:LE-JIT-S2C
  - lob:Logistics Execution
  - bo:Material
---
# I_JITINBCALLCOMPRAWMATERIAL

**Jitinbcallcomprawmaterial**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `JITRawMaterialUUID` | ✓ | |  | `db_key` |
| `JITHeaderUUID` |  | |  | `root_key` |
| `JITCallComponentUUID` |  | |  | `parent_key` |
| `RawMaterial` |  | |  | `rawmaterial` |
| `Quantity` |  | |  | `cast( cast( quantity as abap.numc( 18 ) ) as abap.quan( 18 ) )` |
| `BaseUnitofMeasure` |  | |  | `uom` |
| `Plant` |  | |  | `plant` |
| `StorageLocation` |  | |  | `storagelocation` |
| `SupplyArea` |  | |  | `supplyarea` |
| `_JITInboundCall` | | ✓ | | |
| `_ProductRawMaterial` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_StorageLocation` | | ✓ | | |
| `_JITInbCallComponent` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITInboundCall` | `I_JITInboundCall` | [1..1] |
| `_ProductRawMaterial` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |

## Source Code

```abap
@AccessControl                          : { authorizationCheck      : #MANDATORY,
                                            personalData.blocking   : #REQUIRED }
@Analytics                              : { dataCategory            : #DIMENSION,
                                            internalName            : #LOCAL }
@EndUserText.label                      : 'JIT Inbound Call Component Raw Material'
@Metadata.allowExtensions               : true
@Metadata.ignorePropagatedAnnotations   : true
@ObjectModel                            : { modelingPattern         : #ANALYTICAL_DIMENSION,
                                            representativeKey       : 'JITRawMaterialUUID',
                                            sapObjectNodeType.name  : 'JITInbCallCompRawMaterial',
                                            supportedCapabilities   : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                            usageType               : { dataClass       : #TRANSACTIONAL,
                                                                        serviceQuality  : #A,
                                                                        sizeCategory    : #XXL }
                                          }
@VDM.viewType                           : #BASIC
define view entity I_JITInbCallCompRawMaterial
  as select from njit_call_d_rmat

  association        to parent I_JITInbCallComponent as _JITInbCallComponent on  $projection.JITCallComponentUUID = _JITInbCallComponent.JITCallComponentUUID

  association [1..1] to I_JITInboundCall             as _JITInboundCall      on  $projection.JITHeaderUUID = _JITInboundCall.JITHeaderUUID
  association [1..1] to I_Product                    as _ProductRawMaterial  on  $projection.RawMaterial = _ProductRawMaterial.Product
  association [0..1] to I_Plant                      as _Plant               on  $projection.Plant = _Plant.Plant
  association [0..1] to I_StorageLocation            as _StorageLocation     on  $projection.Plant           = _StorageLocation.Plant
                                                                             and $projection.StorageLocation = _StorageLocation.StorageLocation
{
  key db_key                                                         as JITRawMaterialUUID,
      @ObjectModel.foreignKey.association : '_JITInboundCall'
      root_key                                                       as JITHeaderUUID,
      @ObjectModel.foreignKey.association : '_JITInbCallComponent'
      parent_key                                                     as JITCallComponentUUID,
      @ObjectModel.foreignKey.association : '_ProductRawMaterial'
      rawmaterial                                                    as RawMaterial,
      @Semantics.quantity.unitOfMeasure: 'BaseUnitofMeasure'
      cast( cast( quantity as abap.numc( 18 ) ) as abap.quan( 18 ) ) as Quantity,
      uom                                                            as BaseUnitofMeasure,
      @ObjectModel.foreignKey.association : '_Plant'
      plant                                                          as Plant,
      @ObjectModel.foreignKey.association : '_StorageLocation'
      storagelocation                                                as StorageLocation,
      supplyarea                                                     as SupplyArea,

      //Association
      _JITInbCallComponent,
      _JITInboundCall,
      _ProductRawMaterial,
      _Plant,
      _StorageLocation
}
where
  _JITInboundCall.JITScenario = '1'
```
