---
name: I_OVRLITMDELIVINCOMPLETIONSTST
description: Ovrlitmdelivincompletionstst
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_OVRLITMDELIVINCOMPLETIONSTST

**Ovrlitmdelivincompletionstst**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OvrlItmDelivIncompletionSts` | ✓ | |  | `statu` |
| `Language` | ✓ | |  | `spras` |
| `OvrlItmDelivIncompltnStsDesc` |  | |  | `cast(bezei as ovrlitmdelivincompltnstsdesc)` |
| `_OvrlItmDelivIncompletionSts` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OvrlItmDelivIncompletionSts` | `I_OvrlItmDelivIncompletionSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OvrlItmDelivIncompletionSts'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Overall Delivery Incompletion Status of Items - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOIDEVINCMSTST'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_OvrlItmDelivIncompletionStsT  
as select from tvbst 

association[0..1] to I_OvrlItmDelivIncompletionSts as _OvrlItmDelivIncompletionSts on $projection.OvrlItmDelivIncompletionSts = _OvrlItmDelivIncompletionSts.OvrlItmDelivIncompletionSts
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_OvrlItmDelivIncompletionSts'
    key statu as OvrlItmDelivIncompletionSts,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    cast(bezei as ovrlitmdelivincompltnstsdesc)  as OvrlItmDelivIncompltnStsDesc,
    
    //Associations
    _OvrlItmDelivIncompletionSts,
    _Language        
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'UVVLS')
  and ((tvbst.statu = 'A') or (tvbst.statu = 'B') or (tvbst.statu = 'C'));
```
