---
name: I_RESPYMGMTTEAMATTRIBUTEAPI
description: "This CDS view is used to get information about team attributes. A team attribute, also known as responsibility definition, is a name-value pair. It can be used to differentiate teams used in the same team category. It can also be used to query teams. An example of a responsibility definition and its values in a team is Plant= 1001 (Bangalore), 2001 (Walldorf) in the Procurement team category. This CDS view provides the data to answer the following business question: What are the attribute names and values for a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-RM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMATTRIBUTEAPI')/$value
semantic_en: "This CDS view is used to get information about team attributes. A team attribute, also known as responsibility definition, is a name-value pair. It can be used to differentiate teams used in the same team category. It can also be used to query teams. An example of a responsibility definition and its values in a team is Plant= 1001 (Bangalore), 2001 (Walldorf) in the Procurement team category. This CDS view provides the data to answer the following business question: What are the attribute names and values for a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-RM
  - component:CA-GTF-RM
  - interface-view
  - lob:cross_application components
  - plan
  - metadata-only
---
# I_RESPYMGMTTEAMATTRIBUTEAPI

**This CDS view is used to get information about team attributes. A team attribute, also known as responsibility definition, is a name-value pair. It can be used to differentiate teams used in the same team category. It can also be used to query teams. An example of a responsibility definition and its values in a team is Plant= 1001 (Bangalore), 2001 (Walldorf) in the Procurement team category. This CDS view provides the data to answer the following business question: What are the attribute names and values for a team? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-RM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPYMGMTTEAMATTRIBUTEAPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RespyMgmtGlobalTeamID` |  | |  |  | `CHAR(40)` | Global Team ID in Responsibility Mgmt. |
| `RespyMgmtAttributeName` |  | |  |  | `CHAR(30)` | Responsibility Definition Name |
| `RespyMgmtAttributeSign` |  | |  |  | `CHAR(1)` | Type of SIGN component in row type of a Ranges type |
| `RespyMgmtAttributeOption` |  | |  |  | `CHAR(2)` | Type of OPTION component in row type of a Ranges type |
| `RespyMgmtAttributeLowValue` |  | |  |  | `CHAR(50)` | Start Value of Selection Criteria |
| `RespyMgmtAttributeHighValue` |  | |  |  | `CHAR(50)` | End Value of Selection Criteria |
