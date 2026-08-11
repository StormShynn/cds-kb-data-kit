---
name: I_WASTEPERMITDIMENSION
description: "Waste Analytics Permit Dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEPERMITDIMENSION')/$value
semantic_en: "Waste Analytics Permit Dimension"
semantic_vi: "Waste Analytics Permit Dimension — CDS view giao diện dựa trên I_WasteStreamChnlPermitNmbr."
keywords:
  - "waste"
  - "analytics"
  - "permit"
  - "dimension"
  - "cmpl"
  - "vers"
  - "number"
  - "domain"
tags:
  - EHS
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTEPERMITDIMENSION

**Waste Analytics Permit Dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEPERMITDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplRqVersPermitNumber` | ✓ | |  |  | `CHAR(80)` | Permit Number |
| `CmplRqVersUUID` |  | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `CmplRqDomain` |  | |  |  | `CHAR(21)` | Compliance Requirement Domain |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEPERMITDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEPERMITDIMENSION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWANALYTPMTD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L 
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'CmplRqVersPermitNumber'

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@EndUserText.label: 'Waste Analytics Permit Dimension'
define view I_WastePermitDimension as select from I_WasteStreamChnlPermitNmbr {

  @ObjectModel.text.element: [ 'CmplRqVersName' ]
  key CmplRqVersPermitNumber,

  CmplRqVersUUID,
  
  @Semantics.text: true
  _NameNode[1: Language = $session.system_language].CmplRqVersName,

  CmplRqDomain
//  _ValAreaNode
}
```
