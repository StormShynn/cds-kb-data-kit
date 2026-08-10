---
name: I_SEPAMANDATE
description: "This CDS view is used to show all information about the SEPA Mandate. This CDS view provides the data to answer the following business questions: What is the basic information (Creditor ID, Version, StartDate, EndDate etc.) of the SEPA Mandate? What is the sender of the SEPA Mandate? What is the sender information (IBAN, Bank Swift Code, alternative payer, Country, City etc.) of the SEPA Mandate? What is the recipient of the SEPA Mandate? What is the recipient information (alternative payee, Country, City etc.) of the SEPA Mandate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATE')/$value
semantic_en: "This CDS view is used to show all information about the SEPA Mandate. This CDS view provides the data to answer the following business questions: What is the basic information (Creditor ID, Version, StartDate, EndDate etc.) of the SEPA Mandate? What is the sender of the SEPA Mandate? What is the sender information (IBAN, Bank Swift Code, alternative payer, Country, City etc.) of the SEPA Mandate? What is the recipient of the SEPA Mandate? What is the recipient information (alternative payee, Country, City etc.) of the SEPA Mandate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_SEPAMANDATE — CDS view giao diện dựa trên I_SEPAMANDATE."
keywords:
  - "sepamandate"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - bo:companycode
  - component:FI-AR-IS-2CL
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
---
# I_SEPAMANDATE

**This CDS view is used to show all information about the SEPA Mandate. This CDS view provides the data to answer the following business questions: What is the basic information (Creditor ID, Version, StartDate, EndDate etc.) of the SEPA Mandate? What is the sender of the SEPA Mandate? What is the sender information (IBAN, Bank Swift Code, alternative payer, Country, City etc.) of the SEPA Mandate? What is the recipient of the SEPA Mandate? What is the recipient information (alternative payee, Country, City etc.) of the SEPA Mandate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATE')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodawseqbbcfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWRhNjJlMGJiY2Y2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTk6MDVaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kYTYyZTBiYmNmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPmNWak5vdi9PKzNtcTFPcXp5d1p0ZjZGanRXYz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;TXFCM2ZTcUt5UGs2bHVSQ3ZqUnkrL3h2K01EMlJlb2lKNjlUdlBQQTJHZUhOSFM5M0FaY0RzT29xUW9CRVRvWCtMcVZTNjJWeElSVgpNWlQ2WTlqbThsbnRCb052VjgzSHZJei9La1ROMXdmMjM3a0wrRmkvcEh5U0phRmlhT0dwTTc3cDFaQTR4L2tMeldEWExFT3ZVQ0FGCkNqWVVGaU5OQ1Y1WlgvMkJiS0prQ0p4S2FqWUxyTWMzaXpMQ1VqbmJiQ0hVeFp0RjRjNjZ1djB2WllvbGdyRTR3MlVjMm1Hak1acnAKMU92U0J4RXFXcVVLREF3QjZDaWxpQURndk43SGN6U1VHZVIrV0xOOTlQNHFSWEN5cTVQbUlKdG1UNzk0ZVZmVUFsRDZ3dGFnbXpaUQp6aEJMTzNvWFUxOHRyOHAvUzNjQkJFZlBNb1AvU3FiN3dkOW12dWhlSSt1TVpLamlxRnNRMVZpSUlyWkM3anlZdU0vUVdVeS8wQnJTCjlvNkcyN2srUDBvcHJVbFRXZ2ZOaFNHSGtoOVVDL3EzSWlweGlBMHlNMzZsWG80eVEwZ2h4TlpUMFpNMnpSaDZ0WnlodkEvTyt3ZHIKWXpnVlJKMHcxcWphd2FDZW4vYWZxdjFIWVc4bHdoTmN6cGJ6RDRpbVlLNXN3bnpJM2sxTjROeHc8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodawseqbbcfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```