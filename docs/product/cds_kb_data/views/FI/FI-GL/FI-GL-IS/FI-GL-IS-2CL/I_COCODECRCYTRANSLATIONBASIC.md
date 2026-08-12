---
name: I_COCODECRCYTRANSLATIONBASIC
description: "Cocodecrcytranslationbasic"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
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
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_COCODECRCYTRANSLATIONBASIC

**Cocodecrcytranslationbasic**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `TargetCurrencyRole` | ✓ | |  | `cast( curtype as fins_target_crcyrole preserving type )` |  |  |
| `TargetCurrency` |  | |  | `cast(waers as fac_targetcurrency preserving type )` |  |  |
| `SourceCurrencyRole` |  | |  | `cast( source_curtype as fins_source_crcyrole preserving type )` |  |  |
| `ExchangeRateType` |  | |  | `kurst` |  |  |
| `CurrencyTranslationDateType` |  | |  | `curdt` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_TargetCurrencyRole` | | ✓ | | | | |
| `_SourceCurrencyRole` | | ✓ | | | | |
| `_TargetCurrency` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_TargetCurrencyRole` | `I_CurrencyRole` | [0..1] |
| `_SourceCurrencyRole` | `I_CurrencyRole` | [0..1] |
| `_TargetCurrency` | `I_Currency` | [0..1] |
| `_ExchangeRateType` | `I_ExchangeRateType` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Currency Translation'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {usageType.sizeCategory: #S,
               usageType.dataClass:  #CUSTOMIZING,
               usageType.serviceQuality: #A,
               representativeKey: 'TargetCurrencyRole',
                supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
                modelingPattern: #NONE,
                sapObjectNodeType.name: 'CompanyCodeCurrencyTranslation' }
@Analytics: {dataExtraction.enabled: true}
@VDM.viewType: #BASIC                
define view entity I_CoCodeCrcyTranslationBasic as select from finsc_001a

  association [0..1] to I_CompanyCode  as _CompanyCode        on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CurrencyRole as _TargetCurrencyRole       on $projection.TargetCurrencyRole = _TargetCurrencyRole.CurrencyRole
  association [0..1] to I_CurrencyRole as _SourceCurrencyRole on $projection.SourceCurrencyRole = _SourceCurrencyRole.CurrencyRole
  association [0..1] to I_Currency     as _TargetCurrency     on $projection.TargetCurrency = _TargetCurrency.Currency 
  association [0..1] to I_ExchangeRateType     as _ExchangeRateType     on $projection.ExchangeRateType = _ExchangeRateType.ExchangeRateType  
{
@ObjectModel.foreignKey.association: '_CompanyCode'
 key bukrs as CompanyCode,
 @ObjectModel.foreignKey.association: '_TargetCurrencyRole'
 key cast( curtype as fins_target_crcyrole preserving type ) as TargetCurrencyRole,
 @ObjectModel.foreignKey.association: '_TargetCurrency'
 cast(waers as fac_targetcurrency preserving type ) as TargetCurrency,
 @ObjectModel.foreignKey.association: '_SourceCurrencyRole'
 cast( source_curtype as fins_source_crcyrole preserving type ) as SourceCurrencyRole,
 @ObjectModel.foreignKey.association: '_ExchangeRateType'
 kurst as ExchangeRateType,
 curdt as CurrencyTranslationDateType,
 
 _CompanyCode,
 _TargetCurrencyRole,
 _SourceCurrencyRole,
 _TargetCurrency,
 _ExchangeRateType
}
```
