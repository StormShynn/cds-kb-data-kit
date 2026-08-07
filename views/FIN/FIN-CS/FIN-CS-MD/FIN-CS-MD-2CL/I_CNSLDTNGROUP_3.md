---
name: I_CNSLDTNGROUP_3
description: Cnsldtngroup 3
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGROUP_3

**Cnsldtngroup 3**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationGroup` | ✓ | |  | `cast( _tf180.congr as fincs_md_congr preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnGroupT_2` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ICCGROUP3',
  compiler.compareFilter: true
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName:#LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true,
  allowExtensions: true
  }
@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'ConsolidationGroup',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'ConsolidationGroup'
}
@Search.searchable: true
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Group'

define view I_CnsldtnGroup_3
  as select from tf180                  as _tf180

    inner join   I_CnsldtnGlobalSetting as _GlobalSetting on _GlobalSetting.SequenceNumber = '1'

  //association [0..*] to I_CnsldtnGroupTNHierNode      as _TmprlNde on $projection.ConsolidationGroup = _TmprlNde.ConsolidationGroup
  //association [0..*] to I_CnsldtnGroupHierarchyNode_2 as _HierNde  on $projection.ConsolidationGroup = _HierNde.ConsolidationGroup

  association [0..*] to I_CnsldtnGroupT_2 as _Text on $projection.ConsolidationGroup = _Text.ConsolidationGroup
{

      @ObjectModel.text.association: '_Text'
      @Search:{ defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key cast( _tf180.congr as fincs_md_congr preserving type ) as ConsolidationGroup,


      _Text

      //    @ObjectModel.association.toHierarchy: true
      //    _TmprlNde,
      //    @ObjectModel.association.toHierarchy: true
      //    _HierNde

}
where
          _tf180.dimen                                  = 'Y1'
  and(
          _tf180.scope                                  = 'M'
    or(
          _GlobalSetting.CnsldtnFrmYrForNewGrpRptgLogic is not initial
      and _tf180.scope                                  = 'X'
    )
    or(
          _GlobalSetting.CnsldtnFrmYrForNewGrpRptgLogic is initial
      and _tf180.scope                                  is initial
    )
  );
```
