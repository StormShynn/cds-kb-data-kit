---
name: I_CNSLDTNGHGCATEGORY
description: "Cnsldtnghgcategory"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CNSLDTNGHGCATEGORY

**Cnsldtnghgcategory**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GHGCategory` | ✓ | |  | `cast( _Source.GHGCategory as fincs_ghgcategory preserving type )` |  |  |
| `GHGScope` |  | |  | `cast( _Source.GHGScope as fincs_ghgscope preserving type )` |  |  |
| `_Text` | | ✓ | | | | |
| `_GHGScope` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnGHGCategoryT` | [0..*] |
| `_GHGScope` | `I_CnsldtnGHGScope` | [0..1] |

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
    sizeCategory: #S
  },
  representativeKey: 'GHGCategory',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnGreenhouseGasCategory'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Greenhouse Gas Category'

define view entity I_CnsldtnGHGCategory
  as select distinct from I_GHGCategory           as _Source

  // prevent exposure of result set in case the assigned business switch is disabled
    inner join            I_CnsldtnBusinessSwitch as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_GHG_FIELDS'
                                                                     and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'


  association [0..*] to I_CnsldtnGHGCategoryT as _Text     on $projection.GHGCategory = _Text.GHGCategory

  association [0..1] to I_CnsldtnGHGScope     as _GHGScope on $projection.GHGScope = _GHGScope.GHGScope

{

      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGHGCategoryVH',
          element: 'GHGCategory'
        }
      }]
  key cast( _Source.GHGCategory as fincs_ghgcategory preserving type ) as GHGCategory,

      @ObjectModel:{
        foreignKey.association: '_GHGScope',
        sapObjectNodeTypeReference: 'CnsldtnGreenhouseGasScope'
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGHGScopeVH',
          element: 'GHGScope'
        }
      }]
      cast( _Source.GHGScope as fincs_ghgscope preserving type )       as GHGScope,


      /* associations */
      _Text,
      _GHGScope
}
```
