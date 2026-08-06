---
name: I_BR_PAYMENTFORM
description: BR Paymentform
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
  - payment
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_PAYMENTFORM

**BR Paymentform**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PaymentForm` | `cast ( substring( domvalue_l, 1, 1 ) as logbr_indpag preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_PaymentFormText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Payment Form Indicator'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRINDPAG'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'PaymentForm'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_PaymentForm as select from dd07l
  association [0..*] to I_BR_PaymentFormText as _Text on $projection.PaymentForm = _Text.PaymentForm
{  
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as logbr_indpag preserving type ) as PaymentForm,
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
where domname = 'J_1BNFE_INDPAG' 
  and as4local = 'A'
```
