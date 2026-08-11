---
name: I_FASHIONGRADETEXT
description: "Degree of Fashion - Text"
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
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
