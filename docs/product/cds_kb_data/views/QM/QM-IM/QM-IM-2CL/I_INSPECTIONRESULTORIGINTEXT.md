---
name: I_INSPECTIONRESULTORIGINTEXT
description: "Inspectionresultorigintext"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - text-view
  - inspection
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONRESULTORIGINTEXT

**Inspectionresultorigintext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionResultOrigin` | ✓ | |  | `qergdath` |  |  |
| `Language` | ✓ | |  | `sprsl` |  |  |
| `InspectionResultOriginText` |  | |  | `erdathetxt` |  |  |
| `_Language` | | ✓ | | | | |
| `_InspectionResultOrigin` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspectionResultOrigin` | `I_InspectionResultOrigin` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Inspection Result Origin'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER }
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IINSPRESORT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'InspectionResultOrigin'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_Inspectionresultorigintext //must start with 'I_' and end with 'Text' or 'T'
  as select from tq73t
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
  association [1..1] to I_InspectionResultOrigin as _InspectionResultOrigin on $projection.InspectionResultOrigin = _InspectionResultOrigin.InspectionResultOrigin
{
  key qergdath   as InspectionResultOrigin,
      @Semantics.language: true
  key sprsl      as Language, //text views shall always be language dependent
      @Semantics.text: true
      erdathetxt as InspectionResultOriginText,
      _InspectionResultOrigin,
      _Language

}
```
