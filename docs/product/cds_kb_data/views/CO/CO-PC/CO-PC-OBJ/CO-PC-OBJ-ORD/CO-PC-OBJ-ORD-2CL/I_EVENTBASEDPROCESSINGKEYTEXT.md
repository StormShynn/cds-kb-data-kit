---
name: I_EVENTBASEDPROCESSINGKEYTEXT
description: "Eventbasedprocessingkeytext"
app_component: CO-PC-OBJ-ORD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - text-view
  - text
  - component:CO-PC-OBJ-ORD-2CL
  - lob:Controlling
---
# I_EVENTBASEDPROCESSINGKEYTEXT

**Eventbasedprocessingkeytext**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventBasedProcessingKey` | ✓ | |  | `ebw_key` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `EventBasedProcessingKeyName` |  | |  | `cast(texta as ebw_key_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Event-Based Processing Key - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'EventBasedProcessingKey'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
//@AbapCatalog.sqlViewName: 'IEVTBSDPROCGKEYT'
@Analytics.technicalName: 'IEVTBSDPROCGKEYT'
//@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

//@Analytics: { dataExtraction: { enabled: true, delta.changeDataCapture.automatic: true } }

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
//@AbapCatalog.compiler.compareFilter:true

@Search.searchable: true
define view entity I_EventBasedProcessingKeyText as select from fcoc_ebw_methodt
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key fcoc_ebw_methodt.ebw_key as EventBasedProcessingKey,
  @ObjectModel.foreignKey.association: '_Language' 
  @Semantics.language
  key spras as Language,
  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8    
  @Search.ranking: #LOW
  cast(texta as ebw_key_text preserving type ) as EventBasedProcessingKeyName,
  
  _Language
}
```
