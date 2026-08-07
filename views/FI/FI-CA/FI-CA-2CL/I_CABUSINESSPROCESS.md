---
name: I_CABUSINESSPROCESS
description: Cabusinessprocess
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
# I_CABUSINESSPROCESS

**Cabusinessprocess**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CABusinessProcess` | ✓ | |  | `proid` |
| `CAApplicationArea` |  | |  | `cast( applkc as applk_kk preserving type )` |
| `_Text` | | ✓ | | |
| `_ApplArea` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CABusinessProcessText` | [0..*] |
| `_ApplArea` | `I_CAApplicationArea` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Business Lock Process'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABusinessProcess',
                sapObjectNodeType.name: 'ContrAcctgBusinessProcess',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusinessProcess
  as select from tfk080f

  association [0..*] to I_CABusinessProcessText as _Text     on $projection.CABusinessProcess = _Text.CABusinessProcess
  association [1..1] to I_CAApplicationArea     as _ApplArea on $projection.CAApplicationArea = _ApplArea.CAApplicationArea

{
      @ObjectModel.text.association: '_Text'
  key proid                                      as CABusinessProcess,

      @ObjectModel.foreignKey.association: '_ApplArea'
      cast( applkc as applk_kk preserving type ) as CAApplicationArea,

      _Text,
      _ApplArea
}
```
