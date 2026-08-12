---
name: I_PURCHASINGOBJECTCATEGORYTEXT
description: "Purchasingobjectcategorytext"
app_component: MM
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
  - MM
  - interface-view
  - text-view
  - text
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURCHASINGOBJECTCATEGORYTEXT

**Purchasingobjectcategorytext**

| Property | Value |
|---|---|
| App Component | `MM` |
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
| `PurchasingDocumentCategory` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as ebstyp )` |  |  |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `PurchasingDocumentCategoryName` |  | |  | `cast( ddtext as mmpur_object_category_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_PurchasingObjectCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PurchasingObjectCategory` | `I_PurchasingObjectCategory` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPUROBJCATT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true 
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@EndUserText.label: 'Purchasing Object Category - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
@ObjectModel.representativeKey: 'PurchasingDocumentCategory'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE] 
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API 
@VDM.viewType: #BASIC
define view I_PurchasingObjectCategoryText
  as select from dd07t
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
  association [1..1] to I_PurchasingObjectCategory as _PurchasingObjectCategory on $projection.PurchasingDocumentCategory = _PurchasingObjectCategory.PurchasingDocumentCategory
{
      @ObjectModel.foreignKey.association: '_PurchasingObjectCategory' 
  key cast ( substring( domvalue_l, 1, 1 ) as ebstyp )             as PurchasingDocumentCategory,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language' 
  key cast( ddlanguage as spras preserving type )                  as Language, 
      @Search.defaultSearchElement: true 
      @Search.fuzzinessThreshold: 0.8 
      @Search.ranking: #HIGH
      @Semantics.text: true 
      cast( ddtext as mmpur_object_category_name preserving type ) as PurchasingDocumentCategoryName, 
      //association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                      #TO_COMPOSITION_ROOT] 
      _PurchasingObjectCategory,
      _Language
}
where
      domname  = 'BSTYP'
  and as4local = 'A'
  and as4vers  = '0000'
```
