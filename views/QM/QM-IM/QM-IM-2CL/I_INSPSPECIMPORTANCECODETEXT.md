---
name: I_INSPSPECIMPORTANCECODETEXT
description: Inspspecimportancecodetext
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
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPSPECIMPORTANCECODETEXT

**Inspspecimportancecodetext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `sprache` |
| `InspSpecImportanceCode` | ✓ | |  | `merkklasse` |
| `InspSpecImportanceCodeText` |  | |  | `kurztext` |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Weighting of Inspection Charc - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IINSPSPCIMPRTCDT'
@ObjectModel.representativeKey: 'InspSpecImportanceCode'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #M,
    serviceQuality: #A
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_Inspspecimportancecodetext as select from tq17u 
{
  @Semantics.language: true
  key sprache    as Language,
  key merkklasse as InspSpecImportanceCode,
  @Semantics.text: true
  kurztext       as InspSpecImportanceCodeText
    
}
```
