---
name: I_CONTROLOFQUANTITYVALUEUPDATE
description: "Controlofquantityvalueupdate"
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - interface-view
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
---
# I_CONTROLOFQUANTITYVALUEUPDATE

**Controlofquantityvalueupdate**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationArea` | ✓ | |  | `bwkey` |  |  |
| `ProductType` | ✓ | |  | `cast(mtart as producttype preserving type )` |  |  |
| `QuantityUpdateIsActive` |  | |  | `mengu` |  |  |
| `ValueUpdateIsActive` |  | |  | `wertu` |  |  |
| `PipelineHndlgIsMand` |  | |  | `kzpip` |  |  |
| `PipelineHndlgIsAllowed` |  | |  | `xpizu` |  |  |
| `_ValuationArea` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ValuationArea` | `I_ValuationArea` | [1..1] |
| `_ProductType` | `I_ProductType_2` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
                viewEnhancementCategory: [#NONE]
               }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Control of quantity and value update'
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                modelingPattern: #NONE,
                supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
              }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      } 
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@Consumption.ranked: true

define view entity I_ControlOfQuantityValueUpdate
as select from t134m
  association [1..1] to I_ValuationArea as _ValuationArea on $projection.ValuationArea = _ValuationArea.ValuationArea
  association [1..1] to I_ProductType_2 as _ProductType on $projection.ProductType = _ProductType.ProductType
{
  key bwkey                                       as ValuationArea,
  key cast(mtart as producttype preserving type ) as ProductType,
  mengu                                           as QuantityUpdateIsActive,
  wertu                                           as ValueUpdateIsActive,
  kzpip                                           as PipelineHndlgIsMand,
  xpizu                                           as PipelineHndlgIsAllowed,
  _ValuationArea,
  _ProductType
}
```
