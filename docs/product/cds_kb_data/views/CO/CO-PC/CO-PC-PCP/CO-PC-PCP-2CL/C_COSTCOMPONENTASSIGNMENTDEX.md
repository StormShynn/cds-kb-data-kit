---
name: C_COSTCOMPONENTASSIGNMENTDEX
description: "Cost Component Assignment for Extraction"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCOMPONENTASSIGNMENTDEX')/$value
semantic_en: "Cost Component Assignment for Extraction"
semantic_vi: "Cost Component Assignment for Extraction — CDS view tiêu dùng dựa trên I_CostComponentAssignment."
keywords:
  - "cost"
  - "component"
  - "assignment"
  - "for"
  - "extraction"
  - "chart"
  - "accounts"
  - "structure"
  - "element"
  - "origin"
  - "group"
tags:
  - CO
  - bo:purchaseorder
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - consumption-view
  - lob:controlling
---
# C_COSTCOMPONENTASSIGNMENTDEX

**Cost Component Assignment for Extraction**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCOMPONENTASSIGNMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  |  | `CHAR(4)` | Chart of Accounts |
| `CostComponentStructure` | ✓ | |  |  | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `FromCostElement` | ✓ | |  |  | `CHAR(10)` | From Cost Element |
| `CostOriginGroup` | ✓ | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `ToCostElement` |  | |  |  | `CHAR(10)` | To Cost Element |
| `CostComponent` |  | |  |  | `NUMC(3)` | Cost Component Number |
| `_CostComponent` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_CostComponentStructure` | | ✓ | | | | |
| `_CostOriginGroup` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCOMPONENTASSIGNMENTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCOMPONENTASSIGNMENTDEX')/$value)*

```abap

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION

@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.mapping: [ { table: 'TCKH2',
                                                                  role: #MAIN,
                                                                  tableElement: [ 'KTOPL', 'ELEHK', 'KSTAV', 'HRKFT' ],
                                                                  viewElement: [ 'ChartOfAccounts',
                                                                                 'CostComponentStructure',
                                                                                 'FromCostElement',
                                                                                 'CostOriginGroup' ],
                                                                  filter: [ { operator: #EQ,
                                                                              tableElement: 'ABKAT',
                                                                              value: '00' } ] } ] }

@Analytics.internalName: #LOCAL

@EndUserText.label: 'Cost Component Assignment for Extraction'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'FromCostElement'
@ObjectModel.sapObjectNodeType.name: 'CostComponentAssignment'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }

@VDM.viewType: #CONSUMPTION

define view entity C_CostComponentAssignmentDEX
  as select from I_CostComponentAssignment

  association of many to exact one I_CostComponent          as _CostComponent
    on  $projection.CostComponentStructure = _CostComponent.CostComponentStructure
    and $projection.CostComponent          = _CostComponent.CostComponent

  association of many to exact one I_ChartOfAccounts        as _ChartOfAccounts
    on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association of many to exact one I_CostComponentStructure as _CostComponentStructure
    on $projection.CostComponentStructure = _CostComponentStructure.CostComponentStructure

  association of many to exact one I_CostOriginGroup_2      as _CostOriginGroup
    on $projection.CostOriginGroup = _CostOriginGroup.CostOriginGroup

{
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_CostComponentStructure'
  key CostComponentStructure,

  key FromCostElement,

      @ObjectModel.foreignKey.association: '_CostOriginGroup'
  key CostOriginGroup,

      ToCostElement,
      CostComponent,

      _CostComponent,
      _ChartOfAccounts,
      _CostComponentStructure,
      _CostOriginGroup
}
```
