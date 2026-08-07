---
name: _DCO_I_PAYMENTDIFFERENCEREASON
description: This CDS view provides access to payment difference reasons configured in collections and dispute automation. It retrieves payment difference reason codes along with their associated logical system and company code information. This CDS view provides the data to answer the following business questions: What payment difference reasons are configured for a specific company code? Which payment difference reasons are available across different logical systems? How can I retrieve payment difference reason descriptions in different languages? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PAYMENTDIFFERENCEREASON')/$value
semantic_en: This CDS view provides access to payment difference reasons configured in collections and dispute automation. It retrieves payment difference reason codes along with their associated logical system and company code information. This CDS view provides the data to answer the following business questions: What payment difference reasons are configured for a specific company code? Which payment difference reasons are available across different logical systems? How can I retrieve payment difference reason descriptions in different languages? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - payment
  - metadata-only
---
# _DCO_I_PAYMENTDIFFERENCEREASON

**This CDS view provides access to payment difference reasons configured in collections and dispute automation. It retrieves payment difference reason codes along with their associated logical system and company code information. This CDS view provides the data to answer the following business questions: What payment difference reasons are configured for a specific company code? Which payment difference reasons are available across different logical systems? How can I retrieve payment difference reason descriptions in different languages? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PAYMENTDIFFERENCEREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code (FI System) |
| `PaymentDifferenceReason` |  | |  |  | `CHAR(3)` | Payment Difference Reason |
| `LogicalSystemName` |  | |  |  | `CHAR(40)` | Name of Logical System |
| `CompanyCodeDescription` |  | |  |  | `CHAR(50)` | Company Code in FI System (Name) |
