---
name: I_EHSESUBMSNSTATUSTEXT
description: "This CDS view provides a standardized value help for electronic submission statuses. You can use this view to understand and work with the different states of electronic submissions in Environment, Health, and Safety (EHS). The view serves as a master data source for electronic submission status codes with associated text descriptions. The following table shows the available status values and their meanings: Value Meaning 01 Not Generated 02 Generation in Progress 03 Generation Failed 04 Not Sent 05 Not Submitted 06 Submitted 07 Submission Failed 08 Outdated 09 Error To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSESUBMSNSTATUSTEXT')/$value
semantic_en: "This CDS view provides a standardized value help for electronic submission statuses. You can use this view to understand and work with the different states of electronic submissions in Environment, Health, and Safety (EHS). The view serves as a master data source for electronic submission status codes with associated text descriptions. The following table shows the available status values and their meanings: Value Meaning 01 Not Generated 02 Generation in Progress 03 Generation Failed 04 Not Sent 05 Not Submitted 06 Submitted 07 Submission Failed 08 Outdated 09 Error To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Electronic Submission Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "electronic"
  - "submission"
  - "status"
  - "text"
  - "language"
  - "submsn"
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - master-data
---
# I_EHSESUBMSNSTATUSTEXT

**This CDS view provides a standardized value help for electronic submission statuses. You can use this view to understand and work with the different states of electronic submissions in Environment, Health, and Safety (EHS). The view serves as a master data source for electronic submission status codes with associated text descriptions. The following table shows the available status values and their meanings: Value Meaning 01 Not Generated 02 Generation in Progress 03 Generation Failed 04 Not Sent 05 Not Submitted 06 Submitted 07 Submission Failed 08 Outdated 09 Error To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSESUBMSNSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSElectronicSubmissionStatus` | ✓ | |  | `cast(dd07t.domvalue_l as ehfnd_el_submsn_status)` | `CHAR(2)` | Electronic Submission Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `EHSESubmsnStatusText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_ESubmsnStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ESubmsnStatus` | `I_EHSESubmsnStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSESUBMSNSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSESUBMSNSTATUSTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Electronic Submission Status - Text'
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@VDM.viewType: #BASIC
@ObjectModel.dataCategory:#TEXT
@ObjectModel.representativeKey: 'EHSElectronicSubmissionStatus'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#LANGUAGE_DEPENDENT_TEXT]

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_EHSESubmsnStatusText
  as select from dd07t
  association [0..1] to I_EHSESubmsnStatus as _ESubmsnStatus on $projection.EHSElectronicSubmissionStatus = _ESubmsnStatus.EHSElectronicSubmissionStatus
  association [0..1] to I_Language         as _Language      on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ESubmsnStatus'
  key cast(dd07t.domvalue_l as ehfnd_el_submsn_status) as EHSElectronicSubmissionStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                                 as Language,
      @Semantics.text:true
      dd07t.ddtext                                     as EHSESubmsnStatusText,

      _ESubmsnStatus,
      _Language

}
where
      dd07t.domname  = 'EHFND_EL_SUBMSN_STATUS'
  and dd07t.as4local = 'A'
```
