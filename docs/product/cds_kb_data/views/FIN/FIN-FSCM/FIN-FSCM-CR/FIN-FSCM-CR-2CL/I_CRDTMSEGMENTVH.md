---
name: I_CRDTMSEGMENTVH
description: "This CDS view is provides a value help for credit segments within a credit management system. It serves as a basic view that facilitates the selection and identification of credit segments by offering a searchable and ranked list of available segments. The view is intended to be used in user interfaces where users need to select or reference credit segments, ensuring that they have access to accurate and relevant segment information. This CDS view provides the data to answer the following business questions: What are the available credit segments within the credit management system? How can users efficiently search and select a specific credit segment for their credit management tasks? What is the text description associated with each credit segment to aid in understanding its purpose or usage? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMSEGMENTVH')/$value
semantic_en: "This CDS view is provides a value help for credit segments within a credit management system. It serves as a basic view that facilitates the selection and identification of credit segments by offering a searchable and ranked list of available segments. The view is intended to be used in user interfaces where users need to select or reference credit segments, ensuring that they have access to accurate and relevant segment information. This CDS view provides the data to answer the following business questions: What are the available credit segments within the credit management system? How can users efficiently search and select a specific credit segment for their credit management tasks? What is the text description associated with each credit segment to aid in understanding its purpose or usage? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - task
  - metadata-only
---
# I_CRDTMSEGMENTVH

**This CDS view is provides a value help for credit segments within a credit management system. It serves as a basic view that facilitates the selection and identification of credit segments by offering a searchable and ranked list of available segments. The view is intended to be used in user interfaces where users need to select or reference credit segments, ensuring that they have access to accurate and relevant segment information. This CDS view provides the data to answer the following business questions: What are the available credit segments within the credit management system? How can users efficiently search and select a specific credit segment for their credit management tasks? What is the text description associated with each credit segment to aid in understanding its purpose or usage? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMSEGMENTVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
