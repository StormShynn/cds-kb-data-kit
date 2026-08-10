---
name: I_JOURNALENTRYITEMBROWSER
description: "This CDS view provides access to all details of a journal entry item (database table ACDOCA) including the most important business entity, such as company code, G/L account, profit center, segment and many more. This Cube view is based on the Journal Entry Item CDS view. If you want to create your own CDS view with the Custom CDS Views app, then you can either use the Journal Entry Item Browser CDS view (I_JournalEntryItemBrowser) or the Journal Entry Item CDS view (I_JournalEntryItem). If you want to use the Custom Fields App and Custom Logic App app to extend custom fields, you need to use the Journal Entry Item CDS view (I_JournalEntryItem). The CDS view does not expose technical balance carried forward items of period 000. This CDS view provides the prerequisites for answering the following business questions: Which journal entry items are posted during the year? What is the company code currency of the journal entry item? What is the amount in company code currency of the journal entry items?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBROWSER')/$value
semantic_en: "This CDS view provides access to all details of a journal entry item (database table ACDOCA) including the most important business entity, such as company code, G/L account, profit center, segment and many more. This Cube view is based on the Journal Entry Item CDS view. If you want to create your own CDS view with the Custom CDS Views app, then you can either use the Journal Entry Item Browser CDS view (I_JournalEntryItemBrowser) or the Journal Entry Item CDS view (I_JournalEntryItem). If you want to use the Custom Fields App and Custom Logic App app to extend custom fields, you need to use the Journal Entry Item CDS view (I_JournalEntryItem). The CDS view does not expose technical balance carried forward items of period 000. This CDS view provides the prerequisites for answering the following business questions: Which journal entry items are posted during the year? What is the company code currency of the journal entry item? What is the amount in company code currency of the journal entry items?"
semantic_vi: "I_JOURNALENTRYITEMBROWSER — CDS view giao diện dựa trên I_JOURNALENTRYITEMBROWSER."
keywords:
  - "journalentryitembrowser"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_JOURNALENTRYITEMBROWSER

**This CDS view provides access to all details of a journal entry item (database table ACDOCA) including the most important business entity, such as company code, G/L account, profit center, segment and many more. This Cube view is based on the Journal Entry Item CDS view. If you want to create your own CDS view with the Custom CDS Views app, then you can either use the Journal Entry Item Browser CDS view (I_JournalEntryItemBrowser) or the Journal Entry Item CDS view (I_JournalEntryItem). If you want to use the Custom Fields App and Custom Logic App app to extend custom fields, you need to use the Journal Entry Item CDS view (I_JournalEntryItem). The CDS view does not expose technical balance carried forward items of period 000. This CDS view provides the prerequisites for answering the following business questions: Which journal entry items are posted during the year? What is the company code currency of the journal entry item? What is the amount in company code currency of the journal entry items?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBROWSER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBROWSER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYITEMBROWSER')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodrteybuwwfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQxM2U4YjQ2NmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTc6MDJaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kMTNlOGI0NjZmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPmZRRTBVMXg5bTZoZVFEOTJjMkk0eENWd1poVT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;S0g5Sy9TYXBVN3NvQXl4Y2FMcHkyY2tNQm1LV0ZidDhhb0NGSkVWeXhiRUtTbzcwQmhUdkZ0OHd0TWJmYXVGMUs3QURGUkVYTlVPUwpMaVAramI0NEFqTUxldDUySjErTSsxMVRoYk1RZE9jQkQ2RmNuSlIzbi9SR2R5MGZoTzUweVFGOWR3YnY5czY4VnMyT3FGTGM4eE16CmQ1U0pMbTR3V1ZQeVJkYm9VV1dpTjliUk9BT0FVc3FTTm5hc080MFk5ekV1TC9RdGpCWTVUZ3ZtcTEvMldlYWFmWVpqRWNvdHo4VFUKcFB3YkVjS3Bsd0R1VkpYWm92cDBhNDl4WUpya29nY2pHU1l6MGU0a083cXEySXpIeFVOS2lBZjNrVWVIT210bWhIZTJhQWpqNHNXWAplTGVBNHVES0hCdTNhWDJVdGNVNDBrMEFVMUJiUFFzVTNiODhPVFErdnhVZ2pGdnNCdDJ1cURhVzdsZll3R3ZPTFZRT3VpTlluSko0CjJ1eVM2RWdGN3hVamMyRll5QzNPdkNHMldBcmFYRFF0a3U4MWZzalBpNXozcmd2djZwMTRlK2F2QWFwMktZS3h1NFIrR0l5R00zcnUKdGdqSzUyNThHUWltZFhuREE3TngreUpwY1JNZXkrem54ZFBHU3ZnODdhTHRRSjQ4ZTZMQUlOMUU8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodrteybuwwfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```