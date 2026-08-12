---
name: I_TRANSPORDPLANNINGSTATUST_2
description: "Transpordplanningstatust 2"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - status
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDPLANNINGSTATUST_2

**Transpordplanningstatust 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdPlanningStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_tor_pln_status preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspOrdPlanningStatusDesc` |  | |  | `cast(ddtext as /scmtms/vdm_tor_pln_stat_desc preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspOrdPlanningStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transp Order Planning Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TranspOrdPlanningStatus'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_TranspOrdPlanningStatusT_2
  as select from dd07t
  association        to parent I_TranspOrdPlanningStatus_2 as _TranspOrdPlanningStatus on $projection.TranspOrdPlanningStatus = _TranspOrdPlanningStatus.TranspOrdPlanningStatus
  association [0..1] to I_Language                         as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdPlanningStatus'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_tor_pln_status preserving type) as TranspOrdPlanningStatus,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                      as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_tor_pln_stat_desc preserving type)                   as TranspOrdPlanningStatusDesc,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                as DomainValue,

      /* Associations */
      _TranspOrdPlanningStatus,
      _Language
}
where
      domname                     =  '/SCMTMS/TOR_PLN_STATUS'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 2) <> '11' //Not Published
```
