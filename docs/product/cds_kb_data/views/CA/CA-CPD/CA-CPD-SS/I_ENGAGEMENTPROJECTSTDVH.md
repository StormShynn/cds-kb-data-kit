---
name: I_ENGAGEMENTPROJECTSTDVH
description: "This view provides value help for engagement projects. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Engagement Project instead. You may use the parameter EngagementProjectCategory by passing the value C or I to retrieve customer projects or internal projects respectively. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTDVH')/$value
semantic_en: "This view provides value help for engagement projects. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Engagement Project instead. You may use the parameter EngagementProjectCategory by passing the value C or I to retrieve customer projects or internal projects respectively. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - project
  - metadata-only
---
# I_ENGAGEMENTPROJECTSTDVH

**This view provides value help for engagement projects. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Engagement Project instead. You may use the parameter EngagementProjectCategory by passing the value C or I to retrieve customer projects or internal projects respectively. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `EngagementProjectName` |  | |  |  | `CHAR(40)` | Customer Project Name |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ProjectManager` |  | |  |  | `NUMC(8)` |  |
| `ProjectManagerWorkAgreement` |  | |  |  | `NUMC(8)` |  |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
