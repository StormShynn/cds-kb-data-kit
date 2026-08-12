---
name: I_CAINCOMINGPAYMENTMETHOD
description: "Caincomingpaymentmethod"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - payment
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAINCOMINGPAYMENTMETHOD

**Caincomingpaymentmethod**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  |  |  |  |
| `CAIncomingPaymentMethod` | ✓ | |  | `CAPaymentMethod` |  |  |
| `BankDetailsOfBPAreRequired` |  | |  |  |  |  |
| `AddressDetailsAreRequired` |  | |  |  |  |  |
| `IsPaytMethForIncomingPayments` |  | |  |  |  |  |
| `CAIsPaytMethForPostOffcBkAcct` |  | |  |  |  |  |
| `ChequeIsCreatedWithPaytMeth` |  | |  |  |  |  |
| `IsPaytMethForEUInternalTransf` |  | |  |  |  |  |
| `CAPaymentMethodProcessingType` |  | |  |  |  |  |
| `CAPaymentMediumFormat` |  | |  |  |  |  |
| `CAPaytMediumFormatSupplement` |  | |  |  |  |  |
| `CAPaymentOrderIsCreated` |  | |  |  |  |  |
| `CAPaytMethForBillerDirect` |  | |  |  |  |  |
| `CAIsPaytSlipWithRefNmbrProced` |  | |  |  |  |  |
| `CAPaytMethAddressIsNotRequired` |  | |  |  |  |  |
| `BR_CABoletoAssignmentType` |  | |  |  |  |  |
| `CAPaymentMethodNotificationCat` |  | |  |  |  |  |
| `ContrAcctgIBANOrSWIFTRqmtCode` |  | |  |  |  |  |
| `CASEPAMandateIsRequired` |  | |  |  |  |  |
| `CASEPAPrenotificationIsCreated` |  | |  |  |  |  |
| `CARealTimePaymentCategory` |  | |  |  |  |  |
| `_Country` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Incoming Payment Method'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAIncomingPaymentMethod',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@Search.searchable: false

@VDM.viewType: #COMPOSITE

define view entity I_CAIncomingPaymentMethod
  as select from I_CAPaymentMethod
{
      @ObjectModel.foreignKey.association: '_Country'
  key Country,
  key CAPaymentMethod as CAIncomingPaymentMethod,

      BankDetailsOfBPAreRequired,
      AddressDetailsAreRequired,
      IsPaytMethForIncomingPayments,
      CAIsPaytMethForPostOffcBkAcct,
      ChequeIsCreatedWithPaytMeth,
      IsPaytMethForEUInternalTransf,
      CAPaymentMethodProcessingType,
      CAPaymentMediumFormat,
      CAPaytMediumFormatSupplement,
      CAPaymentOrderIsCreated,
      CAPaytMethForBillerDirect,
      CAIsPaytSlipWithRefNmbrProced,
      CAPaytMethAddressIsNotRequired,
      BR_CABoletoAssignmentType,
      CAPaymentMethodNotificationCat,
      ContrAcctgIBANOrSWIFTRqmtCode,
      CASEPAMandateIsRequired,
      CASEPAPrenotificationIsCreated,
      CARealTimePaymentCategory,

      /* Associations */
      _Country,
      _Text
}
where
  IsPaytMethForIncomingPayments = 'X'
```
