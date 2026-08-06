---
name: I_CREDITMGMTACCOUNTTP
description: Creditmgmtaccounttp
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - interface-view
  - transactional-processing
  - credit
  - component:FIN-FIO-CCD-CR-2CL
  - lob:Other
---
# I_CREDITMGMTACCOUNTTP

**Creditmgmtaccounttp**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessPartner` | `BusinessPartner` |
| key `CreditSegment` | `CreditSegment` |
| `BusinessPartnerIsCritical` | `BusinessPartnerIsCritical` |
| `CreditAccountIsBlocked` | `CreditAccountIsBlocked` |
| `CreditAccountBlockReason` | `CreditAccountBlockReason` |
| `CreditAccountResubmissionDate` | `CreditAccountResubmissionDate` |
| `CreditLimitAmount` | `} CreditLimitAmount` |
| `CreditLimitValidityEndDate` | `CreditLimitValidityEndDate` |
| `CreditLimitLastChangeDate` | `CreditLimitLastChangeDate` |
| `CreditLimitCalculatedAmount` | `} CreditLimitCalculatedAmount` |
| `CreditLimitIsZero` | `CreditLimitIsZero` |
| `CreditLimitRequestedAmount` | `} CreditLimitRequestedAmount` |
| `CrdtLmtIsReqdFrmAutomCalc` | `CrdtLmtIsReqdFrmAutomCalc` |
| `CreditLimitReqdValidityEndDate` | `CreditLimitReqdValidityEndDate` |
| `CreditLimitRequestDate` | `CreditLimitRequestDate` |
| `CreditSegmentCurrency` | `CreditSegmentCurrency` |
| `_CrdtMBusinessPartnerTP` | *Association* |
| `_CrdtMAcctCrdtInsuranceTP` | *Association* |
| `_CrdtMAcctCollateralTP` | *Association* |
| `_BusinessPartner` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Credit Management Account - TP'
@AccessControl.authorizationCheck: #MANDATORY

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { usageType:         { dataClass: #MASTER,
                                     sizeCategory: #L,
                                     serviceQuality: #A },
                modelingPattern: #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
               }
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]               
define view entity I_CreditMgmtAccountTP
  as projection on R_CreditMgmtAccountTP as CreditManagementAccount
{
  key BusinessPartner,
  key CreditSegment,
      BusinessPartnerIsCritical,
      CreditAccountIsBlocked,
      CreditAccountBlockReason,
      CreditAccountResubmissionDate,

      @Semantics: { amount: { currencyCode: 'CreditSegmentCurrency' } }
      CreditLimitAmount,
      CreditLimitValidityEndDate,
      CreditLimitLastChangeDate,

      @Semantics: { amount: { currencyCode: 'CreditSegmentCurrency' } }
      CreditLimitCalculatedAmount,
      CreditLimitIsZero,

      @Semantics: { amount: { currencyCode: 'CreditSegmentCurrency' } }
      CreditLimitRequestedAmount,
      CrdtLmtIsReqdFrmAutomCalc,
      CreditLimitReqdValidityEndDate,
      CreditLimitRequestDate,
      CreditSegmentCurrency,

      // BO Composition
      _CrdtMBusinessPartnerTP : redirected to parent I_CrdtMBusinessPartnerTP,
      _CrdtMAcctCrdtInsuranceTP : redirected to composition child I_CrdtMAcctCrdtInsuranceTP,
      _CrdtMAcctCollateralTP    : redirected to composition child I_CrdtMAcctCollateralTP,

      // Exposed Associations
      _BusinessPartner
}
```
