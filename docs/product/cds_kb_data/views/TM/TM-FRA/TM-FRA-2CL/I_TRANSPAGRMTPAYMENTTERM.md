---
name: I_TRANSPAGRMTPAYMENTTERM
description: "Transpagrmtpaymentterm"
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - payment
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPAGRMTPAYMENTTERM

**Transpagrmtpaymentterm**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspAgrmtPaymentTermUUID` | ✓ | |  | `cast( db_key as /scmtms/vdm_fag_payt_term_uuid preserving type )` |  |  |
| `TranspAgreementItemUUID` |  | |  | `cast( parent_key as /scmtms/transpagrmt_itm_uuid preserving type )` |  |  |
| `TransportationAgreementUUID` |  | |  | `cast( root_key as /scmtms/transpagrmt_uuid preserving type )` |  |  |
| `TransportationPaymentTerms` |  | |  | `cast( zterm as /scmtms/vdm_payment_terms preserving type )` |  |  |
| `_PaymentTermText` | | ✓ | | | | |
| `_TransportationAgreement` | | ✓ | | | | |
| `_TranspAgreementItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentTermText` | `I_PaymentTermsText` | [0..*] |
| `_TransportationAgreement` | `I_TransportationAgreement` | [1..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #MANDATORY,
                 privilegedAssociations: ['_TransportationAgreement']}
@Analytics.technicalName: 'ITFAGPAYMENTTERM'
@EndUserText: {label: 'Transportation Agreement Payment Term'}
@ObjectModel: {sapObjectNodeType.name: 'FrtAgrmtItemPaymentTerm',
               representativeKey: 'TranspAgrmtPaymentTermUUID',
               usageType: { serviceQuality: #A,
                            sizeCategory: #L,
                            dataClass: #TRANSACTIONAL},
               supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@Metadata.ignorePropagatedAnnotations: true
@VDM: {viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspAgrmtPaymentTerm
  as select from /scmtms/d_fagptr as AgreementPaymentTerm
  association        to parent I_TranspAgreementItem_2 as _TranspAgreementItem     on $projection.TranspAgreementItemUUID = _TranspAgreementItem.TranspAgreementItemUUID
  association [0..*] to I_PaymentTermsText             as _PaymentTermText         on $projection.TransportationPaymentTerms = _PaymentTermText.PaymentTerms

  //Association for Lock and Auth
  association [1..1] to I_TransportationAgreement      as _TransportationAgreement on $projection.TransportationAgreementUUID = _TransportationAgreement.TransportationAgreementUUID
{
  key cast( db_key as /scmtms/vdm_fag_payt_term_uuid preserving type )   as TranspAgrmtPaymentTermUUID,
      cast( parent_key as /scmtms/transpagrmt_itm_uuid preserving type ) as TranspAgreementItemUUID,
      cast( root_key  as /scmtms/transpagrmt_uuid preserving type )      as TransportationAgreementUUID,

      @ObjectModel.text.association: '_PaymentTermText'
      cast( zterm as /scmtms/vdm_payment_terms preserving type )         as TransportationPaymentTerms,

      /* Associations */
      _TranspAgreementItem,
      _PaymentTermText,
      _TransportationAgreement
}
```
