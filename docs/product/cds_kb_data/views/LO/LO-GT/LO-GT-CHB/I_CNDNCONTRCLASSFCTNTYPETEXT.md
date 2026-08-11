---
name: I_CNDNCONTRCLASSFCTNTYPETEXT
description: "This CDS view exposes values of the Condition Contract Classification Type and the Condition Contract Category."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
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
