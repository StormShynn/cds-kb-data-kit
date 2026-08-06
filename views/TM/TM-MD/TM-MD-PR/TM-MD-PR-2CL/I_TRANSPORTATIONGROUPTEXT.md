---
name: I_TRANSPORTATIONGROUPTEXT
description: Transportationgrouptext
app_component: TM-MD-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-PR
  - interface-view
  - text-view
  - transport
  - text
  - component:TM-MD-PR-2CL
  - lob:Other
---
# I_TRANSPORTATIONGROUPTEXT

**Transportationgrouptext**

| Property | Value |
|---|---|
| App Component | `TM-MD-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationGroup` | `tragr` |
| key `Language` | `spras` |
| `TransportationGroupName` | `vtext` |
| `_TransportationGroup` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationGroup` | `I_TransportationGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ISDTRANSPGRPTEXT'
@ObjectModel.representativeKey: 'TransportationGroup'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S 
@Search.searchable:true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@EndUserText.label: 'Transportation Group - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_TransportationGroupText
as select from  
ttgrt
association[0..1] to I_TransportationGroup as _TransportationGroup on $projection.TransportationGroup = _TransportationGroup.TransportationGroup
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{   
    @ObjectModel.foreignKey.association: '_TransportationGroup'
    key tragr as TransportationGroup,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @Semantics.text: true 
    vtext as TransportationGroupName,
    
    //Associations
    _TransportationGroup,
    _Language
};
```
