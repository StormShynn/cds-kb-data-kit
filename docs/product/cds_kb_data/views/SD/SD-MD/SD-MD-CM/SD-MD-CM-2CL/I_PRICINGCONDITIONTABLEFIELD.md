---
name: I_PRICINGCONDITIONTABLEFIELD
description: "Pricing ConditionTABLEFIELD"
app_component: SD-MD-CM-2CL
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
  - SD-MD
  - SD-MD-CM
  - interface-view
  - pricing
  - pricing-condition
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
  - bo:PricingCondition
---
# I_PRICINGCONDITIONTABLEFIELD

**Pricing ConditionTABLEFIELD**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
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
| `ConditionUsage` | ✓ | |  | `kvewe` |  |  |
| `ConditionApplication` | ✓ | |  | `kappl` |  |  |
| `ConditionTable` | ✓ | |  | `cast ( t681.kotabnr as char03 )` |  |  |
| `PricingConditionField` | ✓ | |  | `fieldname` |  |  |
| `PrcgCndnTableFieldIsKey` |  | |  | `keyflag` |  |  |
| `PrcgCndnTableFieldIsItem` |  | |  | `cast ( case when t681e.fsetyp = 'B' then 'X' else ' ' end as dzeifd )` |  |  |
| `PrcgCndnTableFieldHasText` |  | |  | `fsetxt` |  |  |
| `_PricingConditionTable` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PricingConditionTable` | `I_PricingConditionTable` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNTABLEF'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@EndUserText.label: 'Field in Pricing Condition Table'
define view I_PricingConditionTableField
  as select from           t681e
    left outer to one join t681  on  t681e.kvewe   = t681.kvewe
                                 and t681e.kotabnr = t681.kotabnr
    left outer to one join dd03l on  t681.kotab   = dd03l.tabname
                                 and t681e.sefeld = dd03l.fieldname
  association [1..1] to I_PricingConditionTable as _PricingConditionTable on  $projection.ConditionUsage       = _PricingConditionTable.ConditionUsage
                                                                          and $projection.ConditionApplication = _PricingConditionTable.ConditionApplication
                                                                          and $projection.ConditionTable       = _PricingConditionTable.ConditionTable


{
  key t681.kvewe                      as ConditionUsage,
  key t681.kappl                      as ConditionApplication,
  key cast ( t681.kotabnr as char03 ) as ConditionTable,
  key dd03l.fieldname                 as PricingConditionField,
      dd03l.keyflag                   as PrcgCndnTableFieldIsKey,
      cast (
      case
      when t681e.fsetyp = 'B' then 'X'
      else ' '
      end as dzeifd )                 as PrcgCndnTableFieldIsItem,
      t681e.fsetxt                    as PrcgCndnTableFieldHasText,
      _PricingConditionTable
}
where
      t681.kvewe   =  'A'
  and t681e.sefeld <> 'KFRST'
  and t681e.setyp  =  ''
```
