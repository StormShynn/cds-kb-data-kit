---
name: I_SCRTYCLASSSTOCKCATEGORYTEXT
description: "Scrtyclassstockcategorytext"
app_component: FIN-FSCM-TRM-2CL
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
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SCRTYCLASSSTOCKCATEGORYTEXT

**Scrtyclassstockcategorytext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SecurityClassStockCategory` | ✓ | |  | `domvalue_l` |  |  |
| `SecurityClassStockCategoryName` |  | |  | `cast(dd07t.ddtext as ftr_gen_stock_category_name)` |  |  |
| `_SecurityClassStockCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecurityClassStockCategory` | `I_SecurityClassStockCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED 
@AbapCatalog.compiler.compareFilter: true  
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'ISCRTYCLSTCATTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Security Class Stock Category - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SecurityClassStockCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC

define view I_ScrtyClassStockCategoryText
  as select from dd07t

  association [0..1] to I_SecurityClassStockCategory as _SecurityClassStockCategory on $projection.SecurityClassStockCategory = _SecurityClassStockCategory.SecurityClassStockCategory
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{

      @Semantics.language: true
  key ddlanguage                                        as Language,
      @ObjectModel.text.element: 'SecurityClassStockCategoryName'
      @ObjectModel.foreignKey.association: '_SecurityClassStockCategory'
  key dd07t.domvalue_l                                  as SecurityClassStockCategory,
      @Semantics.text: true
      cast(dd07t.ddtext as ftr_gen_stock_category_name) as SecurityClassStockCategoryName,
      _SecurityClassStockCategory,
      _Language

}
where
      dd07t.domname  = 'SAKAR'
  and dd07t.as4local = 'A'
```
