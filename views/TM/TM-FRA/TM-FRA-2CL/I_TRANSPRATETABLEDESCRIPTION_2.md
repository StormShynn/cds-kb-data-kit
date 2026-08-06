---
name: I_TRANSPRATETABLEDESCRIPTION_2
description: Transpratetabledescription 2
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - text-view
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPRATETABLEDESCRIPTION_2

**Transpratetabledescription 2**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspRateTableDescUUID` | `cast(db_key as /scmtms/transprate_text_uuid preserving type)` |
| `TransportationRateUUID` | `cast(parent_key as /scmtms/transpratetable_uuid preserving type)` |
| `TranspRateTableDesc` | `cast(description as /scmtms/vdm_rt_desc preserving type)` |
| `_TransportationRate` | *Association* |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY}
@Analytics.technicalName: 'ITRTDESC'
@EndUserText:   { label:              'Transportation Rate Table Description'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   { sapObjectNodeType.name: 'TranspRateTableDesc',
                  representativeKey:  'TranspRateTableDescUUID',
                  usageType:          {serviceQuality: #A,
                                      sizeCategory:   #M,
                                      dataClass:      #TRANSACTIONAL},
                  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] }
@VDM:           { viewType:           #BASIC,
                  lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspRateTableDescription_2
  as select from /scmtms/d_tcrttx
  association to parent I_TransportationRate as _TransportationRate on $projection.TransportationRateUUID = _TransportationRate.TransportationRateUUID
{
  key cast(db_key as /scmtms/transprate_text_uuid preserving type)      as TranspRateTableDescUUID,
      cast(parent_key  as /scmtms/transpratetable_uuid preserving type) as TransportationRateUUID,
      @Semantics.text: true
      cast(description  as /scmtms/vdm_rt_desc preserving type)         as TranspRateTableDesc,

      // Associations
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _TransportationRate
}
```
