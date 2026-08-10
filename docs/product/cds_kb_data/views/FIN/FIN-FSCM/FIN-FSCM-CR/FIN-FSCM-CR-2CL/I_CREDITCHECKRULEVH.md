---
name: I_CREDITCHECKRULEVH
description: "This CDS view is designed to provide a value help for credit check rules, facilitating the selection and filtering of credit check rules within applications. It serves as a basic view that offers a list of available credit check rules, along with their associated text descriptions, to assist users in identifying and applying the correct rules for credit assessments. This CDS view provides the data to answer the following business questions: What are the available credit check rules that can be applied in the system? How can users filter and select specific credit check rules for their credit assessment processes? What are the descriptions or text associated with each credit check rule to aid in understanding their application? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITCHECKRULEVH')/$value
semantic_en: "This CDS view is designed to provide a value help for credit check rules, facilitating the selection and filtering of credit check rules within applications. It serves as a basic view that offers a list of available credit check rules, along with their associated text descriptions, to assist users in identifying and applying the correct rules for credit assessments. This CDS view provides the data to answer the following business questions: What are the available credit check rules that can be applied in the system? How can users filter and select specific credit check rules for their credit assessment processes? What are the descriptions or text associated with each credit check rule to aid in understanding their application? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CREDITCHECKRULEVH

**This CDS view is designed to provide a value help for credit check rules, facilitating the selection and filtering of credit check rules within applications. It serves as a basic view that offers a list of available credit check rules, along with their associated text descriptions, to assist users in identifying and applying the correct rules for credit assessments. This CDS view provides the data to answer the following business questions: What are the available credit check rules that can be applied in the system? How can users filter and select specific credit check rules for their credit assessment processes? What are the descriptions or text associated with each credit check rule to aid in understanding their application? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITCHECKRULEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditCheckRule` |  | |  |  | `CHAR(10)` | Rule for Credit Check |
