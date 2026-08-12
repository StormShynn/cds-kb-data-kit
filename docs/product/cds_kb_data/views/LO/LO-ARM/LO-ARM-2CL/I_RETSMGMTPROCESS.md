---
name: I_RETSMGMTPROCESS
description: "Retsmgmtprocess"
app_component: LO-ARM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-ARM
  - interface-view
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETSMGMTPROCESS

**Retsmgmtprocess**

| Property | Value |
|---|---|
| App Component | `LO-ARM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RetsMgmtProcess` | ✓ | |  | `msr_id` |  |  |
| `ReturnsDocumentType` |  | |  | `doc_type` |  |  |
| `ReturnsDocument` |  | |  | `doc_nr` |  |  |
| `_RetsMgmtProcessItem` | | ✓ | | | | |
| `_ReturnsDocumentType` | | ✓ | | | | |
| `_RetsMgmtProcessingStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RetsMgmtProcessItem` | `I_RetsMgmtProcessItem` | [1..*] |
| `_ReturnsDocumentType` | `I_ReturnsDocumentType` | [0..1] |
| `_RetsMgmtProcessingStatus` | `I_RetsMgmtProcessWthProcgSts` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'RetsMgmtProcess'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.modelingPattern: [ #NONE ]
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE ]
@VDM.viewType: #BASIC
@EndUserText.label: 'Returns Management Process'
@AbapCatalog.sqlViewName: 'IRMRTSPROCESS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true

define view I_RetsMgmtProcess
  as select from msr_d_head

  association [1..*] to I_RetsMgmtProcessItem        as _RetsMgmtProcessItem      on $projection.RetsMgmtProcess = _RetsMgmtProcessItem.RetsMgmtProcess
  association [0..1] to I_ReturnsDocumentType        as _ReturnsDocumentType      on $projection.ReturnsDocumentType = _ReturnsDocumentType.ReturnsDocumentType
  association [1..1] to I_RetsMgmtProcessWthProcgSts as _RetsMgmtProcessingStatus on $projection.RetsMgmtProcess = _RetsMgmtProcessingStatus.RetsMgmtProcess
{
      //Key
  key msr_id   as RetsMgmtProcess,

      //Return
      @ObjectModel.foreignKey.association: '_ReturnsDocumentType'
      doc_type as ReturnsDocumentType,
      doc_nr   as ReturnsDocument,

      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _RetsMgmtProcessItem,
      _ReturnsDocumentType,
      _RetsMgmtProcessingStatus
}
```
