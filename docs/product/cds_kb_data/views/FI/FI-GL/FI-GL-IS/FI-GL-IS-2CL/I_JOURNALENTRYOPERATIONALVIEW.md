---
name: I_JOURNALENTRYOPERATIONALVIEW
description: "This CDS view provides access to all details of a journal entry item (database table ACDOCA) joined to the details of the corresponding operational accounting document item (database table BSEG) and to the details of the corresponding journal entry header (database table BKPF) including the most important business entity, such as G/L account, cost center or profit center. The most important attributes of business entities are included, such as G/L account, cost center, profit center, segment, accounting document type, accounting document category, financial account type, document date, posting date, clearing data, account assignment data, amounts in different currencies, and also payment data. This CDS view provides the prerequisites for answering the following business questions: What are the details of a journal entry header? Which journal entry items are posted during the year? What is the company code currency of the journal entry? Which journal entries are created by a certain user? What postings have accumulated on a company code, a cost center or other objects during the year? What is the amount in company code currency of the journal entry items?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYOPERATIONALVIEW')/$value
semantic_en: "This CDS view provides access to all details of a journal entry item (database table ACDOCA) joined to the details of the corresponding operational accounting document item (database table BSEG) and to the details of the corresponding journal entry header (database table BKPF) including the most important business entity, such as G/L account, cost center or profit center. The most important attributes of business entities are included, such as G/L account, cost center, profit center, segment, accounting document type, accounting document category, financial account type, document date, posting date, clearing data, account assignment data, amounts in different currencies, and also payment data. This CDS view provides the prerequisites for answering the following business questions: What are the details of a journal entry header? Which journal entry items are posted during the year? What is the company code currency of the journal entry? Which journal entries are created by a certain user? What postings have accumulated on a company code, a cost center or other objects during the year? What is the amount in company code currency of the journal entry items?"
semantic_vi: "I_JOURNALENTRYOPERATIONALVIEW — CDS view giao diện dựa trên I_JOURNALENTRYOPERATIONALVIEW."
keywords:
  - "journalentryoperationalview"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-GL-IS-2CL
  - document
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - payment
---
# I_JOURNALENTRYOPERATIONALVIEW

**This CDS view provides access to all details of a journal entry item (database table ACDOCA) joined to the details of the corresponding operational accounting document item (database table BSEG) and to the details of the corresponding journal entry header (database table BKPF) including the most important business entity, such as G/L account, cost center or profit center. The most important attributes of business entities are included, such as G/L account, cost center, profit center, segment, accounting document type, accounting document category, financial account type, document date, posting date, clearing data, account assignment data, amounts in different currencies, and also payment data. This CDS view provides the prerequisites for answering the following business questions: What are the details of a journal entry header? Which journal entry items are posted during the year? What is the company code currency of the journal entry? Which journal entries are created by a certain user? What postings have accumulated on a company code, a cost center or other objects during the year? What is the amount in company code currency of the journal entry items?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYOPERATIONALVIEW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYOPERATIONALVIEW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYOPERATIONALVIEW')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodrwqrstxefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQxNjAxMjM3ZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTc6MDRaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kMTYwMTIzN2VmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPi9tWFpydzVLNlNmV0NWZ3BDSjJySzV4Zy8rOD08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;R043ZWNDQnVCSzhwTmI0bmtoU2gyd0s2ekNJVVl2RVVTSDNsTmFDRU42RWNUV2l0Qm15MVZiR1VnSkJCMDB4QW5yd1Q1Wi9YQ1dsVwp5RDVOVUt0UEYvajd3MVZiK1VpMWVLU3JkUENIaXV6N0dVMWRoQ0xRV1Ewa29jdnZXdFkvaTBabmN5TEZxcnB6UzQwOFJHb0o2MkxECnJDU1FFcGJrcnJNOEVWWVFQK0FzTzhwU0UybnZyeE5tWmFqc2JaNzh6V2dqaDN2YzVnVE5qVUROMU9hRXZQT293eENKa0RaN3RoL1MKUDl2THdFTzl6V2RVbkNsWWhLRGw2UGpiQjlOaEo0L0xxSW56cW1RanpVbThZbHh2NXZVM3hDOE9iOEpNTGpCM1ByNWdWVW5sZ1NTSQp4aURTdGVhckhYek1KR0NlcDVwREJ4dHNYMnRYbFZCL2Z4WmZSU1NmZkJ2VG42Q05jNGhEZ0FCeUYvS2dEQzczREhmNkE3ZFQ5MDBNCkFhRzVPVzhPb2M5dDk5b2JhVGpXbFdBWEFBUDNRWC9aUFVua0l1VFYyckdMTTRCeFpRZmg1cVlWbDJCZkQzOUVCYmdFUjBJSCs5YXoKeW1hZjJxVzNGODVaZG1jZTlwOGEzTHVWakNwQmdTcHRzYkYrSDYwSmpTaTh1dHEzMm51Q1RoSDk8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodrwqrstxefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```