---
name: I_LISTEDDERIVATIVEQTANTEXT
description: "Listed Derivative Quotation - Text"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVEQTANTEXT')/$value
semantic_en: "Listed Derivative Quotation - Text"
semantic_vi: "Listed Derivative Quotation - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "listed"
  - "derivative"
  - "quotation"
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
  - quotation
---
# I_LISTEDDERIVATIVEQTANTEXT

**Listed Derivative Quotation - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVEQTANTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ListedDerivativeQuotation` | ✓ | |  | `cast(dd07t.domvalue_l as ti_nottype)` | `CHAR(1)` | Quotation type option/future |
| `ListedDerivativeQuotationName` |  | |  | `cast(dd07t.ddtext as ftr_gen_listed_deriv_qtan_name preserving type)` | `CHAR(60)` | Name of Listed Derivative Quotation |
| `_ListedDerivativeQuotation` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ListedDerivativeQuotation` | `I_ListedDerivativeQuotation` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVEQTANTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LISTEDDERIVATIVEQTANTEXT')/$value)*

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ILSTDDERIQTANTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Listed Derivative Quotation - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ListedDerivativeQuotation'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory:  #L
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_ListedDerivativeQtanText
  as select from dd07t

  association [0..1] to I_ListedDerivativeQuotation as _ListedDerivativeQuotation on $projection.ListedDerivativeQuotation = _ListedDerivativeQuotation.ListedDerivativeQuotation
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{

      @Semantics.language: true
  key ddlanguage                                          as Language,
      @ObjectModel.text.element: 'ListedDerivativeQuotationName'
      @ObjectModel.foreignKey.association: '_ListedDerivativeQuotation'
  key cast(dd07t.domvalue_l as ti_nottype) as ListedDerivativeQuotation,
      @Semantics.text: true
      cast(dd07t.ddtext as ftr_gen_listed_deriv_qtan_name preserving type) as ListedDerivativeQuotationName,
      _ListedDerivativeQuotation,
      _Language

}
where
      dd07t.domname  = 'T_NOTTYPE'
  and dd07t.as4local = 'A'
```
