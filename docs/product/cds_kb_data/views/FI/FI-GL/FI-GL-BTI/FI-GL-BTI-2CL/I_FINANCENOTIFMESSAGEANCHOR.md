---
name: I_FINANCENOTIFMESSAGEANCHOR
description: "This CDS view anchors finance notification messages for Situation Handling. It exposes one record per the finance notification message unique key and provides the latest message metadata and rendered texts needed to display, act on, and trigger situations. It consolidates message information from finance notification process steps. It's only used for integration with situation handling. This CDS view provides the data to answer the following business questions: Which finance notification messages exist (by unique key) and what is their latest message text? For a given finance notification message unique key, what are the latest message class, number and long text? What parameterized values (variables 1–4) are associated with the latest message so that the full text can be rendered to users? Which notifications have valid, non-empty unique keys and are therefore actionable in Situation Handling? Which notifications can serve as anchors and triggers for situation events, based on their latest message metadata? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-BTI-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFMESSAGEANCHOR')/$value
semantic_en: "This CDS view anchors finance notification messages for Situation Handling. It exposes one record per the finance notification message unique key and provides the latest message metadata and rendered texts needed to display, act on, and trigger situations. It consolidates message information from finance notification process steps. It's only used for integration with situation handling. This CDS view provides the data to answer the following business questions: Which finance notification messages exist (by unique key) and what is their latest message text? For a given finance notification message unique key, what are the latest message class, number and long text? What parameterized values (variables 1–4) are associated with the latest message so that the full text can be rendered to users? Which notifications have valid, non-empty unique keys and are therefore actionable in Situation Handling? Which notifications can serve as anchors and triggers for situation events, based on their latest message metadata? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - bo:companycode
  - component:FI-GL-BTI-2CL
  - FI-GL
  - FI-GL-BTI
  - FI-GL-BTI-2CL
  - interface-view
  - lob:finance
  - notification
  - metadata-only
---
# I_FINANCENOTIFMESSAGEANCHOR

**This CDS view anchors finance notification messages for Situation Handling. It exposes one record per the finance notification message unique key and provides the latest message metadata and rendered texts needed to display, act on, and trigger situations. It consolidates message information from finance notification process steps. It's only used for integration with situation handling. This CDS view provides the data to answer the following business questions: Which finance notification messages exist (by unique key) and what is their latest message text? For a given finance notification message unique key, what are the latest message class, number and long text? What parameterized values (variables 1–4) are associated with the latest message so that the full text can be rendered to users? Which notifications have valid, non-empty unique keys and are therefore actionable in Situation Handling? Which notifications can serve as anchors and triggers for situation events, based on their latest message metadata? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-BTI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFMESSAGEANCHOR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinanceNotifMessageUniqueKey` |  | |  |  | `CHAR(70)` | Message Unique Key |
| `LatestMessageClass` |  | |  |  | `CHAR(20)` | Message class of the latest message |
| `LatestMessageNumber` |  | |  |  | `CHAR(3)` | Message number of the latest message |
| `LatestMessageVariable1Text` |  | |  |  | `CHAR(50)` | Message variable 1 of the latest message |
| `LatestMessageVariable2Text` |  | |  |  | `CHAR(50)` | Message variable 2 of the latest message |
| `LatestMessageVariable3Text` |  | |  |  | `CHAR(50)` | Message variable 3 of the latest message |
| `LatestMessageVariable4Text` |  | |  |  | `CHAR(50)` | Message variable 4 of the latest message |
| `LogMessageText` |  | |  |  | `CHAR(132)` | Message Text composed with variables |
