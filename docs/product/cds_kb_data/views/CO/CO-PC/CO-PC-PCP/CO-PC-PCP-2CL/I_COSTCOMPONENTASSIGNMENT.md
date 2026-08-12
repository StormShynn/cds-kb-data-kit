---
name: I_COSTCOMPONENTASSIGNMENT
description: "This CDS view provides general information about cost component assignment. It includes information about chart of accounts, cost component structure, from cost element, cost origin group, variance results analysis category, to cost element and cost component. This CDS view provides the prerequisites for answering the following business questions: Which cost elements are assigned to certain cost component structure? Which cost elements are assigned to certain cost component?"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTASSIGNMENT')/$value
semantic_en: "This CDS view provides general information about cost component assignment. It includes information about chart of accounts, cost component structure, from cost element, cost origin group, variance results analysis category, to cost element and cost component. This CDS view provides the prerequisites for answering the following business questions: Which cost elements are assigned to certain cost component structure? Which cost elements are assigned to certain cost component?"
semantic_vi: "Cost Component Assignment — CDS view giao diện dựa trên tckh2."
keywords:
  - "cost"
  - "component"
  - "assignment"
  - "chart"
  - "accounts"
  - "structure"
  - "element"
  - "origin"
  - "group"
  - "variance"
  - "results"
  - "anlys"
  - "category"
tags:
  - CO
  - account
  - bo:plant
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - interface-view
  - lob:controlling
  - bo:purchaseorder
---
# I_COSTCOMPONENTASSIGNMENT

**This CDS view provides general information about cost component assignment. It includes information about chart of accounts, cost component structure, from cost element, cost origin group, variance results analysis category, to cost element and cost component. This CDS view provides the prerequisites for answering the following business questions: Which cost elements are assigned to certain cost component structure? Which cost elements are assigned to certain cost component?**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTASSIGNMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  | `ktopl` | `CHAR(4)` | Chart of Accounts |
| `CostComponentStructure` | ✓ | |  | `elehk` | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `FromCostElement` | ✓ | |  | `cast( kstav as kstrf preserving type )` | `CHAR(10)` | From Cost Element |
| `CostOriginGroup` | ✓ | |  | `hrkft` | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `VarianceResultsAnlysCategory` | ✓ | |  | `cast( abkat as fco_abkat preserving type )` | `NUMC(2)` | Category for Variance/Results Analysis |
| `ToCostElement` |  | |  | `cast( kstab as kstrt preserving type )` | `CHAR(10)` | To Cost Element |
| `CostComponent` |  | |  | `elemt` | `NUMC(3)` | Cost Component Number |
| `_CostComponent` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostComponent` | `I_CostComponent` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTASSIGNMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTASSIGNMENT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'ICOSTCOMPASSGMT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering: {
    type: #FULL,
    numberOfKeyFields: 0,
    status: #ACTIVE } }
@ClientHandling: {
  type: #CLIENT_DEPENDENT,
  algorithm: #SESSION_VARIABLE }
@Analytics: {
  dataCategory: #CUBE,
  dataExtraction.enabled: false }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #CUSTOMIZING },
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #SQL_DATA_SOURCE,
    #ANALYTICAL_PROVIDER ],
    modelingPattern: #ANALYTICAL_CUBE }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Cost Component Assignment'


define view I_CostComponentAssignment
  as select from tckh2
  association [0..1] to I_CostComponent as _CostComponent on  $projection.CostComponentStructure = _CostComponent.CostComponentStructure
                                                          and $projection.CostComponent          = _CostComponent.CostComponent
{
  key ktopl                                       as ChartOfAccounts,
  key elehk                                       as CostComponentStructure,
  key cast( kstav as kstrf preserving type )      as FromCostElement,
  key hrkft                                       as CostOriginGroup,
  key cast( abkat as  fco_abkat preserving type ) as VarianceResultsAnlysCategory,

      cast( kstab as kstrt preserving type )      as ToCostElement,
      elemt                                       as CostComponent,

      _CostComponent

}
```
