---
name: I_TRANSPRATETABLEDESCRIPTION_2
description: "Transpratetabledescription 2"
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspRateTableDescUUID` | ✓ | |  | `cast(db_key as /scmtms/transprate_text_uuid preserving type)` |  |  |
| `TransportationRateUUID` |  | |  | `cast(parent_key as /scmtms/transpratetable_uuid preserving type)` |  |  |
| `TranspRateTableDesc` |  | |  | `cast(description as /scmtms/vdm_rt_desc preserving type)` |  |  |
| `_TransportationRate` | | ✓ | | | | |

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
