---
name: I_PHYSINVTRYGROUPTYPETEXT
description: Physinvtrygrouptypetext
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
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
# I_PHYSINVTRYGROUPTYPETEXT

**Physinvtrygrouptypetext**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( ddlanguage as spras preserving type)` |
| key `PhysicalInventoryGroupType` | `cast ( substring( domvalue_l, 1, 2 ) as keord preserving type)` |
| `PhysicalInventoryGroupTypeName` | `cast ( substring ( ddtext, 1, 60 ) as val_text preserving type)` |
| `_PhysInvtryGroupType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PhysInvtryGroupType` | `I_PhysInvtryGroupType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Group Type for Phys Invtry - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #TEXT,
                representativeKey: 'PhysicalInventoryGroupType',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
                sapObjectNodeType.name: 'PhysicalInventoryGroupTypeText'
              }

@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      } 
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@Analytics.dataExtraction.enabled: true


define view entity I_PhysInvtryGroupTypeText as select from dd07t

association [0..1] to I_PhysInvtryGroupType as _PhysInvtryGroupType
  on $projection.PhysicalInventoryGroupType = _PhysInvtryGroupType.PhysicalInventoryGroupType
   
association [0..1] to I_Language as _Language 
  on $projection.Language = _Language.Language
{
  @Semantics.language: true
  key cast( ddlanguage as spras preserving type) as Language,

  @ObjectModel.foreignKey.association: '_PhysInvtryGroupType'
  key cast ( substring( domvalue_l, 1, 2 ) as keord preserving type) as PhysicalInventoryGroupType,

  @Semantics.text: true
  cast ( substring ( ddtext, 1, 60 ) as val_text preserving type) as PhysicalInventoryGroupTypeName,

  _PhysInvtryGroupType,
  _Language  
 
} where domname = 'KEORD' and as4local = 'A'
```
