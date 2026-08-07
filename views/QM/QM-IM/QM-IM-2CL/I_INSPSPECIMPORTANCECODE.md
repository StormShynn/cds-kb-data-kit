---
name: I_INSPSPECIMPORTANCECODE
description: Inspspecimportancecode
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
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPSPECIMPORTANCECODE

**Inspspecimportancecode**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspSpecImportanceCode` | ✓ | |  | `merkklasse` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Inspspecimportancecodetext` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Weighting of Inspection Characteristic'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'InspSpecImportanceCode'
@Analytics.technicalName: 'IINSPSPCIMPRTCD'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #M,
    serviceQuality: #A
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSpecImportanceCode as select from tq17a 
   association [0..*] to I_Inspspecimportancecodetext as _Text 
     on $projection.InspSpecImportanceCode = _Text.InspSpecImportanceCode
{
    @ObjectModel.text.element:  [ 'InspSpecImportanceCodeText' ] 
    key merkklasse as InspSpecImportanceCode,
   
   //Associations
   @Semantics.text: true
   _Text[1:Language = $session.system_language].InspSpecImportanceCodeText,
   _Text    
}
```
