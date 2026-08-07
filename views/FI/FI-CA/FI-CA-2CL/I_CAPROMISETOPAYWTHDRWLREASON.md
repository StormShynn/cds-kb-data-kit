---
name: I_CAPROMISETOPAYWTHDRWLREASON
description: Capromisetopaywthdrwlreason
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - header-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPROMISETOPAYWTHDRWLREASON

**Capromisetopaywthdrwlreason**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAPromiseToPayWthdrwlReason` | ✓ | |  | `pprsw` |
| `CAIntrstHndlgForWthdrwlPrms2P` |  | |  | `ppinw` |
| `CAChrgHndlgForWthdrwlPrmsToPay` |  | |  | `ppchw` |
| `CACreditWorthinessIsUpdated` |  | |  | `xupcw` |
| `CARsetRsnCanBeUsedInBillerDrct` |  | |  | `xebpp` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAPromiseToPayWthdrwlReasonT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICAP2PWTHDRWLRSN'

@EndUserText.label: 'Promise To Pay Withdrawal Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAPromiseToPayWthdrwlReason',
                sapObjectNodeType.name: 'ContrAcctgPrmsToPayWthdrwlRsn',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAPromiseToPayWthdrwlReason
  as select from tfkp2prw

  association [0..*] to I_CAPromiseToPayWthdrwlReasonT as _Text on $projection.CAPromiseToPayWthdrwlReason = _Text.CAPromiseToPayWthdrwlReason

{
      @ObjectModel.text.association: '_Text'  
  key pprsw as CAPromiseToPayWthdrwlReason,

      ppinw as CAIntrstHndlgForWthdrwlPrms2P,
      ppchw as CAChrgHndlgForWthdrwlPrmsToPay,
      xupcw as CACreditWorthinessIsUpdated,
      xebpp as CARsetRsnCanBeUsedInBillerDrct,

      _Text
}
```
