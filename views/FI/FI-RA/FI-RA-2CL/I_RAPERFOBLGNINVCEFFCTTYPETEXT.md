---
name: I_RAPERFOBLGNINVCEFFCTTYPETEXT
description: "RA Invoice Effect Type - Text"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPERFOBLGNINVCEFFCTTYPETEXT')/$value
semantic_en: "RA Invoice Effect Type - Text"
tags:
  - FI
  - bo:billingdocument
  - component:FI-RA-2CL
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - invoice
  - lob:finance
  - metadata-only
---
# I_RAPERFOBLGNINVCEFFCTTYPETEXT

**RA Invoice Effect Type - Text**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPERFOBLGNINVCEFFCTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `RAPerfOblgnInvoiceEffectType` |  | |  |  | `CHAR(1)` | Defines How Invoices Affect POB Price and Quantity |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `RAPerfOblgnInvcEffctTypeText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
