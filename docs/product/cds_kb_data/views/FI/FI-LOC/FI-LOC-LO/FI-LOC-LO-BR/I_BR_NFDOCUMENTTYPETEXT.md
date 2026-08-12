---
name: I_BR_NFDOCUMENTTYPETEXT
description: "BR Nfdocumenttypetext"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - document
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFDOCUMENTTYPETEXT

**BR Nfdocumenttypetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_BR_NFDocumentTypeText` | `spras` |  |  |
| `BR_NFDocumentType` | ✓ | | `_BR_NFDocumentTypeText` | `doctyp` |  |  |
| `BR_NFDocumentTypeDesc` |  | |  | `cast(_BR_NFDocumentTypeText.text as logbr_nf_doc_type_desc)` |  |  |
| `_BR_NFDocumentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFDocumentType` | `I_BR_NFDocumentType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFDOCTYPETEXT'
@EndUserText.label: 'Brazil Nota Fiscal Document Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.representativeKey: 'BR_NFDocumentType'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@Search.searchable: true

define view I_BR_NFDocumentTypeText as select from j_1bdoctypest as _BR_NFDocumentTypeText
  association [1..1] to I_BR_NFDocumentType as _BR_NFDocumentType on $projection.BR_NFDocumentType = _BR_NFDocumentType.BR_NFDocumentType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language 
{
  @Semantics.language: true
  key _BR_NFDocumentTypeText.spras as Language,
  
  @ObjectModel.foreignKey.association: '_BR_NFDocumentType'
  key _BR_NFDocumentTypeText.doctyp as BR_NFDocumentType,
  
  @Search.fuzzinessThreshold: 0.8
  @Search.defaultSearchElement:true
  @Search.ranking: #LOW
  @Semantics.text: true
  cast(_BR_NFDocumentTypeText.text as logbr_nf_doc_type_desc) as BR_NFDocumentTypeDesc,  
  _BR_NFDocumentType,
  _Language
} 
where _BR_NFDocumentTypeText.spras = $session.system_language
```
