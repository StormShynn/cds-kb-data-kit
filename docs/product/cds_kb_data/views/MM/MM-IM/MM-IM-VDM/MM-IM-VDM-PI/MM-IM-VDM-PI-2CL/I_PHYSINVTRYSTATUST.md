---
name: I_PHYSINVTRYSTATUST
description: "Physinvtrystatust"
app_component: MM-IM-VDM-PI-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
