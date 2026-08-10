---
name: I_TOTALACCOUNTSRECEIVABLES
description: "This CDS view provides you with an overview of the total receivables of the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables?"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOTALACCOUNTSRECEIVABLES')/$value
semantic_en: "This CDS view provides you with an overview of the total receivables of the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables?"
semantic_vi: "I_TOTALACCOUNTSRECEIVABLES — CDS view giao diện dựa trên I_TOTALACCOUNTSRECEIVABLES."
keywords:
  - "totalaccountsreceivables"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
---
# I_TOTALACCOUNTSRECEIVABLES

**This CDS view provides you with an overview of the total receivables of the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOTALACCOUNTSRECEIVABLES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOTALACCOUNTSRECEIVABLES')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOTALACCOUNTSRECEIVABLES')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzoevccuxaxefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWU1Y2M0N2E3ZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MjE6MzlaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1lNWNjNDdhN2VmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPm04RFlFMDNEczM5QWhlNnVMUS9YTm0zSTByaz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;Uk5FUVdEbXhqRytzNHpjWmNkT2tLa0wxcmF0OG9pdFdVbElPK1RjbEpEMWFjT0NVZkRBbFdKMnJLWUpyeDJBSHNBODJCUHNSNFZRTQpqbkt2NC9ITDhRcUpHamIzdlM4UU9MekRLUFV6VXlGVWxkN2VXb0R5QVpUQjlHOGlSaW1WUEx1S1VVNC9TcmNicjU3MmMzZStRYlVkCnVJR2c0ekVPSmh3cm8vRFg2bmlHNUxtMkxJZWFlbXVBQk15NUcvTTMrR2t3R3NzcTFRaVUwZmROVllyM2lMRmoxclZRR3NKZ29SV3AKQnNYL3hLV1d1bE5sOERJRWM4RXBtdWdwN3RPTFV0dlZkeFZ3OUUrRk00K1FMZldneUlQWHduVnhjUTZUWmgzNjVkbytlVk1iS0dPbwpXMGM4R1BVb1JieTAwTlMvNlNBQVFiTnpKZHBvNVdoakFhSnRPb2RrMHRDbEpoNXhZMmo5engrRk5ubFpZUi8wUEM4Zys4dWFPUGNKCnpxaEZGajlYaXJlTjAyMTJDVGFScjF3b1NCdmw0aVJHUytiSm56em1TdHgvUCtyT0duNFpEbEZSMzIxYXNDU09ma29iL09jN1c1cjYKQkthZ3JHRzJBK09uUVd0VUtYZ3F0VEJkT1dDblE5SDlkQmVnd3MrblRPdUdWOTZKcEFSRmcrZkY8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzoevccuxaxefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```