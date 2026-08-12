---
name: I_WASTEDISPOSALCHNLDIMENSION
description: "Waste Analytics Disposal Channel Dimn"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDISPOSALCHNLDIMENSION')/$value
semantic_en: "Waste Analytics Disposal Channel Dimn"
semantic_vi: "Waste Analytics Disposal Channel Dimn — CDS view giao diện dựa trên Waste Analytics Disposal Channel Dimn."
keywords:
  - "waste"
  - "analytics"
  - "disposal"
  - "channel"
  - "dimn"
  - "number"
  - "envrmt"
  - "gnrtr"
  - "country"
  - "location"
  - "type"
  - "status"
tags:
  - EHS
  - bo:purchaseorder
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTEDISPOSALCHNLDIMENSION

**Waste Analytics Disposal Channel Dimn**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDISPOSALCHNLDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WasteDisposalChannelNumber` | ✓ | |  |  | `CHAR(20)` | Disposal Channel Number |
| `EnvrmtWasteGnrtrUUID` |  | |  |  | `RAW(16)` | Waste Generator UUID |
| `Country` |  | | `_WasteLocation` | `Country` | `CHAR(3)` | Country/Region |
| `EHSLocationType` |  | | `_WasteLocation` | `EHSLocationType` | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | | `_WasteLocation` | `EHSLocationStatus` | `CHAR(2)` | Location Status |
| `EHSLocationAuthorizationGroup` |  | | `_WasteLocation` | `EHSLocationAuthorizationGroup` | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | | `_WasteLocation` | `Plant` | `CHAR(4)` | Plant ID |
| `CostCenter` |  | | `_WasteLocation` | `CostCenter` | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | | `_WasteLocation` | `CompanyCode` | `CHAR(4)` | Company Code |
| `BusinessArea` |  | | `_WasteLocation` | `BusinessArea` | `CHAR(4)` | Business Area |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDISPOSALCHNLDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDISPOSALCHNLDIMENSION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWANALYTDCHD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey: true

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'WasteDisposalChannelNumber'

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@EndUserText.label: 'Waste Analytics Disposal Channel Dimn'
define view I_WasteDisposalChnlDimension
  as select distinct from I_WasteDisposalChnlGrouped
{
  key WasteDisposalChannelNumber,

      EnvrmtWasteGnrtrUUID,

      _WasteLocation.Country,
      _WasteLocation.EHSLocationType,
      _WasteLocation.EHSLocationStatus,
      _WasteLocation.EHSLocationAuthorizationGroup,
      _WasteLocation.Plant,      
      _WasteLocation.CostCenter,      
      _WasteLocation.CompanyCode,      
      _WasteLocation.BusinessArea 

}
```
