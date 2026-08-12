---
name: I_CAPAYMENTMETHOD
description: "Capaymentmethod"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_CAPAYMENTMETHOD

**Capaymentmethod**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` |  |  |
| `CAPaymentMethod` | ✓ | |  | `zlsch` |  |  |
| `BankDetailsOfBPAreRequired` |  | |  | `xbkkt` |  |  |
| `AddressDetailsAreRequired` |  | |  | `xstra` |  |  |
| `IsPaytMethForIncomingPayments` |  | |  | `xeinz` |  |  |
| `CAIsPaytMethForPostOffcBkAcct` |  | |  | `xpgir` |  |  |
| `ChequeIsCreatedWithPaytMeth` |  | |  | `xschk` |  |  |
| `IsPaytMethForEUInternalTransf` |  | |  | `xeuro` |  |  |
| `CAPaymentMethodProcessingType` |  | |  | `xverr` |  |  |
| `CAPaymentMediumFormat` |  | |  | `formi` |  |  |
| `CAPaytMediumFormatSupplement` |  | |  | `formz` |  |  |
| `CAPaymentOrderIsCreated` |  | |  | `xnopo` |  |  |
| `CAPaytMethForBillerDirect` |  | |  | `xebpp` |  |  |
| `CAIsPaytSlipWithRefNmbrProced` |  | |  | `xesrd` |  |  |
| `CAPaytMethAddressIsNotRequired` |  | |  | `xaddr` |  |  |
| `BR_CABoletoAssignmentType` |  | |  | `bolty` |  |  |
| `CAPaymentMethodNotificationCat` |  | |  | `ddaty` |  |  |
| `ContrAcctgIBANOrSWIFTRqmtCode` |  | |  | `xiban` |  |  |
| `CASEPAMandateIsRequired` |  | |  | `xsepa` |  |  |
| `CASEPAPrenotificationIsCreated` |  | |  | `pnopt` |  |  |
| `CARealTimePaymentCategory` |  | |  | `rtpty` |  |  |
| `CASuplmntForPaytMediumFormat` |  | |  | `formz` |  |  |
| `CAIBANAndOrSwiftCodeIsRequired` |  | |  | `xiban` |  |  |
| `_Text` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAPaymentMethodText` | [0..*] |
| `_Country` | `I_Country` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Payment Method'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAPaymentMethod',
                sapObjectNodeType.name: 'ContrAcctgPaymentMethod',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAPaymentMethod
  as select from tfk042z

  association [0..*] to I_CAPaymentMethodText as _Text    on  $projection.Country         = _Text.Country
                                                          and $projection.CAPaymentMethod = _Text.CAPaymentMethod
  association [1..1] to I_Country             as _Country on  $projection.Country = _Country.Country

{
      @ObjectModel.foreignKey.association: '_Country'
  key land1 as Country,
      @ObjectModel.text.association: '_Text'
  key zlsch as CAPaymentMethod,

      xbkkt as BankDetailsOfBPAreRequired,
      xstra as AddressDetailsAreRequired,
      xeinz as IsPaytMethForIncomingPayments,
      xpgir as CAIsPaytMethForPostOffcBkAcct,
      xschk as ChequeIsCreatedWithPaytMeth,
      xeuro as IsPaytMethForEUInternalTransf,
      xverr as CAPaymentMethodProcessingType,
      formi as CAPaymentMediumFormat,
      formz as CAPaytMediumFormatSupplement,
      xnopo as CAPaymentOrderIsCreated,
      xebpp as CAPaytMethForBillerDirect,
      xesrd as CAIsPaytSlipWithRefNmbrProced,
      xaddr as CAPaytMethAddressIsNotRequired,
      bolty as BR_CABoletoAssignmentType,
      ddaty as CAPaymentMethodNotificationCat,
      xiban as ContrAcctgIBANOrSWIFTRqmtCode,
      xsepa as CASEPAMandateIsRequired,
      pnopt as CASEPAPrenotificationIsCreated,
      rtpty as CARealTimePaymentCategory,

      /* associations */
      _Text,
      _Country,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CAPaytMediumFormatSupplement'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'CAPaytMediumFormatSupplement'
      formz as CASuplmntForPaytMediumFormat,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ContrAcctgIBANOrSWIFTRqmtCode'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ContrAcctgIBANOrSWIFTRqmtCode'
      xiban as CAIBANAndOrSwiftCodeIsRequired
}
```
