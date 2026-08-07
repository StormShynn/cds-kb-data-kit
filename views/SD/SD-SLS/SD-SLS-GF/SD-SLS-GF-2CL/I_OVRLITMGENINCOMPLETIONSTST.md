---
name: I_OVRLITMGENINCOMPLETIONSTST
description: "Ovrlitmgenincompletionstst"
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
# I_OVRLITMGENINCOMPLETIONSTST

**Ovrlitmgenincompletionstst**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OvrlItmGeneralIncompletionSts` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `OvrlItmGenIncompletionStsDesc` |  | |  | `cast(bezei as ovrlitmgenincompletionstsdesc )` |  |  |
| `_OvrlItmGeneralIncompletionSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OvrlItmGeneralIncompletionSts` | `I_OvrlItmGenIncompletionSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OvrlItmGeneralIncompletionSts'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Ovrl Itm General Incompletion Sts - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOIGENINCMSTST'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_OvrlItmGenIncompletionStsT  
as select from tvbst 

association[0..1] to I_OvrlItmGenIncompletionSts as _OvrlItmGeneralIncompletionSts on $projection.OvrlItmGeneralIncompletionSts = _OvrlItmGeneralIncompletionSts.OvrlItmGeneralIncompletionSts
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
    key statu as OvrlItmGeneralIncompletionSts,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    @Search.ranking: #LOW 
    cast(bezei as ovrlitmgenincompletionstsdesc ) as OvrlItmGenIncompletionStsDesc,
    
    //Associations
    _OvrlItmGeneralIncompletionSts,
    @Search.defaultSearchElement: false
    _Language        
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'UVALS')
  and ((tvbst.statu = 'A') or (tvbst.statu = 'B') or (tvbst.statu = 'C'));
```
