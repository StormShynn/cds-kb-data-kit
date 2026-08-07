---
name: C_IT_ELECTRONICDOCREJECTCODEVH
description: IT Electronicdocrejectcodevh
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
  - consumption-view
  - value-help
  - component:CA-GTF-CSC-EDO-IT
  - lob:Cross-Application Components
---
# C_IT_ELECTRONICDOCREJECTCODEVH

**IT Electronicdocrejectcodevh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-IT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `IT_ElectronicDocRejectionCode` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `IT_ElectronicDocRejectCodeText` |  | |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Italy Electronic Rejection Code'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #ORGANIZATIONAL
}

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #VALUE_HELP_PROVIDER,
                                     #SEARCHABLE_ENTITY]


@VDM.viewType: #CONSUMPTION
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey:'IT_ElectronicDocRejectionCode'
@Search.searchable: true
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER  
@Consumption.ranked: true
define view entity C_IT_ElectronicDocRejectCodeVH as select from I_IT_ElectronicDocRejectCode
{
 
  @ObjectModel.text.element: ['IT_ElectronicDocRejectCodeText']
  key IT_ElectronicDocRejectionCode,
  
  @Semantics.language
  @UI.hidden: true
  key Language, 

  @Semantics.text: true
  @Search: { defaultSearchElement: true, ranking: #HIGH }
  @Search.fuzzinessThreshold: 0.8
  IT_ElectronicDocRejectCodeText
}
```
