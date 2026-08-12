---
name: I_CONDITIONCALCULATIONTYPE
description: "Conditioncalculationtype"
app_component: SD-BF-PR-2CL
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
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - pricing-condition
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_CONDITIONCALCULATIONTYPE

**Conditioncalculationtype**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
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
| `ConditionCalculationType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 3 ) as krech_long )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ConditionCalculationTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNCALCTYPE'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Calculation Type'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'ConditionCalculationType'
@Metadata.ignorePropagatedAnnotations:true
@Analytics: {dataCategory: #DIMENSION,
             dataExtraction.enabled: true }
@Analytics.internalName:#LOCAL 
@ObjectModel.sapObjectNodeType.name: 'PriceConditionCalculationType'
@ObjectModel.dataCategory: #VALUE_HELP
define view I_ConditionCalculationType
  as select from dd07l
  association [0..*] to I_ConditionCalculationTypeText as _Text on $projection.ConditionCalculationType = _Text.ConditionCalculationType
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 3 ) as krech_long ) as ConditionCalculationType,

      _Text

}

where
      domname    = 'KRECH3'
  and as4local   = 'A'

  and domvalue_l <> ('K')
    and domvalue_l <> ('J')
      and domvalue_l <> ('L')
        and domvalue_l <> ('R')
          and domvalue_l <> ('S')
            and domvalue_l <> ('V')
              and domvalue_l <> ('W')
                and domvalue_l <> ('T')
                  and domvalue_l <> ('U')
```
