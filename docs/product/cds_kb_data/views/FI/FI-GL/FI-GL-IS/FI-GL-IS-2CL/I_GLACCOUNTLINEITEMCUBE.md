---
name: I_GLACCOUNTLINEITEMCUBE
description: "This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Compared to the G/L Account Line Item CDS view, in this G/L Account Line Item Cube CDS view, additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting? What postings have accumulated on a cost center during the year? What is the balance of a G/L account as of today?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMCUBE')/$value
semantic_en: "This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Compared to the G/L Account Line Item CDS view, in this G/L Account Line Item Cube CDS view, additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting? What postings have accumulated on a cost center during the year? What is the balance of a G/L account as of today?"
semantic_vi: "I_GLACCOUNTLINEITEMCUBE — CDS view giao diện dựa trên I_GLACCOUNTLINEITEMCUBE."
keywords:
  - "G/L Account Line Items Cube"
  - "glaccountlineitemcube"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - master-data
---
# I_GLACCOUNTLINEITEMCUBE

**This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Compared to the G/L Account Line Item CDS view, in this G/L Account Line Item Cube CDS view, additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting? What postings have accumulated on a cost center during the year? What is the balance of a G/L account as of today?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMCUBE')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzoceaedatssfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWNlYWVkYTMyMmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTY6MjlaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jZWFlZGEzMjJmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPnIzVVdmQ0ZTdXVLMk5JOEpFbkQ1dEVIZFRMST08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;VmZEVkhZN3VaUFZsZDhwbFNoVkRncUdpL09KU2Y4NFhsTFJmaTczb2hITU1XNjh3VEx6cXdKeEN6ZkJSNkxob2hwVno3UzNlTXpoUApIdnFtZlI5MVhnUHVRZ01BWnE2UnBVUzFIV21NZUJDSG1zdER3R0xQaE56MU1obzU4QzFyaFFaWUxEanNtZExJbkhTaEFrL3lqQnhsClE4VnFkN29UMnBScWxHZEZmYXI2ZkRDWjU2L0tWZGhnTFRnM01RVWxSUGc0bTNvdWE4d00wRVZIbXBWZXdGMlBPTnRrdGM0R0pLVXQKNk1aSEVJL2lQVCtTVGl4b3lHa21OSEc1Z1JCUDdmUnovOGdRRW9IMEQ3Zk1FaG4ycGIxUE1rMVM2Zk92NXBTRU92YXdlRmVKSDEyZgoxV2hBT0Z0eHVBUEJxaDk2cjFpNTYwNTV6d1I1dUN2bDdhZmI4ajkza3N6a3BmNzhLNERXeUt5SE8xQWpxVU51Wjg2WnJiUzRIZ1ZCCmsxNVNqTlovVER3YkJoTVFYQzdaWW9ELzJKck1JY3huTEdjTCtwTFVaa0lpZUlreW1lOHpIdEdQeWZoT0VLVXNSSG01M0pyVytHbXIKM25sRS9yWi9xUTVRVTNaRjJON2MyQjhPNSsxNTNGY0RrOUpEWDhsQitxL01ZUEZsQitUVk1LS2U8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzoceaedatssfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```