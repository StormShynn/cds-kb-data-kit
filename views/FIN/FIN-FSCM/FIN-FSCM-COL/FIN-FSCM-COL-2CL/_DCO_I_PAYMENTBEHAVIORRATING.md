---
name: _DCO_I_PAYMENTBEHAVIORRATING
description: This CDS view provides access to payment behavior rating values. It retrieves domain values for payment behavior ratings from the data dictionary and enables text associations for multilingual support. This CDS view provides the data to answer the following business questions: What are the available payment behavior rating categories? How can I classify customer payment behavior in my business processes? What rating values can be assigned to evaluate payment reliability? This view provides supported values for DCoPaymentBehaviorRating. The values and their meanings are: Value Meaning - N/A &nbsp; Not Yet Calculated A Excellent B Good C Moderate D Weak E Critical To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PAYMENTBEHAVIORRATING')/$value
semantic_en: This CDS view provides access to payment behavior rating values. It retrieves domain values for payment behavior ratings from the data dictionary and enables text associations for multilingual support. This CDS view provides the data to answer the following business questions: What are the available payment behavior rating categories? How can I classify customer payment behavior in my business processes? What rating values can be assigned to evaluate payment reliability? This view provides supported values for DCoPaymentBehaviorRating. The values and their meanings are: Value Meaning - N/A &nbsp; Not Yet Calculated A Excellent B Good C Moderate D Weak E Critical To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-COL-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - payment
  - metadata-only
---
# _DCO_I_PAYMENTBEHAVIORRATING

**This CDS view provides access to payment behavior rating values. It retrieves domain values for payment behavior ratings from the data dictionary and enables text associations for multilingual support. This CDS view provides the data to answer the following business questions: What are the available payment behavior rating categories? How can I classify customer payment behavior in my business processes? What rating values can be assigned to evaluate payment reliability? This view provides supported values for DCoPaymentBehaviorRating. The values and their meanings are: Value Meaning - N/A &nbsp; Not Yet Calculated A Excellent B Good C Moderate D Weak E Critical To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PAYMENTBEHAVIORRATING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoPaymentBehaviorRating` |  | |  |  | `CHAR(2)` | Payment Behavior Rating |
