---
name: I_WAREHOUSEACTIVITYSTATUSTEXT
description: "Warehouseactivitystatustext"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - warehouse
  - text
  - status
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_WAREHOUSEACTIVITYSTATUSTEXT

**Warehouseactivitystatustext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WarehouseActivityStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `WarehouseActivityStatusName` |  | |  | `bezei` |  |  |
| `_WarehouseActivityStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WarehouseActivityStatus` | `I_WarehouseActivityStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'WarehouseActivityStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Warehouse Activity Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDWRHSACTYSTST'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_WarehouseActivityStatusText
as select from tvbst 

association[0..1] to I_WarehouseActivityStatus as _WarehouseActivityStatus on $projection.WarehouseActivityStatus = _WarehouseActivityStatus.WarehouseActivityStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_WarehouseActivityStatus'
    key statu as WarehouseActivityStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as WarehouseActivityStatusName,
    
    //Associations
    _WarehouseActivityStatus,
    _Language        
}
where (tvbst.tbnam = 'LIPS') and (tvbst.fdnam = 'LVSTA');
```
