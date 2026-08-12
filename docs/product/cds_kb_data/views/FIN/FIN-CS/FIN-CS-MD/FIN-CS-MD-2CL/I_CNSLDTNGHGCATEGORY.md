---
name: I_CNSLDTNGHGCATEGORY
description: "Cnsldtnghgcategory"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
