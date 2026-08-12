---
name: I_CNDNCONTRCLASSFCTNTYPETEXT
description: "This CDS view exposes values of the Condition Contract Classification Type and the Condition Contract Category."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCLASSFCTNTYPETEXT')/$value
semantic_en: "This CDS view exposes values of the Condition Contract Classification Type and the Condition Contract Category."
semantic_vi: "Cndn Contr Classification Type - Text — CDS view cơ bản dựa trên twcbcategoryt."
keywords:
  - "cndn"
  - "contr"
  - "classification"
  - "type"
  - "text"
  - "language"
  - "classfctn"
  - "desc"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRCLASSFCTNTYPETEXT

**This CDS view exposes values of the Condition Contract Classification Type and the Condition Contract Category.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCLASSFCTNTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CndnContrClassfctnType` | ✓ | |  | `category` | `CHAR(2)` | Condition Contract Category |
| `CndnContrClassfctnTypeDesc` |  | |  | `text` | `CHAR(40)` | Condition Contract Category Text |
| `_Language` | | ✓ | | | | |
| `_CndnContrClassfctnType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCLASSFCTNTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCLASSFCTNTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Cndn Contr Classification Type - Text'
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrClassfctnType',
  modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'ICCCLASSFCTNTT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_CndnContrClassfctnTypeText
  as select from twcbcategoryt

  association        to parent I_CndnContrClassfctnType as _CndnContrClassfctnType on $projection.CndnContrClassfctnType = _CndnContrClassfctnType.CndnContrClassfctnType
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras    as Language,
      @ObjectModel.foreignKey.association: '_CndnContrClassfctnType'
  key category as CndnContrClassfctnType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      text     as CndnContrClassfctnTypeDesc,

      /* Associations */
      _CndnContrClassfctnType,
      _Language
}
```
