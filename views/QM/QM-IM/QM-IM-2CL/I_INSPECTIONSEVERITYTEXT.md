---
name: I_INSPECTIONSEVERITYTEXT
description: Inspectionseveritytext
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
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
# I_INSPECTIONSEVERITYTEXT

**Inspectionseveritytext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspectionSeverity` | ✓ | |  | `prschaerfe` |  |  |
| `InspectionSeverityText` |  | |  | `kurztext` |  |  |
| `_InspectionSeverity` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionSeverity` | `I_InspectionSeverity` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Severity - Text'
@Analytics.technicalName: 'IINSPSEVT'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ],
    dataCategory: #TEXT,
    modelingPattern: #NONE,
    representativeKey: 'InspectionSeverity',
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InspectionSeverityText
  as select from qdept
  association [1..1] to I_InspectionSeverity as _InspectionSeverity on $projection.InspectionSeverity = _InspectionSeverity.InspectionSeverity
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key sprache    as Language,
      @ObjectModel.foreignKey.association: '_InspectionSeverity'
  key prschaerfe as InspectionSeverity,
      @Semantics.text: true
      kurztext   as InspectionSeverityText,

      //Associations
      _InspectionSeverity,
      _Language
}
```
