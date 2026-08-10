---
name: I_JOINTVENTURERECOVERYSTDVH
description: "This CDS view exposes language-dependent descriptive texts for Joint Venture Recovery codes per company code. It serves as the text layer for the Joint Venture Recovery master data, enabling user interfaces, value helps, and reports to display the human-readable name of each recovery code in the appropriate language. It also provides associations to the company code and language master data to support consistent localization and context-sensitive display. This CDS view provides the data to answer the following business questions: What is the language-specific name/description of a given Joint Venture Recovery code for a specific company code? Which Joint Venture Recovery codes exist in a company code and what are their descriptions in a selected language? Is a translation available for a particular Joint Venture Recovery code in the desired language? How should Joint Venture Recovery codes be displayed in lists, value helps, or reports in the user’s logon language? Which company code context applies to a given recovery code text when enriching master data or analytics through joins? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERYSTDVH')/$value
semantic_en: "This CDS view exposes language-dependent descriptive texts for Joint Venture Recovery codes per company code. It serves as the text layer for the Joint Venture Recovery master data, enabling user interfaces, value helps, and reports to display the human-readable name of each recovery code in the appropriate language. It also provides associations to the company code and language master data to support consistent localization and context-sensitive display. This CDS view provides the data to answer the following business questions: What is the language-specific name/description of a given Joint Venture Recovery code for a specific company code? Which Joint Venture Recovery codes exist in a company code and what are their descriptions in a selected language? Is a translation available for a particular Joint Venture Recovery code in the desired language? How should Joint Venture Recovery codes be displayed in lists, value helps, or reports in the user’s logon language? Which company code context applies to a given recovery code text when enriching master data or analytics through joins? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - bo:businesspartner
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - master-data
  - metadata-only
---
# I_JOINTVENTURERECOVERYSTDVH

**This CDS view exposes language-dependent descriptive texts for Joint Venture Recovery codes per company code. It serves as the text layer for the Joint Venture Recovery master data, enabling user interfaces, value helps, and reports to display the human-readable name of each recovery code in the appropriate language. It also provides associations to the company code and language master data to support consistent localization and context-sensitive display. This CDS view provides the data to answer the following business questions: What is the language-specific name/description of a given Joint Venture Recovery code for a specific company code? Which Joint Venture Recovery codes exist in a company code and what are their descriptions in a selected language? Is a translation available for a particular Joint Venture Recovery code in the desired language? How should Joint Venture Recovery codes be displayed in lists, value helps, or reports in the user’s logon language? Which company code context applies to a given recovery code text when enriching master data or analytics through joins? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERYSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `JointVentureRecoveryCode` |  | |  |  | `CHAR(2)` | Recovery Indicator |
