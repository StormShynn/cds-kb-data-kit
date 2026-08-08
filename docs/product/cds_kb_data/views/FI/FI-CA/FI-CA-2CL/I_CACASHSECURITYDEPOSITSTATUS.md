---
name: I_CACASHSECURITYDEPOSITSTATUS
description: "Cacashsecuritydepositstatus"
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
  - status
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACASHSECURITYDEPOSITSTATUS

**Cacashsecuritydepositstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CACashSecurityDepositStatus` | ✓ | |  | `cast( left( domvalue_l,2 ) as c_status_kk )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CACashSecurityDepositStsText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICACASHSDSTS'

@EndUserText.label: 'Cash Security Deposit Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACashSecurityDepositStatus',
                sapObjectNodeType.name: 'ContrAcctgCashScrtyDepStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACashSecurityDepositStatus
  as select from dd07l

  association [0..*] to I_CACashSecurityDepositStsText as _Text on $projection.CACashSecurityDepositStatus = _Text.CACashSecurityDepositStatus

{
      @ObjectModel.text.association: '_Text'
  key cast( left( domvalue_l,2 ) as c_status_kk ) as CACashSecurityDepositStatus,

      _Text
}
where
      dd07l.domname  = 'C_STATUS_KK'
  and dd07l.as4local = 'A'
```
