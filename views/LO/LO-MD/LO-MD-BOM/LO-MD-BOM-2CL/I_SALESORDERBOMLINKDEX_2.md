---
name: I_SALESORDERBOMLINKDEX_2
description: Sales OrderBOMLINKDEX 2
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
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:SalesOrder
---
# I_SALESORDERBOMLINKDEX_2

**Sales OrderBOMLINKDEX 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillOfMaterial` | `BillOfMaterial` |
| key `BillOfMaterialVariant` | `BillOfMaterialVariant` |
| key `Material` | `Material` |
| key `Plant` | `Plant` |
| key `BillOfMaterialVariantUsage` | `BillOfMaterialVariantUsage` |
| key `SalesOrder` | `SalesOrder` |
| key `SalesOrderItem` | `SalesOrderItem` |
| `BillOfMaterialCategory` | `BillOfMaterialCategory` |
| `RecordCreationDate` | `RecordCreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Sales Order BOM Link extraction'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #XL,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name : 'SalesBillOfMaterialLink'

@Analytics:{
     dataCategory: #FACT,
     dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
define view entity I_SalesOrderBOMLinkDEX_2 as select from P_SalesOrderBOMLink_2
{
  key BillOfMaterial,
  key BillOfMaterialVariant,
  key Material,
  key Plant,
  key BillOfMaterialVariantUsage,
  key SalesOrder,
  key SalesOrderItem,
  BillOfMaterialCategory,
  RecordCreationDate,
  CreatedByUser,
  LastChangeDate,
  LastChangedByUser
}
```
