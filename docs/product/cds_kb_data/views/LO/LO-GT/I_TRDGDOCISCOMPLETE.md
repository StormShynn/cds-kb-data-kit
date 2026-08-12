---
name: I_TRDGDOCISCOMPLETE
description: "Document Complete"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCISCOMPLETE')/$value
semantic_en: "Document Complete"
semantic_vi: "Document Complete — CDS view cơ bản dựa trên R_TrdgDocIsComplete."
keywords:
  - "document"
  - "complete"
  - "trdg"
tags:
  - LO
  - component:LO-GT
  - document
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGDOCISCOMPLETE

**Document Complete**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCISCOMPLETE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdgDocIsComplete` | ✓ | |  |  | `CHAR(1)` | Document Is Complete |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCISCOMPLETE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCISCOMPLETE')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Document Complete'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'TrdgDocIsComplete',
  dataCategory: #VALUE_HELP,
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory:   #S
  }
}
//@Analytics: {
//    dataCategory: #DIMENSION,
//    dataExtraction.enabled: false,
//    internalName: #LOCAL
//}
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_TrdgDocIsComplete
  as select from R_TrdgDocIsComplete
  
  composition [0..*] of I_TrdgDocIsCompleteText as _Text
{
      @ObjectModel.text.association: '_Text'
  key TrdgDocIsComplete,
      _Text
}
```
