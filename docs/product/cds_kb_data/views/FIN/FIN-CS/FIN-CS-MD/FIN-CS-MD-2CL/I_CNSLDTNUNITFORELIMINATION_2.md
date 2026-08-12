---
name: I_CNSLDTNUNITFORELIMINATION_2
description: "Cnsldtnunitforelimination 2"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CNSLDTNUNITFORELIMINATION_2

**Cnsldtnunitforelimination 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationUnit` | ✓ | |  | `cast(ConsolidationUnit as fincs_elim_unit preserving type )` |  |  |
| `_UnitHierNode` | | ✓ | | | | |
| `_TmprlNde` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UnitHierNode` | `I_CnsldtnUnitForElimHierNode_2` | [0..*] |
| `_TmprlNde` | `I_CnsldtnElimUnitTNHierNode` | [0..*] |
| `_Text` | `I_CnsldtnUnitForEliminationT_2` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICCUNITFORELIM2'
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  },
  representativeKey: 'ConsolidationUnit',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnUnitForElimination'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Unit for Elimination'
define view entity I_CnsldtnUnitForElimination_2
  as select from P_CnsldtnUnitForElimination_2

  association [0..*] to I_CnsldtnUnitForElimHierNode_2 as _UnitHierNode on $projection.ConsolidationUnit = _UnitHierNode.ConsolidationUnit

  association [0..*] to I_CnsldtnElimUnitTNHierNode    as _TmprlNde     on $projection.ConsolidationUnit = _TmprlNde.ConsolidationUnit

  association [0..*] to I_CnsldtnUnitForEliminationT_2 as _Text         on $projection.ConsolidationUnit = _Text.ConsolidationUnit

{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_UnitHierNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnUnitForEliminationVH',
          element: 'ConsolidationUnit'
        }
      }]
  key cast(ConsolidationUnit as fincs_elim_unit preserving type ) as ConsolidationUnit,


      /* associations */
      _UnitHierNode,
      _Text,
      @ObjectModel.association.toHierarchy: true
      _TmprlNde
}
```
