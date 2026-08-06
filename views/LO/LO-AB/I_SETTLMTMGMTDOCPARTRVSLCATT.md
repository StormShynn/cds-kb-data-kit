---
name: I_SETTLMTMGMTDOCPARTRVSLCATT
description: This CDS view provides supported values for SettlmtMgmtDocPartRvslCat. The values and their meanings are: Value Meaning ' ' Standard (Both) 1 Supplier 2 Customer 3 Both (Using Two Transactions) To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCPARTRVSLCATT')/$value
semantic_en: This CDS view provides supported values for SettlmtMgmtDocPartRvslCat. The values and their meanings are: Value Meaning ' ' Standard (Both) 1 Supplier 2 Customer 3 Both (Using Two Transactions) To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
  - transaction
  - metadata-only
---
# I_SETTLMTMGMTDOCPARTRVSLCATT

**This CDS view provides supported values for SettlmtMgmtDocPartRvslCat. The values and their meanings are: Value Meaning ' ' Standard (Both) 1 Supplier 2 Customer 3 Both (Using Two Transactions) To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCPARTRVSLCATT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SettlmtMgmtDocPartRvslCat` | `CHAR(1)` | Category of the Partner Reversal |
| `Language` | `LANG(1)` | Language Key |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtMgmtDocPartRvslCatName` | `CHAR(60)` | Name of Partner Reversal Category |
