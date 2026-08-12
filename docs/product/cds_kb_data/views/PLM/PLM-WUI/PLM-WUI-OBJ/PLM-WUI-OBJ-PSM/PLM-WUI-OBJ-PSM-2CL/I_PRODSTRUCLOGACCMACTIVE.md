---
name: I_PRODSTRUCLOGACCMACTIVE
description: "Logistics Acc Control Management Active"
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMACTIVE')/$value
semantic_en: "Logistics Acc Control Management Active"
semantic_vi: "Logistics Acc Control Management Active — CDS view giao diện dựa trên I_LogAccMObjectTypeActive."
keywords:
  - "logistics"
  - "acc"
  - "control"
  - "management"
  - "active"
  - "object"
  - "type"
tags:
  - PLM
  - component:PLM-WUI-OBJ-PSM-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-PSM
  - PLM-WUI-OBJ-PSM-2CL
---
# I_PRODSTRUCLOGACCMACTIVE

**Logistics Acc Control Management Active**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMACTIVE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LogAccMObjectType` | ✓ | |  |  | `CHAR(10)` | Object Type |
| `LogAccMObjectTypeIsActive` |  | |  |  | `CHAR(1)` | Access Control Activated for Object Type |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMACTIVE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMACTIVE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSLGACCMACTIVE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Logistics Acc Control Management Active'
define view I_ProdStrucLogAccMActive 
    as select from I_LogAccMObjectTypeActive
{
  key LogAccMObjectType,
      LogAccMObjectTypeIsActive
}
where
  (
       LogAccMObjectType = 'PLM_PPEPF'
    or LogAccMObjectType = 'PLM_PPEPVW'
    or LogAccMObjectType = 'PLM_PPEPI'
    or LogAccMObjectType = 'PLM_PPESW'
    or LogAccMObjectType = 'PLM_PPEPV'
    or LogAccMObjectType = 'PLM_PPEPIV'
    or LogAccMObjectType = 'PLM_PPESWV'
  )
```
