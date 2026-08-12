---
name: I_INVESTMENTPROFILETEXT
description: "Capital Investment measure profile - Txt"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTPROFILETEXT')/$value
semantic_en: "Capital Investment measure profile - Txt"
semantic_vi: "Capital Investment measure profile - Txt — CDS view giao diện dựa trên taprft."
keywords:
  - "capital"
  - "investment"
  - "measure"
  - "profile"
  - "txt"
  - "language"
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
# I_INVESTMENTPROFILETEXT

**Capital Investment measure profile - Txt**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTPROFILETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `InvestmentProfile` | ✓ | |  | `ivpro` | `CHAR(6)` | Investment Measure Profile |
| `InvestmentProfileName` |  | |  | `invtxt` | `CHAR(50)` | Name of capital investment profile |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTPROFILETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTPROFILETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IINVPROFILET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED // #CHECK
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'InvestmentProfile'
@VDM.viewType: #BASIC
@Search.searchable: true
@AbapCatalog.buffering.status: #ACTIVE          
@AbapCatalog.buffering.type: #FULL 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@EndUserText.label:'Capital Investment measure profile - Txt'
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations:true 
define view I_InvestmentProfileText  as select from taprft 
association [0..1] to I_Language        as _Language            on $projection.Language = _Language.Language 
{
    //TAPRFT 
     @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language, 
    key ivpro as InvestmentProfile, 
     @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8 
      @Search.ranking: #LOW    
    invtxt as InvestmentProfileName,
    _Language
}
```
