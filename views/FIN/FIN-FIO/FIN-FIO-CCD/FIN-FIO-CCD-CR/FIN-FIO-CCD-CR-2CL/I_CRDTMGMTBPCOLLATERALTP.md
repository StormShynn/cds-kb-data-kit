---
name: I_CRDTMGMTBPCOLLATERALTP
description: Crdtmgmtbpcollateraltp
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
  - component:FIN-FIO-CCD-CR-2CL
  - lob:Other
---
# I_CRDTMGMTBPCOLLATERALTP

**Crdtmgmtbpcollateraltp**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  |  |  |
| `CreditSegment` | ✓ | |  |  |  |  |
| `CrdtAcctInformationCategory` | ✓ | |  |  |  |  |
| `CrdtAcctInformationType` | ✓ | |  |  |  |  |
| `AdditionalCreditDocSequence` | ✓ | |  | `cast ( SequenceNumber as bp_counter preserving type )` |  |  |
| `ExceptionIsCreditCheckRelevant` |  | |  |  |  |  |
| `AddlCreditDocAmtInTransacCrcy` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `AdditionalCreditDocComment` |  | |  |  |  |  |
| `_CrdtMBusinessPartnerTP` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Credit Mgmt BP Collateral - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType: { dataClass:      #TRANSACTIONAL,
                             sizeCategory:   #L,
                             serviceQuality: #A
                           },
                modelingPattern: #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
              }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_CrdtMgmtBPCollateralTP
  as projection on R_CrdtMBPCollateralTP as CrdtMgmttBPCollateral
{
  key BusinessPartner,
  key CreditSegment,
  key CrdtAcctInformationCategory,
  key CrdtAcctInformationType,
  key cast ( SequenceNumber as bp_counter preserving type ) as AdditionalCreditDocSequence,
      ExceptionIsCreditCheckRelevant,
      @Semantics: { amount: { currencyCode: 'TransactionCurrency' } }
      AddlCreditDocAmtInTransacCrcy,
      TransactionCurrency,
      ValidityStartDate,
      ValidityEndDate,
      AdditionalCreditDocComment,

      // BO Composition
      _CrdtMBusinessPartnerTP : redirected to parent I_CrdtMBusinessPartnerTP,

      // Exposed Associations
      _BusinessPartner
}
```
