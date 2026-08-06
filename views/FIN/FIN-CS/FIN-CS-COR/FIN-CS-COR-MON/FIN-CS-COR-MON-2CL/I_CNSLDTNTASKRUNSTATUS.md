---
name: I_CNSLDTNTASKRUNSTATUS
description: Cnsldtntaskrunstatus
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - status
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# I_CNSLDTNTASKRUNSTATUS

**Cnsldtntaskrunstatus**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationTaskRunStatus` | `cast( left( Domain.domvalue_l,2 ) as fincs_taskrun_status preserving type )` |
| `DomainValue` | `Domain.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnTaskRunStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSTSKRUNSTS',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory: #S},
  resultSet.sizeCategory: #XS,
  representativeKey: 'ConsolidationTaskRunStatus',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'ConsolidationTaskRunStatus'                          
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Task Run Status'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnTaskRunStatus as 
  select from dd07l as Domain

    association [0..*] to I_CnsldtnTaskRunStatusText as _Text on $projection.ConsolidationTaskRunStatus = _Text.ConsolidationTaskRunStatus
{
      @ObjectModel.text.association: '_Text'
  key cast( left( Domain.domvalue_l,2 ) as fincs_taskrun_status preserving type )     as ConsolidationTaskRunStatus,
      
      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      Domain.domvalue_l                                                               as DomainValue,
      
      _Text
}
 where 
      Domain.domname = 'FC_STATUS'
  and Domain.as4local = 'A';
```
