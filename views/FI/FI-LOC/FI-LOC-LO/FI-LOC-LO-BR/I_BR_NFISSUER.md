---
name: I_BR_NFISSUER
description: BR Nfissuer
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
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFISSUER

**BR Nfissuer**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BR_NFIssuedBy` | `cast( substring(domvalue_l, 1, 1 ) as logbr_nfissuer preserving type)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFIssuerText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFISSUER'
@EndUserText.label: 'Brazil Nota Fiscal Issuer'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFIssuedBy'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]

define view I_BR_NFIssuer
  as select from dd07l
  association [0..*] to I_BR_NFIssuerText as _Text on $projection.BR_NFIssuedBy = _Text.BR_NFIssuedBy
{
  @ObjectModel.text.association: '_Text'
  key cast( substring(domvalue_l, 1, 1 ) as logbr_nfissuer preserving type) as BR_NFIssuedBy,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname  = 'J_1B_FISC_DOC_ISSUER'
  and as4local = 'A'
```
