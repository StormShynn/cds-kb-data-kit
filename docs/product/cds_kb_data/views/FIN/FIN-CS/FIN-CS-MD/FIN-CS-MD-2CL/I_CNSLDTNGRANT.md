---
name: I_CNSLDTNGRANT
description: "Cnsldtngrant"
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
# I_CNSLDTNGRANT

**Cnsldtngrant**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  | `cast( _Source.GrantID as fincs_grant preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( _Source.CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |  |  |
| `CreationDateTime` |  | |  | `cast( min ( _Source.CreationDateTime ) as fincs_creationdatetime preserving type )` |  |  |
| `_Text` | | ✓ | | | | |
| `_HierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnGrantT` | [0..*] |
| `_HierarchyNode` | `I_CnsldtnGrantHierarchyNode` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
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
  representativeKey: 'GrantID',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnGrant'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Consolidation Grant'

define view entity I_CnsldtnGrant
  as select distinct from P_CnsldtnGrant          as _Source

  // prevent exposure of result set in case the assigned business switch is disabled
    inner join            I_CnsldtnBusinessSwitch as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_PS_FIELDS'
                                                                     and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'


  association [0..*] to I_CnsldtnGrantT             as _Text          on $projection.GrantID = _Text.GrantID

  association [0..*] to I_CnsldtnGrantHierarchyNode as _HierarchyNode on $projection.GrantID = _HierarchyNode.GrantID

{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_HierarchyNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGrantVH',
          element: 'GrantID'
        }
      }]
  key cast( _Source.GrantID as fincs_grant preserving type )                                                as GrantID,

      cast( max ( _Source.CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,

      @Semantics.systemDateTime.createdAt
      cast( min ( _Source.CreationDateTime ) as fincs_creationdatetime preserving type )                    as CreationDateTime,

      /* associations */
      _Text,
      _HierarchyNode
}
where
  _Source.GrantID is not initial //required to avoid access to corrupt database entries
group by
  _Source.GrantID
```
