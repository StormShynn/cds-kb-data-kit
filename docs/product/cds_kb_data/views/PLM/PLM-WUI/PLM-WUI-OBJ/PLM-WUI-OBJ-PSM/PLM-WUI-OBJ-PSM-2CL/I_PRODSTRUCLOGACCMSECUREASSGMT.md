---
name: I_PRODSTRUCLOGACCMSECUREASSGMT
description: "Logistics Access Control Management"
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMSECUREASSGMT')/$value
semantic_en: "Logistics Access Control Management"
semantic_vi: "Logistics Access Control Management — CDS view giao diện dựa trên I_LogAccMObjSecureIDAssgmt."
keywords:
  - "logistics"
  - "access"
  - "control"
  - "management"
  - "object"
  - "secure"
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
# I_PRODSTRUCLOGACCMSECUREASSGMT

**Logistics Access Control Management**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMSECUREASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LogAccMObjectID` | ✓ | |  |  | `CHAR(90)` | Internal Key |
| `LogAccMSecureID` | ✓ | |  |  | `RAW(16)` | Secure ID |
| `LogAccMObjectType` | ✓ | |  |  | `CHAR(10)` | Object Type |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMSECUREASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMSECUREASSGMT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSLGACCMSECURE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Logistics Access Control Management'
define view I_ProdStrucLogAccMSecureAssgmt 
as select from I_LogAccMObjSecureIDAssgmt {
  key LogAccMObjectID,
  key LogAccMSecureID,
  key LogAccMObjectType
}
where
    (
        LogAccMObjectType = 'PLM_PPEPF'
     or LogAccMObjectType = 'PLM_PPEPVW'
     or LogAccMObjectType = 'PLM_PPEPI'
     or LogAccMObjectType = 'PLM_PPEPV'
     or LogAccMObjectType = 'PLM_PPEPIV'
    )
```
