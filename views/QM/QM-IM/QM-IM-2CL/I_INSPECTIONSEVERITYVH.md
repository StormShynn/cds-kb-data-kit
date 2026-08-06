---
name: I_INSPECTIONSEVERITYVH
description: Inspectionseverityvh
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
  - value-help
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONSEVERITYVH

**Inspectionseverityvh**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspectionSeverity` | `InspectionSeverity` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Severity'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    supportedCapabilities: [#VALUE_HELP_PROVIDER],
    dataCategory: #VALUE_HELP,
    modelingPattern: #VALUE_HELP_PROVIDER ,
    representativeKey: 'InspectionSeverity',
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable:true

define view entity I_InspectionSeverityVH
  as select from I_InspectionSeverity
{
      @Search: { defaultSearchElement: true, ranking: #HIGH }
  key InspectionSeverity,

      @ObjectModel.text.element:['InspectionSeverityText']
      @Semantics.text:true
      @Search: { defaultSearchElement: true, ranking: #MEDIUM }
      _Text[1:Language = $session.system_language].InspectionSeverityText

}
```
