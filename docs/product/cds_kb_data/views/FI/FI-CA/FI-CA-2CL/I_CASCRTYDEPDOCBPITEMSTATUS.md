---
name: I_CASCRTYDEPDOCBPITEMSTATUS
description: "Cascrtydepdocbpitemstatus"
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
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASCRTYDEPDOCBPITEMSTATUS

**Cascrtydepdocbpitemstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAScrtyDepDocBPItemStatus` | ✓ | |  | `cast( left( domvalue_l,1) as secdep_doci_status_kk )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAScrtyDepDocBPItemStatusT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Security Deposit Document BP Item Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAScrtyDepDocBPItemStatus',
                sapObjectNodeType.name: 'ContrAcctgScrtyDepDocBPItmSts',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAScrtyDepDocBPItemStatus
  as select from dd07l

  association [0..*] to I_CAScrtyDepDocBPItemStatusT as _Text on $projection.CAScrtyDepDocBPItemStatus = _Text.CAScrtyDepDocBPItemStatus

{
      @ObjectModel.text.association: '_Text'
  key cast( left( domvalue_l,1) as secdep_doci_status_kk ) as CAScrtyDepDocBPItemStatus,

      _Text
}
where
      dd07l.domname  = 'SECDEP_DOCI_STATUS_KK'
  and dd07l.as4local = 'A'
```
