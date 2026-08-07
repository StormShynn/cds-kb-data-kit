---
name: I_PHYSINVTRYREASONCODETEXT
description: Physinvtryreasoncodetext
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
# I_PHYSINVTRYREASONCODETEXT

**Physinvtryreasoncodetext**

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
| `GoodsMovementType` | ✓ | |  | `bwart` |  |  |
| `ReasonForPhysInvtryDifference` | ✓ | |  | `grund` |  |  |
| `ReasonForPhysInvtryDiffText` |  | |  | `grtxt` |  |  |
| `_Language` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_PhysInvtryReasonCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_GoodsMovementType` | `I_GoodsMovementType` | [0..1] |
| `_PhysInvtryReasonCode` | `I_PhysInvtryReasonCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Reason Type for Phys Invtry - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #TEXT,
                representativeKey: 'ReasonForPhysInvtryDifference',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
                sapObjectNodeType.name: 'ReasonForPhysInventoryDiffText'
              }

@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@Analytics.dataExtraction.enabled: true

           
define view entity I_PhysInvtryReasonCodeText
  as select from t157e

  association [0..1] to I_Language             as _Language             on  $projection.Language = _Language.Language
  association [0..1] to I_GoodsMovementType    as _GoodsMovementType    on  $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType

  association [0..1] to I_PhysInvtryReasonCode as _PhysInvtryReasonCode on  $projection.GoodsMovementType             = _PhysInvtryReasonCode.GoodsMovementType
                                                                        and $projection.ReasonForPhysInvtryDifference = _PhysInvtryReasonCode.ReasonForPhysInvtryDifference
{
      @Semantics.language: true
  key t157e.spras as Language,

      @ObjectModel.foreignKey.association: '_GoodsMovementType'
  key t157e.bwart as GoodsMovementType,

  key t157e.grund as ReasonForPhysInvtryDifference,

      @Semantics.text: true
      t157e.grtxt as ReasonForPhysInvtryDiffText,

      _Language,
      _GoodsMovementType,
      _PhysInvtryReasonCode
}
```
