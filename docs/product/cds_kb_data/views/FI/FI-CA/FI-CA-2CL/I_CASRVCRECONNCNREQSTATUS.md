---
name: I_CASRVCRECONNCNREQSTATUS
description: "Casrvcreconncnreqstatus"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CASRVCRECONNCNREQSTATUS

**Casrvcreconncnreqstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CASrvcReconncnReqStatus` | ✓ | |  | `cast( left( domvalue_l, 1 ) as recreq_stat_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CASrvcReconncnReqStatusText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Reconnection Request Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CASrvcReconncnReqStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CASrvcReconncnReqStatus
  as select from dd07l

  association [1..*] to I_CASrvcReconncnReqStatusText as _Text on $projection.CASrvcReconncnReqStatus = _Text.CASrvcReconncnReqStatus

{
      @ObjectModel.text.association: '_Text'
  key cast( left( domvalue_l, 1 ) as recreq_stat_kk preserving type ) as CASrvcReconncnReqStatus,

      _Text
}
where
      domname  = 'RECREQ_STAT_KK'
  and as4local = 'A'
```
