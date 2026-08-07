---
name: C_COSTCOMPONENTASSIGNMENTDEX
description: This CDS view provides access to the cost component assignment information, facilitating extraction of cost component structure and related organizational data for analytics and reporting. It is designed to enable data extraction from SAP S/4HANA Cloud Public Edition. The view consolidates relevant customizing data for cost components. How are cost components assigned in my cost component structures? What are the origin groups for cost components within a chart of accounts? In which interval of G/L accounts are costs assigned to a specific cost component? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCOMPONENTASSIGNMENTDEX')/$value
semantic_en: This CDS view provides access to the cost component assignment information, facilitating extraction of cost component structure and related organizational data for analytics and reporting. It is designed to enable data extraction from SAP S/4HANA Cloud Public Edition. The view consolidates relevant customizing data for cost components. How are cost components assigned in my cost component structures? What are the origin groups for cost components within a chart of accounts? In which interval of G/L accounts are costs assigned to a specific cost component? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Cost Component Assignment for Extraction — CDS view tiêu dùng dựa trên I_CostComponentAssignment.
keywords:
  - cost
  - component
  - assignment
  - for
  - extraction
  - chart
  - accounts
  - structure
  - element
  - origin
  - group
tags:
  - CO
  - account
  - bo:companycode
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - consumption-view
  - lob:controlling
  - bo:purchaseorder
---
# C_COSTCOMPONENTASSIGNMENTDEX

**This CDS view provides access to the cost component assignment information, facilitating extraction of cost component structure and related organizational data for analytics and reporting. It is designed to enable data extraction from SAP S/4HANA Cloud Public Edition. The view consolidates relevant customizing data for cost components. How are cost components assigned in my cost component structures? What are the origin groups for cost components within a chart of accounts? In which interval of G/L accounts are costs assigned to a specific cost component? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
