---
name: I_CONFIGNDEPRECATIONCODE
description: Configndeprecationcode
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConfigurationDeprecationCode` | ✓ | |  | `cast( dd07l.domvalue_l as config_deprecation_code )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

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
