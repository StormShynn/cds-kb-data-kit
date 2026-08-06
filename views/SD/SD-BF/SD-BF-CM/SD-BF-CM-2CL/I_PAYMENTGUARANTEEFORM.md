---
name: I_PAYMENTGUARANTEEFORM
description: Paymentguaranteeform
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-CM
  - interface-view
  - payment
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
---
# I_PAYMENTGUARANTEEFORM

**Paymentguaranteeform**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PaymentGuaranteeForm` | `absfo` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaymentGuaranteeFormText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PaymentGuaranteeForm'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Payment Guarantee Form'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDPAYTGUARFORM'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'PaymentGuaranteeForm'

define view I_PaymentGuaranteeForm
as select from t691k

association [0..*] to I_PaymentGuaranteeFormText as _Text on $projection.PaymentGuaranteeForm  = _Text.PaymentGuaranteeForm
{
    @ObjectModel.text.association: '_Text'
    key absfo as PaymentGuaranteeForm,
    
    //Associations
    _Text
};
```
