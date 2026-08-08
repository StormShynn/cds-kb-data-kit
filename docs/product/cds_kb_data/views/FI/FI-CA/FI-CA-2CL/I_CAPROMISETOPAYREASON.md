---
name: I_CAPROMISETOPAYREASON
description: "Capromisetopayreason"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPROMISETOPAYREASON

**Capromisetopayreason**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAPromiseToPayReason` | ✓ | |  | `pprsc` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAPromiseToPayReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Promise To Pay Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAPromiseToPayReason',
                sapObjectNodeType.name: 'ContrAcctgPromiseToPayReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAPromiseToPayReason
  as select from tfkp2prc

  association [0..*] to I_CAPromiseToPayReasonText as _Text on $projection.CAPromiseToPayReason = _Text.CAPromiseToPayReason

{
      @ObjectModel.text.association: '_Text'  
  key pprsc as CAPromiseToPayReason,

      _Text
}
```
