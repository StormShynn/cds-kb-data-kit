---
name: I_FASHIONGRADE
description: "Degree of Fashion"
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
