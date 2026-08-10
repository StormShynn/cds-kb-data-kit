---
name: I_GLACCOUNTHIERARCHYSTDVH
description: "This CDS view is designed to provide a structured representation of the General Ledger Account Hierarchy, which serves as a value help for users seeking information about GL account hierarchies. It facilitates efficient searching and retrieval of GL account hierarchy data, ensuring that users can access relevant information quickly and accurately. This view provides value help for GLAccountHierarchy. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the available General Ledger Account Hierarchies within the system? What are the validity periods for each General Ledger Account Hierarchy? How can users access descriptive text information related to specific GL account hierarchies? How can users perform searches on GL account hierarchies with enhanced search capabilities, such as fuzziness and ranking? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERARCHYSTDVH')/$value
semantic_en: "This CDS view is designed to provide a structured representation of the General Ledger Account Hierarchy, which serves as a value help for users seeking information about GL account hierarchies. It facilitates efficient searching and retrieval of GL account hierarchy data, ensuring that users can access relevant information quickly and accurately. This view provides value help for GLAccountHierarchy. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the available General Ledger Account Hierarchies within the system? What are the validity periods for each General Ledger Account Hierarchy? How can users access descriptive text information related to specific GL account hierarchies? How can users perform searches on GL account hierarchies with enhanced search capabilities, such as fuzziness and ranking? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-GL-GL-N-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-N
  - FI-GL-GL-N-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_GLACCOUNTHIERARCHYSTDVH

**This CDS view is designed to provide a structured representation of the General Ledger Account Hierarchy, which serves as a value help for users seeking information about GL account hierarchies. It facilitates efficient searching and retrieval of GL account hierarchy data, ensuring that users can access relevant information quickly and accurately. This view provides value help for GLAccountHierarchy. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the available General Ledger Account Hierarchies within the system? What are the validity periods for each General Ledger Account Hierarchy? How can users access descriptive text information related to specific GL account hierarchies? How can users perform searches on GL account hierarchies with enhanced search capabilities, such as fuzziness and ranking? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERARCHYSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | G/L Account Hierarchy |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
