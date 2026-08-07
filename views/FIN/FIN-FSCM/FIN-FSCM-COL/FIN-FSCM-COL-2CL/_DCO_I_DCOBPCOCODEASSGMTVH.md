---
name: _DCO_I_DCOBPCOCODEASSGMTVH
description: This CDS view provides value help for company codes assigned to business partners in the business partner hierarchy. It enables users to search and select valid company code assignments for business partners within the context of the collection process. This CDS view provides the data to answer the following business questions: Which company codes are assigned to a specific business partner in the business partner hierarchy? What are the valid company code assignments for business partners in the collection process? How can I filter business partner data by assigned collection company codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DCOBPCOCODEASSGMTVH')/$value
semantic_en: This CDS view provides value help for company codes assigned to business partners in the business partner hierarchy. It enables users to search and select valid company code assignments for business partners within the context of the collection process. This CDS view provides the data to answer the following business questions: Which company codes are assigned to a specific business partner in the business partner hierarchy? What are the valid company code assignments for business partners in the collection process? How can I filter business partner data by assigned collection company codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# _DCO_I_DCOBPCOCODEASSGMTVH

**This CDS view provides value help for company codes assigned to business partners in the business partner hierarchy. It enables users to search and select valid company code assignments for business partners within the context of the collection process. This CDS view provides the data to answer the following business questions: Which company codes are assigned to a specific business partner in the business partner hierarchy? What are the valid company code assignments for business partners in the collection process? How can I filter business partner data by assigned collection company codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_DCOBPCOCODEASSGMTVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `DebtCollectionsCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Collections and Dispute Automation |
| `DCoCompanyCodeName` |  | |  |  | `CHAR(50)` | Company Code in Collections and Dispute Automation (Name) |
