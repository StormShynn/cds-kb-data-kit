---
name: I_WASTETRANSFREQDIMENSION
description: "Waste Transfer Request Dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSFREQDIMENSION')/$value
semantic_en: "Waste Transfer Request Dimension"
semantic_vi: "Waste Transfer Request Dimension — CDS view giao diện dựa trên I_WasteTransferRequest."
keywords:
  - "waste"
  - "transfer"
  - "request"
  - "dimension"
  - "number"
  - "stream"
  - "gnrtn"
  - "location"
  - "name"
  - "transf"
  - "status"
tags:
  - EHS
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTETRANSFREQDIMENSION

**Waste Transfer Request Dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSFREQDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WasteTransferRequestNumber` | ✓ | |  |  | `CHAR(20)` | Number of Waste Transfer Request |
| `WasteStreamPtOfGnrtnLocUUID` |  | |  |  | `RAW(16)` | Waste Stream - Point of Generation UUID |
| `EHSLocationID` |  | | `_WasteStorage` | `EHSLocationID` | `CHAR(20)` | Location ID |
| `WasteStreamPtOfGnrtnLocName` |  | | `_WasteStorage` | `EHSLocationName` | `CHAR(60)` | Location |
| `WasteTransfReqStatus` |  | |  |  | `CHAR(2)` | Status of Waste Transfer Request |
| `WasteTransfReqStatusName` |  | | `_WasteStatus` | `WasteTransfReqStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `CostCenter` |  | | `_WasteStorage` | `CostCenter` | `CHAR(10)` | Cost Center |
| `WasteStreamUUID` |  | |  |  | `RAW(16)` | Waste Stream UUID |
| `EnvrmtWasteGnrtrHasCurUsrAssgd` |  | |  | `case when _WasteGeneratorManagerByRole.EnvrmtWasteGnrtrHasCurUsrAssgd = 0 then _WasteGeneratorOperatorByRole.EnvrmtWasteGnrtrHasCurUsrAssgd else _WasteGeneratorManagerByRole.EnvrmtWasteGnrtrHasCurUsrAssgd end` | `INT1(3)` |  |
| `_WastePtOfGnrtn` | | ✓ | | | | |
| `_WasteStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WastePtOfGnrtn` | `I_WastePtOfGnrtnDimension` | [0..1] |
| `_WasteStatus` | `I_WasteTransfReqStsDimn` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSFREQDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSFREQDIMENSION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWANALYTWTRD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L 
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'WasteTransferRequestNumber'

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Waste Transfer Request Dimension'
define view I_WasteTransfReqDimension as select from I_WasteTransferRequest 
  association [0..1] to I_WastePtOfGnrtnDimension as _WastePtOfGnrtn on $projection.ehslocationid = _WastePtOfGnrtn.EHSLocationID
  association [0..1] to I_WasteTransfReqStsDimn as _WasteStatus on $projection.WasteTransfReqStatus = _WasteStatus.WasteTransfReqStatus

{
  key WasteTransferRequestNumber,
  
  WasteStreamPtOfGnrtnLocUUID,
  @ObjectModel.foreignKey.association: '_WastePtOfGnrtn'
  @ObjectModel.text.element: ['WasteStreamPtOfGnrtnLocName']
  _WasteStorage.EHSLocationID,
  @Semantics.text: true
  _WasteStorage.EHSLocationName as WasteStreamPtOfGnrtnLocName,
  
  @ObjectModel.foreignKey.association: '_WasteStatus'
  @ObjectModel.text.element: ['WasteTransfReqStatusName']
  WasteTransfReqStatus,
  
  @Semantics.text: true
  @EndUserText.label: 'Waste Transfer Request Status Name'
  _WasteStatus.WasteTransfReqStatusName,
  
  Country,

  _WasteStorage.CostCenter,
  
  WasteStreamUUID,
  
  _WasteStatus,
  _WastePtOfGnrtn,
  
  /*DCL*/
  @EndUserText.label: 'Location Has Current User Assigned'
  case
    when _WasteGeneratorManagerByRole.EnvrmtWasteGnrtrHasCurUsrAssgd = 0
    then _WasteGeneratorOperatorByRole.EnvrmtWasteGnrtrHasCurUsrAssgd
    else _WasteGeneratorManagerByRole.EnvrmtWasteGnrtrHasCurUsrAssgd
  end as EnvrmtWasteGnrtrHasCurUsrAssgd
 
} 
where WasteTransferRequestNumber is not initial
```
