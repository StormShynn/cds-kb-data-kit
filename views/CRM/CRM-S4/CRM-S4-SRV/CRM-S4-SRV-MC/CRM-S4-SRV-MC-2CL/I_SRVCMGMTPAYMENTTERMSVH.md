---
name: I_SRVCMGMTPAYMENTTERMSVH
description: Srvcmgmtpaymenttermsvh
app_component: CRM-S4-SRV-MC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - value-help
  - payment
  - component:CRM-S4-SRV-MC-2CL
  - lob:Other
---
# I_SRVCMGMTPAYMENTTERMSVH

**Srvcmgmtpaymenttermsvh**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-MC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PaymentTerms` | `PaymentTerms.PaymentTerms` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaymentTermsText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Terms of Payment'
@ObjectModel.representativeKey:'PaymentTerms'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations:true

define view entity I_SrvcMgmtPaymentTermsVH
  as select from I_PaymentTerms as PaymentTerms

  association [0..*] to I_PaymentTermsText as _Text on $projection.PaymentTerms = _Text.PaymentTerms

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key PaymentTerms.PaymentTerms,
      
                  
      _Text

}
```
