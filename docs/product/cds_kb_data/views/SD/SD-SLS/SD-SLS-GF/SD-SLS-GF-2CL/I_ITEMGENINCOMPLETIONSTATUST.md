---
name: I_ITEMGENINCOMPLETIONSTATUST
description: "Itemgenincompletionstatust"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - status
  - item-level
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_ITEMGENINCOMPLETIONSTATUST

**Itemgenincompletionstatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ItemGeneralIncompletionStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ItemGenIncompletionStatusDesc` |  | |  | `bezei` |  |  |
| `_ItemGeneralIncompletionStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ItemGeneralIncompletionStatus` | `I_ItemGenIncompletionStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ItemGeneralIncompletionStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'General Incompletion Status of Item - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDITGENINCPSTST'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true

define view I_ItemGenIncompletionStatusT 
as select from tvbst 

association[0..1] to I_ItemGenIncompletionStatus as _ItemGeneralIncompletionStatus on $projection.ItemGeneralIncompletionStatus = _ItemGeneralIncompletionStatus.ItemGeneralIncompletionStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_ItemGeneralIncompletionStatus'
    key statu as ItemGeneralIncompletionStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    bezei as ItemGenIncompletionStatusDesc,
    
    //Associations
    _ItemGeneralIncompletionStatus,
    _Language        
}
where (tvbst.tbnam = 'VBAP') and (tvbst.fdnam = 'UVALL')
  and ((tvbst.statu = 'A') or (tvbst.statu = 'C'));
```
