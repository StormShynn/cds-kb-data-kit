---
name: I_TRDCLASSFCTNNMBRSCHMTYPETEXT
description: "Numbering Scheme Type - Text"
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMTYPETEXT')/$value
semantic_en: "Numbering Scheme Type - Text"
semantic_vi: "Numbering Scheme Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "numbering"
  - "scheme"
  - "type"
  - "text"
  - "language"
  - "classfctn"
  - "nmbr"
  - "schm"
  - "name"
tags:
  - FT
  - component:FT-ITR-CLS
  - FT-ITR
  - FT-ITR-CLS
  - interface-view
---
# I_TRDCLASSFCTNNMBRSCHMTYPETEXT

**Numbering Scheme Type - Text**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TrdClassfctnNmbrSchmType` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `TrdClassfctnNmbrSchmTypeName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_TrdClassfctnNmbrSchmType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_TrdClassfctnNmbrSchmType` | `I_TrdClassfctnNmbrSchmType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Numbering Scheme Type - Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.sqlViewName: 'ITRDCLSNSTYPTXT'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'TrdClassfctnNmbrSchmType'
@Search.searchable: false
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT  ]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_TrdClassfctnNmbrSchmTypeText
  as select from dd07t
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
  association [0..1] to I_TrdClassfctnNmbrSchmType as _TrdClassfctnNmbrSchmType on $projection.TrdClassfctnNmbrSchmType = _TrdClassfctnNmbrSchmType.TrdClassfctnNmbrSchmType
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                  as Language,
      @ObjectModel.foreignKey.association: '_TrdClassfctnNmbrSchmType'
  key domvalue_l                  as TrdClassfctnNmbrSchmType,
      @Semantics.text: true
      
      ddtext                      as TrdClassfctnNmbrSchmTypeName,

      _Language,
      _TrdClassfctnNmbrSchmType
}
where
      domname  = '/SAPSLL/CTSTY'
  and as4local = 'A'
```
