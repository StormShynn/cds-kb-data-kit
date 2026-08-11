---
name: I_TRDGDOCAPPLICATIONSTATUS
description: "Application Status of Trading Document"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCAPPLICATIONSTATUS')/$value
semantic_en: "Application Status of Trading Document"
semantic_vi: "Application Status of Trading Document — CDS view cơ bản dựa trên R_TrdgDocApplicationStatus."
keywords:
  - "application"
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
# I_TRDGDOCAPPLICATIONSTATUS

**Application Status of Trading Document**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCAPPLICATIONSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdgDocApplicationStatus` | ✓ | |  |  | `CHAR(1)` | Application Status of Trading Contract |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCAPPLICATIONSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCAPPLICATIONSTATUS')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Application Status of Trading Document'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'TrdgDocApplicationStatus',
  dataCategory: #VALUE_HELP,
  resultSet.sizeCategory: #XS,
  modelingPattern: #VALUE_HELP_PROVIDER,
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

define root view entity I_TrdgDocApplicationStatus
  as select from R_TrdgDocApplicationStatus

  composition [0..*] of I_TrdgDocApplicationStatusText as _Text
{
      @ObjectModel.text.association: '_Text'
  key TrdgDocApplicationStatus,
      _Text
}
```
