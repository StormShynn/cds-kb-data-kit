---
name: I_EHSESUBMSNSTATUS
description: "This CDS view provides a standardized value help for electronic submission statuses. You can use this view to understand and work with the different states of electronic submissions in Environment, Health, and Safety (EHS). The view serves as a master data source for electronic submission status codes with associated text descriptions. The following table shows the available status values and their meanings: Value Meaning 01 Not Generated 02 Generation in Progress 03 Generation Failed 04 Not Sent 05 Not Submitted 06 Submitted 07 Submission Failed 08 Outdated 09 Error To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSESUBMSNSTATUS')/$value
semantic_en: "This CDS view provides a standardized value help for electronic submission statuses. You can use this view to understand and work with the different states of electronic submissions in Environment, Health, and Safety (EHS). The view serves as a master data source for electronic submission status codes with associated text descriptions. The following table shows the available status values and their meanings: Value Meaning 01 Not Generated 02 Generation in Progress 03 Generation Failed 04 Not Sent 05 Not Submitted 06 Submitted 07 Submission Failed 08 Outdated 09 Error To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Electronic Submission Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "electronic"
  - "submission"
  - "status"
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - master-data
---
# I_EHSESUBMSNSTATUS

**This CDS view provides a standardized value help for electronic submission statuses. You can use this view to understand and work with the different states of electronic submissions in Environment, Health, and Safety (EHS). The view serves as a master data source for electronic submission status codes with associated text descriptions. The following table shows the available status values and their meanings: Value Meaning 01 Not Generated 02 Generation in Progress 03 Generation Failed 04 Not Sent 05 Not Submitted 06 Submitted 07 Submission Failed 08 Outdated 09 Error To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSESUBMSNSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSElectronicSubmissionStatus` | ✓ | |  | `cast(dd07l.domvalue_l as ehfnd_el_submsn_status)` | `CHAR(2)` | Electronic Submission Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EHSESubmsnStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSESUBMSNSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSESUBMSNSTATUS')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Electronic Submission Status'
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@VDM.viewType: #BASIC
@Analytics.internalName:#LOCAL
@ObjectModel.representativeKey: 'EHSElectronicSubmissionStatus'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#VALUE_HELP_PROVIDER, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory:#VALUE_HELP
@Analytics: { dataCategory:#DIMENSION }

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_EHSESubmsnStatus
  as select from dd07l
  association [0..*] to I_EHSESubmsnStatusText as _Text on $projection.EHSElectronicSubmissionStatus = _Text.EHSElectronicSubmissionStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as ehfnd_el_submsn_status) as EHSElectronicSubmissionStatus,
      _Text
}
where
      dd07l.domname  = 'EHFND_EL_SUBMSN_STATUS'
  and dd07l.as4local = 'A'
```
