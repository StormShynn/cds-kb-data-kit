---
name: I_PHYSINVTRYDELETIONSTSTXT
description: "Physinvtrydeletionststxt"
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
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYDELETIONSTSTXT

**Physinvtrydeletionststxt**

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
| `PhysInvtryDeletionStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as pi_hdr_deletion_status_code preserving type)` |  |  |
| `PhysInvtryDeletionStatusText` |  | |  | `cast ( substring ( ddtext, 1, 60 ) as val_text preserving type )` |  |  |
| `_PhysInvtryDeletionSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PhysInvtryDeletionSts` | `I_PhysInvtryDeletionSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Deletion Status of Phys Invtry - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #TEXT,
                representativeKey: 'PhysInvtryDeletionStatus',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
                sapObjectNodeType.name: 'PhysInventoryDeletionStsText'
              }

@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      } 
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@Analytics.dataExtraction.enabled:true

define view entity I_PhysInvtryDeletionStsTxt
  as select from dd07t

  association [0..1] to I_PhysInvtryDeletionSts as _PhysInvtryDeletionSts on $projection.PhysInvtryDeletionStatus = _PhysInvtryDeletionSts.PhysInvtryDeletionStatus

  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language

{
      @Semantics.language: true
  key cast( ddlanguage as spras preserving type)                                                                       as Language,

      @ObjectModel.foreignKey.association: '_PhysInvtryDeletionSts'
  key cast ( substring( domvalue_l, 1, 1 ) as pi_hdr_deletion_status_code preserving type)                             as PhysInvtryDeletionStatus,

      @Semantics.text: true
      cast ( substring ( ddtext, 1, 60 ) as val_text preserving type )                                                 as PhysInvtryDeletionStatusText,

      _Language,
      _PhysInvtryDeletionSts

}
where
      domname  = 'PI_HDR_DELETION_STATUS_CODE'
  and as4local = 'A'
```
