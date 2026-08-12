---
name: I_FASHIONGRADETEXT
description: "Degree of Fashion - Text"
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONGRADETEXT')/$value
semantic_en: "Degree of Fashion - Text"
semantic_vi: "Degree of Fashion - Text — CDS view giao diện dựa trên t6wfgt."
keywords:
  - "degree"
  - "fashion"
  - "text"
  - "grade"
  - "language"
tags:
  - LO
  - component:LO-RFM-CA-SE-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-CA
  - LO-RFM-CA-SE
  - LO-RFM-CA-SE-2CL
  - lob:cross_application components
  - lob:logistics general
---
# I_FASHIONGRADETEXT

**Degree of Fashion - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-SE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONGRADETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FashionGrade` | ✓ | |  | `fashgrd` | `CHAR(4)` | Fashion Grade |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FashionGradeText` |  | |  | `vtext` | `CHAR(20)` | Description |
| `_FashionGrade` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FashionGrade` | `I_FashionGrade` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONGRADETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONGRADETEXT')/$value)*

```abap
//Degree of Fashion Text
@EndUserText.label: 'Degree of Fashion - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
// Technical Settings
@ObjectModel.representativeKey: 'FashionGrade'
@ObjectModel: {

  supportedCapabilities: [  #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE
                            
                            ],
usageType.dataClass: #META,
usageType.serviceQuality : #A,
usageType.sizeCategory : #S
}
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled:true
//View Entity
define view entity I_FashionGradeText
  as select from t6wfgt
  association [1..1] to I_FashionGrade as _FashionGrade on $projection.FashionGrade = _FashionGrade.FashionGrade
  association [0..1] to I_Language     as _Language     on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association:'_FashionGrade'
      @ObjectModel.text.element: ['FashionGradeText']
  key fashgrd as FashionGrade,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras   as Language,
      @Semantics.text: true
      vtext   as FashionGradeText,

      //Expose Association
      _FashionGrade,
      _Language
}
```
