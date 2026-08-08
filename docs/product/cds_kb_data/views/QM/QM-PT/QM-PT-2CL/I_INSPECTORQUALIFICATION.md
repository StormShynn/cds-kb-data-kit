---
name: I_INSPECTORQUALIFICATION
description: "Inspectorqualification"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTORQUALIFICATION

**Inspectorqualification**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectorQualification` | ✓ | |  | `prfql` |  |  |
| `_InspectorQualificationText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectorQualificationText` | `I_InspectorQualificationText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Inspector Qualification'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'InspectorQualification'
@Analytics.technicalName: 'IINSPQUALIFIC'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #M,
    serviceQuality: #A 
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspectorQualification as select from tq11
      
  association [0..*] to I_InspectorQualificationText as _InspectorQualificationText
     on $projection.InspectorQualification = _InspectorQualificationText.InspectorQualification

{
    @ObjectModel.text.association: '_InspectorQualificationText'
    @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
    key tq11.prfql as InspectorQualification,
    //tq11.dummy
     
   /* Associations */
   _InspectorQualificationText
}
```
