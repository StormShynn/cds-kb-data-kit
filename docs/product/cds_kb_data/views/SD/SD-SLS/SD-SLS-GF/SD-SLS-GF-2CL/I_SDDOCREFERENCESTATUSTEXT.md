---
name: I_SDDOCREFERENCESTATUSTEXT
description: "Sddocreferencestatustext"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - text-view
  - text
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SDDOCREFERENCESTATUSTEXT

**Sddocreferencestatustext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SDDocReferenceStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `SDDocReferenceStatusDesc` |  | |  | `bezei` |  |  |
| `_SDDocReferenceStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SDDocReferenceStatus` | `I_SDDocReferenceStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SDDocReferenceStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'SD Document Reference Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSDDOCREFSTST'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true

define view I_SDDocReferenceStatusText
as select from tvbst

association[0..1] to I_SDDocReferenceStatus as _SDDocReferenceStatus on $projection.SDDocReferenceStatus = _SDDocReferenceStatus.SDDocReferenceStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SDDocReferenceStatus'
    key statu as SDDocReferenceStatus,
    
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key spras as Language,

    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    bezei as SDDocReferenceStatusDesc,
    
    _SDDocReferenceStatus,
    _Language
}
where (tvbst.tbnam = 'VBAP') and (tvbst.fdnam = 'RFSTA')
```
