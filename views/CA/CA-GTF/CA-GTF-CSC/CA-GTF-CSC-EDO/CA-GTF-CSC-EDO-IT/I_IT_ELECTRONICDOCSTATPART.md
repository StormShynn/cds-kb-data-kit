---
name: I_IT_ELECTRONICDOCSTATPART
description: IT Electronicdocstatpart
app_component: CA-GTF-CSC-EDO-IT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-IT
  - lob:Cross-Application Components
---
# I_IT_ELECTRONICDOCSTATPART

**IT Electronicdocstatpart**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-IT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IT_ElectronicDocPartStat` | ✓ | |  | `status_at_partner` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IT_ElectronicDocStatPartT` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Italy status of edocument Partner'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #ORGANIZATIONAL
}

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]  
                                     
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER                                    

@VDM.viewType: #BASIC


define view entity I_IT_ElectronicDocStatPart as select from edoitstatuspart
association [0..*] to I_IT_ElectronicDocStatPartT as _Text on $projection.IT_ElectronicDocPartStat = _Text.IT_ElectronicDocPartStat
{
  key status_at_partner as IT_ElectronicDocPartStat,
  _Text
}
```
