---
name: I_WASTEDISPOSERDIMENSION
description: "Waste Disposer Dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDISPOSERDIMENSION')/$value
semantic_en: "Waste Disposer Dimension"
semantic_vi: "Waste Disposer Dimension — CDS view giao diện dựa trên Waste Disposer Dimension."
keywords:
  - "waste"
  - "disposer"
  - "dimension"
  - "business"
  - "partner"
  - "envrmt"
  - "type"
  - "name"
  - "purpose"
  - "completed"
  - "data"
  - "controller1"
tags:
  - EHS
  - bo:purchaseorder
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTEDISPOSERDIMENSION

**Waste Disposer Dimension**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDISPOSERDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `EnvrmtWastePartnerType` |  | | `_WastePartner` | `EnvrmtWastePartnerType` | `CHAR(2)` | Waste Partner Type |
| `EnvrmtWastePartnerName` |  | |  |  | `CHAR(81)` |  |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `DataController1` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController2` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController3` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController4` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController5` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController6` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController7` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController8` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController9` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController10` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
| `_BusinessPartnerRole` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerRole` | `I_BusinessPartnerToBPRole` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDISPOSERDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDISPOSERDIMENSION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWANALYTWPDD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey: true

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L 
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'BusinessPartner'
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Waste Disposer Dimension'

@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_WasteDisposerDimension as select distinct from I_EnvrmtWastePartnerByBPRole as WastePartnerByBPRole
  inner join I_EnvrmtWastePartner as _WastePartner on _WastePartner.EnvrmtWastePartnerNmbr = WastePartnerByBPRole.BusinessPartner
//I_BusinessPartnerToBPRole
  association [0..*] to I_BusinessPartnerToBPRole as _BusinessPartnerRole on $projection.BusinessPartner = _BusinessPartnerRole.BusinessPartner
 {
  @ObjectModel.text.element: ['EnvrmtWastePartnerName']
  key WastePartnerByBPRole.BusinessPartner,
  
  _WastePartner.EnvrmtWastePartnerType,
  
  @Semantics.text: true
  @EndUserText.label: 'Business Partner Name'
  WastePartnerByBPRole.EnvrmtWastePartnerName,
  
  @Semantics.booleanIndicator
  WastePartnerByBPRole.IsBusinessPurposeCompleted,

  /*DCL*/
  _BusinessPartnerRole,
  WastePartnerByBPRole._BusinessPartner.DataController1,
  WastePartnerByBPRole._BusinessPartner.DataController2,
  WastePartnerByBPRole._BusinessPartner.DataController3,
  WastePartnerByBPRole._BusinessPartner.DataController4,
  WastePartnerByBPRole._BusinessPartner.DataController5,
  WastePartnerByBPRole._BusinessPartner.DataController6,
  WastePartnerByBPRole._BusinessPartner.DataController7,
  WastePartnerByBPRole._BusinessPartner.DataController8,
  WastePartnerByBPRole._BusinessPartner.DataController9,
  WastePartnerByBPRole._BusinessPartner.DataController10,
  WastePartnerByBPRole._BusinessPartner.DataControllerSet
}
where _WastePartner.EnvrmtWastePartnerType = '02'
```
