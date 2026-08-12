---
name: I_FRTAGRMTITEMPAYMENTTERMTP
description: "Frtagrmtitempaymenttermtp"
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - transactional-processing
  - payment
  - item-level
  - component:TM-FRA-2CL
  - lob:Other
---
# I_FRTAGRMTITEMPAYMENTTERMTP

**Frtagrmtitempaymenttermtp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspAgrmtPaymentTermUUID` | ✓ | |  |  |  |  |
| `TranspAgreementItemUUID` |  | |  |  |  |  |
| `TransportationAgreementUUID` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `I_FreightAgreementTP` |  | |  | `FrtAgrmtItemPaymentTerm._FreightAgreement : redirected to I_FreightAgreementTP` |  |  |
| `I_FreightAgreementItemTP` |  | |  | `FrtAgrmtItemPaymentTerm._FreightAgreementItem : redirected to parent I_FreightAgreementItemTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Agreement Payment Terms - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name:'FrtAgrmtItemPaymentTerm'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'FrtAgrmtItemPaymentTerm_Type'
define view entity I_FrtAgrmtItemPaymentTermTP
  as projection on R_FrtAgrmtItemPaymentTermTP as FrtAgrmtItemPaymentTerm
{
  key TranspAgrmtPaymentTermUUID,
      TranspAgreementItemUUID,
      TransportationAgreementUUID,
      PaymentTerms,

      //Association
      FrtAgrmtItemPaymentTerm._FreightAgreement     : redirected to I_FreightAgreementTP,

      //To Parent
      FrtAgrmtItemPaymentTerm._FreightAgreementItem : redirected to parent I_FreightAgreementItemTP
}
```
