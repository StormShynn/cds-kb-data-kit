---
name: I_GOODSMOVEMENTDOCUMENTDEX
description: "This CDS view is intended to be used for data extraction of the material document. The view provides all important data of the material document posting. The view is enabled for delta extraction. You may build your own BW content based on the data provided by this view. This CDS view provides the prerequisites for answering the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? How many transfer postings have been done last month? Between which plants have materials be transferred?"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTDOCUMENTDEX')/$value
semantic_en: "This CDS view is intended to be used for data extraction of the material document. The view provides all important data of the material document posting. The view is enabled for delta extraction. You may build your own BW content based on the data provided by this view. This CDS view provides the prerequisites for answering the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? How many transfer postings have been done last month? Between which plants have materials be transferred?"
semantic_vi: "I_GOODSMOVEMENTDOCUMENTDEX — CDS view giao diện dựa trên I_GOODSMOVEMENTDOCUMENTDEX."
keywords:
  - "goodsmovementdocumentdex"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - MM
  - bo:inventory
  - component:MM-IM-VDM-SGM-2CL
  - document
  - interface-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - plan
  - stock
---
# I_GOODSMOVEMENTDOCUMENTDEX

**This CDS view is intended to be used for data extraction of the material document. The view provides all important data of the material document posting. The view is enabled for delta extraction. You may build your own BW content based on the data provided by this view. This CDS view provides the prerequisites for answering the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? How many transfer postings have been done last month? Between which plants have materials be transferred?**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTDOCUMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTDOCUMENTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTDOCUMENTDEX')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzocfsazwdyafwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWNmMmE5NmQ4YWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTY6MzVaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jZjJhOTZkOGFmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPmhTb2h0SmZkMG5QZFJBcVFyUE03K0doaWQxQT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;SWRXQlBoZGFaSEtPREs1MW9RYkhHOWVvb2FTeWxOcnUzOHBFVytGRi81dVVlN2ZuaHBoTEtGZlBNOGloeFpOOWRZR1U2YUZUTVhUMApKbG1RMVVNdzNwYlduZ3k3V2dMbTNRWHVWbkNkS3BYVWRsdVFFM3pQS3JleW5TT0lmR0hmVzlBMzNNZU0xanpmWTgwQjB0ZzcwMzhoCjhaZ1lZQlpuRmpIYXpQd2hETTRjZDFoc0o5dng4NHMxN3ZtOWtrKzkvYnh4S1FBa29EaGNzUU4zalNtRkFIa2V3M2szZEZjd3JzRngKZkc0TlFwcFpFdXRNK0V3MXp3QTFCS1diMnQ5OFllZllOWDZJV1B6cVUySUR0TVg3bkg5cENZdlNqZFpVY2VFcWM4OC9qbUlCakV0MwpDOTZYaHpHcTk5bjBWR09lR0pELzhudmxkVExHZk9uM1FJZWR4ME9FY21lTndwcnFQaUEyUVVpNkg1L1pIbTUvMURNQk04ZEVmaTh3CkJ6cmdKcEFFdEtzQ29qemQ4T01sekF2VVRXellQakQ0cFM2b2duTzY5YlArcldHMXFTeDAzVEdjMTBaNjdiOGRkMTU1d3lyYnQ3bzEKM1d4T1dWTnhyUGFVaVl4dDBGVzNsSEJoci9RMGpXNGd6WlFMOGtsanFRamJmZG1hc3h2eDk0elc8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzocfsazwdyafwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```