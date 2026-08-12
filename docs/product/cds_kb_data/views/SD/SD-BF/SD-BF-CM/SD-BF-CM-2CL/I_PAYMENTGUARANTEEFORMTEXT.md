---
name: I_PAYMENTGUARANTEEFORMTEXT
description: "Paymentguaranteeformtext"
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-CM
  - interface-view
  - text-view
  - payment
  - text
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
---
# I_PAYMENTGUARANTEEFORMTEXT

**Paymentguaranteeformtext**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentGuaranteeForm` | ✓ | |  | `absfo` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PaymentGuaranteeFormName` |  | |  | `bezei` |  |  |
| `_PaymentGuaranteeForm` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentGuaranteeForm` | `I_PaymentGuaranteeForm` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PaymentGuaranteeForm'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Payment Guarantee Form - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDPAYTGUARFORMT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true

define view I_PaymentGuaranteeFormText
as select from t691l

association[0..1] to I_PaymentGuaranteeForm as _PaymentGuaranteeForm on $projection.PaymentGuaranteeForm = _PaymentGuaranteeForm.PaymentGuaranteeForm
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.sapObjectNodeTypeReference: 'PaymentGuaranteeForm'
    @ObjectModel.foreignKey.association: '_PaymentGuaranteeForm'
    key absfo as PaymentGuaranteeForm,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    @Semantics.text: true
    bezei as PaymentGuaranteeFormName,
    
    //Associations
    _PaymentGuaranteeForm,
    _Language    
};
```
