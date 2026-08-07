---
name: I_OVERALLSDDOCUMENTRJCNSTATUST
description: Overallsddocumentrjcnstatust
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
  - document
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_OVERALLSDDOCUMENTRJCNSTATUST

**Overallsddocumentrjcnstatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OverallSDDocumentRejectionSts` | ✓ | |  | `statu` |
| `Language` | ✓ | |  | `spras` |
| `OvrlSDDocumentRejectionStsDesc` |  | |  | `bezei` |
| `_OverallSDDocumentRejectionSts` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OverallSDDocumentRejectionSts` | `I_OverallSDDocumentRjcnStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OverallSDDocumentRejectionSts'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Overall Rejection Status of SD Document - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOVDOCRJCNSTST' 
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true

define view I_OverallSDDocumentRjcnStatusT
as select from tvbst

association [0..1] to I_OverallSDDocumentRjcnStatus as _OverallSDDocumentRejectionSts on $projection.OverallSDDocumentRejectionSts = _OverallSDDocumentRejectionSts.OverallSDDocumentRejectionSts
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_OverallSDDocumentRejectionSts'
    key statu as OverallSDDocumentRejectionSts,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    @Search.ranking: #LOW 
    bezei as OvrlSDDocumentRejectionStsDesc,
    
    _OverallSDDocumentRejectionSts,
    _Language
} 
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'ABSTK');
```
