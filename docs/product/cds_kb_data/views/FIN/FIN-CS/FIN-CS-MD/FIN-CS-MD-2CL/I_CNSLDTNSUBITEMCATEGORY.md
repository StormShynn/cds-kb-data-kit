---
name: I_CNSLDTNSUBITEMCATEGORY
description: "Cnsldtnsubitemcategory"
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSUBITEMCATEGORY

**Cnsldtnsubitemcategory**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubItemCategory` | ✓ | |  | `cast(sityp as fincs_subitemcategory preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnSubItemCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSSUBITEMCAT',
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
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
    },
  resultSet.sizeCategory: #XS,
  representativeKey: 'SubItemCategory',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationSubitemCategory'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Subitem Category'

define view I_CnsldtnSubItemCategory
  as select from tf110

  association [0..*] to I_CnsldtnSubItemCategoryText as _Text on $projection.SubItemCategory = _Text.SubItemCategory
{

      @ObjectModel.text.association: '_Text'
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSubItemCategoryVH',
          element: 'SubItemCategory'
        }
      }]
  key cast(sityp as fincs_subitemcategory preserving type ) as SubItemCategory,

      _Text
};
```
