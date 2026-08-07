---
name: I_BR_CTEDOCUMENTTYPETEXT
description: "BR Ctedocumenttypetext"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
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
# I_BR_CTEDOCUMENTTYPETEXT

**BR Ctedocumenttypetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `BR_CTeDocumentType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_type_cte preserving type )` |  |  |
| `BR_CTeDocumentTypeDesc` |  | |  | `ddtext` |  |  |
| `_BR_CTeDocumentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_CTeDocumentType` | `I_BR_CTeDocumentType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil CT-e Document Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCTEDOCTYPET'
@ObjectModel.representativeKey: 'BR_CTeDocumentType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true


define view I_BR_CTeDocumentTypeText as select from dd07t
  association [1..1] to I_BR_CTeDocumentType as _BR_CTeDocumentType on $projection.BR_CTeDocumentType = _BR_CTeDocumentType.BR_CTeDocumentType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_CTeDocumentType'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_type_cte preserving type ) as BR_CTeDocumentType,  
  @Semantics.text
  ddtext as BR_CTeDocumentTypeDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_CTeDocumentType, 
  _Language 
}
where domname = 'J_1BCTTYPE' and as4local = 'A'
```
