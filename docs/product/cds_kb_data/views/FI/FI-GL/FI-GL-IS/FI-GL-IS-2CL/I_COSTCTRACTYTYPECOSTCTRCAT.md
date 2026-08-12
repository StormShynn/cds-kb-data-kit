---
name: I_COSTCTRACTYTYPECOSTCTRCAT
description: "This CDS view helps you retrieve the cost center category of a cost center activity type object. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCTRACTYTYPECOSTCTRCAT')/$value
semantic_en: "This CDS view helps you retrieve the cost center category of a cost center activity type object. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Cost Center Category of Activity Type — CDS view giao diện dựa trên P_CostCtrActyTypeCostCtrCat20."
keywords:
  - "cost"
  - "center"
  - "category"
  - "activity"
  - "type"
  - "controlling"
  - "area"
  - "validity"
  - "date"
  - "generic"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_COSTCTRACTYTYPECOSTCTRCAT

**This CDS view helps you retrieve the cost center category of a cost center activity type object. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCTRACTYTYPECOSTCTRCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `CostCtrActivityType` | ✓ | |  | `lstar` | `CHAR(6)` | Activity Type |
| `ValidityEndDate` | ✓ | |  | `datbi` | `DATS(8)` | Valid To Date |
| `CostCenterCategory` | ✓ | |  | `kosar` | `CHAR(1)` |  |
| `IsGeneric` |  | |  |  | `CHAR(1)` | Indicator: Cost Center Category is Generic |
| `_ControllingAreaText` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenterCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_CostCenterCategory` | `I_CostCenterCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCTRACTYTYPECOSTCTRCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCTRACTYTYPECOSTCTRCAT')/$value)*

```abap
@ObjectModel.representativeKey: 'CostCtrActivityType'
@AbapCatalog.sqlViewName: 'IFICCACTCCCAT'
@AbapCatalog.compiler.compareFilter: true

@EndUserText.label: 'Cost Center Category of Activity Type'
@Analytics: { dataCategory: #DIMENSION } //, dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED

define view I_CostCtrActytypeCostCtrCat
  as select from P_CostCtrActyTypeCostCtrCat20
  
  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..1] to I_ControllingArea      as _ControllingAreaText on   $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
  association [1] to I_ControllingArea as _ControllingArea on $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_CostCenterCategory as _CostCenterCategory on   $projection.CostCenterCategory = _CostCenterCategory.CostCenterCategory
  
{
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key P_CostCtrActyTypeCostCtrCat20.kokrs         as ControllingArea,
  key P_CostCtrActyTypeCostCtrCat20.lstar         as CostCtrActivityType,
      @Semantics.businessDate.to: true
  key P_CostCtrActyTypeCostCtrCat20.datbi         as ValidityEndDate,
      @ObjectModel.foreignKey.association: '_CostCenterCategory'
  key P_CostCtrActyTypeCostCtrCat20.kosar         as CostCenterCategory,
      IsGeneric,

      _ControllingArea,
      _CostCenterCategory,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED


}
```
