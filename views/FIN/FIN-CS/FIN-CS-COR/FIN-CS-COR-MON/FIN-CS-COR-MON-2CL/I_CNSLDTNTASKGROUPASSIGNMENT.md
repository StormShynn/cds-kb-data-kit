---
name: I_CNSLDTNTASKGROUPASSIGNMENT
description: Cnsldtntaskgroupassignment
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
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# I_CNSLDTNTASKGROUPASSIGNMENT

**Cnsldtntaskgroupassignment**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationVersion` | ✓ | |  | `cast( rvers as fincs_consolidationversion preserving type )` |  |  |
| `CnsldtnTskGrpAssgmtFrmFsclYear` | ✓ | |  | `cast( ryear as fincs_taskgroup_fromyear preserving type )` |  |  |
| `CnsldtnTskGrpAssgmtFrmFsclPerd` | ✓ | |  | `cast( perid as fincs_taskgroup_fromperiod preserving type )` |  |  |
| `ConsolidationPeriodCategory` | ✓ | |  | `cast( pertp as fincs_periodcategory preserving type )` |  |  |
| `CnsldtnTaskGroupDataMonitor` |  | |  | `cast( cacgr1 as fincs_taskgroup_datamon preserving type )` |  |  |
| `CnsldtnTskGrpCnsldtnMonitor` |  | |  | `cast( cacgr2 as fincs_taskgroup_consmon preserving type )` |  |  |
| `_CnsldtnPeriodCategory` | | ✓ | | | | |
| `_CnsldtnVersion` | | ✓ | | | | |
| `_CnsldtnTaskGroupDataMonitor` | | ✓ | | | | |
| `_CnsldtnTskGrpCnsldtnMonitor` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnPeriodCategory` | `I_CnsldtnPeriodCategory` | [1..1] |
| `_CnsldtnVersion` | `I_CnsldtnVersion` | [1..1] |
| `_CnsldtnTaskGroupDataMonitor` | `I_CnsldtnTaskGroup` | [0..1] |
| `_CnsldtnTskGrpCnsldtnMonitor` | `I_CnsldtnTaskGroup` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSTSKGRPASGN',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_CnsldtnPeriodCategory' ]
}
@Metadata:{ 
  ignorePropagatedAnnotations:true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S},
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE 
                          ],
  sapObjectNodeType.name: 'CnsldtnTaskGroupAssignment'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Task Group Assignment'
define view I_CnsldtnTaskGroupAssignment as 
  select from P_CnsldtnTaskGroupAssignment
  
    association [1..1] to I_CnsldtnPeriodCategory  as _CnsldtnPeriodCategory        on $projection.ConsolidationPeriodCategory = _CnsldtnPeriodCategory.ConsolidationPeriodCategory
    association [1..1] to I_CnsldtnVersion         as _CnsldtnVersion               on $projection.ConsolidationVersion = _CnsldtnVersion.ConsolidationVersion
    association [0..1] to I_CnsldtnTaskGroup       as _CnsldtnTaskGroupDataMonitor  on $projection.CnsldtnTaskGroupDataMonitor = _CnsldtnTaskGroupDataMonitor.ConsolidationTaskGroup
    association [0..1] to I_CnsldtnTaskGroup       as _CnsldtnTskGrpCnsldtnMonitor  on $projection.CnsldtnTskGrpCnsldtnMonitor = _CnsldtnTskGrpCnsldtnMonitor.ConsolidationTaskGroup
{
      @ObjectModel.foreignKey.association: '_CnsldtnVersion'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationVersion'
  key cast( rvers as fincs_consolidationversion preserving type )         as ConsolidationVersion,
      
      @Semantics.fiscal.year: true
  key cast( ryear as fincs_taskgroup_fromyear preserving type )           as CnsldtnTskGrpAssgmtFrmFsclYear,
  
      @Semantics.fiscal.period: true
  key cast( perid as fincs_taskgroup_fromperiod preserving type )         as CnsldtnTskGrpAssgmtFrmFsclPerd,
  
      @ObjectModel.foreignKey.association: '_CnsldtnPeriodCategory'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationPeriodCategory'
  key cast( pertp as fincs_periodcategory preserving type )               as ConsolidationPeriodCategory,
      
      @ObjectModel.foreignKey.association: '_CnsldtnTaskGroupDataMonitor'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationTaskGroup'
      cast( cacgr1 as fincs_taskgroup_datamon preserving type )           as CnsldtnTaskGroupDataMonitor,
      
      @ObjectModel.foreignKey.association: '_CnsldtnTskGrpCnsldtnMonitor'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationTaskGroup'
      cast( cacgr2 as fincs_taskgroup_consmon preserving type )           as CnsldtnTskGrpCnsldtnMonitor,
      
      _CnsldtnVersion,
      _CnsldtnPeriodCategory,
      _CnsldtnTaskGroupDataMonitor,
      _CnsldtnTskGrpCnsldtnMonitor
}
```
