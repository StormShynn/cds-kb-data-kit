---
name: I_FINANCENOTIFPROCSTEPMESSAGE
description: "This CDS view consolidates finance notification process step messages with their related notification and reference document context, and ties them to company code information. It is designed to act as a situation handling trigger object: exposing the latest message details and severity, the processing status of the finance component and step, and the linkage to the underlying reference document, company code, and posting date so that issues can be detected, monitored, and acted upon. This CDS view provides the data to answer the following business questions: Which finance notification process steps currently have errors, warnings, or informational messages? What is the current processing status of each finance component within a notification? What is the latest log message for a given notification step, including message class, number, severity, and variable texts? Which reference document and event does a notification step relate to (type, display ID, OID, event display ID, logical system)? Which company code and posting date are associated with the notification, and what fiscal year variant applies? Which notification types are involved, enabling filtering or routing by FinanceNotificationType? How can messages be correlated to application logs for deeper diagnostics and troubleshooting? For a given reference document, what are all related finance notification steps and their statuses/messages? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-BTI-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFPROCSTEPMESSAGE')/$value
semantic_en: "This CDS view consolidates finance notification process step messages with their related notification and reference document context, and ties them to company code information. It is designed to act as a situation handling trigger object: exposing the latest message details and severity, the processing status of the finance component and step, and the linkage to the underlying reference document, company code, and posting date so that issues can be detected, monitored, and acted upon. This CDS view provides the data to answer the following business questions: Which finance notification process steps currently have errors, warnings, or informational messages? What is the current processing status of each finance component within a notification? What is the latest log message for a given notification step, including message class, number, severity, and variable texts? Which reference document and event does a notification step relate to (type, display ID, OID, event display ID, logical system)? Which company code and posting date are associated with the notification, and what fiscal year variant applies? Which notification types are involved, enabling filtering or routing by FinanceNotificationType? How can messages be correlated to application logs for deeper diagnostics and troubleshooting? For a given reference document, what are all related finance notification steps and their statuses/messages? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - bo:companycode
  - component:FI-GL-BTI-2CL
  - document
  - FI-GL
  - FI-GL-BTI
  - FI-GL-BTI-2CL
  - interface-view
  - lob:finance
  - notification
  - metadata-only
---
# I_FINANCENOTIFPROCSTEPMESSAGE

**This CDS view consolidates finance notification process step messages with their related notification and reference document context, and ties them to company code information. It is designed to act as a situation handling trigger object: exposing the latest message details and severity, the processing status of the finance component and step, and the linkage to the underlying reference document, company code, and posting date so that issues can be detected, monitored, and acted upon. This CDS view provides the data to answer the following business questions: Which finance notification process steps currently have errors, warnings, or informational messages? What is the current processing status of each finance component within a notification? What is the latest log message for a given notification step, including message class, number, severity, and variable texts? Which reference document and event does a notification step relate to (type, display ID, OID, event display ID, logical system)? Which company code and posting date are associated with the notification, and what fiscal year variant applies? Which notification types are involved, enabling filtering or routing by FinanceNotificationType? How can messages be correlated to application logs for deeper diagnostics and troubleshooting? For a given reference document, what are all related finance notification steps and their statuses/messages? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-BTI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFPROCSTEPMESSAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinanceNotifProcessStepUUID` |  | |  |  | `RAW(16)` | Finance Notification Step Identifier |
| `LogMessageText` |  | |  |  | `CHAR(132)` | Message Text composed with variables |
| `FinanceNotifMessageUniqueKey` |  | |  |  | `CHAR(70)` | Message Unique Key |
| `FinanceNotificationUUID` |  | |  |  | `RAW(16)` | Finance Notification Identifier |
| `FinanceNotificationProcessStep` |  | |  |  | `NUMC(10)` | Finance Notification Process Step |
| `FinanceComponent` |  | |  |  | `CHAR(30)` | Finance Component |
| `FinanceCompProcessingStatus` |  | |  |  | `CHAR(2)` | Finance Component Processing Status |
| `FinanceCompNotificationUUID` |  | |  |  | `RAW(16)` | Finance Component Notification Identifier |
| `ApplicationLogHandle` |  | |  |  | `CHAR(22)` | Application Log: Log Handle |
| `LatestMessageClass` |  | |  |  | `CHAR(20)` | Message class of the latest message |
| `LatestMessageNumber` |  | |  |  | `CHAR(3)` | Message number of the latest message |
| `LatestMessageSeverity` |  | |  |  | `CHAR(1)` | Message severity of the latest message |
| `LatestMessageVariable1Text` |  | |  |  | `CHAR(50)` | Message variable 1 of the latest message |
| `LatestMessageVariable2Text` |  | |  |  | `CHAR(50)` | Message variable 2 of the latest message |
| `LatestMessageVariable3Text` |  | |  |  | `CHAR(50)` | Message variable 3 of the latest message |
| `LatestMessageVariable4Text` |  | |  |  | `CHAR(50)` | Message variable 4 of the latest message |
| `FinanceNotificationType` |  | |  |  | `CHAR(30)` | Finance Notification Object Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentOID` |  | |  |  | `CHAR(128)` | Reference Document OID |
| `ReferenceDocumentDisplayID` |  | |  |  | `CHAR(64)` | Reference Document Display ID |
| `ReferenceDocumentEventOID` |  | |  |  | `CHAR(128)` | Reference Document Event OID |
| `RefDocumentEventDisplayID` |  | |  |  | `CHAR(64)` | Reference Document Event Display ID |
| `ReferenceDocumentLogicalSystem` |  | |  |  | `CHAR(10)` | Reference Document Logical System |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
