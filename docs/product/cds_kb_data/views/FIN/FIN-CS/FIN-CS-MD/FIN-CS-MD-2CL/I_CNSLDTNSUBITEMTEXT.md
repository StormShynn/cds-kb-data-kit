---
name: I_CNSLDTNSUBITEMTEXT
description: "Cnsldtnsubitemtext"
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
  - text-view
  - text
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSUBITEMTEXT

**Cnsldtnsubitemtext**

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
| `SubItemCategory` | ✓ | |  | `cast(sityp as fincs_subitemcategory preserving type )` |  |  |
| `Language` | ✓ | |  | `cast(langu as spras preserving type )` |  |  |
| `SubItem` | ✓ | |  | `cast(sitem as fincs_subitem preserving type )` |  |  |
| `SubItemText` |  | |  | `cast(txtsh as fincs_description_text_15 preserving type )` |  |  |
| `SubItemMediumText` |  | |  | `cast(txtmi as fincs_medium_text_30 preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_SubItem` | | ✓ | | | | |
| `_SubItemCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SubItem` | `I_CnsldtnSubItem` | [1..1] |
| `_SubItemCategory` | `I_CnsldtnSubItemCategory` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNSUBITEMT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
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
  dataCategory: #TEXT,
  representativeKey: 'SubItem',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET ],
  sapObjectNodeType.name: 'ConsolidationSubitemText'                        
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Subitem - Text'

define view I_CnsldtnSubItemText
  as select from tf116

  association [0..1] to I_Language               as _Language        on  $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnSubItem         as _SubItem         on  $projection.SubItemCategory = _SubItem.SubItemCategory
                                                                     and $projection.SubItem         = _SubItem.SubItem

  association [0..1] to I_CnsldtnSubItemCategory as _SubItemCategory on  $projection.SubItemCategory = _SubItemCategory.SubItemCategory
{

      @ObjectModel.foreignKey.association: '_SubItemCategory'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSubItemCategoryVH',
          element: 'SubItemCategory'
        }
      }]
  key cast(sityp as fincs_subitemcategory preserving type )     as SubItemCategory,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(langu as spras preserving type )                     as Language,

      @ObjectModel.foreignKey.association: '_SubItem'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSubItemVH',
          element: 'SubItem' },
        additionalBinding: [{ localElement: 'SubItemCategory',
                              element: 'SubItemCategory' }]
      }]
  key cast(sitem as fincs_subitem preserving type )             as SubItem,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      cast(txtsh as fincs_description_text_15 preserving type ) as SubItemText,

      @Semantics.text
      cast(txtmi as fincs_medium_text_30 preserving type )      as SubItemMediumText,


      _SubItemCategory,
      _Language,
      _SubItem
};
```
