---
name: I_ASSORTMENTLISTTYPET
description: "Assortment List Type - Text"
app_component: LO-RFM-MD-LST-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTLISTTYPET')/$value
semantic_en: "Assortment List Type - Text"
semantic_vi: "Assortment List Type - Text — CDS view giao diện dựa trên twbbt."
keywords:
  - "assortment"
  - "list"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-MD-LST-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-LST
  - LO-RFM-MD-LST-2CL
  - lob:logistics general
---
# I_ASSORTMENTLISTTYPET

**Assortment List Type - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-LST-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTLISTTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `AssortmentListType` | ✓ | |  | `cast(bbtyp as assortmentlisttype preserving type )` | `CHAR(1)` | Assortment List Type |
| `AssortmentListTypeName` |  | |  | `bbtext` | `CHAR(20)` | Description |
| `_Language` | | ✓ | | | | |
| `_AssortmentListType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTLISTTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTLISTTYPET')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IASSORTLISTTYPET'
@EndUserText.label: 'Assortment List Type - Text'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: {
    supportedCapabilities:[#VALUE_HELP_PROVIDER],
    dataCategory: #TEXT,
    representativeKey: 'AssortmentListType',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_AssortmentListTypeT
  as select from twbbt
  association        to parent I_AssortmentListType as _AssortmentListType on $projection.AssortmentListType = _AssortmentListType.AssortmentListType
  association [0..1] to I_Language                  as _Language           on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @ObjectModel.foreignKey.association: '_AssortmentListType'
      @ObjectModel.text.element: ['AssortmentListTypeName']
  key cast(bbtyp as assortmentlisttype preserving type ) as AssortmentListType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      bbtext as AssortmentListTypeName,

      _AssortmentListType,
      _Language
}
```
