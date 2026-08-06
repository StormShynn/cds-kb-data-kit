---
name: I_SETTLMTMGMTPRCGAPPLCAT
description: This view is used to display which parameter controls MM or SD price determination that should be used during the creation of the settlement management document. The following fixed values have been maintained: M Purchasing V Sales/Distribution
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTPRCGAPPLCAT')/$value
semantic_en: This view is used to display which parameter controls MM or SD price determination that should be used during the creation of the settlement management document. The following fixed values have been maintained: M Purchasing V Sales/Distribution
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTMGMTPRCGAPPLCAT

**This view is used to display which parameter controls MM or SD price determination that should be used during the creation of the settlement management document. The following fixed values have been maintained: M Purchasing V Sales/Distribution**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTPRCGAPPLCAT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SettlmtMgmtPrcgApplCat` | `CHAR(2)` | Application for Price Determination |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
