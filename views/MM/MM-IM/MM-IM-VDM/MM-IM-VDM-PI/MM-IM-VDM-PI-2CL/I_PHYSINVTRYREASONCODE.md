---
name: I_PHYSINVTRYREASONCODE
description: Physinvtryreasoncode
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
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYREASONCODE

**Physinvtryreasoncode**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `GoodsMovementType` | ✓ | |  | `bwart` |
| `ReasonForPhysInvtryDifference` | ✓ | |  | `grund` |
| `_GoodsMovementType` | | ✓ | | |
| `_PhysInvtryReasonCodeText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GoodsMovementType` | `I_GoodsMovementType` | [0..1] |
| `_PhysInvtryReasonCodeText` | `I_PhysInvtryReasonCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Physical Inventory Reason Type'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                representativeKey: 'ReasonForPhysInvtryDifference',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
                sapObjectNodeType.name: 'ReasonForPhysicalInventoryDiff'
              }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@Analytics.technicalName: 'IPIREASON'
@Analytics.dataExtraction.enabled: true


define view entity I_PhysInvtryReasonCode
  as select from t157d

  association [0..1] to I_GoodsMovementType        as _GoodsMovementType        on  $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType

  association [0..*] to I_PhysInvtryReasonCodeText as _PhysInvtryReasonCodeText on  $projection.GoodsMovementType             = _PhysInvtryReasonCodeText.GoodsMovementType
                                                                                and $projection.ReasonForPhysInvtryDifference = _PhysInvtryReasonCodeText.ReasonForPhysInvtryDifference
{
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
  key bwart as GoodsMovementType,

      @ObjectModel.text.association: '_PhysInvtryReasonCodeText'
  key grund as ReasonForPhysInvtryDifference,

      _PhysInvtryReasonCodeText,
      _GoodsMovementType
}
```
