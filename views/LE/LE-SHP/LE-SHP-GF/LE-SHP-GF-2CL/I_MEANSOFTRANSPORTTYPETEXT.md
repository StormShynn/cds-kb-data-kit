---
name: I_MEANSOFTRANSPORTTYPETEXT
description: Meansoftransporttypetext
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - transport
  - text
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_MEANSOFTRANSPORTTYPETEXT

**Meansoftransporttypetext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeansOfTransportType` | ✓ | |  | `traty` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MeansOfTransportTypeName` |  | |  | `vtext` |  |  |
| `_MeansOfTransportType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MeansOfTransportType` | `I_MeansOfTransportType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false //Inserted by VDM CDS Suite Plugin
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MeansOfTransportType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'MeansOfTransportType'
//Commented by VDM CDS Suite Plugin:@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Packaging Material Type - Text'
//Commented by VDM CDS Suite Plugin:@Analytics: { dataCategory: #TEXT, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@Search.searchable: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILEMNSTRANSPTYPT'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_MeansOfTransportTypeText
as select from  tvtyt
association [0..1] to I_MeansOfTransportType as _MeansOfTransportType on $projection.MeansOfTransportType = _MeansOfTransportType.MeansOfTransportType
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    //Key
    @ObjectModel.foreignKey.association: '_MeansOfTransportType'
    key traty as MeansOfTransportType,        
    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    //Text
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    @Semantics.text: true
    vtext as MeansOfTransportTypeName,
    
    //Association
    _MeansOfTransportType,
    _Language
};
```
