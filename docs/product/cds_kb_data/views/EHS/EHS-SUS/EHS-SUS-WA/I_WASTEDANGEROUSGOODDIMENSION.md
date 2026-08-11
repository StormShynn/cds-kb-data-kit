---
name: I_WASTEDANGEROUSGOODDIMENSION
description: "Dangerous Goods Dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDANGEROUSGOODDIMENSION')/$value
semantic_en: "Dangerous Goods Dimension"
semantic_vi: "Dangerous Goods Dimension — CDS view giao diện dựa trên I_ClassifiedAsDangerousGood."
keywords:
  - "dangerous"
  - "goods"
  - "dimension"
  - "classified"
  - "good"
tags:
  - EHS
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
  - bo:companycode
---
# I_WASTEDANGEROUSGOODDIMENSION

**Dangerous Goods Dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDANGEROUSGOODDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassifiedAsDangerousGood` | ✓ | |  |  | `CHAR(2)` | Classified as Dangerous Good Indicator |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDANGEROUSGOODDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDANGEROUSGOODDIMENSION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWDANGGOODDIM'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@EndUserText.label: 'Dangerous Goods Dimension'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'ClassifiedAsDangerousGood'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
define view I_WasteDangerousGoodDimension
  as select from I_ClassifiedAsDangerousGood
{
  @ObjectModel.text.element: ['ClassifiedAsDangerousGoodName']
  key ClassifiedAsDangerousGood,
  
  @Semantics.text: true
  @EndUserText.label: 'Classified As'  
  _Text[1: Language = $session.system_language].ClassifiedAsDangerousGoodName
}
```
