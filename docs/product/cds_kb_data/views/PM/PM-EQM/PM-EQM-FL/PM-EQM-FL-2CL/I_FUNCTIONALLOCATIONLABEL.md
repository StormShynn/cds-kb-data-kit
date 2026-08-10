---
name: I_FUNCTIONALLOCATIONLABEL
description: "This CDS view is designed to provide a comprehensive representation of functional location labels within a system. It calculates and determines the active functional location label and labeling system based on the status of alternative labeling. This view is essential for managing and retrieving functional location information, especially in environments where alternative labeling is used. This CDS view provides the data to answer the following business questions: What is the active label for a given functional location, considering alternative labeling status? How can we determine the labeling system associated with a functional location? What are the user-defined and primary labels for a functional location? How can we perform search operations on functional location labels using HANA's capabilities? How does the alternative labeling status affect the representation of functional location labels? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-EQM-FL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONLABEL')/$value
semantic_en: "This CDS view is designed to provide a comprehensive representation of functional location labels within a system. It calculates and determines the active functional location label and labeling system based on the status of alternative labeling. This view is essential for managing and retrieving functional location information, especially in environments where alternative labeling is used. This CDS view provides the data to answer the following business questions: What is the active label for a given functional location, considering alternative labeling status? How can we determine the labeling system associated with a functional location? What are the user-defined and primary labels for a functional location? How can we perform search operations on functional location labels using HANA's capabilities? How does the alternative labeling status affect the representation of functional location labels? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PM
  - bo:companycode
  - component:PM-EQM-FL-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-FL
  - PM-EQM-FL-2CL
  - metadata-only
---
# I_FUNCTIONALLOCATIONLABEL

**This CDS view is designed to provide a comprehensive representation of functional location labels within a system. It calculates and determines the active functional location label and labeling system based on the status of alternative labeling. This view is essential for managing and retrieving functional location information, especially in environments where alternative labeling is used. This CDS view provides the data to answer the following business questions: What is the active label for a given functional location, considering alternative labeling status? How can we determine the labeling system associated with a functional location? What are the user-defined and primary labels for a functional location? How can we perform search operations on functional location labels using HANA's capabilities? How does the alternative labeling status affect the representation of functional location labels? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONLABEL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `FunctionalLocationLabelName` |  | |  |  | `CHAR(40)` | Functional Location Label |
| `FunctionalLocLabelingSyst` |  | |  |  | `CHAR(1)` | Labeling system for functional locations |
| `FuncnlLocUserLabelName` |  | |  |  | `CHAR(40)` | Functional Location Label |
| `FuncnlLocPrimaryLabelName` |  | |  |  | `CHAR(40)` | Functional Location Label |
