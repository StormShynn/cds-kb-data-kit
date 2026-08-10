---
name: I_ENTPROJSETTLMTRULE
description: "This CDS view provides a comprehensive interface for managing and accessing settlement rules for enterprise project Work Breakdown Structure (WBS) elements. It combines project element data with controlling object settlement rules to enable the configuration and tracking of how costs and revenues from project WBS elements are settled to other objects (such as assets, cost centers, or G/L accounts). The view supports authorization control and includes audit trail information for settlement rule maintenance. This CDS view provides the data to answer the following business questions: What settlement rules are configured for each WBS element in an enterprise project, including the allocation structure and settlement profile being used? When was a settlement rule last created or modified, and by which user, to support audit and compliance requirements? Which WBS elements have settlement rules that were last used in a specific fiscal period and year for settlement processing tracking? What is the processing sequence and currency configuration for settlement rules across different project elements? Which controlling objects (WBS elements) are associated with specific settlement rules, including their organizational assignments such as profit center, company code, and cost center? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTRULE')/$value
semantic_en: "This CDS view provides a comprehensive interface for managing and accessing settlement rules for enterprise project Work Breakdown Structure (WBS) elements. It combines project element data with controlling object settlement rules to enable the configuration and tracking of how costs and revenues from project WBS elements are settled to other objects (such as assets, cost centers, or G/L accounts). The view supports authorization control and includes audit trail information for settlement rule maintenance. This CDS view provides the data to answer the following business questions: What settlement rules are configured for each WBS element in an enterprise project, including the allocation structure and settlement profile being used? When was a settlement rule last created or modified, and by which user, to support audit and compliance requirements? Which WBS elements have settlement rules that were last used in a specific fiscal period and year for settlement processing tracking? What is the processing sequence and currency configuration for settlement rules across different project elements? Which controlling objects (WBS elements) are associated with specific settlement rules, including their organizational assignments such as profit center, company code, and cost center? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CO
  - account
  - bo:companycode
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - interface-view
  - lob:controlling
  - project
  - metadata-only
---
# I_ENTPROJSETTLMTRULE

**This CDS view provides a comprehensive interface for managing and accessing settlement rules for enterprise project Work Breakdown Structure (WBS) elements. It combines project element data with controlling object settlement rules to enable the configuration and tracking of how costs and revenues from project WBS elements are settled to other objects (such as assets, cost centers, or G/L accounts). The view supports authorization control and includes audit trail information for settlement rule maintenance. This CDS view provides the data to answer the following business questions: What settlement rules are configured for each WBS element in an enterprise project, including the allocation structure and settlement profile being used? When was a settlement rule last created or modified, and by which user, to support audit and compliance requirements? Which WBS elements have settlement rules that were last used in a specific fiscal period and year for settlement processing tracking? What is the processing sequence and currency configuration for settlement rules across different project elements? Which controlling objects (WBS elements) are associated with specific settlement rules, including their organizational assignments such as profit center, company code, and cost center? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTRULE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectElementUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `ControllingObject` |  | |  |  | `CHAR(22)` | Object Number |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDate` |  | |  |  | `DATS(8)` | Created On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `CtrlgObjectSettlementRuleName` |  | |  |  | `CHAR(40)` | Description of Settlement Rule |
| `AllocationStructure` |  | |  |  | `CHAR(6)` | Allocation Structure for Settlement/Assessment |
| `SettlementSourceStructure` |  | |  |  | `CHAR(2)` | Source Structure |
| `ControllingSettlementProfile` |  | |  |  | `CHAR(6)` | Settlement Profile |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `SettlmtRuleLastUsgeFsclPeriod` |  | |  |  | `NUMC(3)` | Period of Last Use |
| `SettlmtRuleLastUsageFiscalYear` |  | |  |  | `NUMC(4)` | Year Last Used |
| `SettlmtRuleProcessingSequence` |  | |  |  | `NUMC(3)` | Hierarchy Number for Settlement |
| `SettlmtWithFreeDefinedCurrency` |  | |  |  | `CHAR(1)` | Settlement of freely defined currencies & parallel ledgers |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Change Date Time |
| `ProjectUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for WBS element |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for WBS element |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Responsible Cost Center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
