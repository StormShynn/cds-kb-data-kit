---
name: I_SLCMGMTSTRATEGICIMPORTANCE
description: "Slcmgmtstrategicimportance"
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
  - component:SLC-SUP
  - lob:Other
---
# I_SLCMGMTSTRATEGICIMPORTANCE

**Slcmgmtstrategicimportance**

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
| `SLCSupplierStrategicImportance` | ✓ | |  | `cast(substring( domvalue_l, 1, 1 ) as sstn_strategic_importance preserving type )` |  |  |
| `_SLCMgmtStrategicImprtncText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SLCMgmtStrategicImprtncText` | `I_SLCMgmtStrategicImprtncText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Strategic Importance'

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
  representativeKey: 'SLCSupplierStrategicImportance',
  resultSet.sizeCategory: #XS
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog: {
  sqlViewName: 'ISLCSIMPRTNC',
  compiler.compareFilter: true
}

define view I_SLCMgmtStrategicImportance
  as select from dd07l
  association [0..*] to I_SLCMgmtStrategicImprtncText as _SLCMgmtStrategicImprtncText on $projection.SLCSupplierStrategicImportance = _SLCMgmtStrategicImprtncText.SLCSupplierStrategicImportance

{
       @ObjectModel.text.association: '_SLCMgmtStrategicImprtncText'
  key  cast(substring( domvalue_l, 1, 1 )  as sstn_strategic_importance preserving type ) as SLCSupplierStrategicImportance,
       _SLCMgmtStrategicImprtncText
}
where
      domname  = 'SSTN_STRATEGIC_IMPORTANCE'
  and as4local = 'A'
```
