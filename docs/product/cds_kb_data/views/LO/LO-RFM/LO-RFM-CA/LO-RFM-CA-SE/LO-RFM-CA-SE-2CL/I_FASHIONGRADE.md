---
name: I_FASHIONGRADE
description: "Degree of Fashion"
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONGRADE')/$value
semantic_en: "Degree of Fashion"
semantic_vi: "Degree of Fashion — CDS view giao diện dựa trên t6wfg."
keywords:
  - "degree"
  - "fashion"
  - "grade"
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
# I_FASHIONGRADE

**Degree of Fashion**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-SE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONGRADE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FashionGrade` | ✓ | |  | `fashgrd` | `CHAR(4)` | Fashion Grade |
| `_FashionGradeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FashionGradeText` | `I_FashionGradeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONGRADE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FASHIONGRADE')/$value)*

```abap
//Degree of Fashion
@EndUserText.label: 'Degree of Fashion'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
// Technical Settings
@ObjectModel.representativeKey:'FashionGrade'
@ObjectModel: {
modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [  #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION  ],
usageType.dataClass:#CUSTOMIZING,
usageType.serviceQuality : #A,
usageType.sizeCategory : #S
}
// For Data Extraction
@Metadata.ignorePropagatedAnnotations:true

@Analytics.internalName: #LOCAL
@Analytics: {
dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
//View Entity
define view entity I_FashionGrade
  as select from t6wfg
  association [0..*] to I_FashionGradeText as _FashionGradeText on $projection.FashionGrade = _FashionGradeText.FashionGrade
{
      @ObjectModel.text.association:'_FashionGradeText'
  key fashgrd as FashionGrade,

      //Expose Association
      _FashionGradeText
}
```
