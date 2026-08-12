---
name: I_INSPECTIONLOTTYPEVALUEHELP
description: "Inspectionlottypevaluehelp"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_INSPECTIONLOTTYPEVALUEHELP

**Inspectionlottypevaluehelp**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLotType` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Type'
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
     }
@ObjectModel.supportedCapabilities:[ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #S, serviceQuality: #A }
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'InspectionLotType'
@Analytics.technicalName: 'IINSPLOTTYPVH'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspectionLotTypeValueHelp
  with parameters
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden: true
    P_Language : vdm_qm_sylangu

  as select from I_InspectionLotType
{
      @ObjectModel.text.element: [ 'InspectionLotTypeText']
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key InspectionLotType,
      @Semantics.text: true
      _Text[1:Language = $parameters.P_Language].InspectionLotTypeText
}
```
