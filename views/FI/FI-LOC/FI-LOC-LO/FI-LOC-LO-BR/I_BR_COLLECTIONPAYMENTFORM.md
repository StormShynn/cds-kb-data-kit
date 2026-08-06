---
name: I_BR_COLLECTIONPAYMENTFORM
description: BR Collectionpaymentform
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
  - collection
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_COLLECTIONPAYMENTFORM

**BR Collectionpaymentform**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PaymentForm` | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as logbr_indpag preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_CollectionPaymentFormText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Payment Form Indicator'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCOLINDPAG'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'PaymentForm'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_BR_CollectionPaymentForm as select from dd07l
  association [0..*] to I_BR_CollectionPaymentFormText as _Text on $projection.PaymentForm = _Text.PaymentForm  
{  
    @ObjectModel.text.association: '_Text'
    key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as logbr_indpag preserving type ) as PaymentForm,
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
where domname = 'J_1B_PAY_FORM_IND' 
  and as4local = 'A'
```
