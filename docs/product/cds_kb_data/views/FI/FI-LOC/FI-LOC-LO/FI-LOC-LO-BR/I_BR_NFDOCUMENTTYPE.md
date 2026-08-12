---
name: I_BR_NFDOCUMENTTYPE
description: "BR Nfdocumenttype"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - document
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFDOCUMENTTYPE

**BR Nfdocumenttype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NFDocumentType` | ✓ | | `_BR_NFDocumentType` | `doctyp` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFDocumentTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFDOCTYPE'
@EndUserText.label: 'Brazil Nota Fiscal Document Type'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'BR_NFDocumentType'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@Analytics.dataCategory: #DIMENSION 
@Analytics.internalName: #LOCAL
@Search.searchable: true
@Consumption.ranked: true

define view I_BR_NFDocumentType as select from j_1bdoctypes as _BR_NFDocumentType
    association [0..*] to I_BR_NFDocumentTypeText as _Text on $projection.BR_NFDocumentType = _Text.BR_NFDocumentType
{
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement:true
  @Search.ranking: #HIGH
  key _BR_NFDocumentType.doctyp as BR_NFDocumentType,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
```
