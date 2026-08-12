---
name: I_SDDOCUMENTREASONTEXT
description: "Sddocumentreasontext"
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
  - document
  - text
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SDDOCUMENTREASONTEXT

**Sddocumentreasontext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SDDocumentReason` | ✓ | |  | `augru` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `SDDocumentReasonText` |  | |  | `bezei` |  |  |
| `_SDDocumentReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SDDocumentReason` | `I_SDDocumentReason` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SDDocumentReason'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'SD Document Reason - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSDDOCREASONT' 
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.preserveKey: true
@Analytics.dataExtraction.enabled: true
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY   ]
define view I_SDDocumentReasonText
as select from tvaut

association[0..1] to I_SDDocumentReason as _SDDocumentReason on $projection.SDDocumentReason = _SDDocumentReason.SDDocumentReason
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SDDocumentReason'
    key augru as SDDocumentReason,
    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,  
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    @Semantics.text
    bezei as SDDocumentReasonText,
    
    //Associations
    _SDDocumentReason,
    _Language  
};
```
