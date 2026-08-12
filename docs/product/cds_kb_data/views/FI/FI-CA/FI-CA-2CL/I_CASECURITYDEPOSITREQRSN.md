---
name: I_CASECURITYDEPOSITREQRSN
description: "Casecuritydepositreqrsn"
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
# I_CASECURITYDEPOSITREQRSN

**Casecuritydepositreqrsn**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CASecurityDepositRequestReason` | ✓ | |  | `reason` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CASecurityDepositReqRsnText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Security Deposit Request Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CASecurityDepositRequestReason',
                sapObjectNodeType.name: 'ContrAcctgScrtyDepositReqRsn',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CASecurityDepositReqRsn
  as select from tfk_sec_reason

  association [0..*] to I_CASecurityDepositReqRsnText as _Text on $projection.CASecurityDepositRequestReason = _Text.CASecurityDepositRequestReason

{
      @ObjectModel.text.association: '_Text'
  key reason as CASecurityDepositRequestReason,

      _Text
}
```
