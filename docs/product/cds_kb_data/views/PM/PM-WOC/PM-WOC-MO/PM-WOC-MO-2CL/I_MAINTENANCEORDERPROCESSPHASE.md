---
name: I_MAINTENANCEORDERPROCESSPHASE
description: "This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: Planning Completion Post Execution Execution Scheduling Preparation Approval This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which maintenance order processing phases can be selected when updating or filtering maintenance order status? What are the text descriptions for each maintenance order processing phase in different languages? Which processing phases have subordinate or related phase classifications? What phase values are actively maintained in the system for maintenance order lifecycle management (excluding preliminary phases 01 and 02)? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPROCESSPHASE')/$value
semantic_en: "This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: Planning Completion Post Execution Execution Scheduling Preparation Approval This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which maintenance order processing phases can be selected when updating or filtering maintenance order status? What are the text descriptions for each maintenance order processing phase in different languages? Which processing phases have subordinate or related phase classifications? What phase values are actively maintained in the system for maintenance order lifecycle management (excluding preliminary phases 01 and 02)? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_MAINTENANCEORDERPROCESSPHASE — CDS view giao diện dựa trên I_MAINTENANCEORDERPROCESSPHASE."
keywords:
  - "maintenanceorderprocessphase"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - plan
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# I_MAINTENANCEORDERPROCESSPHASE

**This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: Planning Completion Post Execution Execution Scheduling Preparation Approval This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which maintenance order processing phases can be selected when updating or filtering maintenance order status? What are the text descriptions for each maintenance order processing phase in different languages? Which processing phases have subordinate or related phase classifications? What phase values are actively maintained in the system for maintenance order lifecycle management (excluding preliminary phases 01 and 02)? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPROCESSPHASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPROCESSPHASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPROCESSPHASE')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodsdbwrztefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQyZGI2MTkzZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTc6MjRaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kMmRiNjE5M2VmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPkswdGQyVUJyODIyTWN4WElUZzNwZlJxMVVORT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;RkFJTkxxanQ3b1pvbVF4eEhPOWVqaU1ZVEMwVjJWNGgzeU9wdmExazFTdmdnazVFczdLSWZoNVlOOGwrSXpZTkk4eFhvMjI1ZmZzaQpaVXM4dk1hN0dqKzNVemIzVGJhS3l6QllMU25WeklCWm9rRytxWlh1QlJFRHlzUHFSMC9HR2M4U05WYU5rTUViT0lYMS9OUTR4V2lYCkZ2ZE1ITXl1SWFUTVdwZmNtWlFRZWFOQ2U0L0phWk9IMkJJUWFZbkpFTGlkVytRem9zUndlVmU2NXIwTjJLZllvZ0o3MUVicGN1VVEKZVgwaGxFRXUrWitZbk1sLzk0M0o2QjZUdGpBNU00WE9DNjBlRlJoRlMzWkxTcm44MXU5akhCZWZxVXkySFRDOVpzVzRQNmxSMEhrbApUVGVNc3lMMVBjbHptWFRFR2FhMW1BYXk3YzN2UUJobmN0NW9RQStWZzI5b2Ezakc5OVQ0UFhhTlZaZmV0cWFFTUdyTXQxSVRrY1l0CnRDdng3MmRCTXlEUndIK0l4VmlPa2ttNHhzUkJ0V3RCcXRnWU9OMzZpZXhxNTBEcEVObEs4ckdkQ1N6b3cxckN2QnFyd3U1UlkwMWcKdUdvcVRLcW51bld4NzN3bU9nNzhLMy93aTZ1NEx3d0VQcFNhd2tNT2FLNkoxRlMvM2kxOENRSlY8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodsdbwrztefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```