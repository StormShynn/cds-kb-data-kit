---
name: I_CNDNCONTRISINACTIVE
description: "This CDS view retrieves information on the condition contract state and indicates whether the condition contract is active or inactive. This CDS view provides the prerequisites for answering the following business questions: Is the condition contract state active or inactive?"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVE')/$value
semantic_en: "This CDS view retrieves information on the condition contract state and indicates whether the condition contract is active or inactive. This CDS view provides the prerequisites for answering the following business questions: Is the condition contract state active or inactive?"
semantic_vi: "I_CNDNCONTRISINACTIVE — CDS view giao diện dựa trên I_CNDNCONTRISINACTIVE."
keywords:
  - "cndncontrisinactive"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - LO
  - bo:plant
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRISINACTIVE

**This CDS view retrieves information on the condition contract state and indicates whether the condition contract is active or inactive. This CDS view provides the prerequisites for answering the following business questions: Is the condition contract state active or inactive?**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVE')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzoctdxydvqefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWMzZDc4ZDUwZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTQ6MDNaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jM2Q3OGQ1MGVmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPm9xeWtsZUVsd3NhVEJNVHZZcmJaQkdJQTZ5bz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;bWpyS0Y3N1lmZXlCRjlkL3hEcHQyVDdNd051SzJLclNJSHJGVnNaajF5RmxCb2dmMmwrMVZSMnhibS84OHhnY2pnbS9zamFIenZYeApsUWtSbkI2THIzNVZIUThqbVh1dXI4U0ZrQmdJditrQmppYlUrMm0xb3NiRGtGc0N5ZnhQdEQxOEVrVEovUGptWWhFWGNuU1hVLzRMCnh5dEgrTlFscXU4VXp0Mi9VS1o5MjNVUWJhMDFMMjJqb2cvenRrN2ZnS3MrSVhKZ2xRdGw4MWtxTkRvSE5qOXpka1FzUTFjMWVGckUKclJLSDhUeWZmcjJUZURab3JTcjM4eGJhL3RoVEJjd1FPajZFU2hCSUVkeWhZN0swUzVuUjREaFNrNHo3anBwN29nRy9DRDNYblQwagoyaTNWdzY3V1RtWW9FZUgzOU1ORDFxRVVhcU9qcGpUdEIxbHoyTHN6bi8wZWhpc2RaTk5XSU8zOFZuSTJzZTBVb2JTUStXZ1Brdy91CmE0OWZnRlNBSnBmblhVWjNoZXYxUm92M3JxQ1p6K0p0dGRDQ1UwYzY5QmxGUndxTFJ3a2ZWVVZ6c1V0RUQ3dmdkZnBRbXVMcElja2IKRWVWU2xFNWR3Smx5cFI0QjkvQVJmV1JQWktZZGh3VEJWYUoyd3M0WktEN1R6VW5WdGszZWlkREQ8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzoctdxydvqefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```