---
name: I_BR_CTEFISCALDOCPARTNER
description: "BR Ctefiscaldocpartner"
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
  - partner
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_CTEFISCALDOCPARTNER

**BR Ctefiscaldocpartner**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_CTeFiscalDocumentPartner` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as j_1bcte_tomali preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_CTeFiscalDocPartnerText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil CT-e Fiscal Partner'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCTEFDOCPART'
@ObjectModel.representativeKey: 'BR_CTeFiscalDocumentPartner'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_CTeFiscalDocPartner as select from dd07l
  association [0..*] to I_BR_CTeFiscalDocPartnerText as _Text on $projection.BR_CTeFiscalDocumentPartner = _Text.BR_CTeFiscalDocumentPartner
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as j_1bcte_tomali preserving type ) as BR_CTeFiscalDocumentPartner,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1BCTE_TOMALI' and as4local = 'A'
```
