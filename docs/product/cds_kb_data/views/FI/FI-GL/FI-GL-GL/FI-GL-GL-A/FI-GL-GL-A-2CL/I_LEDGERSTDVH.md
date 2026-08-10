---
name: I_LEDGERSTDVH
description: "This CDS view provides value help for the Ledger field and it should be used for value help purposes only. If you intend to select the entire business data, use the I_Ledger view instead. This CDS view returns the list of ledgers and their language-dependent names. It indicates whether a ledger is the leading ledger, enabling users to search and select the correct ledger in UI fields and filters. This view supports ranked fuzzy search on ledger ID and name. It respects user authorizations and client/session language, and is intended for use in finance applications and customizing where ledger selection is required. This CDS view provides the data to answer the following business questions: What are the valid ledger values I can select (given my authorizations) in this client? What is the language-dependent name/description of each ledger? Which ledger is designated as the leading ledger? What is the code and name of the leading ledger that should be used for postings or reporting? Can I find a ledger by entering a partial code or name and get the best-matching results? How does a ledger’s technical ID map to its display text in my logon language? Which ledger should I choose from the value help for a given process step or filter? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERSTDVH')/$value
semantic_en: "This CDS view provides value help for the Ledger field and it should be used for value help purposes only. If you intend to select the entire business data, use the I_Ledger view instead. This CDS view returns the list of ledgers and their language-dependent names. It indicates whether a ledger is the leading ledger, enabling users to search and select the correct ledger in UI fields and filters. This view supports ranked fuzzy search on ledger ID and name. It respects user authorizations and client/session language, and is intended for use in finance applications and customizing where ledger selection is required. This CDS view provides the data to answer the following business questions: What are the valid ledger values I can select (given my authorizations) in this client? What is the language-dependent name/description of each ledger? Which ledger is designated as the leading ledger? What is the code and name of the leading ledger that should be used for postings or reporting? Can I find a ledger by entering a partial code or name and get the best-matching results? How does a ledger’s technical ID map to its display text in my logon language? Which ledger should I choose from the value help for a given process step or filter? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-A-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-A
  - FI-GL-GL-A-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_LEDGERSTDVH

**This CDS view provides value help for the Ledger field and it should be used for value help purposes only. If you intend to select the entire business data, use the I_Ledger view instead. This CDS view returns the list of ledgers and their language-dependent names. It indicates whether a ledger is the leading ledger, enabling users to search and select the correct ledger in UI fields and filters. This view supports ranked fuzzy search on ledger ID and name. It respects user authorizations and client/session language, and is intended for use in finance applications and customizing where ledger selection is required. This CDS view provides the data to answer the following business questions: What are the valid ledger values I can select (given my authorizations) in this client? What is the language-dependent name/description of each ledger? Which ledger is designated as the leading ledger? What is the code and name of the leading ledger that should be used for postings or reporting? Can I find a ledger by entering a partial code or name and get the best-matching results? How does a ledger’s technical ID map to its display text in my logon language? Which ledger should I choose from the value help for a given process step or filter? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `IsLeadingLedger` |  | |  |  | `CHAR(1)` | Indicator: Leading Ledger |
| `LedgerName` |  | |  |  | `CHAR(30)` | Ledger Name |
