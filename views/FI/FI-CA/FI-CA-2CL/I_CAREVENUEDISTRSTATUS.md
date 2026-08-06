---
name: I_CAREVENUEDISTRSTATUS
description: Carevenuedistrstatus
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
# I_CAREVENUEDISTRSTATUS

**Carevenuedistrstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CARevenueDistributionStatus` | `cast( left( dd07l.domvalue_l, 1 ) as rdstat_kk preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CARevenueDistrStatusText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Revenue Distribution Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CARevenueDistributionStatus',
                sapObjectNodeType.name: 'ContrAcctgRevnDistrStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CARevenueDistrStatus
  as select from dd07l

  association [1..*] to I_CARevenueDistrStatusText as _Text on $projection.CARevenueDistributionStatus = _Text.CARevenueDistributionStatus

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as rdstat_kk preserving type ) as CARevenueDistributionStatus,

      _Text
}
where
      domname  = 'RDSTAT_KK'
  and as4local = 'A'
```
