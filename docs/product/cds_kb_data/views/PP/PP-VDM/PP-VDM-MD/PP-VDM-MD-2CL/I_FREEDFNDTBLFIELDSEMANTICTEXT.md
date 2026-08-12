---
name: I_FREEDFNDTBLFIELDSEMANTICTEXT
description: "Free Defined Table Field Semantic - Text"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FREEDFNDTBLFIELDSEMANTICTEXT')/$value
semantic_en: "Free Defined Table Field Semantic - Text"
semantic_vi: "Free Defined Table Field Semantic - Text — CDS view giao diện dựa trên tcn01."
keywords:
  - "free"
  - "defined"
  - "table"
  - "field"
  - "semantic"
  - "text"
  - "language"
  - "dfnd"
  - "name"
  - "attribute01"
  - "label"
  - "attribute02"
tags:
  - PP
  - bo:companycode
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_FREEDFNDTBLFIELDSEMANTICTEXT

**Free Defined Table Field Semantic - Text**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FREEDFNDTBLFIELDSEMANTICTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FreeDefinedTableFieldSemantic` | ✓ | |  | `slwid` | `CHAR(7)` | Key word ID for user-defined fields |
| `FreeDfndTableFieldSemanticName` |  | |  | `ktext` | `CHAR(40)` | Description for the key word ID |
| `FreeDefinedAttribute01Label` |  | |  | `swrt0` | `CHAR(15)` | Key word for user-defined fields |
| `FreeDefinedAttribute02Label` |  | |  | `swrt1` | `CHAR(15)` | Key word for user-defined fields |
| `FreeDefinedAttribute03Label` |  | |  | `swrt2` | `CHAR(15)` | Key word for user-defined fields |
| `FreeDefinedAttribute04Label` |  | |  | `swrt3` | `CHAR(15)` | Key word for user-defined fields |
| `FreeDefinedQuantity1Label` |  | |  | `swrt4` | `CHAR(15)` | Key word for user-defined fields |
| `FreeDefinedQuantity2Label` |  | |  | `swrt5` | `CHAR(15)` | Key word for user-defined fields |
| `FreeDefinedAmount1Label` |  | |  | `swrt6` | `CHAR(15)` | Key word for user-defined fields |
| `FreeDefinedAmount2Label` |  | |  | `swrt7` | `CHAR(15)` | Key word for user-defined fields |
| `FreeDefinedDate1Label` |  | |  | `swrt8` | `CHAR(15)` | Key word for user-defined fields |
| `FreeDefinedDate2Label` |  | |  | `swrt9` | `CHAR(15)` | Key word for user-defined fields |
| `FreeDefinedIndicator1Label` |  | |  | `swrt10` | `CHAR(15)` | Key word for user-defined fields |
| `FreeDefinedIndicator2Label` |  | |  | `swrt11` | `CHAR(15)` | Key word for user-defined fields |
| `_Language` | | ✓ | | | | |
| `_FreeDfndTableFieldSemantic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FreeDfndTableFieldSemantic` | `I_FreeDfndTableFieldSemantic` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FREEDFNDTBLFIELDSEMANTICTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FREEDFNDTBLFIELDSEMANTICTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFREDEFTABFLDSMT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: { status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001 }
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'FreeDefinedTableFieldSemantic'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }     --> check!
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Free Defined Table Field Semantic - Text'
@ObjectModel.sapObjectNodeType.name: 'BOOFreeDfndTblFieldSemText'
@Analytics.dataExtraction.enabled: true



define view I_FreeDfndTblFieldSemanticText
  as select from tcn01

  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
  association [0..1] to I_FreeDfndTableFieldSemantic as _FreeDfndTableFieldSemantic on $projection.FreeDefinedTableFieldSemantic = _FreeDfndTableFieldSemantic.FreeDefinedTableFieldSemantic

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                               as Language,
      @ObjectModel.foreignKey.association: '_FreeDfndTableFieldSemantic'
      @ObjectModel.text.element: 'FreeDfndTableFieldSemanticName'
  key slwid                                               as FreeDefinedTableFieldSemantic,
      @Semantics.text: true
      ktext                                               as FreeDfndTableFieldSemanticName,
      swrt0                                               as FreeDefinedAttribute01Label,
      swrt1                                               as FreeDefinedAttribute02Label,
      swrt2                                               as FreeDefinedAttribute03Label,
      swrt3                                               as FreeDefinedAttribute04Label,
      swrt4                                               as FreeDefinedQuantity1Label,
      swrt5                                               as FreeDefinedQuantity2Label,
      swrt6                                               as FreeDefinedAmount1Label,
      swrt7                                               as FreeDefinedAmount2Label,
      swrt8                                               as FreeDefinedDate1Label,
      swrt9                                               as FreeDefinedDate2Label,
      swrt10                                              as FreeDefinedIndicator1Label,
      swrt11                                              as FreeDefinedIndicator2Label,

      --- Associations ---
      _Language,
      _FreeDfndTableFieldSemantic
};
```
