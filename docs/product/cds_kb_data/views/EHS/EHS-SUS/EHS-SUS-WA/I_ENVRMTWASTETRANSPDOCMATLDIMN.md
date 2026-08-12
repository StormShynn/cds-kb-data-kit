---
name: I_ENVRMTWASTETRANSPDOCMATLDIMN
description: "Waste Transport Document Material"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTWASTETRANSPDOCMATLDIMN')/$value
semantic_en: "Waste Transport Document Material"
semantic_vi: "Waste Transport Document Material — CDS view giao diện dựa trên I_EnvrmtWasteTranspDocMatl."
keywords:
  - "waste"
  - "transport"
  - "document"
  - "material"
  - "transp"
  - "matl"
  - "assgd"
  - "envrmt"
  - "status"
  - "type"
  - "location"
  - "authorization"
  - "group"
tags:
  - EHS
  - bo:purchaseorder
  - component:EHS-SUS-WA
  - document
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
  - material
---
# I_ENVRMTWASTETRANSPDOCMATLDIMN

**Waste Transport Document Material**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTWASTETRANSPDOCMATLDIMN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvWstTranspDocMatlAssgdUUID` | ✓ | |  |  | `RAW(16)` | Waste Transportation Document Material Assigned |
| `EnvrmtWasteTranspDocUUID` |  | |  |  | `RAW(16)` | Waste Transportation Document UUID |
| `EnvrmtWasteTranspDocStatus` |  | | `_TranspDoc` | `EnvrmtWasteTranspDocStatus` | `CHAR(3)` | Waste Transportation Document Status |
| `EnvrmtWasteTranspDocType` |  | | `_TranspDoc` | `EnvrmtWasteTranspDocType` | `CHAR(10)` | Waste Transportation Document Type ID |
| `EHSLocationAuthorizationGroup` |  | | `_TranspDoc._Location` | `EHSLocationAuthorizationGroup` | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | | `_TranspDoc._Location` | `Plant` | `CHAR(4)` | Plant ID |
| `CostCenter` |  | | `_TranspDoc._Location` | `CostCenter` | `CHAR(10)` | Cost Center |
| `Country` |  | | `_TranspDoc._Location` | `Country` | `CHAR(3)` | Country/Region |
| `Region` |  | | `_TranspDoc._Location` | `Region` | `CHAR(3)` | Region |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTWASTETRANSPDOCMATLDIMN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTWASTETRANSPDOCMATLDIMN')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ITRADOCMATLD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L 
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #NONE  

@Metadata.ignorePropagatedAnnotations: true

@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'EnvWstTranspDocMatlAssgdUUID'
@AccessControl.personalData.blocking: #NOT_REQUIRED

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Waste Transport Document Material'
define view I_EnvrmtWasteTranspDocMatlDimn as select from I_EnvrmtWasteTranspDocMatl {
  key EnvWstTranspDocMatlAssgdUUID,
  EnvrmtWasteTranspDocUUID,
  
  /*DCL*/
  _TranspDoc.EnvrmtWasteTranspDocStatus, 
  _TranspDoc.EnvrmtWasteTranspDocType,
  _TranspDoc._Location.EHSLocationAuthorizationGroup,
  _TranspDoc._Location.Plant,
  _TranspDoc._Location.CostCenter,
  _TranspDoc._Location.Country,
  _TranspDoc._Location.Region 
}
```
