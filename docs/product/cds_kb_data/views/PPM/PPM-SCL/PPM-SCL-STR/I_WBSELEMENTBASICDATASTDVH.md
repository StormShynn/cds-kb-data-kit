---
name: I_WBSELEMENTBASICDATASTDVH
description: "Basic data for WBS Element"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBASICDATASTDVH')/$value
semantic_en: "Basic data for WBS Element"
semantic_vi: "Basic data for WBS Element — CDS view giao diện dựa trên I_WBSElementBasicData."
keywords:
  - "basic"
  - "data"
  - "for"
  - "wbs"
  - "element"
  - "internal"
  - "external"
  - "description"
  - "controlling"
  - "area"
  - "profit"
  - "center"
tags:
  - PPM
  - bo:project
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
---
# I_WBSELEMENTBASICDATASTDVH

**Basic data for WBS Element**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBASICDATASTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementInternalID` | ✓ | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSDescription` |  | |  |  | `CHAR(40)` | Work Breakdown Structure Element Name |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Responsible Cost Center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ProjectType` |  | |  |  | `CHAR(2)` | Project Type |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `ProjectInternalID` |  | |  | `cast( ProjectInternalID as ps_s4_proj_pspnr preserving type )` | `NUMC(8)` | Project (internal) |
| `_Project` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBASICDATASTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBASICDATASTDVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWBSELEBSCDTVH'
@AbapCatalog.compiler.compareFilter: true

@EndUserText.label: 'Basic data for WBS Element'

@VDM.viewType: #BASIC

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'WBSElementInternalID'

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@Consumption.ranked: true
//@VDM.lifecycle.contract.type:  #SAP_INTERNAL_API
define view I_WBSElementBasicDataStdVH as select from I_WBSElementBasicData {
  @UI.hidden: true
  key WBSElementInternalID,
  @ObjectModel.text.element: 'WBSDescription'
   @Search: {
          defaultSearchElement: true,
          fuzzinessThreshold: 0.8,
          ranking: #HIGH
         }
  WBSElementExternalID,
   @Search: {
          defaultSearchElement: true,
          fuzzinessThreshold: 0.8,
          ranking: #LOW
         }
  @Semantics.text: true
  WBSDescription,
  @Consumption.hidden: true
  ControllingArea,
  @Consumption.hidden: true
  ProfitCenter,
  @Consumption.hidden: true
  CompanyCode, 
  @Consumption.hidden: true
  ResponsibleCostCenter, 
  @Consumption.hidden: true
  Plant, 
  @Consumption.hidden: true
  ProjectType, 
  @Consumption.hidden: true
  FunctionalArea,
  @UI.hidden: true      
  cast( ProjectInternalID as ps_s4_proj_pspnr preserving type ) as ProjectInternalID,
  @Consumption.hidden: true
  _Project 
  
}
```
