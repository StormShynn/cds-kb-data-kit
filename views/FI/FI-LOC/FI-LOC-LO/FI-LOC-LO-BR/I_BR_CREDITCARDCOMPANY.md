---
name: I_BR_CREDITCARDCOMPANY
description: BR Creditcardcompany
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
  - credit
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_CREDITCARDCOMPANY

**BR Creditcardcompany**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditCardBrand` | ✓ | |  | `cast (t_band as logbr_tband preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_CreditCardCompanyText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Credit Card Company Name'
@AbapCatalog.sqlViewName: 'IBRTBAND'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CreditCardBrand'
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.compositionRoot: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Analytics.dataCategory: #DIMENSION 
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view I_BR_CreditCardCompany as select from j_1bband
  association [0..*] to I_BR_CreditCardCompanyText as _Text on $projection.CreditCardBrand = _Text.CreditCardBrand
{
  @ObjectModel.text.association: '_Text'
  key cast (t_band as logbr_tband preserving type ) as CreditCardBrand,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
```
