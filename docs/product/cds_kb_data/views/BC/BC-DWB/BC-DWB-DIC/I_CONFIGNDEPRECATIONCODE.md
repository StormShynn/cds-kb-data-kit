---
name: I_CONFIGNDEPRECATIONCODE
description: "Configndeprecationcode"
app_component: BC-DWB-DIC
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-DWB
  - BC-DWB-DIC
  - interface-view
  - component:BC-DWB-DIC
  - lob:Basis Components
---
# I_CONFIGNDEPRECATIONCODE

**Configndeprecationcode**

| Property | Value |
|---|---|
| App Component | `BC-DWB-DIC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConfigurationDeprecationCode` | ✓ | |  | `cast( dd07l.domvalue_l as config_deprecation_code )` | `CHAR(1)` | Deprecated Entries |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ConfignDeprecationCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICONFIGDEPCODE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.viewEnhancementCategory: #NONE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ClientHandling.type: #CLIENT_INDEPENDENT
@EndUserText.label: 'Configuration Deprecation Code'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ConfigurationDeprecationCode'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view I_ConfignDeprecationCode
  as select from dd07l
  association [0..*] to I_ConfignDeprecationCodeText as _Text on $projection.ConfigurationDeprecationCode = _Text.ConfigurationDeprecationCode
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as config_deprecation_code ) as ConfigurationDeprecationCode,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                    as DomainValue,
      _Text
}
where
      dd07l.domname  = 'CONFIG_DEPRECATION_CODE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
