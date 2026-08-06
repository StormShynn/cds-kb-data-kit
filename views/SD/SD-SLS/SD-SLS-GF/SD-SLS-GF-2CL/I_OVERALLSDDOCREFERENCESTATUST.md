---
name: I_OVERALLSDDOCREFERENCESTATUST
description: Overallsddocreferencestatust
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
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_OVERALLSDDOCREFERENCESTATUST

**Overallsddocreferencestatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `OverallSDDocReferenceStatus` | `statu` |
| key `Language` | `spras` |
| `OverallSDDocRefStatusDesc` | `bezei` |
| `_OverallSDDocReferenceStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OverallSDDocReferenceStatus` | `I_OverallSDDocReferenceStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OverallSDDocReferenceStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Overall Reference Status of SD Document - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOVRDOCREFSTST'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true

define view I_OverallSDDocReferenceStatusT  
as select from tvbst 

association[0..1] to I_OverallSDDocReferenceStatus as _OverallSDDocReferenceStatus on $projection.OverallSDDocReferenceStatus = _OverallSDDocReferenceStatus.OverallSDDocReferenceStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_OverallSDDocReferenceStatus'
    key statu as OverallSDDocReferenceStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9 
    @Search.ranking: #LOW    
    bezei as OverallSDDocRefStatusDesc,
    
    //Associations
    _OverallSDDocReferenceStatus,
    _Language        
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'RFSTK');
```
