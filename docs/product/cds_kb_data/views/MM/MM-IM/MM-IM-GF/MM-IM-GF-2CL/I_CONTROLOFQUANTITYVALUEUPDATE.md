---
name: I_CONTROLOFQUANTITYVALUEUPDATE
description: "Controlofquantityvalueupdate"
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
