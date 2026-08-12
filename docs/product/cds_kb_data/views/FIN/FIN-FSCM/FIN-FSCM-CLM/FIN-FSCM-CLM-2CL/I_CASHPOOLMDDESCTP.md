---
name: I_CASHPOOLMDDESCTP
description: "Cashpoolmddesctp"
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - transactional-processing
  - component:FIN-FSCM-CLM-2CL
  - lob:Other
---
# I_CASHPOOLMDDESCTP

**Cashpoolmddesctp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CashPoolName` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `CashPoolDesc` |  | |  |  |  |  |
| `CashPoolRefTxt` |  | |  |  |  |  |
| `LocalLastChangeDateTime` |  | |  |  |  |  |
| `_GeneralInfo` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cash Pool Master Data Description - TP'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: { modelingPattern: #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
               usageType:{ serviceQuality: #C,
                            sizeCategory: #M,
                            dataClass: #MASTER
                          }
}
define view entity I_CashPoolMDDescTP 
  as projection on R_CashPoolMDDescTP
{
  key CashPoolName,
  key Language,
  CashPoolDesc,
  CashPoolRefTxt,
  LocalLastChangeDateTime,
  /* Associations */
  _GeneralInfo: redirected to parent I_CashPoolTP,
  _Language
}
```
