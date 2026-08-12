---
name: I_INVESTMENTPROFILE
description: "Capital Investment measure profile"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTPROFILE')/$value
semantic_en: "Capital Investment measure profile"
semantic_vi: "Capital Investment measure profile — CDS view giao diện dựa trên taprf."
keywords:
  - "capital"
  - "investment"
  - "measure"
  - "profile"
  - "name"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_INVESTMENTPROFILE

**Capital Investment measure profile**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvestmentProfile` | ✓ | |  | `ivpro` | `CHAR(6)` | Investment Measure Profile |
| `InvestmentProfileName` |  | |  | `_InvestmentProfileText[1: Language = $session.system_language].InvestmentProfileName` | `CHAR(50)` | Name of capital investment profile |
| `_InvestmentProfileText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InvestmentProfileText` | `I_InvestmentProfileText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTPROFILE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IINVPROFILE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'InvestmentProfile'  
//@AbapCatalog.buffering.status: #ACTIVE          
//@AbapCatalog.buffering.type: #FULL 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@EndUserText.label: 'Capital Investment measure profile'
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'InvestmentProfile'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Consumption.ranked: true
define view I_InvestmentProfile as select from taprf
association[1..*] to I_InvestmentProfileText as _InvestmentProfileText on 
$projection.InvestmentProfile = _InvestmentProfileText.InvestmentProfile {
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
     @ObjectModel.text.association: '_InvestmentProfileText' 
     key ivpro as InvestmentProfile, 
     //@Consumption.hidden: true
     @UI.hidden: true
     _InvestmentProfileText[1: Language = $session.system_language].InvestmentProfileName as InvestmentProfileName,
     _InvestmentProfileText
}
```
