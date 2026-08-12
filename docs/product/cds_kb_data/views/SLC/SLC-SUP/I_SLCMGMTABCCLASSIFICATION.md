---
name: I_SLCMGMTABCCLASSIFICATION
description: "Slcmgmtabcclassification"
app_component: SLC-SUP
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
  - SLC
  - SLC-SUP
  - interface-view
  - classification
  - component:SLC-SUP
  - lob:Other
---
# I_SLCMGMTABCCLASSIFICATION

**Slcmgmtabcclassification**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
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
| `SupplierABCClassificationCode` | ✓ | |  | `cast(substring( domvalue_l, 1, 1 ) as /srmsmc/abc_classification preserving type )` |  |  |
| `_SLCMgmtABCClassificationText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SLCMgmtABCClassificationText` | `I_SLCMgmtABCClassificationText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'ABC Classification'

@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{

  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  },

  representativeKey: 'SupplierABCClassificationCode',
  resultSet.sizeCategory: #XS
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog: {
  sqlViewName: 'ISLCSABCCLA',
  compiler.compareFilter: true
}

define view I_SLCMgmtABCClassification
  as select from dd07l
  association [0..*] to I_SLCMgmtABCClassificationText as _SLCMgmtABCClassificationText on $projection.SupplierABCClassificationCode = _SLCMgmtABCClassificationText.SupplierABCClassificationCode

{
       @ObjectModel.text.association: '_SLCMgmtABCClassificationText'
  key  cast(substring( domvalue_l, 1, 1 )  as /srmsmc/abc_classification  preserving type ) as SupplierABCClassificationCode,
       _SLCMgmtABCClassificationText
}
where
      domname  = '/SRMSMC/ABC_CLASSIFICATION'
  and as4local = 'A'
```
