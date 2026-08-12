---
name: I_PURCHASINGOBJECTCATEGORYTEXT
description: "Purchasingobjectcategorytext"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
