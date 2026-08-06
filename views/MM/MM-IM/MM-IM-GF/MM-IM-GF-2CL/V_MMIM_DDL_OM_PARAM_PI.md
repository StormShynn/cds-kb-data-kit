---
name: V_MMIM_DDL_OM_PARAM_PI
description: V Mmim Ddl OM Param PI
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
---
# V_MMIM_DDL_OM_PARAM_PI

**V Mmim Ddl OM Param PI**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SAPClient` | `document.mandt` |
| key `pidockey` | `concat( document.PhysicalInventoryDocument, concat (document.FiscalYear, document.PhysicalInventoryDocumentItem ) )` |
| `PhysicalInventoryDocument` | `document.PhysicalInventoryDocument` |
| `PhysicalInventoryYear` | `document.FiscalYear` |
| `PhysicalInventoryItem` | `document.PhysicalInventoryDocumentItem` |
| `Plant` | `document.Plant` |
| `StorageLocation` | `document.StorageLocation` |
| `CompanyCode` | `val.bukrs` |
| `Language` | `plant.spras` |
| `Country` | `plant.land1` |
| `SalesPriceValuation` | `val.xvkbw` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrintExtension` | `E_PhysInvtryDocumentItem` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'V_MMIM_OM_PAR_PI'
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.dataClass:      #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory:   #XL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking:#NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #OUTPUT_PARAMETER_DETERMINATION_DATA_SOURCE ]
@ObjectModel.modelingPattern:#OUTPUT_PARAMETER_DETERMINATION_DATA_SOURCE
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Physical Inventory Parameters'
/* View used for BRF plus application GOODS_MOVEMENT */
define view V_Mmim_DDL_Om_Param_PI
  as select from I_PhysInvtryDocItem  as document
    inner join   t001w as plant on document.Plant = plant.werks
    inner join   t001k as val   on plant.bwkey = val.bwkey
  /*left outer join V_Mmim_Ddl_Om_PI_PRINT as printit on  printit.iblnr = document.iblnr
                                                    and printit.gjahr = document.gjahr
                                                    and printpo.zeili = document.zeili */
  // Custom Fields extensibility  
  association [0..1] to E_PhysInvtryDocumentItem    as _PrintExtension              on  $projection.PhysicalInventoryYear = _PrintExtension.FiscalYear
                                                                                    and $projection.PhysicalInventoryDocument = _PrintExtension.PhysicalInventoryDocument
                                                                                    and $projection.PhysicalInventoryItem = _PrintExtension.PhysicalInventoryDocumentItem                                             
{
  key document.mandt                                                     as  SAPClient,
  key concat( document.PhysicalInventoryDocument, concat (document.FiscalYear, document.PhysicalInventoryDocumentItem ) ) as  pidockey,
      document.PhysicalInventoryDocument                                 as  PhysicalInventoryDocument,
      document.FiscalYear                                                as  PhysicalInventoryYear,
      document.PhysicalInventoryDocumentItem                             as  PhysicalInventoryItem,
      document.Plant                                                     as  Plant,
      document.StorageLocation                                           as  StorageLocation,
      val.bukrs                                                          as  CompanyCode,
      plant.spras                                                        as  Language,
      plant.land1                                                        as  Country,
      val.xvkbw                                                          as  SalesPriceValuation
      // printit.xprint                                                     as  OperationIsPrinted
      //'X'                                                                as  OperationIsPrinted
}
```
