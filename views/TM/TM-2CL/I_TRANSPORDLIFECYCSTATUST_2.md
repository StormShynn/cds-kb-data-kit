---
name: I_TRANSPORDLIFECYCSTATUST_2
description: Transpordlifecycstatust 2
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
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
# I_TRANSPORDLIFECYCSTATUST_2

**Transpordlifecycstatust 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdLifeCycleStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_lc_status preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspOrdLifeCycleStatusDesc` |  | |  | `cast(ddtext as /scmtms/vdm_tor_lc_status_desc preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspOrdLifeCycleStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transp Order Lifecycle Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TranspOrdLifeCycleStatus'
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
define view entity I_TranspOrdLifeCycStatusT_2
  as select from dd07t
  association        to parent I_TranspOrdLifeCycleStatus_2 as _TranspOrdLifeCycleStatus on $projection.TranspOrdLifeCycleStatus = _TranspOrdLifeCycleStatus.TranspOrdLifeCycleStatus
  association [0..1] to I_Language                          as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdLifeCycleStatus'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_lc_status preserving type) as TranspOrdLifeCycleStatus,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                 as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_tor_lc_status_desc preserving type )            as TranspOrdLifeCycleStatusDesc,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                           as DomainValue,

      /* Associations */
      _TranspOrdLifeCycleStatus,
      _Language
}
where
      domname                     =  '/SCMTMS/TOR_LC_STATUS'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 2) <> '00' //Draft
  and substring(domvalue_l, 1, 2) <> '01' //New
```
