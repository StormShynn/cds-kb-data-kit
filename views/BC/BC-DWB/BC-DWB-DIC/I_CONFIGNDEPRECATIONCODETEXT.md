---
name: I_CONFIGNDEPRECATIONCODETEXT
description: Configndeprecationcodetext
app_component: BC-DWB-DIC
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-DWB
  - BC-DWB-DIC
  - interface-view
  - text-view
  - text
  - component:BC-DWB-DIC
  - lob:Basis Components
---
# I_CONFIGNDEPRECATIONCODETEXT

**Configndeprecationcodetext**

| Property | Value |
|---|---|
| App Component | `BC-DWB-DIC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `ConfigurationDeprecationCode` | ✓ | |  | `cast( dd07t.domvalue_l as config_deprecation_code )` | `CHAR(1)` | Deprecated Entries |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `ConfignDeprecationCodeName` |  | |  | `cast( dd07t.ddtext as config_deprecation_code_name preserving type )` | `CHAR(60)` | Value Help: Flag Obsolete Entries |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICONFIGDEPCODET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.viewEnhancementCategory: #NONE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.type: #CLIENT_INDEPENDENT
@EndUserText.label: 'Configuration Deprecation Code Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ConfigurationDeprecationCode'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_ConfignDeprecationCodeText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                    as Language,
      @ObjectModel.text.element: ['ConfignDeprecationCodeName']
  key cast( dd07t.domvalue_l as config_deprecation_code )                  as ConfigurationDeprecationCode,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                     as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as config_deprecation_code_name preserving type ) as ConfignDeprecationCodeName,
      _Language
}
where
      dd07t.domname  = 'CONFIG_DEPRECATION_CODE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
