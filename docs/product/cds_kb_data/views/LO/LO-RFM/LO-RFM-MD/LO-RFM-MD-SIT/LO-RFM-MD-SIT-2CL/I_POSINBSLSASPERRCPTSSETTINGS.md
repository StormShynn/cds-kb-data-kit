---
name: I_POSINBSLSASPERRCPTSSETTINGS
description: "This CDS view enables you to query and report on the settings for point of sale inbound profiles, including storage location and goods movement types for sales and returns, integrate them into other applications, or use them as a data source for analytical or transactional processes in SAP S/4HANA. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are configured in the system? What are the assigned storage locations for each point of sale inbound profile? Which goods movement types are set for sales and returns per receipt for each profile? How are specific store receipts processed with respect to sales and returns in logistics? How do settings differ between sales and return processes for various stores or profiles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBSLSASPERRCPTSSETTINGS')/$value
semantic_en: "This CDS view enables you to query and report on the settings for point of sale inbound profiles, including storage location and goods movement types for sales and returns, integrate them into other applications, or use them as a data source for analytical or transactional processes in SAP S/4HANA. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are configured in the system? What are the assigned storage locations for each point of sale inbound profile? Which goods movement types are set for sales and returns per receipt for each profile? How are specific store receipts processed with respect to sales and returns in logistics? How do settings differ between sales and return processes for various stores or profiles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_POSINBSLSASPERRCPTSSETTINGS — CDS view giao diện dựa trên I_POSINBSLSASPERRCPTSSETTINGS."
keywords:
  - "posinbslsasperrcptssettings"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - transaction
  - bo:purchaseorder
---
# I_POSINBSLSASPERRCPTSSETTINGS

**This CDS view enables you to query and report on the settings for point of sale inbound profiles, including storage location and goods movement types for sales and returns, integrate them into other applications, or use them as a data source for analytical or transactional processes in SAP S/4HANA. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are configured in the system? What are the assigned storage locations for each point of sale inbound profile? Which goods movement types are set for sales and returns per receipt for each profile? How are specific store receipts processed with respect to sales and returns in logistics? How do settings differ between sales and return processes for various stores or profiles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBSLSASPERRCPTSSETTINGS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBSLSASPERRCPTSSETTINGS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBSLSASPERRCPTSSETTINGS')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodwtetbbysfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQ2M2UzYmI4MmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTg6MTBaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kNjNlM2JiODJmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPitRaHFmejFJVkx0L2wvekVydytneVVTbVVzQT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;bXppTzloRjAyNTh3NXR0anVTUUIwSlVtZUZvNHVyU213L29HZTVLaVFnN0cvSWdUN0lFRVVDZFZlZkFHdnpUVWNtMHdPQk1tQVJGZQpBWWFjbVkyVkZ0U1ZUcDNDS0VjSzQwVFIwSzNFUWo3TUFvQTl3ZGxId1A5bHl6QktoOXRlc0xTY3BJZWZrOFdiQUl3bmM3cHp4azZkClBpbm1aUTJ5STlDSUhib1BNaHJCL2hQZmZGOXBBYWx3QVFGcUdtRTQxaVJMUDZlVlFmb1paQzR3eHlEZnZ5UHN3QjBxTmd1c0lNRDEKdHFJa2RBMmNWa1JlLy90c2RhNkdERjZUQStGcnRxeHREd2p2RHMwZkRaWjhQdjJyUFo3RTl0TWhFYTFnV25Nck0vM3lSdGVmUTZ0ego1ZlBFSGVURVZLNUpWeExlRE51ZXVVZTdSczNOZTM1U3dhSHlIemFEM2ZIbVZjakFpb05hUmF0WnlzWGdNcEwvWTl3MFREK1Q4cDhUCmI0MU9sdHMrS0o3Q3RNK2N2ekdZdlNiVjRwWmRSRFJTQTg2VFRNQXlDd2pvK2hIaUdXMHBIVEJoS3VEV1NFNGtuQ1Byem1iWHpVQUMKQ1Fmc0VFeCtITG5lSkdYYlZ4ZmdXZ2NWYTNlVjNVVVVjTTBQVjlLc2prSWpyc01NY2RQaWpNeFk8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodwtetbbysfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```