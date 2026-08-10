---
name: I_CREDITCHECKRULE
description: "This CDS view provides a structured representation of credit check rules within a system. It serves as a dimension in analytical scenarios, allowing users to extract and analyze data related to credit check rules. The view includes associations to text descriptions for better understanding and interpretation of the rules. This CDS view provides the data to answer the following business questions: What are the defined credit check rules within the system? How can the credit check rules be associated with their descriptive texts for better clarity? How can these credit check rules be utilized in analytical processes to assess credit management strategies? What are the key identifiers for each credit check rule that can be used in reporting and data extraction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITCHECKRULE')/$value
semantic_en: "This CDS view provides a structured representation of credit check rules within a system. It serves as a dimension in analytical scenarios, allowing users to extract and analyze data related to credit check rules. The view includes associations to text descriptions for better understanding and interpretation of the rules. This CDS view provides the data to answer the following business questions: What are the defined credit check rules within the system? How can the credit check rules be associated with their descriptive texts for better clarity? How can these credit check rules be utilized in analytical processes to assess credit management strategies? What are the key identifiers for each credit check rule that can be used in reporting and data extraction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_CREDITCHECKRULE

**This CDS view provides a structured representation of credit check rules within a system. It serves as a dimension in analytical scenarios, allowing users to extract and analyze data related to credit check rules. The view includes associations to text descriptions for better understanding and interpretation of the rules. This CDS view provides the data to answer the following business questions: What are the defined credit check rules within the system? How can the credit check rules be associated with their descriptive texts for better clarity? How can these credit check rules be utilized in analytical processes to assess credit management strategies? What are the key identifiers for each credit check rule that can be used in reporting and data extraction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITCHECKRULE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditCheckRule` |  | |  |  | `CHAR(10)` | Rule for Credit Check |
