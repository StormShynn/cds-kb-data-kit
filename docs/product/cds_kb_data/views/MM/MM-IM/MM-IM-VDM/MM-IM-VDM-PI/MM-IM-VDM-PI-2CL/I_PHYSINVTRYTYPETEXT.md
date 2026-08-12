---
name: I_PHYSINVTRYTYPETEXT
description: "Physinvtrytypetext"
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - text-view
  - text
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYTYPETEXT

**Physinvtrytypetext**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type)` |  |  |
| `PhysicalInventoryType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as invart preserving type)` |  |  |
| `PhysicalInventoryTypeName` |  | |  | `cast ( substring ( ddtext, 1, 60 ) as val_text preserving type)` |  |  |
| `_PhysInvtryType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PhysInvtryType` | `I_PhysInvtryType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Type of Phys Invtry - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #TEXT,
                representativeKey: 'PhysicalInventoryType',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
                sapObjectNodeType.name: 'PhysicalInventoryTypeText'
              }

@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@Analytics.dataExtraction.enabled: true

define view entity I_PhysInvtryTypeText
  as select from dd07t

  association [0..1] to I_PhysInvtryType as _PhysInvtryType on $projection.PhysicalInventoryType = _PhysInvtryType.PhysicalInventoryType

  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
{
      @Semantics.language: true
  key cast( ddlanguage as spras preserving type)                      as Language,

      @ObjectModel.foreignKey.association: '_PhysInvtryType'
  key cast ( substring( domvalue_l, 1, 1 ) as invart preserving type) as PhysicalInventoryType,

      @Semantics.text: true
      cast ( substring ( ddtext, 1, 60 ) as val_text preserving type) as PhysicalInventoryTypeName,

      _PhysInvtryType,
      _Language

}
where domname  = 'INVART' and as4local = 'A'
```
