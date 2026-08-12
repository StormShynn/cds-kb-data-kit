---
name: I_WASTEDANGEROUSGOODDIMENSION
description: "Dangerous Goods Dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
