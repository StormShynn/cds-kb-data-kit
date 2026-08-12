---
name: I_HDRGOODSMVTINCOMPLTNSTATUS
description: "Hdrgoodsmvtincompltnstatus"
app_component: LE-SHP-GF-2CL
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
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - status
  - header-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_HDRGOODSMVTINCOMPLTNSTATUS

**Hdrgoodsmvtincompltnstatus**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
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
| `HdrGoodsMvtIncompletionStatus` | ✓ | |  | `cast( left(dd07l.domvalue_l, 1 ) as uvwak_uk preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_HdrGoodsMvtIncompltnStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  representativeKey: 'HdrGoodsMvtIncompletionStatus',
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S },
  resultSet.sizeCategory: #XS,
  supportedCapabilities: [  #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #VALUE_HELP_PROVIDER,
                            #SEARCHABLE_ENTITY,
                            #ANALYTICAL_DIMENSION ],
  modelingPattern: #ANALYTICAL_DIMENSION ,
  sapObjectNodeType.name: 'HdrGoodsMvtIncompletionStatus',
  dataCategory: #VALUE_HELP }
@EndUserText.label: 'Header Goods Movement Incompletion Sts'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: false }
@Search.searchable: true
@VDM.viewType: #BASIC
@Consumption.ranked: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDHDGMVINCSTS'
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_HdrGoodsMvtIncompltnStatus
  as select from dd07l

  association [0..*] to I_HdrGoodsMvtIncompltnStatusT as _Text on $projection.HdrGoodsMvtIncompletionStatus = _Text.HdrGoodsMvtIncompletionStatus
{
      @ObjectModel.text.association: '_Text'
  key cast( left(dd07l.domvalue_l, 1 ) as uvwak_uk preserving type ) as HdrGoodsMvtIncompletionStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      domvalue_l                                                     as DomainValue,

      _Text
}
where
      dd07l.domname  = 'STATV'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
