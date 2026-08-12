---
name: I_WRKASSGMTPAYMENTDETAIL
description: "Wrkassgmtpaymentdetail"
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-WFD
  - CA-WFD-BL
  - interface-view
  - payment
  - component:CA-WFD-BL
  - lob:Cross-Application Components
---
# I_WRKASSGMTPAYMENTDETAIL

**Wrkassgmtpaymentdetail**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignmentExternalID` | ✓ | | `_Assignment` | `WorkAssignmentExternalID` |  |  |
| `Country2DigitISOCode` | ✓ | | `_Assignment` | `Country2DigitISOCode` |  |  |
| `BankIdentification` | ✓ | | `_PaymentDetails` | `BankIdentification` |  |  |
| `WorkforcePersonExternalID` |  | | `_Assignment` | `WorkforcePersonExternalID` |  |  |
| `BankAccountHolderName` |  | | `_PaymentDetails` | `BankAccountHolderName` |  |  |
| `BankAccountName` |  | | `_PaymentDetails` | `BankAccountName` |  |  |
| `BankControlKey` |  | | `_PaymentDetails` | `BankControlKey` |  |  |
| `BankCountryKey` |  | | `_PaymentDetails` | `BankCountryKey` |  |  |
| `BankNumber` |  | | `_PaymentDetails` | `BankNumber` |  |  |
| `BankName` |  | | `_PaymentDetails` | `BankName` |  |  |
| `BankAccount` |  | | `_PaymentDetails` | `BankAccount` |  |  |
| `IBAN` |  | | `_PaymentDetails` | `IBAN` |  |  |
| `SWIFTCode` |  | | `_PaymentDetails` | `SWIFTCode` |  |  |
| `StartDate` |  | |  | `cast (tstmp_to_dats( _PaymentDetails.ValidityStartDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date)` |  |  |
| `EndDate` |  | |  | `cast (tstmp_to_dats( _PaymentDetails.ValidityEndDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date)` |  |  |
| `BankAccountReferenceText` |  | | `_PaymentDetails` | `BankAccountReferenceText` |  |  |
| `IsBlocked` |  | | `_Assignment` | `IsBlocked` |  |  |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignment` | `I_WorkAssignment_1` | [0..1] |
| `_WorkforcePerson` | `I_WorkforcePerson_1` | [1] |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Work Assignment Payment Details'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
define view entity I_WrkAssgmtPaymentDetail
  as select from I_WorkAssignmentKeyMapping as _Assignment

    inner join   I_WorkAssignmentBP         as _AssignmentBP   on _AssignmentBP.WorkAssignment = _Assignment.WorkAssignment
    inner join   I_BusinessPartnerBank      as _PaymentDetails on _AssignmentBP.WorkAssignmentBusinessPartner = _PaymentDetails.BusinessPartner

  association [0..1] to I_WorkAssignment_1  as _WorkAssignment  on  _WorkAssignment.WorkAssignmentExternalID = $projection.WorkAssignmentExternalID
                                                                and _WorkAssignment.Country2DigitISOCode     = $projection.Country2DigitISOCode

  association [1]    to I_WorkforcePerson_1 as _WorkforcePerson on  _WorkforcePerson.WorkforcePersonExternalID = $projection.WorkforcePersonExternalID
{
  key  _Assignment.WorkAssignmentExternalID,
  key  _Assignment.Country2DigitISOCode,
  key  _PaymentDetails.BankIdentification,
       _Assignment.WorkforcePersonExternalID,
       _PaymentDetails.BankAccountHolderName,
       _PaymentDetails.BankAccountName,
       _PaymentDetails.BankControlKey,
       _PaymentDetails.BankCountryKey,
       _PaymentDetails.BankNumber,
       _PaymentDetails.BankName,
       _PaymentDetails.BankAccount,
       _PaymentDetails.IBAN,
       _PaymentDetails.SWIFTCode,
       cast (tstmp_to_dats( _PaymentDetails.ValidityStartDate,
       abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date) as StartDate,
       cast (tstmp_to_dats( _PaymentDetails.ValidityEndDate,
         abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date) as EndDate,
       _PaymentDetails.BankAccountReferenceText,
       //       WorkerPaymentMethod,
       @Semantics.booleanIndicator: true
       @UI.hidden: true
       _Assignment.IsBlocked,

       /* Associations */
       _WorkAssignment,
       _WorkforcePerson

}
```
