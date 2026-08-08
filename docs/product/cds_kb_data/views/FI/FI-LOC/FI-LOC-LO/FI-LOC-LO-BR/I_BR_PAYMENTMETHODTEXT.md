---
name: I_BR_PAYMENTMETHODTEXT
description: "BR Paymentmethodtext"
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
  - payment
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_PAYMENTMETHODTEXT

**BR Paymentmethodtext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `PaymentMethod` | ✓ | |  | `cast (t_pag as logbr_tpag preserving type)` |  |  |
| `PaymentMethodDescription` |  | |  | `cast(t_pagt as logbr_tpagdesc preserving type)` |  |  |
| `_BR_PaymentMethod` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_PaymentMethod` | `I_BR_PaymentMethod` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Payment Method - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.sqlViewName: 'IBRTPAGTEXT'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'PaymentMethod'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true


define view I_BR_PaymentMethodText
  as select from j_1bpagt
  association [1..1] to I_BR_PaymentMethod as _BR_PaymentMethod on $projection.PaymentMethod = _BR_PaymentMethod.PaymentMethod
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{
  @Semantics.language: true
  key spras as Language,
  @ObjectModel.foreignKey.association: '_BR_PaymentMethod'
  key cast (t_pag as logbr_tpag preserving type) as PaymentMethod,
  @Semantics.text: true
  cast(t_pagt as logbr_tpagdesc preserving type) as PaymentMethodDescription,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_PaymentMethod,
  _Language
}
```
