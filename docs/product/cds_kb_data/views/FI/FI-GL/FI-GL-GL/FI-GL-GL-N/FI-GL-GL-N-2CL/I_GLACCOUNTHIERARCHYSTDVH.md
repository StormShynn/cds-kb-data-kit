---
name: I_GLACCOUNTHIERARCHYSTDVH
description: "General Ledger Account Hierarchy"
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERARCHYSTDVH')/$value
semantic_en: "General Ledger Account Hierarchy"
semantic_vi: "General Ledger Account Hierarchy — CDS view giao diện dựa trên I_GLAccountHierarchy."
keywords:
  - "general"
  - "ledger"
  - "account"
  - "hierarchy"
  - "validity"
  - "date"
  - "start"
tags:
  - FI
  - account
  - component:FI-GL-GL-N-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-N
  - FI-GL-GL-N-2CL
  - interface-view
  - lob:finance
---
# I_GLACCOUNTHIERARCHYSTDVH

**General Ledger Account Hierarchy**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERARCHYSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierarchy` | ✓ | |  |  | `CHAR(42)` | G/L Account Hierarchy |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERARCHYSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERARCHYSTDVH')/$value)*

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFIGLAH__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'GLAccountHierarchy'

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable:true
@Consumption.ranked: true
@EndUserText.label: 'General Ledger Account Hierarchy'
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#SEARCHABLE_ENTITY,#VALUE_HELP_PROVIDER]
define view I_GLAccountHierarchyStdVH as select from I_GLAccountHierarchy {
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement:true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key GLAccountHierarchy,
  @Semantics.businessDate.to: true
  key ValidityEndDate,
  @Semantics.businessDate.from: true
  ValidityStartDate,

  _Text
}
```
