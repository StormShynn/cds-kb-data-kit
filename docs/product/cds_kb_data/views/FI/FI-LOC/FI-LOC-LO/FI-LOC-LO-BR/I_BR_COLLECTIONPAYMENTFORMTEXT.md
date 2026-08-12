---
name: I_BR_COLLECTIONPAYMENTFORMTEXT
description: "BR Collectionpaymentformtext"
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
  - payment
  - text
  - collection
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_COLLECTIONPAYMENTFORMTEXT

**BR Collectionpaymentformtext**

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
| `PaymentForm` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_indpag preserving type )` |  |  |
| `PaymentFormDescription` |  | |  | `cast ( substring ( ddtext, 1, 60 ) as logbr_indpagdesc preserving type )` |  |  |
| `_PaymentForm` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentForm` | `I_BR_CollectionPaymentForm` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Payment Form Indicator - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCOLINDPAGTEXT'
@ObjectModel.representativeKey: 'PaymentForm'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true


define view I_BR_CollectionPaymentFormText as select from dd07t
  association [1..1] to I_BR_CollectionPaymentForm as _PaymentForm on $projection.PaymentForm = _PaymentForm.PaymentForm
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @Semantics.language: true
    key cast( ddlanguage as spras preserving type ) as Language,
    @ObjectModel.foreignKey.association: '_PaymentForm'
    key cast ( substring( domvalue_l, 1, 1 ) as logbr_indpag preserving type ) as PaymentForm,
    @Semantics.text: true
    cast ( substring ( ddtext, 1, 60 ) as logbr_indpagdesc preserving type ) as PaymentFormDescription,
    _PaymentForm,
    _Language
}
where domname = 'J_1B_PAY_FORM_IND' 
  and as4local = 'A'
```
