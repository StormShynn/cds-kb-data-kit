---
name: I_BR_CTEFISCALDOCPARTNERTEXT
description: "BR Ctefiscaldocpartnertext"
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
  - text
  - partner
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_CTEFISCALDOCPARTNERTEXT

**BR Ctefiscaldocpartnertext**

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
| `BR_CTeFiscalDocumentPartner` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as j_1bcte_tomali preserving type )` |  |  |
| `BR_CTeFiscalDocPartnerDesc` |  | |  | `ddtext` |  |  |
| `_BR_CTeFiscalDocPartner` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_CTeFiscalDocPartner` | `I_BR_CTeFiscalDocPartner` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil CT-e Fiscal Partner - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCTEFDOCPARTT'
@ObjectModel.representativeKey: 'BR_CTeFiscalDocumentPartner'
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


define view I_BR_CTeFiscalDocPartnerText as select from dd07t
  association [1..1] to I_BR_CTeFiscalDocPartner as _BR_CTeFiscalDocPartner on $projection.BR_CTeFiscalDocumentPartner = _BR_CTeFiscalDocPartner.BR_CTeFiscalDocumentPartner
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_CTeFiscalDocPartner'
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as j_1bcte_tomali preserving type ) as BR_CTeFiscalDocumentPartner,
  @Semantics.text
  ddtext as BR_CTeFiscalDocPartnerDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_CTeFiscalDocPartner, 
  _Language  
}
where domname = 'J_1BCTE_TOMALI' and as4local = 'A'
```
