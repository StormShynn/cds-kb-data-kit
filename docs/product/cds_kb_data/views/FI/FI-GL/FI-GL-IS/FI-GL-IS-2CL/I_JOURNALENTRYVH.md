---
name: I_JOURNALENTRYVH
description: "This CDS view provides value help for selecting and searching journal entries (accounting documents) across company codes and fiscal years. It exposes the key identifiers—Company Code, Fiscal Year, and Accounting Document—and supports fuzzy, ranked search on these fields as well as on Reference Document Type and Original Reference Document. It is designed to be used in UI value help dialogs and type-ahead inputs, enforcing authorization checks and client handling while providing associations to related master data (Company Code, Fiscal Year, Reference Document Type) for navigation and validation. This CDS view provides the data to answer the following business questions: Which journal entry (accounting document) should I reference for a specific company code and fiscal year? How can I quickly find a journal entry by typing part of its document number, company code, or fiscal year (using fuzzy search)? Which journal entries are associated with a given reference document type? Which journal entries are linked to a particular original reference document? Among the journal entries I am authorized to see, which ones are available for selection in value help? How can I narrow down journal entry candidates by company code and fiscal year when posting, clearing, or referencing documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYVH')/$value
semantic_en: "This CDS view provides value help for selecting and searching journal entries (accounting documents) across company codes and fiscal years. It exposes the key identifiers—Company Code, Fiscal Year, and Accounting Document—and supports fuzzy, ranked search on these fields as well as on Reference Document Type and Original Reference Document. It is designed to be used in UI value help dialogs and type-ahead inputs, enforcing authorization checks and client handling while providing associations to related master data (Company Code, Fiscal Year, Reference Document Type) for navigation and validation. This CDS view provides the data to answer the following business questions: Which journal entry (accounting document) should I reference for a specific company code and fiscal year? How can I quickly find a journal entry by typing part of its document number, company code, or fiscal year (using fuzzy search)? Which journal entries are associated with a given reference document type? Which journal entries are linked to a particular original reference document? Among the journal entries I am authorized to see, which ones are available for selection in value help? How can I narrow down journal entry candidates by company code and fiscal year when posting, clearing, or referencing documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-GL-IS-2CL
  - document
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - master-data
  - metadata-only
---
# I_JOURNALENTRYVH

**This CDS view provides value help for selecting and searching journal entries (accounting documents) across company codes and fiscal years. It exposes the key identifiers—Company Code, Fiscal Year, and Accounting Document—and supports fuzzy, ranked search on these fields as well as on Reference Document Type and Original Reference Document. It is designed to be used in UI value help dialogs and type-ahead inputs, enforcing authorization checks and client handling while providing associations to related master data (Company Code, Fiscal Year, Reference Document Type) for navigation and validation. This CDS view provides the data to answer the following business questions: Which journal entry (accounting document) should I reference for a specific company code and fiscal year? How can I quickly find a journal entry by typing part of its document number, company code, or fiscal year (using fuzzy search)? Which journal entries are associated with a given reference document type? Which journal entries are linked to a particular original reference document? Among the journal entries I am authorized to see, which ones are available for selection in value help? How can I narrow down journal entry candidates by company code and fiscal year when posting, clearing, or referencing documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `OriginalReferenceDocument` |  | |  |  | `CHAR(20)` | Object key |
