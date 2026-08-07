---
name: I_TRANSPORDEXECSTATUS_2
description: "Transpordexecstatus 2"
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
# I_TRANSPORDEXECSTATUS_2

**Transpordexecstatus 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderExecSts` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_execution_status preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transportation Order Execution Status'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'TranspOrderExecutionStatus'
@ObjectModel.representativeKey: 'TransportationOrderExecSts'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view entity I_TranspOrdExecStatus_2
  as select from dd07l
  composition [0..*] of I_TranspOrdExecStatusText_2 as _Text
{

      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_execution_status preserving type) as TransportationOrderExecSts,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      dd07l.domvalue_l                                                                  as DomainValue,

      /* Associations */
      _Text
}
where
      domname                     =  '/SCMTMS/TOR_EXECUTION_STATUS'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 2) <> '01' //Not Relevant
  and substring(domvalue_l, 1, 2) <> '05' //Interrupted
  and substring(domvalue_l, 1, 2) <> '10' //Capacity Planning Finished
```
