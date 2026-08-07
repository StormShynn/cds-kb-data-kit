---
name: I_SALESORDERBOMSUBITEMDEX
description: Sales OrderBOMSUBITEMDEX
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - data-extraction
  - sales-order
  - bom
  - item-level
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:SalesOrder
---
# I_SALESORDERBOMSUBITEMDEX

**Sales OrderBOMSUBITEMDEX**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterial` | ✓ | |  |  |  |  |
| `BillOfMaterialCategory` | ✓ | |  |  |  |  |
| `BillOfMaterialItemNodeNumber` | ✓ | |  |  |  |  |
| `BOMItemInternalChangeCount` | ✓ | |  |  |  |  |
| `BOMSubItemNumberValue` | ✓ | |  |  |  |  |
| `BillOfMaterialItemUnit` |  | |  |  |  |  |
| `BillOfMaterialSubItemQuantity` |  | |  |  |  |  |
| `BOMSubItemInstallationPoint` |  | |  |  |  |  |
| `BillOfMaterialSubItemText` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extraction For Sales Order BOM Subitem'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #XL,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name : 'SalesBillOfMaterialSubitem'
@Analytics:{
     dataCategory: #FACT,
     dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                          {
                    table: 'stpo', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BillOfMaterialCategory', 'BillOfMaterial', 'BillOfMaterialItemNodeNumber'],
                    tableElement: ['stlty', 'stlnr', 'stlkn']
                }
,
                {
                    table: 'stpu', role: #MAIN,
                    viewElement: ['BillOfMaterialCategory', 'BillOfMaterial', 'BillOfMaterialItemNodeNumber', 'BOMItemInternalChangeCount', 'BOMSubItemNumberValue'],
                    tableElement: ['stlty', 'stlnr', 'stlkn', 'stpoz', 'uposz']
                }
            ]
        }
    }
}
define view entity I_SalesOrderBOMSubitemDEX as select from P_SALESORDERBOMSUBITEMDEX
{
  key BillOfMaterial,
  key BillOfMaterialCategory,
  key BillOfMaterialItemNodeNumber,
  key BOMItemInternalChangeCount,

  key BOMSubItemNumberValue,
      BillOfMaterialItemUnit,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      BillOfMaterialSubItemQuantity,
      BOMSubItemInstallationPoint,
      BillOfMaterialSubItemText
}
```
