---
name: I_TRDGDOCRELEASESTATUS
description: "Release Status of Trading Document"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCRELEASESTATUS')/$value
semantic_en: "Release Status of Trading Document"
semantic_vi: "Release Status of Trading Document — CDS view cơ bản dựa trên R_TrdgDocReleaseStatus."
keywords:
  - "release"
  - "status"
  - "trading"
  - "document"
  - "trdg"
tags:
  - LO
  - component:LO-GT
  - document
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGDOCRELEASESTATUS

**Release Status of Trading Document**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCRELEASESTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdgDocReleaseStatus` | ✓ | |  |  | `CHAR(1)` | Release Status for Follow-On Document Generation |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCRELEASESTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCRELEASESTATUS')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Release Status of Trading Document'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'TrdgDocReleaseStatus',
  dataCategory: #VALUE_HELP,
  resultSet.sizeCategory: #XS,
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

define root view entity I_TrdgDocReleaseStatus
  as select from R_TrdgDocReleaseStatus

  composition [0..*] of I_TrdgDocReleaseStatusText as _Text
{
      @ObjectModel.text.association: '_Text'
  key TrdgDocReleaseStatus,
      _Text
}
```
