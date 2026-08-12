---
name: I_PH_ALPHANUMERICTAXCODE
description: "PH Alphanumerictaxcode"
app_component: FI-LOC-FI-PH
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
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - tax
  - component:FI-LOC-FI-PH
  - lob:Finance
---
# I_PH_ALPHANUMERICTAXCODE

**PH Alphanumerictaxcode**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-PH` |
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
| `Country` | ✓ | |  | `country` |  |  |
| `AlphanumericTaxCode` | ✓ | |  | `fiph_atc` |  |  |
| `_Country` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Text` | `I_PH_AlphanumericTaxCodeText` | [0..*] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AccessControl:{authorizationCheck: #NOT_REQUIRED, personalData.blocking: #NOT_REQUIRED}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API 
@AbapCatalog.sqlViewName: 'IPHATCC'
@ObjectModel:{representativeKey: 'AlphanumericTaxCode', usageType.sizeCategory: #S, usageType.dataClass: #CUSTOMIZING, 
              usageType.serviceQuality: #A, supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]}
@EndUserText.label: 'Philippines Alphanumeric Tax Code'
define view I_PH_AlphanumericTaxCode
  as select from fiph_atc_code
  association [0..1] to I_Country                    as _Country on  $projection.Country = _Country.Country
  association [0..*] to I_PH_AlphanumericTaxCodeText as _Text    on  $projection.Country             = _Text.Country
                                                                 and $projection.AlphanumericTaxCode = _Text.AlphanumericTaxCode
{
      @ObjectModel.foreignKey.association: '_Country'
  key country  as Country,
  key fiph_atc as AlphanumericTaxCode,
      _Country,
      _Text
}
```
