---
name: I_NOTICEOFVIOLATIONTYPETEXT
description: "This CDS view enables you to access and analyze notice of violation types. You can use this view to classify and categorize different types of violations that occur in your organization's incident management processes. This CDS view provides the data to answer the following business questions: What types of violations are most frequently reported in our organization? How can I categorize incidents based on violation types for compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONTYPETEXT')/$value
semantic_en: "This CDS view enables you to access and analyze notice of violation types. You can use this view to classify and categorize different types of violations that occur in your organization's incident management processes. This CDS view provides the data to answer the following business questions: What types of violations are most frequently reported in our organization? How can I categorize incidents based on violation types for compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_NOTICEOFVIOLATIONTYPETEXT

**This CDS view enables you to access and analyze notice of violation types. You can use this view to classify and categorize different types of violations that occur in your organization's incident management processes. This CDS view provides the data to answer the following business questions: What types of violations are most frequently reported in our organization? How can I categorize incidents based on violation types for compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NoticeOfViolationType` |  | |  |  | `CHAR(21)` | Violation Type |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `NoticeOfViolationTypeName` |  | |  |  | `CHAR(40)` | Description (Extra Short) |
