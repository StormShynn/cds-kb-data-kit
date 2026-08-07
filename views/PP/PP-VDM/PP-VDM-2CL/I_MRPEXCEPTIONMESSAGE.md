---
name: I_MRPEXCEPTIONMESSAGE
description: Mrpexceptionmessage
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPEXCEPTIONMESSAGE

**Mrpexceptionmessage**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MRPExceptionMessage` | ✓ | |  | `cast(aussl as vdm_aussl preserving type)` |
| `MRPExceptionMessageNumber` |  | |  | `cast(auskt as vdm_auskt preserving type)` |
| `MRPExceptionMessagePriority` |  | |  | `cast(aspri as vdm_aspri preserving type)` |
| `MRPExcptnMessageSelGroup` |  | |  | `cast(selgp as selgp preserving type)` |
| `MRPListIsToBeCreated` |  | |  | `erdis` |
| `_MRPExcptnMessageSelGroup` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPExcptnMessageSelGroup` | `I_MRPExcptnMessageSelGroup` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IMRPEXCPTNMESS'
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'MRPExceptionMessage'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Exception Message'

define root view entity I_MRPExceptionMessage
  as select from t458a

  composition [0..*] of I_MRPExceptionMessageText  as _Text
  association [0..1] to I_MRPExcptnMessageSelGroup as _MRPExcptnMessageSelGroup on $projection.MRPExcptnMessageSelGroup = _MRPExcptnMessageSelGroup.MRPExcptnMessageSelGroup
{
      // Key
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(aussl as vdm_aussl preserving type) as MRPExceptionMessage,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      cast(auskt as vdm_auskt preserving type) as MRPExceptionMessageNumber,   // Number that is displayed e.g. in MD04
      cast(aspri as vdm_aspri preserving type) as MRPExceptionMessagePriority,
      @ObjectModel.foreignKey.association: '_MRPExcptnMessageSelGroup'      
      cast(selgp as selgp     preserving type) as MRPExcptnMessageSelGroup,
      erdis                                    as MRPListIsToBeCreated,

      // Associations
      _Text,
      _MRPExcptnMessageSelGroup
};
```
