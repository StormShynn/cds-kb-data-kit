---
name: I_WASTEPTOFGNRTNDIMENSION
description: "Point of Waste Generation Dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEPTOFGNRTNDIMENSION')/$value
semantic_en: "Point of Waste Generation Dimension"
semantic_vi: "Point of Waste Generation Dimension — CDS view giao diện dựa trên I_WasteStreamRelevantLocation."
keywords:
  - "point"
  - "waste"
  - "generation"
  - "dimension"
  - "location"
  - "name"
  - "country"
  - "region"
  - "type"
tags:
  - EHS
  - bo:purchaseorder
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTEPTOFGNRTNDIMENSION

**Point of Waste Generation Dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEPTOFGNRTNDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationID` | ✓ | |  |  | `CHAR(20)` | Location ID |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` |  |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEPTOFGNRTNDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEPTOFGNRTNDIMENSION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWANALYTPOGD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L 
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'EHSLocationID'

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Point of Waste Generation Dimension'

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_WastePtOfGnrtnDimension as select from I_WasteStreamRelevantLocation 
{
  
  @ObjectModel.text.element: [ 'EHSLocationName' ]
  key EHSLocationID,
  
  @Semantics.text: true
  EHSLocationName,
  
  Country,
  Region,
  
  /*DCL*/
  EHSLocationType,
  EHSLocationStatus,
  @EndUserText.label: 'Authorization Group'
  EHSLocationAuthorizationGroup,
  Plant,
  CostCenter,
  CompanyCode,
  BusinessArea

} where EHSLocationID is not initial
```
