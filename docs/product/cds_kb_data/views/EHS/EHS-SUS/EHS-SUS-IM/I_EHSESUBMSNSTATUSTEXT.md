---
name: I_EHSESUBMSNSTATUSTEXT
description: "This CDS view provides a standardized value help for electronic submission statuses. You can use this view to understand and work with the different states of electronic submissions in Environment, Health, and Safety (EHS). The view serves as a master data source for electronic submission status codes with associated text descriptions. The following table shows the available status values and their meanings: Value Meaning 01 Not Generated 02 Generation in Progress 03 Generation Failed 04 Not Sent 05 Not Submitted 06 Submitted 07 Submission Failed 08 Outdated 09 Error To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSESUBMSNSTATUSTEXT')/$value
semantic_en: "This CDS view provides a standardized value help for electronic submission statuses. You can use this view to understand and work with the different states of electronic submissions in Environment, Health, and Safety (EHS). The view serves as a master data source for electronic submission status codes with associated text descriptions. The following table shows the available status values and their meanings: Value Meaning 01 Not Generated 02 Generation in Progress 03 Generation Failed 04 Not Sent 05 Not Submitted 06 Submitted 07 Submission Failed 08 Outdated 09 Error To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - master-data
  - metadata-only
---
# I_EHSESUBMSNSTATUSTEXT

**This CDS view provides a standardized value help for electronic submission statuses. You can use this view to understand and work with the different states of electronic submissions in Environment, Health, and Safety (EHS). The view serves as a master data source for electronic submission status codes with associated text descriptions. The following table shows the available status values and their meanings: Value Meaning 01 Not Generated 02 Generation in Progress 03 Generation Failed 04 Not Sent 05 Not Submitted 06 Submitted 07 Submission Failed 08 Outdated 09 Error To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSESUBMSNSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSElectronicSubmissionStatus` |  | |  |  | `CHAR(2)` | Electronic Submission Status |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `EHSESubmsnStatusText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
