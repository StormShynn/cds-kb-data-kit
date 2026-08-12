---
name: I_PHYSINVTRYDOCHDRFISCALYEARVH
description: "Physinvtrydochdrfiscalyearvh"
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - value-help
  - header-level
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYDOCHDRFISCALYEARVH

**Physinvtrydochdrfiscalyearvh**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYear` | ✓ | |  |  |  |  |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Physical Inventory Document Hdr FYear'
@VDM.viewType: #BASIC
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #D,
                             dataClass: #TRANSACTIONAL
                           },
                dataCategory: #VALUE_HELP,
                representativeKey: 'FiscalYear',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER ]
              }
@Analytics.technicalName: 'IPIDOCHDRYVH'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

define view entity I_PhysInvtryDocHdrFiscalYearVH
  as select distinct from I_PhysInvtryDocHeader
{
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.9
  @Search.ranking: #HIGH
  key FiscalYear
}
```
