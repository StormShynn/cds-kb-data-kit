---
name: I_REINTEGOBJECTUSAGECLFNTEXT
description: "Real Estate Integration Object Usage Classification - Text"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTUSAGECLFNTEXT')/$value
semantic_en: "Real Estate Integration Object Usage Classification - Text"
tags:
  - RE
  - bo:companycode
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
  - metadata-only
---
# I_REINTEGOBJECTUSAGECLFNTEXT

**Real Estate Integration Object Usage Classification - Text**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTUSAGECLFNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `REIntegObjectUsageClfn` |  | |  |  | `CHAR(1)` | Usage Classification |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `REIntegObjectUsageClfnText` |  | |  |  | `CHAR(60)` | RE Description 60 Characters |
