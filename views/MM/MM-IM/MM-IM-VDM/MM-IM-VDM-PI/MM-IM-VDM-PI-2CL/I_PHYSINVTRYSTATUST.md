---
name: I_PHYSINVTRYSTATUST
description: Physinvtrystatust
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
  - status
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYSTATUST

**Physinvtrystatust**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `PhysicalInventoryItemIsCounted` | ✓ | |  | `xzael` |  |  |
| `PhysInvtryDifferenceIsPosted` | ✓ | |  | `xdiff` |  |  |
| `PhysInvtryItemIsRecounted` | ✓ | |  | `xnzae` |  |  |
| `PhysInvtryItemIsDeleted` | ✓ | |  | `xloek` |  |  |
| `PhysicalInventoryStatusText` |  | |  | `cast(stext as pi_item_status preserving type)` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Status of Phys Invtry - Text'
@AccessControl.authorizationCheck:#NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
              }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }
define view entity I_PhysInvtryStatusT
  as select from t064t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language


{

      @Semantics.language: true
  key spras                                         as Language,

  key xzael                                         as PhysicalInventoryItemIsCounted,

  key xdiff                                         as PhysInvtryDifferenceIsPosted,

  key xnzae                                         as PhysInvtryItemIsRecounted,

  key xloek                                         as PhysInvtryItemIsDeleted,

      @Semantics.text: true
      cast(stext as pi_item_status preserving type) as PhysicalInventoryStatusText,

      _Language

}
```
