---
name: I_TRDGDOCCATEGORY
description: "Trading Document Category"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCCATEGORY')/$value
semantic_en: "Trading Document Category"
semantic_vi: "Trading Document Category — CDS view cơ bản dựa trên R_TrdgDocCategory."
keywords:
  - "trading"
  - "document"
  - "category"
  - "trdg"
tags:
  - LO
  - component:LO-GT
  - document
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGDOCCATEGORY

**Trading Document Category**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdgDocCategory` | ✓ | |  |  | `CHAR(1)` | Trading Document Category |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCCATEGORY')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Trading Document Category'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'TrdgDocCategory',
  dataCategory: #VALUE_HELP,
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory:   #S
  },
  resultSet.sizeCategory: #XS
}
//@Analytics: {
//    dataCategory: #DIMENSION,
//    dataExtraction.enabled: false,
//    internalName: #LOCAL
//}
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_TrdgDocCategory
  as select from R_TrdgDocCategory

  composition [0..*] of I_TrdgDocCategoryText as _Text
{
      @ObjectModel.text.association: '_Text'
  key TrdgDocCategory,
      _Text
}
```
