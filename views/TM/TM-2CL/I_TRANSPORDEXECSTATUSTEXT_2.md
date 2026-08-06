---
name: I_TRANSPORDEXECSTATUSTEXT_2
description: Transpordexecstatustext 2
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - text
  - status
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDEXECSTATUSTEXT_2

**Transpordexecstatustext 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationOrderExecSts` | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_execution_status preserving type)` |
| key `Language` | `ddlanguage` |
| `TransportationOrderExecStsDesc` | `cast(ddtext as /scmtms/vdm_tor_lc_status_desc preserving type )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `_Language` | *Association* |
| `_TransportationOrderExecSts` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transp Order Execution Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TransportationOrderExecSts'
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
define view entity I_TranspOrdExecStatusText_2
  as select from dd07t
  association        to parent I_TranspOrdExecStatus_2 as _TransportationOrderExecSts on $projection.TransportationOrderExecSts = _TransportationOrderExecSts.TransportationOrderExecSts
  association [0..1] to I_Language                     as _Language                   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TransportationOrderExecSts'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_execution_status preserving type) as TransportationOrderExecSts,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                        as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_tor_lc_status_desc preserving type )                   as TransportationOrderExecStsDesc,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                  as DomainValue,

      /* Associations */
      _TransportationOrderExecSts,
      _Language
}
where
      domname                     =  '/SCMTMS/TOR_EXECUTION_STATUS'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 2) <> '01' //Not Relevant
  and substring(domvalue_l, 1, 2) <> '05' //Interrupted
  and substring(domvalue_l, 1, 2) <> '10' //Capacity Planning Finished
```
