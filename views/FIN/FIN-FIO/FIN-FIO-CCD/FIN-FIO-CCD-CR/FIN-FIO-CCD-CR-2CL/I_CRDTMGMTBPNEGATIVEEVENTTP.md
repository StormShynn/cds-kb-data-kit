---
name: I_CRDTMGMTBPNEGATIVEEVENTTP
description: Crdtmgmtbpnegativeeventtp
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
# I_CRDTMGMTBPNEGATIVEEVENTTP

**Crdtmgmtbpnegativeeventtp**

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
| key `CrdtAcctInformationCategory` | `CrdtAcctInformationCategory` |
| key `CrdtAcctInformationType` | `CrdtAcctInformationType` |
| key `AdditionalCreditDocSequence` | `cast ( SequenceNumber as bp_counter preserving type )` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `AdditionalCreditDocComment` | `AdditionalCreditDocComment` |
| `_CrdtMBusinessPartnerTP` | *Association* |
| `_BusinessPartner` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Credit Mgmt BP Negative Event - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType: { dataClass:      #TRANSACTIONAL,
                             sizeCategory:   #L,
                             serviceQuality: #A
                           },
                modelingPattern:        #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
              }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view entity I_CrdtMgmtBPNegativeEventTP
  as projection on R_CrdtMBPNegativeEventTP as CrdtMgmtBPNegativeEvent
{
  key BusinessPartner,
  key CreditSegment,
  key CrdtAcctInformationCategory,
  key CrdtAcctInformationType,
  key cast ( SequenceNumber as bp_counter preserving type ) as AdditionalCreditDocSequence,
      ValidityStartDate,
      ValidityEndDate,
      AdditionalCreditDocComment,

      // BO Composition
      _CrdtMBusinessPartnerTP : redirected to parent I_CrdtMBusinessPartnerTP,

      // Exposed Associations
      _BusinessPartner
}
```
