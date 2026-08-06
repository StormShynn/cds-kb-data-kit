---
name: I_IHBACCOUNTTEXTTP
description: Ihbaccounttexttp
app_component: FIN-FSCM-PF-IHB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-PF
  - interface-view
  - transactional-processing
  - text
  - component:FIN-FSCM-PF-IHB-2CL
  - lob:Other
---
# I_IHBACCOUNTTEXTTP

**Ihbaccounttexttp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF-IHB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `IHBAccountUUID` | `IHBAccountUUID` |
| key `IHBAccountLanguage` | `IHBAccountLanguage` |
| `IHBAccountDescription` | `IHBAccountDescription` |
| `IHBAccountChangedDateTime` | `IHBAccountChangedDateTime` |
| `_IHBAccountTP` | *Association* |
| `_IHBAccount` | *Association* |
| `_Language` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'IHB Account Description Projection - TP'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.semanticKey: [ 'IHBAccountLanguage' ]
@ObjectModel.supportedCapabilities: [ #TRANSACTIONAL_PROVIDER ]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL }
@ObjectModel.representativeKey: 'IHBAccountUUID'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_IHBAccountTextTP
  as projection on R_IHBAccountTextTP as IHBAccountBPISN

{
  key IHBAccountUUID,
  @Semantics.language:true
  key IHBAccountLanguage,
      @Semantics.text:true 
      IHBAccountDescription,
      IHBAccountChangedDateTime,

      // Composition
      _IHBAccountTP : redirected to parent I_IHBAccountTP,

      _IHBAccount,
      _Language
}
```
