---
name: I_CADUNNINGEXCEPTIONREASON
description: "Cadunningexceptionreason"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADUNNINGEXCEPTIONREASON

**Cadunningexceptionreason**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADunningExceptionReason` | ✓ | |  | `poken` |  |  |
| `CAErrorLevelInDunningRun` |  | |  | `errorlevel` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADunningExceptionReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Dunning Exception Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADunningExceptionReason',
                sapObjectNodeType.name: 'ContrAcctgDunningExcptnReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADunningExceptionReason
  as select from tfkpkdun

  association [0..*] to I_CADunningExceptionReasonText as _Text on $projection.CADunningExceptionReason = _Text.CADunningExceptionReason

{
      @ObjectModel.text.association: '_Text'
  key poken      as CADunningExceptionReason,

      errorlevel as CAErrorLevelInDunningRun,

      _Text
}
```
