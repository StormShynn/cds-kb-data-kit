---
name: I_PAYMENTPROGRAMCONTROL
description: "Paymentprogramcontrol"
app_component: FI-AP-AP-B-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AP
  - FI-AP-AP
  - interface-view
  - payment
  - component:FI-AP-AP-B-2CL
  - lob:Finance
---
# I_PAYMENTPROGRAMCONTROL

**Paymentprogramcontrol**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-B-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentRunDate` | ✓ | |  |  |  |  |
| `PaymentRunID` | ✓ | |  |  |  |  |
| `ProposalRunIsCarriedOut` |  | |  |  |  |  |
| `PaymentProposalIsRevised` |  | |  |  |  |  |
| `PaymentRunIsCarriedOut` |  | |  |  |  |  |
| `PaytRunDocCreationIsStarted` |  | |  |  |  |  |
| `PaymentRunIsDeleted` |  | |  |  |  |  |
| `NumberOfCreatedPayments` |  | |  |  |  |  |
| `NumberOfPostedPayments` |  | |  |  |  |  |
| `ToNetDueDate` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `BranchCompanyCodeAssignment` |  | |  |  |  |  |
| `BusinessPlace` |  | |  |  |  |  |
| `PaytRunIsForDrctDebitPreNotif` |  | |  |  |  |  |
| `ReferencePaymentRunDate` |  | |  |  |  |  |
| `ReferencePaymentRunID` |  | |  |  |  |  |
| `WrkflwScenIsActv` |  | |  |  |  |  |
| `_PaymentProposalPayment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentProposalPayment` | `I_PaymentProposalPayment` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IPAYTPGMCTRL',
    compiler.compareFilter: true,
    preserveKey: true
    }
@EndUserText.label: 'Payment Program Control'
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
//    representativeKey: 'PaymentRunID',
    usageType.serviceQuality: #B,
    usageType.dataClass: #TRANSACTIONAL,
    usageType.sizeCategory: #S,
    
    modelingPattern: #NONE,
    supportedCapabilities: [ 
                             #CDS_MODELING_ASSOCIATION_TARGET, 
                             #CDS_MODELING_DATA_SOURCE,
                             #SQL_DATA_SOURCE
                             //#EXTRACTION_DATA_SOURCE,
                             ]       
    }
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
//@Analytics: {
//    dataCategory: #DIMENSION,
    //dataExtraction.enabled: true,
//    internalName: #LOCAL
//    }
@Metadata: {
  ignorePropagatedAnnotations: true
  //allowExtensions: true
  }


define view I_PaymentProgramControl
  as select from R_PaymentProgramControl
  association [0..*] to I_PaymentProposalPayment   as _PaymentProposalPayment  on  $projection.PaymentRunID   = _PaymentProposalPayment.PaymentRunID
                                                                               and $projection.PaymentRunDate = _PaymentProposalPayment.PaymentRunDate  
{

  key PaymentRunDate,
  key PaymentRunID,
      ProposalRunIsCarriedOut,
      PaymentProposalIsRevised,
      PaymentRunIsCarriedOut,
      PaytRunDocCreationIsStarted,
      PaymentRunIsDeleted,
      NumberOfCreatedPayments,
      NumberOfPostedPayments,
      ToNetDueDate,
      ExchangeRateType,
      BranchCompanyCodeAssignment,
      BusinessPlace,
      PaytRunIsForDrctDebitPreNotif,
      ReferencePaymentRunDate,
      ReferencePaymentRunID,
      WrkflwScenIsActv,
      _PaymentProposalPayment

}
```
