---
name: I_PAYTADVICECOMPANYCODEVH
description: "This CDS view provides value help for payment advice company code data. This view should be used for value help purposes only. If you intend to select the entire business data, use the I_PaymentAdvice view instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-FXU-FI-AR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYTADVICECOMPANYCODEVH')/$value
semantic_en: "This CDS view provides value help for payment advice company code data. This view should be used for value help purposes only. If you intend to select the entire business data, use the I_PaymentAdvice view instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-FXU
  - CA-GTF-FXU-FI
  - CA-GTF-FXU-FI-AR
  - component:CA-GTF-FXU-FI-AR
  - interface-view
  - lob:cross_application components
  - lob:finance
  - payment
  - metadata-only
---
# I_PAYTADVICECOMPANYCODEVH

**This CDS view provides value help for payment advice company code data. This view should be used for value help purposes only. If you intend to select the entire business data, use the I_PaymentAdvice view instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-AR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYTADVICECOMPANYCODEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `CityName` |  | |  |  | `CHAR(25)` | City |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
