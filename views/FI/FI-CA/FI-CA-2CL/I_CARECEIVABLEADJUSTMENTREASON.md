---
name: I_CARECEIVABLEADJUSTMENTREASON
description: Careceivableadjustmentreason
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
# I_CARECEIVABLEADJUSTMENTREASON

**Careceivableadjustmentreason**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAReceivableAdjustmentReason` | ✓ | |  | `cast( grund as grund_kk preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAReceivableAdjReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICARECBRSN'

@EndUserText.label: 'Receivable Adjustment Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAReceivableAdjustmentReason',
                sapObjectNodeType.name: 'ContrAcctgRblAdjustmentReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAReceivableAdjustmentReason
  as select from tfkzgr

  association [0..*] to I_CAReceivableAdjReasonText as _Text on $projection.CAReceivableAdjustmentReason = _Text.CAReceivableAdjustmentReason

{
      @ObjectModel.text.association: '_Text'
  key cast( grund as grund_kk preserving type ) as CAReceivableAdjustmentReason,

      _Text
}
```
