---
name: I_CAPAYMENTEXCEPTIONREASON
description: Capaymentexceptionreason
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
  - payment
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPAYMENTEXCEPTIONREASON

**Capaymentexceptionreason**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAPaymentExceptionReason` | ✓ | |  | `poken` |
| `CAErrorLevelInPaymentRun` |  | |  | `errorlevel` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAPaymentExceptionReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Payment Exception Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAPaymentExceptionReason',
                sapObjectNodeType.name: 'ContrAcctgPaymentExcptnReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAPaymentExceptionReason
  as select from tfkpk

  association [0..*] to I_CAPaymentExceptionReasonText as _Text on $projection.CAPaymentExceptionReason = _Text.CAPaymentExceptionReason
{
      @ObjectModel.text.association: '_Text'
  key poken      as CAPaymentExceptionReason,

      errorlevel as CAErrorLevelInPaymentRun,

      _Text
}
```
