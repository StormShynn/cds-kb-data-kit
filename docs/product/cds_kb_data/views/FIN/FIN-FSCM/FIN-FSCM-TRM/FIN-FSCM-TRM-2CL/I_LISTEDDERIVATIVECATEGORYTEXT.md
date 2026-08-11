---
name: I_LISTEDDERIVATIVECATEGORYTEXT
description: "Listed Derivative Category - Text"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVECATEGORYTEXT')/$value
semantic_en: "Listed Derivative Category - Text"
semantic_vi: "Listed Derivative Category - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "listed"
  - "derivative"
  - "category"
  - "text"
  - "language"
  - "name"
tags:
  - FIN
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_LISTEDDERIVATIVECATEGORYTEXT

**Listed Derivative Category - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVECATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ListedDerivativeCategory` | ✓ | |  | `cast( dd07t.domvalue_l as ti_softyp )` | `NUMC(2)` | Options/futures category |
| `ListedDerivativeCategoryName` |  | |  | `cast(dd07t.ddtext as ftr_gen_listed_deriv_cat_name preserving type)` | `CHAR(60)` | Name of Option/Future Category |
| `_ListedDerivativeCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ListedDerivativeCategory` | `I_ListedDerivativeCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVECATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVECATEGORYTEXT')/$value)*

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true  
@AbapCatalog.preserveKey: true 
@AbapCatalog.sqlViewName: 'ILSTDDERIVCATTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Listed Derivative Category - Text'
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ListedDerivativeCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory:  #L
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_ListedDerivativeCategoryText
  as select from dd07t

  association [0..1] to I_ListedDerivativeCategory as _ListedDerivativeCategory on $projection.ListedDerivativeCategory = _ListedDerivativeCategory.ListedDerivativeCategory
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{

      @Semantics.language: true
  key ddlanguage                                          as Language,
      @ObjectModel.text.element: 'ListedDerivativeCategoryName'
      @ObjectModel.foreignKey.association: '_ListedDerivativeCategory'
  key cast( dd07t.domvalue_l as ti_softyp )               as ListedDerivativeCategory,
      @Semantics.text: true
      cast(dd07t.ddtext as ftr_gen_listed_deriv_cat_name preserving type) as ListedDerivativeCategoryName,
      _ListedDerivativeCategory,
      _Language

}
where
      dd07t.domname  = 'T_SOFTYP'
  and dd07t.as4local = 'A'
```
