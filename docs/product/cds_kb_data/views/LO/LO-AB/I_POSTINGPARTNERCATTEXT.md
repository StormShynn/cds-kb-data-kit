---
name: I_POSTINGPARTNERCATTEXT
description: "This CDS view is used to select the Posting Partner Category. Domains: WLF_POST_PARTY Values: ‘’ - Supplier and Customer Side ‘1’ - Only Supplier Side ‘2’ - Only Customer Side ‘3’ – None ‘4’ - Personnel Number This CDS view provides the prerequisites for answering the following business questions: What is the Posting Partner Category?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSTINGPARTNERCATTEXT')/$value
semantic_en: "This CDS view is used to select the Posting Partner Category. Domains: WLF_POST_PARTY Values: ‘’ - Supplier and Customer Side ‘1’ - Only Supplier Side ‘2’ - Only Customer Side ‘3’ – None ‘4’ - Personnel Number This CDS view provides the prerequisites for answering the following business questions: What is the Posting Partner Category?"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_POSTINGPARTNERCATTEXT

**This CDS view is used to select the Posting Partner Category. Domains: WLF_POST_PARTY Values: ‘’ - Supplier and Customer Side ‘1’ - Only Supplier Side ‘2’ - Only Customer Side ‘3’ – None ‘4’ - Personnel Number This CDS view provides the prerequisites for answering the following business questions: What is the Posting Partner Category?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSTINGPARTNERCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PostingPartnerCat` |  | |  |  | `CHAR(1)` | Posting Partner |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `PostingPartnerCatName` |  | |  |  | `CHAR(60)` | Posting Partner Description |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
